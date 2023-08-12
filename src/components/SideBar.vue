
<template>
    <!-- ===== S I D E B A R  =====  -->
    <div class="sideBar">
        <div class="logo">
            <!--  <img src="../assets/images/logo.png" alt=""> -->
            <h2>Ha Track</h2>
        </div>
        <div class="menu">
            <ul>
                <li>
                    <router-link to="/dahbord" class="navlinks">
                        <span>
                            <HomeIconeVue />
                        </span>
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/user-layout/" class="navlinks">
                        <span>
                            <calendarVue />
                        </span>
                        Habitudes
                    </router-link>
                </li>
                <li>
                    <router-link to="/cartographie" class="navlinks">
                        <span>
                            <calendarVue />
                        </span>
                        Cartographie
                    </router-link>
                </li>
                <li>
                    <router-link to="/Sign-up" class="navlinks">
                        <span>
                            <calendarVue />
                        </span>
                        Marquage
                    </router-link>
                </li>
                <li>
                    <router-link to="/Sign-up" class="navlinks">
                        <span>
                            <calendarVue />
                        </span>
                        Rappels
                    </router-link>
                </li>
                <li>
                    <router-link to="/Sign-up" class="navlinks">
                        <span>
                            <calendarVue />
                        </span>
                        Récompenses
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import HomeIconeVue from './HomeIcone.vue';
import calendarVue from './calendar.vue';
</script>

<style scoped>
.sideBar {
    background-color: var(--bleu-side);
    grid-area: side;
    padding: 15px;
}

.logo h2 {
    color: var(--white);
}

.menu {
    margin-top: 45px;
}

ul li {
    margin-top: 25px;
}

.navlinks {
    display: flex;
        padding: 8px ;
    align-items: center;
    gap: 15px;
}
.navlinks:hover{
    background-color: rgba(27, 27, 25, 0.26);
    border-radius: 4px;

}
</style>