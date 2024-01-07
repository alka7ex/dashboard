<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import type { Property } from '$lib/typesProperty.js';
	import { Input } from '$lib/components/ui/input';
	export let data : Property
	console.log(data);

</script>

<div class="relative m-4 h-screen overflow-x-auto rounded bg-slate-100">
	<div>
		<div class="container m-4 flex flex-row text-3xl">
			<div class="w-5/6">
				<h1 class="font-bold">Edit Your Property</h1>
			</div>
			<div class="ml-auto items-end">
				<Button >Save</Button>
				<Button href="/property/{data.data.id}">Cancel</Button>
			</div>
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
				<Input type="id" disabled value={data.data.id} class="max-w-xs" />
				<Input type="full name" value={data.data.title} class="max-w-xs" />
				<Input type="email" disabled value={data.data.address} class="max-w-xs" />
				<Input type="phone number" disabled value={data.data.email} class="max-w-xs" />
				<Input type="city" disabled value={data.data.property_type} class="max-w-xs" />
				<Input type="city" disabled value={data.data.property_category} class="max-w-xs" />
			</div>
		</div>
	</div>
</div>
