<script lang="ts">
    import type { PageData } from './$types';
    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import DayGrid from '@event-calendar/day-grid';


    let plugins = [TimeGrid];
    let options = {
        view: 'timeGridWeek',
        events: [
            // your list of events
        ]
    };
    export let data: PageData;
</script>

<Calendar {plugins} {options} />