<main>
	<h1>Contact Us</h1>
	<form action="https://formspree.io/f/mqalnroo" class="fs-form" method="POST">
		<div class="fs-field">
			<label class="fs-label" for="email">Email</label>
			<input class="fs-input" id="email" name="email" required />
		</div>
		<div class="fs-field">
			<label class="fs-label" for="message">Message</label>
			<textarea class="fs-textarea" id="message" name="message"></textarea>
		</div>
		<div class="fs-button-group">
			<button class="fs-button" type="submit">Submit</button>
		</div>
	</form>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Ovo&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap');

	/** Variables **/

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
		--font-family-body: 
	}

	main {
		position: relative;
		top: 80px;
		width: 90%;
		background: white;
		margin: auto;
		padding: 10px;
		color: rgb(50, 50, 50);
		-webkit-font-smoothing: antialiased;
		font-family: "Ovo", serif;
		font-size: 24px;
		font-optical-sizing: auto;
	}

	h1 {
		font-family: "Overlock", sans-serif;
		font-size: 60px;
		color: teal;
	}

	/** Base **/

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
