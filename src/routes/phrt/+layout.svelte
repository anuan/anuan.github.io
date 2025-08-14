<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/phrt/">Home</a>
	<a href="/phrt/about">About</a>
	<a href="/phrt/faq">FAQ</a>
</nav>

{@render children?.()}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap');

	nav {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
		float: right;
		top: 0px;
		width: 95%;
		margin: 10px;
		height: 5vh;
		font-family: 'Rethink Sans', sans-serif;
	}

	a {
		font-size: 24px;
	}
</style>