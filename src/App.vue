<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__group">
        <router-link
          class="nav__element"
          to
        >首頁</router-link>
        <router-link
          class="nav__element"
          to
        >分類</router-link>
        <router-link
          class="nav__element"
          to
        >上傳</router-link>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
