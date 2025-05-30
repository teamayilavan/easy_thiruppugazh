<script lang="ts">
	import logo from '$lib/assets/music.png?enhanced';
	import lightlogo from '$lib/assets/music_light.png?enhanced';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<header class="border-text-high flex justify-between border-b-1 px-4 py-4 md:px-12">
	<a class="mx-auto flex items-center" href="/">
		{#if mode.current === 'dark'}
			<enhanced:img width="60px" height="60px" src={lightlogo} alt="Music Logo" />
		{:else}
			<enhanced:img width="60px" height="60px" src={logo} alt="Music Logo" />
		{/if}
		<!-- <enhanced:img width="60px" height="60px" src={logo} alt="Music Logo" /> -->
		<p class=" w-48 font-medium">எளிய திருப்புகழ் பாடல்கள் தொகுப்பு</p>
	</a>
	{#if mode.current === 'dark'}
		<button class="cursor-pointer" aria-label="Mode Toggle Button" onclick={toggleMode}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-sun-icon lucide-sun"
				><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
					d="m4.93 4.93 1.41 1.41"
				/><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path
					d="m6.34 17.66-1.41 1.41"
				/><path d="m19.07 4.93-1.41 1.41" /></svg
			>
		</button>
	{:else}
		<button class="cursor-pointer" aria-label="Moon Button" onclick={toggleMode}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-moon-icon lucide-moon"
				><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
			></button
		>
	{/if}
</header>
