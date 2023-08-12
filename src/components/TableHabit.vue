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
                    <td><input type="checkbox"></td>
                    <td>{{ element.id_Habitude }}</td>
                    <td>{{ element.Nom_habitude }}</td>
                    <td>{{ element.Description_habitude }}</td>
                    <td>{{ element.Frequence }}</td>
                    <td>{{ element.Heure }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {storeToRefs} from "pinia"
    const {habitudes} = storeToRefs(useHabitudeStore())
    import {useHabitudeStore} from '@/stores/habitudes'
    const {initialise} = useHabitudeStore()
    import { onUnmounted } from "vue";
    onUnmounted(async () =>{
        await initialise()
    })
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