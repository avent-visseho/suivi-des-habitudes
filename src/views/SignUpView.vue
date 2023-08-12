
<!-- ===================  S I G N E  U P =================== -->

<template>
    <div id="signUp">
        <div class="signUp-content">
            <h1>Sign Up</h1>
            <div class="signUp-paragraphe">
                <p>Let's get started with your 30 days free trial</p>
            </div>
            <div class="signUp-form">
                <form @submit.prevent="signUp">
                    <div class="input-field">
                        <label for="Name">Name</label>
                        <input type="text" v-model="signusers.Nom_utilisateur">
                    </div>
                    <div class="input-field">
                        <label for="Email">Email</label>
                        <input type="email" v-model="signusers.Adresse_mail">
                    </div>
                    <div class="input-field">
                        <label for="Password">Password</label>
                        <input type="Password" v-model="signusers.Password">
                    </div>
                   <!--  <div class="input-field">
                        <label for="Password">Confirm Password</label>
                        <input type="Password">
                    </div> -->
                    <div class="input-field">
                        <input type="submit" value="Sign Up" class="btn-sign">
                    </div>
                </form>
                <div class="signUp-paragraphe">
                    <p>Already have an account? <router-link to="/Sign-in">Sign In</router-link></p>
                    <p>{{  }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { supabase } from "@/lib/supabase";
//utilisateurs section 
import {UseUtilisateursStore} from '@/stores/utilisateurs'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
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
 
async function signUp() {
    const { data, error } = await supabase.auth.signUp({
        email: signusers.value.Adresse_mail,
        password: signusers.value.Password,
    })
    if(error){
        console.log(error)
        errorr.value = error.message
    }else{
        router.replace('/Sign-in')
    }
}


//============================================//            

</script>

<style scoped>
#signUp {
    width: 100%;
    height: 100vh;
    padding: 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-second);
}

.signUp-content {
    width: 350px;
    background-color: var(--white);
    padding: 40px;
    box-shadow: var(--box-shadow-principal);
    border-radius: 5px;
}

.signUp-paragraphe {
    margin: 15px 0;
}

.signUp-paragraphe p {
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