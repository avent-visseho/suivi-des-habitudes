<!-- <template>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum accusantium quidem. Facilis amet
        consequatur alias ab saepe dolorum. Quasi aspernatur, voluptates soluta aut fugit dolores debitis animi dolorem
        consectetur?

        <vue-inline-calendar @update:selected-date="selectedDate = $event" />
    </div>
</template> -->

<!-- <script>
    import VueInlineCalendar from 'vue-inline-calendar';
import "vue-inline-calendar/dist/style.css";

export default {
/*   name: 'App',
  components: {
    VueInlineCalendar
  },
  data() {
    return {
      selectedDate: null,
      
    }
  }, */
}
</script> -->

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' }
        ],
        editable:true
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>