<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/phrt/">Home</a>
	<a href="/phrt/vision">Vision</a>
	<a href="/phrt/faq">FAQ</a>
	<a href="/phrt/about" class="highlight">Contact</a>
</nav>

{@render children?.()}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Ovo&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap');

	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 8px;
		float: right;
		top: 0px;
		width: 100%;
		margin: 0px;
		height: 5vh;
		padding: 10px 30px;
		font-family: "Rethink Sans", sans-serif;
		border-bottom: 1px solid whitesmoke;
		background-color: white;
	}

	a {
		font-size: 16px;
		color: #2D3142;
		text-decoration: none;
		text-align: center;
		padding: 10px 20px;
	}

	a:hover, a:active {
		color: teal;
	}

	a.highlight {
		color: white;
		background-color: teal;
		border-radius: 25px;
		text-align: center;
  		width: 60px;
  		height: 24px;
	}
</style>