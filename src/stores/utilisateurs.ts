import { defineStore } from "pinia";
import {ref} from 'vue'
import type {Utilisateur} from '@/types/utilisateurs'
import { supabase } from "@/lib/supabase";


export const UseUtilisateursStore =  defineStore('Utilisateurs', ()=>{
    const Utilisateurs = ref<Utilisateur[]>([])
    async function initialise(){
        const {data,error} = await supabase.from('Utilisateurs').select("*")
        if(data){
            console.log(data);
            Utilisateurs.value = data
        }
    }
    async function addUtilisateur(utilisateurs:Utilisateur){
        const {data, error} = await supabase.from ('Utilisateurs').insert(utilisateurs)
        if(data){
            Utilisateurs.value.push(data[0])
        }
    }
    return {Utilisateurs, addUtilisateur, initialise}
})
