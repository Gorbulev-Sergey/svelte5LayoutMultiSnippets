<script lang="ts">
	import { setHeader, setFooter } from '$lib/scripts/store2';
	setHeader(header);
	setFooter(footer);
</script>

{#snippet header()}
	Заголовок
{/snippet}

<div>Содержимое</div>

{#snippet footer()}
	Подвал
{/snippet}
