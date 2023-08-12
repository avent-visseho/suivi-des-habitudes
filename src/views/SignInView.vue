
<!-- ===================  S I G N E  I N =================== -->

<template>
    <div id="signIn">
        <div class="signIn-content">
            <h1>Sign In</h1>
            <div class="signIn-paragraphe">
                <p>Let's get started with your 30 days free trial</p>
            </div>
            <div class="signIn-form">
                <form @submit.prevent="signIn">
                    <div class="input-field">
                        <label for="Email">Email</label>
                        <input type="email" v-model="signusers.Adresse_mail">
                    </div>
                    <div class="input-field">
                        <label for="Password">Password</label>
                        <input type="Password" v-model="signusers.Password">
                    </div>
                    <div class="input-field">
                        <input @click="signIn" type="submit" value="Sign In" class="btn-sign">
                    </div>
                </form>
                <p>{{ errorr }}</p>
                <div class="signIn-paragraphe">
                    <p>Already have an account? <router-link to="/Sign-up">Sign Up</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { supabase } from "@/lib/supabase";
/* import {ref} from 'vue' */
/* import { useRouter } from "vue-router";
import {error} from 'console' */

//utilisateurs section 
import {UseUtilisateursStore} from '@/stores/utilisateurs'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import {error} from 'console'
import {Utilisateur} from '@/stores/utilisateurs'
import { useRouter } from "vue-router";

const { initialise } = UseUtilisateursStore();
const { Utilisateurs } = storeToRefs(UseUtilisateursStore());

onMounted(async () => {
    await initialise();
})

//utilisateurs section 

// S'inscrire
const errorr = ref('')

const router = useRouter()
 const signusers = ref({
    Nom_utilisateur: '',
    Adresse_mail: '',
    Password: ''
})
 
async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: signusers.value.Adresse_mail,
        password: signusers.value.Password,
    })
    if(error){
        console.log(error)
        errorr.value = error.message
    }else{
        router.replace('/user-layout/')
    }
}

</script>

<style scoped>
#signIn {
    width: 100%;
    height: 100vh;
    padding: 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-second);
}

.signIn-content {
    width: 350px;
    background-color: var(--white);
    padding: 40px;
    box-shadow: var(--box-shadow-principal);
    border-radius: 5px;
}

.signIn-paragraphe {
    margin: 15px 0;
}

.signIn-paragraphe p {
    text-align: center;
}

.input-field {
    width: 100%;
}

.input-field input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    outline: none;
    border: 2px solid #ccc;
    border-radius: 5px;
}

.btn-sign {
    background-color: var(--bleu-side);
    border: none;
    cursor: pointer;
    color: var(--white);
    font-weight: bold;
    outline: none;
}
</style>