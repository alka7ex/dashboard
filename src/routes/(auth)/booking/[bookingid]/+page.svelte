<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import type { Meta } from '$lib/typesBooking.js';
	export let data : Meta;
	console.log(data);
	let formattedDate = new Date(data.data.created_at).toDateString();
	
</script>

<div class="relative m-4 h-screen overflow-x-auto rounded bg-slate-100">
	<div>
		<div class="container m-4 flex flex-row text-3xl">
			<h1 class="font-bold">Your Booking</h1>
			<Button class="ml-auto items-end" href="/booking/{data.data.id}/edit">Edit</Button>
		</div>
		<div class="flex flex-row">
			<div class="container w-1/3">
				<h2 class="m-4 font-bold">ID</h2>
				<h2 class="m-4 font-bold">PURCHASED PRICE</h2>
				<h2 class="m-4 font-bold">PROPERTY NAME</h2>
				<h2 class="m-4 font-bold">ADDRESS</h2>
				<h2 class="m-4 font-bold">FULL NAME</h2>
				<h2 class="m-4 font-bold">EMAIL</h2>
				<h2 class="m-4 font-bold">PHONE</h2>
				<h2 class="m-4 font-bold">CREATED DATE</h2>
			</div>
			<div class="container">
				<h2 class="m-4">{data.data.id}</h2>
				<h2 class="m-4">{data.data.purchased_price}</h2>
				<h2 class="m-4">{data.data.property.title}</h2>
				<h2 class="m-4">{data.data.property.address}</h2>
				<h2 class="m-4">{data.data.profiles.full_name}</h2>
				<h2 class="m-4">{data.data.profiles.email}</h2>
				<h2 class="m-4">{data.data.profiles.phone}</h2>
				<h2 class="m-4">{formattedDate}</h2>
			</div>
		</div>
	</div>
</div>
