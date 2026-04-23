<template>
  <div class="rwf-wrap">
    <div class="rwf-top-row">
      <button
        v-for="cat in TOP_CATEGORIES"
        :key="cat.id"
        class="rwf-btn"
        :class="{ 'rwf-btn--active': activeTop === cat.id }"
        @click="toggleTop(cat.id)"
      >
        {{ cat.label }}
        <span v-if="cat.expandable" class="rwf-arrow" :class="{ 'rwf-arrow--open': activeTop === cat.id }">▾</span>
      </button>
      <button v-if="activeTop !== null" class="rwf-clear" @click="clearFilters">Clear</button>
    </div>

    <div v-if="activeCat && activeCat.expandable" class="rwf-sub-row">
      <span class="rwf-sub-label"></span>
      <button
        v-for="type in availableSubtypes"
        :key="type"
        class="rwf-btn rwf-btn--sub"
        :class="{ 'rwf-btn--active': activeSubs.has(type) }"
        @click.exact="selectSubExclusive(type)"
        @click.ctrl.exact="selectSubAdditive(type)"
        @click.meta.exact="selectSubAdditive(type)"
      >
        {{ type }}
      </button>
      <span v-if="availableSubtypes.length > 1" class="rwf-sub-hint">Ctrl+click to select multiple</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Category {
  id: string;
  label: string;
  expandable: boolean;
  subtypes: string[];
  matches: string[];
}

const MELEE_SUBTYPES = [
  "Axes", "Claws", "Clubs", "Daggers", "Hammers",
  "Maces", "Orbs", "Polearms", "Scepters", "Spears",
  "Staves", "Swords", "2-H Swords", "Wands",
];

const TOP_CATEGORIES: Category[] = [
  {
    id: "melee",
    label: "Melee Weapons",
    expandable: true,
    subtypes: MELEE_SUBTYPES,
    matches: ["Melee Weapons", "Weapons", ...MELEE_SUBTYPES],
  },
  {
    id: "missile",
    label: "Missile Weapons",
    expandable: false,
    subtypes: [],
    matches: ["Missile Weapons", "Weapons"],
  },
  {
    id: "throwing",
    label: "Throwing Weapons",
    expandable: false,
    subtypes: [],
    matches: ["Throwing Weapons", "Weapons"],
  },
  {
    id: "armor",
    label: "Body Armors",
    expandable: false,
    subtypes: [],
    matches: ["Body Armors"],
  },
  {
    id: "helms",
    label: "Helms",
    expandable: false,
    subtypes: [],
    matches: ["Helms"],
  },
  {
    id: "shields",
    label: "Shields",
    expandable: false,
    subtypes: [],
    matches: ["Shields", "Paladin Shields"],
  },
  {
    id: "quivers",
    label: "Quivers",
    expandable: false,
    subtypes: [],
    matches: ["Quivers"],
  },
];

export default defineComponent({
  name: "RunewordFilters",

  props: {
    // Deduplicated list of every ttype present in the runewords dataset.
    // Used to hide subtypes that have no runewords at all.
    availableTtypes: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  emits: ["filter-change"],

  data() {
    return {
      TOP_CATEGORIES,
      activeTop: null as string | null,
      activeSubs: new Set<string>(),
    };
  },

  computed: {
    activeCat(): Category | undefined {
      return TOP_CATEGORIES.find((c) => c.id === this.activeTop);
    },

    // Only show subtypes that actually appear in the dataset.
    // Socket/rune-count filtering is handled by the parent (Runewords.vue).
    availableSubtypes(): string[] {
      if (!this.activeCat) return [];
      return this.activeCat.subtypes.filter((type) =>
        this.availableTtypes.includes(type)
      );
    },
  },

  methods: {
    toggleTop(id: string) {
      if (this.activeTop === id) {
        this.activeTop = null;
        this.activeSubs = new Set();
      } else {
        this.activeTop = id;
        this.activeSubs = new Set();
      }
      this.emit();
    },

    selectSubExclusive(type: string) {
      // If it's the only one selected, deselect (toggle off)
      if (this.activeSubs.size === 1 && this.activeSubs.has(type)) {
        this.activeSubs = new Set();
      } else {
        this.activeSubs = new Set([type]);
      }
      this.emit();
    },

    selectSubAdditive(type: string) {
      const next = new Set(this.activeSubs);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      this.activeSubs = next;
      this.emit();
    },

    clearFilters() {
      this.activeTop = null;
      this.activeSubs = new Set();
      this.emit();
    },

    emit() {
      this.$emit("filter-change", {
        activeTop: this.activeTop,
        activeSubs: new Set(this.activeSubs),
        activeCatMatches: this.activeCat?.matches ?? [],
      });
    },
  },
});
</script>
