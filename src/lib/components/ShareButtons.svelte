<script>
	import { onMount } from 'svelte';

	let shareUrl = '';
	let title = 'எளிய திருப்புகழ் பாடல்கள் தொகுப்பு';
	let platforms = {
		whatsapp: '',
		facebook: '',
		twitter: ''
	};
	// We need to wait for the component to mount to access the full URL on the client-side.
	onMount(() => {
		shareUrl = window.location.href;
		title = document.title || 'எளிய திருப்புகழ் பாடல்கள் தொகுப்பு';
		platforms = {
			whatsapp: `https://api.whatsapp.com/send?text=${encodeURI(shareUrl)}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(shareUrl)}`,
			twitter: `https://twitter.com/intent/tweet?text=${encodeURI(shareUrl)}`
		};
	});

	let copyButtonText =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path></svg>';

	async function copyToClipboard() {
		if (!navigator.clipboard) {
			// Fallback for older browsers or insecure contexts (non-HTTPS)
			alert('Clipboard API not available. Please copy the link manually.');
			return;
		}

		try {
			await navigator.clipboard.writeText(shareUrl);
			copyButtonText = 'Copied!';
			// Reset the button text after a few seconds
			setTimeout(() => {
				copyButtonText =
					'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path></svg>';
			}, 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
			copyButtonText = 'Failed to Copy';
			setTimeout(() => {
				copyButtonText =
					'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path></svg>';
			}, 2000);
		}
	}
</script>

<div class="mx-auto mt-12 text-center">
	<p class="text-md">இந்த பக்கத்தை பகிர!</p>
	<div class="share-buttons mx-auto mt-4 text-center">
		<a
			href={platforms.whatsapp}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Share on WhatsApp"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				viewBox="0 0 256 256"
				><path
					d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
				></path></svg
			>
		</a>
		<a
			href={platforms.facebook}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Share on Facebook"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				viewBox="0 0 256 256"
			>
				<path
					d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
				>
				</path>
			</svg>
		</a>
		<a
			href={platforms.twitter}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Share on Twitter"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				viewBox="0 0 256 256"
			>
				<path
					d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"
				>
				</path>
			</svg>
		</a>
		<button on:click={copyToClipboard} type="button">
			{@html copyButtonText}
		</button>
	</div>
</div>

<style>
	.share-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		align-items: center;
        justify-content: center;
	}

	.share-buttons a,
	.share-buttons button {
		display: inline-block;
		padding: 10px 15px;
		text-decoration: none;
		border-radius: 5px;
		font-family: inherit;
		font-size: 1rem;
		cursor: pointer;
		/* color: var(--color-text-high); */
        margin-block: auto;
        text-align: center;
	}
    

	.share-buttons button {
		width: 32px;
	}

	.share-buttons button {
		min-width: 110px; /* Ensures the button doesn't resize when text changes */
	}
	.share-buttons a :hover,
	.share-buttons button :hover {
		color: var(--color-dtext-high);
	}
</style>
