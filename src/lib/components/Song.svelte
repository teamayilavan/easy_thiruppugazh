<script lang="ts">
	let { song } = $props();
</script>

<a href={`song/${song.id}`}>
	<div class="bg-card hover:bg-container w-84 lg:w-56 rounded-md px-2 py-2 shadow-sm">
		<p class="noto text-text-body font-medium">{song.title}</p>
		<p class="mt-1 text-sm">{song.place}</p>
		<div class="mt-3 flex gap-4">
			{#if song.meaning}
				<div class="porul">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="#000000"
						viewBox="0 0 256 256"
						><path
							d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"
						></path></svg
					>
				</div>
			{/if}
			{#if song.music}
				<div class="audio">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="#000000"
						viewBox="0 0 256 256"
						><path
							d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z"
						></path></svg
					>
				</div>
			{/if}
			{#if song.legend}
				<div class="legend">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="#000000"
						viewBox="0 0 256 256"
						><path
							d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"
						></path></svg
					>
				</div>
			{/if}
		</div>
	</div>
</a>
