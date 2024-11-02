<script lang="ts">
	import { Footer, Header } from '$lib/scripts/store';
	let { children } = $props();
</script>

{#if $Header}
	<div class="sticky-top w-100 bg-light">
		{@render $Header?.()}
	</div>
{/if}

<div class="container rounded my-3" style="min-height: 100vh;">
	{@render children?.()}
</div>

{#if $Footer}
	<div class="sticky-bottom w-100 bg-dark bg-opacity-75 p-3">
		{@render $Footer?.()}
	</div>
{/if}
