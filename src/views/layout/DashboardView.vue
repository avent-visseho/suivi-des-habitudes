
<!-- ===================  D A S H B O A R D  L A Y O U T =================== -->

<template>
        <div>
            <MainDashbordVue/>
        </div>
</template>

<script lang="ts" setup>
import MainDashbordVue from '@/components/MainDashbord.vue';
import { useHabitudeStore } from '@/stores/habitudes'
/* import {UseUtilisateursStore} from '@/stores/utilisateurs' */
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import {Habitude} from '@/stores/habitudes'

const { initialise } = useHabitudeStore();
const { habitudes } = storeToRefs(useHabitudeStore());

onMounted(async () => {
    await initialise();
})

</script>

<style scoped>
#dashbord-content {
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas:
        "side header"
        "side main";
    /*  padding: 25px; */
}
</style>