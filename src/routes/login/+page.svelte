<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	export let data;
	let { supabase } = data;

	let email = '';
	let password = '';

	async function signInWithEmailPassword() {
		try {
			await supabase.auth.signInWithPassword({
				email,
				password
			});
			// Redirect or handle success as needed
		} catch (error: any) {
			console.error('Login error:', error.message);
			// Handle login error, e.g., display an error message to the user
		}
	}
</script>

<div class="flex h-[90.5vh] items-center justify-center bg-slate-200">
	<Card.Root class="shadow-md shadow-slate-300 md:w-[400px]">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Login to Continue</Card.Title>
			<Card.Description>Enter your email and password to Visit Dashboard</Card.Description>
		</Card.Header>
		<form action="?/login" method="POST" on:submit|preventDefault={signInWithEmailPassword} use:enhance>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input
						bind:value={email}
						id="email"
						type="email"
						placeholder="youremail@example.com"
						name="email"
					/>
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input
						bind:value={password}
						id="password"
						type="password"
						placeholder="Password"
						name="password"
					/>
				</div>
			</Card.Content>
			<Card.Footer>
				<Button class="w-full" type="submit">Log In</Button>
			</Card.Footer>
		</form>
		<Card.Footer>
			<div>
				Don't have an account? <a href="/signup" class="text-blue-500 underline underline-offset-1"
					>Sign Up</a
				>
			</div>
		</Card.Footer>
	</Card.Root>
</div>

