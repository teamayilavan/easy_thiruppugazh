<script lang="ts">
	let { data } = $props();
	let song_data = data.data;
</script>

<svelte:head>
	<title>{song_data.title} | எளிய திருப்புகழ் பாடல்கள் தொகுப்பு</title>
	<meta
		name="description"
		content={`${song_data.thalam} திருத்தலத்தில் அருளப்பெற்ற திருப்புகழ் பாடல் ${song_data.title}`}
	/>
	<meta
		name="keywords"
		content={`${song_data.title},${song_data.thalam}, திருப்புகழ், அருணகிரிநாத சுவாமிகள்,முருக பெருமான், வெற்றிவேல், சிறப்பு`}
	/>
	<meta name="author" content="அயிலவன் அணி" />
</svelte:head>

<div class="mt-4">
	<h1 class="noto text-highlight-text text-lg font-medium">{song_data.title}</h1>
</div>
<div class="text-text-body mt-4 text-sm">
	<p>திருத்தலம் : {song_data.thalam}</p>
</div>
<div class="mt-8">
	<p class="noto text-highlight-text text-sm font-medium">சந்தம்</p>
</div>
<div class="text-text-body mt-2">
	{#each song_data.santham as santham_line}
		<p>{santham_line}</p>
	{/each}
</div>
<div class="mt-8">
	<p class="noto text-highlight-text text-sm font-medium">வரிகள்</p>
</div>
<div class="text-text-body mt-2 grid gap-1">
	{#each song_data.lyrics as line}
		<p>{line}</p>
	{/each}
</div>

<div class="mt-8">
	<p class="noto text-highlight-text text-sm font-medium">பதம் பிரித்தது</p>
</div>
<div class="text-text-body mt-2 grid gap-1">
	{#each song_data.patham as line}
		<p>{line}</p>
	{/each}
</div>

<div class="mt-8">
	<p class="noto text-highlight-text text-sm font-medium">இசை</p>
</div>
<div class="text-text-body mt-2">
	{#if song_data.music}
		<audio controls>
			<source src="horse.ogg" type="audio/ogg" />
			<source src="horse.mp3" type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
		<p>Music</p>
	{:else}
		<p>மன்னிக்கவும் இந்த பாடலுக்கான இசை தற்போது கிடைக்க பெறவில்லை!</p>
	{/if}
</div>

<div class="mt-8">
	<p class="noto text-highlight-text text-sm font-medium">பொருளுரை</p>
</div>

<div class="text-text-body mt-2 leading-8 prose">
	{#if song_data.porul}
		<p>{song_data.porul}</p>
	{:else}
		<p>மன்னிக்கவும்! இந்த பாடலுக்கான பொருளுரை தற்போது கிடைக்க பெறவில்லை!</p>
	{/if}
</div>

<div class="mt-8">
	<p class="noto text-highlight-text text-sm font-medium">விளக்கவுரை</p>
</div>
<div class="text-text-body mt-2">
	{#if song_data.explanation}
		{#each song_data.explanation as line}
			<p>line</p>
		{/each}
	{:else}
		<p>மன்னிக்கவும்! இந்த பாடலுக்கான விளக்கவுரை தற்போது கிடைக்க பெறவில்லை!</p>
	{/if}
</div>
