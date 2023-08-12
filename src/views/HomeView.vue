<template>
    <div class="home_content">
        <div class="home_content_nav">
            <div class="home_logo">
                <h3>logo</h3>
            </div>
            <div class="sign_content">
                <div class="signIn">
                    <router-link to="/Sign-in">Sign In</router-link>
                </div>
                <div class="signUp">
                    <router-link to="/Sign-up">Sign Up</router-link>
                </div>
            </div>
        </div>
        <div class="home_banner">
            <div class="banner_title">
                <h1>Construire de meilleures habitudes,
                    Construire une vie meilleure</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>


</script>

<style scoped>
.home_content_nav {
    background-color: rgb(32, 70, 126);
    padding: 15px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.home_logo {
    color: white;
    cursor: pointer;
}

.sign_content {
    display: flex;
    gap: 45px;
    align-items: center;
}

.signUp {
    padding: 12px 20px;
    background-color: rgb(63, 174, 226);
}

.home_banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 69px);
    background-image: url('../assets/images/home-bg.jpg');
}

.banner_title{
    width: 700px;
}

.banner_title h1 {
    font-weight: bold;
    font-size: 45px;
    line-height: 1.6;
    color: white;
    text-align: center;
}
</style>