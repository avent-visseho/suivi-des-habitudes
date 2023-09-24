<template>
    <div id="table">
        <div class="content_table">
            <table>
                <tr>
                    <th><input type="checkbox"></th>
                    <th>id_Habitude</th>
                    <th>Nom_habitude</th>
                    <th>Description_habitude</th>
                    <th>Frequence</th>
                    <th>Heure</th>
                </tr>
                
                <tr v-for="element in habitudes">
                    <td><input type="checkbox" v-model="element.status" @input="changestatus({
                        id:element.id,
                        status:element.status
                    })"></td>
                    <td>{{ element.id}}</td>
                    <td>{{ element.nom_habitude }}</td>
                    <td>{{ element.description }}</td>
                    <td>{{ element.frequence }}</td>
                    <td>{{ element.heure_execution }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

    import {storeToRefs} from "pinia"
    import JSConfetti from 'js-confetti'
    const {habitudes} = storeToRefs(useHabitudeStore())
    import {useHabitudeStore} from '@/stores/habitudes'
    const {initialise,updateDataInSupabase} = useHabitudeStore()
    import { onMounted } from "vue";
    onMounted(async () =>{
        await initialise()
    })
let  updatedData =  ref({
    id:0,
    status:null
})
async function changestatus(staus:any){
 console.log("updatedDataSttttttttttttttttttttttttatus",staus.status) 
     updatedData.value.id = staus.id,
         updatedData.value.status = staus.status
    
         console.log("updatedData",updatedData) 
    await updateDataInSupabase(updatedData)

if(staus.status == false ){
    console.log("status",staus)
    showConfetti()
}

}

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}


</script>

<style scoped>
.content_table{
    margin-top: 45px;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 12px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>