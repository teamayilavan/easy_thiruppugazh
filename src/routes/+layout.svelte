<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();

    import { fade } from 'svelte/transition';
</script>

<Header />
<main>	
	<div class="max-w-4xl mx-auto items-center px-4 md:px-8" transition:fade={{ duration: 200 }}>
		{@render children()}
	</div>
</main>
<Footer />

