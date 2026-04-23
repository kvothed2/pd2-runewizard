<template>
  <div>
    <div class="rw-Search flex items-center mb-8">
      <label class="text-gold whitespace-nowrap mr-4">{{ "Search" }}</label>
      <input v-model="searchText" type="text" class="rw-Search-input" @input="onSearchInput" />
    </div>

    <runeword-filters
      :available-ttypes="availableTtypes"
      class="mb-8"
      @filter-change="onFilterChange"
    />

    <div>
      <runewords-table :items="runewordsList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import runewordsData from "@/data/runewords";
import runewordsDesc from "@/data/runewords-descriptions";
import MAX_SOCKETS from "@/data/socket-limits";
import RunewordsTable from "@/components/RunewordsTable.vue";
import RunewordFilters from "@/components/RunewordFilters.vue";

interface FilterState {
  activeTop: string | null;
  activeSubs: Set<string>;
  activeCatMatches: string[];
}

export default defineComponent({
  name: "Runewords",

  components: {
    RunewordsTable,
    RunewordFilters,
  },

  data() {
    return {
      isHelpVisible: false,
      runewordsList: [] as TRunewordItem[],
      searchText: "",
      filterState: {
        activeTop: null,
        activeSubs: new Set<string>(),
        activeCatMatches: [],
      } as FilterState,
    };
  },

  computed: {
    // Deduplicated list of every ttype that appears in the dataset.
    // Passed to RunewordFilters so it only renders subtypes that have runewords.
    availableTtypes(): string[] {
      const all = runewordsData.flatMap((rw) => rw.ttypes);
      return [...new Set(all)];
    },
  },

  created() {
    this.runewordsList = runewordsData.slice() as TRunewordItem[];
    this.updateFilter();
  },

  methods: {
    onSearchInput() {
      this.updateFilter();
    },

    onFilterChange(state: FilterState) {
      this.filterState = state;
      this.updateFilter();
    },

      runewordMatchesSlotFilter(item: TRunewordItem): boolean {
      const { activeTop, activeSubs, activeCatMatches } = this.filterState;
 
      if (!activeTop) return true;
 
      const runeCount = item.runes.length;
 
      // Catch-all tags like "Weapons" mean "any weapon", so their MAX_SOCKETS
      // entry (6) is not a meaningful cap — it just means "no restriction imposed
      // by the tag itself". When evaluating a catch-all against a specific top
      // category (e.g. Throwing Weapons), we must use that category's own
      // concrete socket cap instead.
      const CATCH_ALL_TYPES = ["Weapons", "Melee Weapons"];
      const categoryConcreteTypes = activeCatMatches.filter(
        (t) => !CATCH_ALL_TYPES.includes(t)
      );
      const categoryConcreteCap = categoryConcreteTypes.length > 0
        ? Math.max(...categoryConcreteTypes.map((t) => MAX_SOCKETS[t] ?? 6))
        : 6;
 
      const catMatch = item.ttypes.some((t) => {
        if (!activeCatMatches.includes(t)) return false;
        const cap = CATCH_ALL_TYPES.includes(t) ? categoryConcreteCap : (MAX_SOCKETS[t] ?? 6);
        return cap >= runeCount;
      });
 
      if (!catMatch) return false;
 
      if (activeSubs.size > 0) {
        // Sub-filter: runeword matches if it is explicitly tagged with the
        // selected subtype, OR carries a parent catch-all tag ("Weapons",
        // "Melee Weapons") — provided the selected subtype itself has enough
        // sockets for the runeword's rune count.
        const PARENT_TYPES = ["Weapons", "Melee Weapons"];
        return [...activeSubs].some((sub) => {
          const subSocketCap = MAX_SOCKETS[sub] ?? 6;
          if (subSocketCap < runeCount) return false;
          return (
            item.ttypes.includes(sub) ||
            item.ttypes.some((t) => PARENT_TYPES.includes(t))
          );
        });
      }
 
      return true;
    },


    updateFilter() {
      const searchTerm = this.searchText.toLowerCase();

      const matches = (item: TRunewordItem) => {
        // --- text search (unchanged from original) ---
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);
        const matchesType = item.ttypes.some((type) =>
          type.toLowerCase().includes(searchTerm)
        );
        const matchesRunes = item.runes.some((rune) =>
          rune.toLowerCase().includes(searchTerm)
        );
        const description = runewordsDesc[item.title];
        const matchesDescription = description
          ? description.toLowerCase().includes(searchTerm)
          : false;

        const textMatch =
          searchTerm === "" ||
          matchesTitle ||
          matchesType ||
          matchesDescription ||
          matchesRunes;

        // --- slot + socket filter ---
        const slotMatch = this.runewordMatchesSlotFilter(item);

        return textMatch && slotMatch;
      };

      this.runewordsList.forEach((item) => {
        item.filterMatch = matches(item);
      });
    },
  },
});
</script>
