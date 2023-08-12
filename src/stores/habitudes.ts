import { defineStore } from "pinia";
import {ref} from 'vue'
import type {Habitude} from "@/types/habitudes"
import { supabase } from "@/lib/supabase";


export const useHabitudeStore =  defineStore('Habitudes', ()=>{
    const habitudes = ref<Habitude[]>([])
    async function initialise(){
        const {data,error} = await supabase.from('Habitudes').select("*")
        if(data){
            console.log(data);
            habitudes.value = data
        }
    }

    async function addhabitudes(habitudes:any){
        const {data, error} = await supabase.from ('Habitudes').insert({
            Nom_habitude: habitudes.value.Nom_habitude,
            Description_habitude: habitudes.Description_habitude.value.Description_habitude,
            Frequence: habitudes.value.Frequence,
            Heure: habitudes.value.Heure,
        })
        if(data){
            /* habitudes.value.push(data[0]) */
            habitudes.value.push(data[0])
        }
    }
    return {habitudes, addhabitudes, initialise}
})
