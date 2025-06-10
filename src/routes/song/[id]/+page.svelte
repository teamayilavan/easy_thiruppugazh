<script lang="ts">
	import ShareButtons from "$lib/components/ShareButtons.svelte";
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

<div class="mt-12 fly-in">
	<h1 class="noto text-text-high dark:text-card text-center text-2xl font-semibold">
		{song_data.title}
	</h1>
</div>
<div class="text-text dark:text-dtext mt-4 text-center text-sm fly-in">
	<p>திருத்தலம் : {song_data.thalam}</p>
</div>
<div class="bg-card dark:bg-dcard mt-12 rounded-xl p-4 fade-in">
	<p class="noto text-text-high dark:text-card mt-2 text-sm font-medium">சந்தம்</p>

	<div class="text-text dark:text-dtext mt-4">
		{#each song_data.santham as santham_line}
			<p>{santham_line}</p>
		{/each}
	</div>
</div>
<div class="bg-card dark:bg-dcard mt-12 rounded-xl p-4 fade-in">
	<p class="noto text-text-high dark:text-card mt-2 text-sm font-medium">வரிகள்</p>
	<div class="text-text dark:text-dtext mt-4 grid gap-1">
		{#each song_data.lyrics as line}
			<p>{line}</p>
		{/each}
	</div>
</div>

<div class="bg-card dark:bg-dcard mt-12 rounded-xl p-4 fade-in">
	<p class="noto text-text-high dark:text-card mt-2 text-sm font-medium">பதம் பிரித்தது</p>
	<div class="text-text dark:text-dtext mt-4 grid gap-1">
		{#each song_data.patham as line}
			<p>{line}</p>
		{/each}
	</div>
</div>

<div class="bg-card dark:bg-dcard mt-12 rounded-xl p-4 fade-in">
	<p class="noto text-text-high dark:text-card mt-2 text-sm font-medium">இசை</p>

	<div class="text-text dark:text-dtext mt-4">
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
</div>

<div class="bg-card dark:bg-dcard mt-12 rounded-xl p-4 fade-in">
	<p class="noto text-text-high dark:text-card mt-2 text-sm font-medium">பொருளுரை</p>

	<div class="text-text dark:text-dtext mt-4 leading-8">
		{#if song_data.porul}
			<p>{song_data.porul}</p>
		{:else}
			<p>மன்னிக்கவும்! இந்த பாடலுக்கான பொருளுரை தற்போது கிடைக்க பெறவில்லை!</p>
		{/if}
	</div>
</div>

<div class="bg-card dark:bg-dcard mt-12 rounded-xl p-4 fade-in">
	<p class="noto text-text-high dark:text-card mt-2 text-sm font-medium">விளக்கவுரை</p>

	<div class="text-text dark:text-dtext mt-4">
		{#if song_data.explanation}
			{#each song_data.explanation as line}
				<p>line</p>
			{/each}
		{:else}
			<p>மன்னிக்கவும்! இந்த பாடலுக்கான விளக்கவுரை தற்போது கிடைக்க பெறவில்லை!</p>
		{/if}
	</div>
</div>

<ShareButtons />


<a class="bg-accent hover:bg-dcard mx-auto mt-12 block w-72 rounded-md px-4 py-2" href="/">
	<div class="flex align-middle gap-2 items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-house-icon lucide-house"
			><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path
				d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
			/></svg
		>
		முகப்பு பக்கம் செல்லவும்
	</div></a
>
