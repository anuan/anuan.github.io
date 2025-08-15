<script lang="ts">
	import '../global.css';
</script>

<main>
	<h1>Who We Are</h1>
	<h2>Bio</h2>
	<p>Headshots, our relevant experience and background and how it helps for this project.</p>
	<h2>Motivation</h2>
	<p>Personal paragraph on why we're tackling this problem.</p>


	<h1>How to Reach Us</h1>
	<p>Reach out to us individually via LinkedIn or send us a message using the form below.</p>
	<form action="https://formspree.io/f/mqalnroo" class="fs-form" method="POST">
		<div class="fs-field">
			<label class="fs-label" for="email">Email</label>
			<input class="fs-input" id="email" name="email" placeholder="Your email address" required />
		</div>
		<div class="fs-field">
			<label class="fs-label" for="message">Message</label>
			<textarea class="fs-textarea" id="message" name="message" placeholder="I'm curious to learn more ..."></textarea>
		</div>
		<div class="fs-button-group">
			<button class="fs-button" type="submit">Submit</button>
		</div>
	</form>
</main>

<style>
	:root {
		--color-background: #cbd5e1;
		--color-background-alt: #64748b;
		--color-border-active: #64748b;
		--color-border-default: #94a3b8;
		--color-highlight: #cbd5e1;
		--color-primary: #1e293b;
		--color-primary-active: #090f1d;
		--color-text-default: #0f172a;
		--color-text-muted: #475569;
	}

	*,
	::before,
	::after {
		box-sizing: border-box;
	}

	button,
	input,
	textarea {
		font-family: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		font-size: 100%;
		font-weight: inherit;
		line-height: inherit;
		color: inherit;
		margin: 0;
		padding: 0;
	}

	/** Components **/

	.fs-form {
		display: grid;
		row-gap: 1.5rem;
	}

	.fs-field {
		display: flex;
		flex-direction: column;
		row-gap: 0.375rem;
	}

	.fs-label {
		color: var(--color-text-default);
		display: block;
		font-family: var(--font-family-display);
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
	}

	.fs-input {
		appearance: none;
		border-radius: 0.375rem;
		border-width: 0;
		box-shadow: var(--color-border-default) 0 0 0 1px inset;
		color: var(--color-text-default);
		font-size: 1rem;
		height: 2.5rem;
		line-height: 1.5rem;
		outline: none;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
	}

	.fs-input:focus-visible {
		box-shadow: var(--color-border-active) 0 0 0 1.5px inset;
		outline: 3px solid var(--color-highlight);
		outline-offset: 0;
	}

	.fs-input::placeholder {
		color: var(--color-text-muted);
	}

	.fs-textarea {
		appearance: none;
		border-radius: 0.375rem;
		border-width: 0;
		box-shadow: var(--color-border-default) 0 0 0 1px inset;
		color: var(--color-primary);
		font-size: 1rem;
		line-height: 1.5rem;
		outline: none;
		padding: 0.5rem 0.75rem;
		resize: vertical;
		height: 300px;
	}

	.fs-textarea:focus-visible {
		box-shadow: var(--color-border-active) 0 0 0 1.5px inset;
		outline: 3px solid var(--color-highlight);
		outline-offset: 0;
	}

	.fs-textarea::placeholder {
		color: var(--color-text-muted);
	}

	.fs-button-group {
		display: flex;
		flex-direction: row-reverse;
		column-gap: 1.5rem;
	}

	.fs-button {
		background-color: var(--color-primary);
		border-radius: 0.375rem;
		color: white;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1rem;
		padding: 1rem 2rem;
		transition-duration: 200ms;
		transition-property: background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.fs-button:hover {
		background-color: var(--color-primary-active);
	}

	.fs-button:focus-visible {
		background-color: var(--color-primary-active);
		outline: 3px solid var(--color-highlight);
	}
</style>
