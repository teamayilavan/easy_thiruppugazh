<script lang="ts">
	import Song from '$lib/components/Song.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="flex flex-wrap gap-4 justify-center">
	{#each data.songs.data as song}
	<Song song={song} />
	{/each}
</div>
