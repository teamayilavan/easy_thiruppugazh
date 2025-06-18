<script lang="ts">
	import { page } from '$app/state';
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	let { data } = $props();
	let song_data = data.data;
</script>

<svelte:head>
	<title>{song_data.title} | எளிய திருப்புகழ் பாடல்கள் தொகுப்பு</title>
	<meta
		name="description"
		content={`${song_data.thalam} திருத்தலத்தில் அருளப்பெற்ற திருப்புகழ் பாடல் ${song_data.title}. பாடல் பொருளுரை, விளக்கவுரை மற்றும் இசை வடிவில் எவ்வாறு
			பாடுவது என்பன கொடுத்துள்ளோம். PDF வடிவிலும் பதிவிறக்கம் செய்யமுடியும்`}
	/>
	<meta
		name="keywords"
		content={`${song_data.title},${song_data.thalam}, திருப்புகழ், அருணகிரிநாத சுவாமிகள்,முருக பெருமான், வெற்றிவேல், சிறப்பு, easy, pdf, meaning, thiruppugazh, songs, murugan, thiruppugal`}
	/>
	<meta name="author" content="அயிலவன் அணி" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${song_data.title} | எளிய திருப்புகழ் பாடல்கள் தொகுப்பு`} />
	<meta
		property="og:description"
		content={`${song_data.thalam} திருத்தலத்தில் அருளப்பெற்ற திருப்புகழ் பாடல் ${song_data.title}. பாடல் பொருளுரை, விளக்கவுரை மற்றும் இசை வடிவில் எவ்வாறு
			பாடுவது என்பன கொடுத்துள்ளோம். PDF வடிவிலும் பதிவிறக்கம் செய்யமுடியும்`}
	/>
	<meta property="og:image" content="https://chinnathiruppugazh.ayilavan.org/og_card.png" />
	<meta property="og:url" content={`https://chinnathiruppugazh.ayilavan.org${page.url.pathname}`} />
</svelte:head>

<div class="fly-in mt-12">
	<h1 class="noto text-text-high dark:text-card text-center text-2xl font-semibold">
		திருப்புகழ் : {song_data.title}
	</h1>
</div>
<div class="text-text dark:text-dtext fly-in mt-4 text-center text-sm">
	<h2>திருத்தலம் : {song_data.thalam}</h2>
</div>
<div class="bg-card dark:bg-dcard fade-in mt-12 rounded-xl p-4">
	<h3 class="noto text-text-high dark:text-card mt-2 text-sm font-medium">சந்தம்</h3>

	<div class="text-text dark:text-dtext mt-4">
		{#each song_data.santham as santham_line}
			<p>{santham_line}</p>
		{/each}
	</div>
</div>
<div class="bg-card dark:bg-dcard fade-in mt-12 rounded-xl p-4">
	<h3 class="noto text-text-high dark:text-card mt-2 text-sm font-medium">வரிகள்</h3>
	<div class="text-text dark:text-dtext mt-4 grid gap-1">
		{#each song_data.lyrics as line}
			<p>{line}</p>
		{/each}
	</div>
</div>

<div class="bg-card dark:bg-dcard fade-in mt-12 rounded-xl p-4">
	<h3 class="noto text-text-high dark:text-card mt-2 text-sm font-medium">பதம் பிரித்தது</h3>
	<div class="text-text dark:text-dtext mt-4 grid gap-1">
		{#each song_data.patham as line}
			<p>{line}</p>
		{/each}
	</div>
</div>

<div class="bg-card dark:bg-dcard fade-in mt-12 rounded-xl p-4">
	<h3 class="noto text-text-high dark:text-card mt-2 text-sm font-medium">இசை</h3>

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

{#if song_data.words}
	<div class="bg-card dark:bg-dcard fade-in mt-12 rounded-xl p-4">
		<h3 class="noto text-text-high dark:text-card mt-2 text-sm font-medium">சொற்கள்</h3>
		<div class="text-text dark:text-dtext mt-4 grid gap-1">
			{#each song_data.words as line, index}
				<p>{index + 1}. {line}</p>
			{/each}
		</div>
	</div>
{/if}

{#if song_data.porul}
	<div class="bg-card dark:bg-dcard fade-in mt-12 rounded-xl p-4">
		<h3 class="noto text-text-high dark:text-card mt-2 text-sm font-medium">பொருளுரை</h3>

		<div class="text-text dark:text-dtext mt-4 leading-8">
			<p>{song_data.porul}</p>
		</div>
	</div>
{/if}

{#if song_data.explanation}
	<div class="bg-card dark:bg-dcard fade-in mt-12 rounded-xl p-4">
		<h3 class="noto text-text-high dark:text-card mt-2 text-sm font-medium">விளக்கவுரை</h3>

		<div class="text-text dark:text-dtext mt-4">
			{#each song_data.explanation as line}
				<p>{line}</p>
			{/each}
		</div>
	</div>
{/if}

<ShareButtons />

<a class="bg-accent hover:bg-dcard mx-auto mt-12 block w-72 rounded-md px-4 py-2" href="/">
	<div class="flex items-center gap-2 align-middle">
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
