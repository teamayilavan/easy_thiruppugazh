<script lang="ts">
	import Song from '$lib/components/Song.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>எளிய திருப்புகழ் பாடல்கள் தொகுப்பு</title>
	<meta name="description" content="சிறப்பு மிக்க திருப்புகழில் படிப்பதற்கு எளிதனா 50 திருப்புகழ் பாடல்களை தொகுத்து இந்த
			வலைத்தளத்தில் வழங்கியுள்ளோம். பாடல்களுக்கு பொருளுரை, விளக்கவுரை மற்றும் இசை வடிவில் எவ்வாறு
			பாடுவது என்பன கொடுத்துள்ளோம்." />
	<meta name="keywords" content="திருப்புகழ், அருணகிரிநாத சுவாமிகள்,முருக பெருமான், வெற்றிவேல், சிறப்பு" />
	<meta name="author" content="அயிலவன் அணி" />
</svelte:head>

<div class="intro text-text-body mx-auto mt-8 grid max-w-3xl gap-4 text-sm md:text-lg">
	<h1 class="noto text-center font-bold">வெற்றிவேல் முருகருக்கு அரோகரா!</h1>
	<div class="first">
		<p>
			சகல செல்வமும், யோகமிக்க பெறுவாழ்வும், தகமை, சிவஞானம், முக்தி, இக பர சௌபாக்கியம், பிறவாமை இவை
			அனைத்தும் தர வல்லது அருணகிரிநாத சுவாமிகள் அருளிசெய்த திருப்புகழ். முருக பெருமான் பெருங்கருணை
			கொண்டு, தானே முதல்அடி எடுத்து கொடுத்து பாடும் படி செய்த அற்புத களஞ்சியம் திருப்புகழ்.
		</p>
	</div>
	<div class="second">
		<p>
			இத்தகைய சிறப்பு மிக்க திருப்புகழில் படிப்பதற்கு எளிதனா திருப்புகழ் பாடல்களை தொகுத்து இந்த
			வலைத்தளத்தில் வழங்கியுள்ளோம். பாடல்களுக்கு பொருளுரை, விளக்கவுரை மற்றும் இசை வடிவில் எவ்வாறு
			பாடுவது என்பன கொடுத்துள்ளோம்.
		</p>
	</div>
	<div class="third noto text-center font-bold">
		<p>முருகா சரணம்!</p>
	</div>
</div>


	<div class="mt-8 baloo text-center font-medium">
		<p>பாடல்கள்</p>
	</div>
	<div class="mt-4 flex gap-2 md:gap-5 mx-auto text-center justify-center flex-col md:flex-row align-middle items-center">
		<div class="flex align-middle gap-1">
			        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path></svg>
					<small>பொருளுரை உள்ளது</small>
		</div>
		<div class="flex align-middle gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path></svg>

		<small>விளக்கவுரை உள்ளது</small>
		</div>
		<div class="flex align-middle gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z"></path></svg>

		<small>இசை உள்ளது</small>
		</div>
	</div>
<div class="flex flex-wrap justify-center gap-4 py-4 mt-4">
	{#each data.songs.data as song}
		<Song {song} />
	{/each}
</div>
