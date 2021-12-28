<script setup lang="ts"></script>

<template>
    <div id="appContainer">
        <img class="logo" src="@/assets/logo.png" />
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
#appContainer {
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    .logo {
        width: 15rem;
        height: 15rem;
    }
}
</style>
