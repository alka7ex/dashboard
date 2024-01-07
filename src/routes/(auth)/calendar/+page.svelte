<script lang="ts">
    import type { PageData } from './$types';
    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import DayGrid from '@event-calendar/day-grid';


    let plugins = [DayGrid];
    let options = {
        view: 'dayGridMonth',
        events: [
            // your list of events
        ]
    };
    export let data: PageData;
</script>
<div class="container p-4">
    <Calendar {plugins} {options} />
</div>