<script>
	import Callout from '$lib/components/Callout.svelte';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>Contact</h1>
<Callout>Send me a message using the form below.</Callout>

<form action="https://formspree.io/f/mqalnroo" class="fs-form" method="POST">
	<div class="fs-field">
		<label class="fs-label" for="email">Email</label>
		<input class="fs-input" id="email" name="email" placeholder="Your email address" required />
	</div>
	<div class="fs-field">
		<label class="fs-label" for="message">Message</label>
		<textarea
			class="fs-textarea"
			id="message"
			name="message"
			placeholder="I'm curious to learn more ..."
		></textarea>
	</div>
	<div class="fs-button-group">
		<button class="fs-button" type="submit">Submit</button>
	</div>
</form>

<style></style>
