<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import type { Meta } from '$lib/typesBooking.js';
	import { Input } from '$lib/components/ui/input';
	export let data:Meta;
	console.log(data);
	let formattedDate = new Date(data.data.created_at).toDateString();


</script>

<div class="relative m-4 h-screen overflow-x-auto rounded bg-slate-100">
	<div>
		<div class="container m-4 flex flex-row text-3xl">
			<div class="w-5/6">
				<h1 class="font-bold">Edit Your Booking</h1>
			</div>
			<div class="ml-auto items-end">
				<Button >Save</Button>
				<Button href="/booking/{data.data.id}">Cancel</Button>
			</div>
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
				<Input type="id" disabled value={data.data.id} class="max-w-xs" />
				<Input type="full name" value={data.data.purchased_price} class="max-w-xs" />
				<Input type="email" disabled value={data.data.property.title} class="max-w-xs" />
				<Input type="phone number" disabled value={data.data.property.address} class="max-w-xs" />
				<Input type="city" disabled value={data.data.profiles.full_name} class="max-w-xs" />
				<Input type="city" disabled value={data.data.profiles.email} class="max-w-xs" />
				<Input type="city" disabled value={data.data.profiles.phone} class="max-w-xs" />
				<h3 class="m-4 max-w-xs font-bold">{formattedDate}</h3>
			</div>
		</div>
	</div>
</div>
