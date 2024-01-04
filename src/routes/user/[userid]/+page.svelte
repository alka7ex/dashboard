<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import type { Profile } from '$lib/types';
	export let data;
	let { id, full_name, email, phone, city, created_at } = data.data;
	console.log(data);
</script>

<div class="relative m-4 h-screen overflow-x-auto rounded bg-slate-100">
	<div>
		<div class="container m-4 flex flex-row text-3xl">
			<h1 class="font-bold">Your Profile</h1>
			<Button class="ml-auto items-end" href="/user/{id}/edit">Edit</Button>
		</div>
		<div class="flex flex-row">
			<div class="container w-1/3">
				<h2 class="m-4 font-bold">ID</h2>
				<h2 class="m-4 font-bold">FULL NAME</h2>
				<h2 class="m-4 font-bold">EMAIL</h2>
				<h2 class="m-4 font-bold">PHONE</h2>
				<h2 class="m-4 font-bold">CITY</h2>
				<h2 class="m-4 font-bold">CREATED DATE</h2>
			</div>
			<div class="container">
				<h2 class="m-4">{id}</h2>
				<h2 class="m-4">{full_name}</h2>
				<h2 class="m-4">{email}</h2>
				<h2 class="m-4">{phone}</h2>
				<h2 class="m-4">{city}</h2>
				<h2 class="m-4">{created_at}</h2>
			</div>
		</div>
	</div>
</div>
