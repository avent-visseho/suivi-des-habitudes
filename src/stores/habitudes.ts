import { defineStore } from "pinia";
import { ref } from 'vue'
import type { Habitude } from "@/types/habitudes"
import { supabase } from "@/lib/supabase";


export const useHabitudeStore = defineStore('Habitudes', () => {
    const habitudes = ref<Habitude[]>([])
  /*   const dones = ref<Habitude[]>([])
    const stills = ref<Habitude[]>([]) */
    async function initialise() {
        const { data, error } = await supabase.from('Habitudes').select("*")
        if (data) {
            console.log(data);
            habitudes.value = data
        }
        console.log(error)
    }

    async function addhabitudes(habitude: Habitude) {
        const { data, error } = await supabase.from('Habitudes').insert(habitude)
        if (data) {
            /* habitudes.value.push(data[0]) */
            habitudes.value.push(data[0])
        }
    }

    async function updateDataInSupabase(updateData:any) {

      const { data,error } = await supabase
      .from('Habitudes')
      .upsert({
        id:updateData.value.id,
        status:updateData.value.status
      })
      
      
          if (error) {
            console.error('Error updating data:', error.message);
          } else {
            console.log('Data updated successfully:', data);
          }
        } 
    return { habitudes, addhabitudes, initialise, updateDataInSupabase}
})
