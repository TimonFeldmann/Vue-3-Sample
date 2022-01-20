<script lang="ts">
import { defineComponent, ref } from "vue";
import { Page, Filter, Sort, DetailRow } from "@syncfusion/ej2-vue-grids";
import { userStore } from "@/stores/userPinia";

export default defineComponent({
    provide: {
        grid: [Page, Filter, Sort, DetailRow],
    },
    setup() {
        const initialized = ref(false);
        const store = userStore();

        // Can't use an async setup method in the root Vue component since <suspense> can't be used here.
        store.getUser("634fd625-419d-4c87-91cf-9a061b4aa553").then((result) => {
            initialized.value = true;
        });

        return {
            initialized,
        };
    },
});
</script>

<template>
    <div v-if="initialized === true" id="appContainer">
        <router-view name="navigation" v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <router-view class="content" v-slot="{ Component }">
            <transition name="slide-fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style scoped lang="scss">
.content {
    padding: 1rem 1rem 1rem 1rem;
    align-self: flex-start;
}
</style>

<style lang="scss">
@import "@syncfusion/ej2-base/styles/tailwind-dark.css";
@import "@syncfusion/ej2-buttons/styles/tailwind-dark.css";
@import "@syncfusion/ej2-calendars/styles/tailwind-dark.css";
@import "@syncfusion/ej2-dropdowns/styles/tailwind-dark.css";
@import "@syncfusion/ej2-inputs/styles/tailwind-dark.css";
@import "@syncfusion/ej2-navigations/styles/tailwind-dark.css";
@import "@syncfusion/ej2-popups/styles/tailwind-dark.css";
@import "@syncfusion/ej2-splitbuttons/styles/tailwind-dark.css";
@import "@syncfusion/ej2-vue-grids/styles/tailwind-dark.css";

body,
#appContainer {
    margin: 0;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
}

#appContainer {
    background-color: rgb(220, 220, 220);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
}

.slide-fade-enter-active {
    animation: slide-fade-in 0.35s;
}

.slide-fade-leave-active {
    animation: slide-fade-out 0.35s;
}

@keyframes slide-fade-in {
    from {
        opacity: 0;
        transform: translateX(50px);
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    to {
        opacity: 1;
        transition: all 0.3s ease;
    }
}

@keyframes slide-fade-out {
    from {
        opacity: 1;
        transform: translateX(0px);
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    to {
        opacity: 0;
        transform: translateX(50px);
        transition: all 0.3s ease;
    }
}

.fade-enter-active {
    animation: fade-in 1s;
}

.fade-leave-active {
    animation: fade-out 1s;
}

@keyframes fade-in {
    from {
        opacity: 0;
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    to {
        opacity: 1;
        transition: all 0.3s ease;
    }
}

@keyframes fade-out {
    from {
        opacity: 1;
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    to {
        opacity: 0;
        transition: all 0.3s ease;
    }
}
</style>
