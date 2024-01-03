<script lang="ts">
    import type { LayoutData } from './$types';
    import Navbar from '$lib/home/Navbar.svelte';
    import '../app.pcss';
    
    // export let data: LayoutData;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>
<Navbar email="testemail" />
<slot />

