<template>
    <div class="habit_content">
        <div class="habit_content_box">
            <button @click="addHabitForm">add habits</button>
        </div>
        <div :class="active ? 'modal_active' : 'modal_form'">
            <AddhabitFormVue />
        </div>
        <TableHabit />
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import TableHabit from '@/components/TableHabit.vue'
import AddhabitFormVue from '@/components/AddhabitForm.vue';
const active = ref(false)
function addHabitForm() {
    active.value = true
}
</script>

<style>
.modal_form {
    display: none;
}

.modal_active {
    display: block  !important;;
}

.habit_content {
    padding: 25px;
}

.habit_content_box button {
    padding: 14px 25px;
    border: none;
    background-color: #45b7d2;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    font-weight: bold;
}
</style>