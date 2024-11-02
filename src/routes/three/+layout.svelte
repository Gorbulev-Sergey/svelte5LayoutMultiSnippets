<script lang="ts">
	import { getHeader } from '$lib/scripts/store3.svelte';

	let { children } = $props();
	let header = $derived(getHeader());
</script>

<div class="sticky-top w-100 bg-light">
	{@render header?.()}
</div>

<div class="container rounded my-3" style="min-height: 100vh;">
	{@render children?.()}
</div>
