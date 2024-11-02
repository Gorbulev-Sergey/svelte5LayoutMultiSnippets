<script lang="ts">
	import { getHeader, getFooter } from '$lib/scripts/store2';
	import { type Snippet } from 'svelte';

	let { children } = $props();
	let header: Snippet = $derived(getHeader());
	let footer: Snippet = $derived(getFooter());
	// $effect(() => {
	// 	header = getHeader();
	// 	footer = getFooter();
	// });
</script>

{@render header?.()}
{@render children?.()}
{@render footer?.()}
