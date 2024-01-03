<!-- editbtn.svelte -->
<script lang="ts">
    import { goto } from '$app/navigation';
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import type { Booking } from '$lib/typesBooking';

    export let booking: Booking;
    console.log(booking);
    function handleEdit() {
        // Navigate to the edit page for the specific profile
        goto(`/booking/${booking.id}`);
    }
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>Action</DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.Item on:click={handleEdit}>Edit</DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
