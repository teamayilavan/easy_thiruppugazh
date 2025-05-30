<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />
<Header />
<main>	
	<div class="mx-auto max-w-4xl items-center px-4 md:px-8">
		{@render children()}
	</div>
</main>
<Footer />
