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
	nav {
		position: relative;
		float: right;
		top: 50px;
		width: 100%;
		/*height: 100vh;*/
		background: green;
	}
</style>