<template>
  <div>
    <div class="rw-Search flex items-center mb-8">
      <label class="text-gold whitespace-nowrap mr-4">{{ "Search" }}</label>
      <input v-model="searchText" type="text" class="rw-Search-input" @input="onSearchInput" />
    </div>

    <div>
      <runewords-table :items="runewordsList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import runewordsData from "@/data/runewords";
import runewordsDesc from "@/data/runewords-descriptions"; // imported runewords description component
import RunewordsTable from "@/components/RunewordsTable.vue";

export default defineComponent({
  name: "Runewords",

  components: {
    RunewordsTable,
    runewordsDesc, // added component
  },

  data() {
    return {
      isHelpVisible: false,

      runewordsList: [] as TRunewordItem[],

      searchText: "",
    };
  },

  created() {
    this.runewordsList = runewordsData.slice() as TRunewordItem[];
    this.updateFilter(this.searchText);
  },

  methods: {
    onSearchInput() {
      this.updateFilter(this.searchText);
    },


    updateFilter(text: string) {
      const searchTerm = text.toLowerCase();

      const matches = (item: TRunewordItem) => {
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);
        const matchesType = item.ttypes.some((type) => {
          return type.toLowerCase().includes(searchTerm);
        });
        const matchesRunes = item.runes.some((runes) => {
          return runes.toLowerCase().includes(searchTerm);
        }); // added match for runes
        const description = runewordsDesc[item.title]; // matching runewords from runewords.ts to runewords-descriptions.ts
        const matchesDescription = description.toLowerCase().includes(searchTerm); // added match for description

        return searchTerm === "" || matchesTitle || matchesType || matchesDescription || matchesRunes; // added description in search term return
      };

      this.runewordsList.forEach((item) => {
        item.filterMatch = matches(item);
      });
    },
  },
});
</script>
