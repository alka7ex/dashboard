<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import type { Property } from '$lib/typesProperty';	
	export let data : Property
	console.log(data);
</script>

<div class="relative m-4 h-screen overflow-x-auto rounded bg-slate-100">
	<div>
		<div class="container m-4 flex flex-row text-3xl">
			<h1 class="font-bold">Your Property</h1>
			<Button class="ml-auto items-end" href="/property/{data.data.id}/edit">Edit</Button>
		</div>
		<div class="flex flex-row">
			<div class="container w-1/3">
				<h2 class="m-4 font-bold">ID</h2>
				<h2 class="m-4 font-bold">PROPERTY NAME</h2>
				<h2 class="m-4 font-bold">PROPERTY ADDRESS</h2>
				<h2 class="m-4 font-bold">EMAIL</h2>
				<h2 class="m-4 font-bold">PROPERTY TYPE</h2>
				<h2 class="m-4 font-bold">PROPERTY CATEGORY</h2>
			</div>
			<div class="container">
				<h2 class="m-4">{data.data.id}</h2>
				<h2 class="m-4">{data.data.title}</h2>
				<h2 class="m-4">{data.data.address}</h2>
				<h2 class="m-4">{data.data.email}</h2>
				<h2 class="m-4">{data.data.property_type}</h2>
				<h2 class="m-4">{data.data.property_category}</h2>
			</div>
		</div>
	</div>
</div>
