<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import type { Profile } from '$lib/types';
	import { Input } from '$lib/components/ui/input';
	export let data;
	console.log(data);
	let { id, full_name, email, phone, city, created_at } = data.data;
	export let created_date = new Date(created_at,);
	console.log(created_date.toDateString);

</script>

<div class="relative m-4 h-screen overflow-x-auto rounded bg-slate-100">
	<div>
		<div class="container m-4 flex flex-row text-3xl">
			<div class="w-5/6">
				<h1 class="font-bold">Edit Your Profile</h1>
			</div>
			<div class="ml-auto items-end">
				<Button >Save</Button>
				<Button href="/user/{id}">Cancel</Button>
			</div>
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
				<Input type="id" disabled value={id} class="max-w-xs" />
				<Input type="full name" value={full_name} class="max-w-xs" />
				<Input type="email" disabled value={email} class="max-w-xs" />
				<Input type="phone number" disabled value={phone} class="max-w-xs" />
				<Input type="city" disabled value={city} class="max-w-xs" />
				<h3 class="m-4 max-w-xs font-bold">{created_date}</h3>
			</div>
		</div>
	</div>
</div>
