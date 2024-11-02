<script lang="ts">
	import { getHeader, getFooter } from '$lib/scripts/store2';
	import { onMount, type Snippet } from 'svelte';

	let { children } = $props();
	let header: Snippet = $state() as Snippet;
	let footer: Snippet = $state() as Snippet;
	onMount(() => {
		header = getHeader();
		footer = getFooter();
	});
</script>

{@render header?.()}
{@render children?.()}
{@render footer?.()}
