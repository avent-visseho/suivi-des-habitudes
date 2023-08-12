<template>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum accusantium quidem. Facilis amet
        consequatur alias ab saepe dolorum. Quasi aspernatur, voluptates soluta aut fugit dolores debitis animi dolorem
        consectetur?

        <vue-inline-calendar @update:selected-date="selectedDate = $event" />
    </div>
</template>

<script>
    import VueInlineCalendar from 'vue-inline-calendar';
import "vue-inline-calendar/dist/style.css";

export default {
  name: 'App',
  components: {
    VueInlineCalendar
  },
  data() {
    return {
      selectedDate: null
    }
  },
}
</script>