<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<Header />
<main>	
	<div class="max-w-5xl mx-auto items-center px-4">
		{@render children()}
	</div>
</main>
<Footer />

