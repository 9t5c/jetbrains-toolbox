<script lang="ts" setup>
  import type { Software } from "@/utils";
  import StatusPanel from "./StatusPanel.vue";

  defineProps<{
    software: Software;
  }>();
</script>

<template>
  <section class="wrap">
    <img :src="software.logo" class="logo" alt="logo" />

    <main class="main">
      <!-- 软件信息 -->
      <div class="info">
        <h3 class="name">{{ software.name }}</h3>
        <div></div>

        <v-menu location="bottom end">
          <template v-slot:activator="{ props }">
            <v-btn
              width="24"
              height="24"
              icon
              variant="flat"
              color="transparent"
              v-bind="props"
            >
              <v-icon icon="mdi-dots-vertical" size="16"></v-icon>
            </v-btn>
          </template>

          <v-list density="compact" class="menu-wrap">
            <v-list-item value="about">
              <router-link :to="`/${software.name}`" class="menu-link">
                关于 {{ software.name }}
              </router-link>
            </v-list-item>
            <v-list-item value="version">
              <router-link
                :to="`/${software.name}?tab=version`"
                class="menu-link"
                >其它版本</router-link
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- 状态和描述 -->
      <StatusPanel :software="software" />
    </main>
  </section>
</template>

<style lang="scss" scoped>
  .wrap {
    --btn-border-color: #afcbe0;
    --btn-hover-color: #e9e9ea;
    --btn-active-color: #cbcbcc;

    font-size: 13px;
    padding: 12px var(--padding-inline);

    display: grid;
    grid-template-columns: 56px 1fr;
    column-gap: 8px;
    cursor: pointer;
    position: relative;

    &:hover {
      background: var(--blue-hover-bg);
    }

    .link {
      position: absolute;
      inset: 0;
    }
  }
  .logo {
    width: 56px;
    height: 56px;
  }

  .main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    .info {
      display: grid;
      grid-template-columns: 1fr min-content min-content;
      column-gap: 4px;
      align-items: center;
      .name {
        all: unset;
        font-size: 15px;
        font-weight: bold;
      }

      .install-btn {
        font-size: 12px;
        font-weight: 400;
        border: 1px solid #afcbe0;
      }
    }
  }

  .menu-wrap:deep(.v-list-item__content) {
    font-size: 13px;
  }

  .menu-link {
    all: unset;
    display: block;
    cursor: pointer;
  }
</style>
