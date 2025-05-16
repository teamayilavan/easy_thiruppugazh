<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<h1>Thirupugazh Name</h1>
<p>From URL ID :{data.post.id}</p>
