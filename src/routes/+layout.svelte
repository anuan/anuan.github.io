<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '../lib/assets/js/store.js';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { siteTitle, siteURL } from '$lib/config.js';

	/* import './global.css'; */

	let { data, children } = $props();

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/
	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/css/core.css" />	
	<link rel="stylesheet" href="/css/typography.css" />

	<link rel="stylesheet" href="/css/components.css" />
	<link rel="stylesheet" href="/css/header-and-footer.css" />
	<link rel="stylesheet" href="/css/forms.css" />

	<link rel="stylesheet" href="/css/code.css" />
	<!-- 
	<link rel="stylesheet" href="/css/fonts.css" />
	<link rel="stylesheet" href="/css/prism.css" />
	<link rel="stylesheet" href="/css/animation.css" />
	<link rel="stylesheet" href="/css/layout.css" />
	<link rel="stylesheet" href="/css/root.css" />
	<link rel="stylesheet" href="/css/utilities.css" /> -->
	<link
		rel="alternate"
		type="application/rss+xml"
		title={siteTitle}
		href="http://{siteURL}/api/rss.xml"
	/>
</svelte:head>

<!--
<nav>
	<a href="/">Home</a>
	<a href="/blog">Blog</a>
	<a href="/about" class="highlight">About</a>
</nav>-->

<div class="layout" class:open={$isMenuOpen}>
	<Header />
	{#key data.path}
		<main id="main" tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
			{@render children?.()}
		</main>
	{/key}
	<Footer />
</div>