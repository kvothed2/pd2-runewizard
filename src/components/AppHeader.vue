<template>
  <!-- optional header to decorate the stand alone version -->
  <header>
    <div class="rw-Layout-rowContainer h-[106px] flex">
      <div class="pr-[20px] pt-[17px]">
        <img
          src="@assets/images/logo-rune.png"
          alt="Rune icon original art (c) BLIZZARD ENTERTAINMENT"
          class="w-[69px] h-[67px]"
        />
      </div>
      <div class="flex-1">
        <h1 class="text-black text-[0px] mt-[19px] mb-[5px] w-[301px] h-[32px]">
          <img
            src="@assets/images/logo-text-runewizard.png"
            alt="PD2 Runewizard"
            class="block w-full h-full"
          />
        </h1>
        <div class="flex justify-between items-center">
          <div class="text-lg text-[#e9bf40]">
            for <span class="text-[#e9bf40] font-bold">{{ envGameName }}</span>
            <span class="ml-2 text-[#90b7ff]">{{ envGameVersion }}</span>
          </div>

          <div class="flex items-center text-[#514f4a]">
            <a
              href="#"
              class="rw-HelpLink mr-6"
              @click.prevent="isHelpVisible = !isHelpVisible"
            >
              <icon-chevron-down
                class="ux-icon ux-icon--fw"
                :class="{
                  'transform rotate-180': isHelpVisible,
                }"
              /><span class="ml-1">{{ "Help" }}</span>
            </a>

            <a :href="`https://discord.gg/DWYBG2qd3u`" class="rw-Header-link">
              <icon-chat class="ux-icon ux-icon--fw ux-icon--lg mr-1" />
              <span>{{ "Discord" }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- separator between header and main content, div simply extends to edges -->
    <div class="rw-Layout-goldBarSeparator mb-2"></div>

    <transition name="fadein">
      <div v-if="isHelpVisible" class="rw-Layout-rowContainer mb-4">
        <help-box />
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HelpBox from "@/components/HelpBox.vue";
import IconChat from "@/icons/IconChat.vue";
import IconChevronDown from "@/icons/IconChevronDown.vue";

export default defineComponent({
  name: "AppHeader",

  components: {
    HelpBox,
    IconChat,
    IconChevronDown,
  },

  data() {
    return {
      isHelpVisible: false,

      envGameName: /**@type {string}*/ (import.meta.env.VITE_GAME_NAME),
      envGameVersion: /**@type {string}*/ (import.meta.env.VITE_GAME_VERSION),
      envGithubRepoUrl: /**@type {string}*/ (import.meta.env
        .VITE_URL_GITHUB_REPO),
    };
  },
});
</script>
