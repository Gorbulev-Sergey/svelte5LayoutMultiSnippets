<script lang="ts">
	import { setHeader } from '$lib/scripts/store3.svelte';
	setHeader(header);
</script>

{#snippet header()}
	<div class="d-flex align-items-center bg-success bg-opacity-50 px-3 py-2">
		<button class="btn btn-success bg-transparent border-0 text-dark"><b>Заголовок</b></button>
		<div class="flex-grow-1 d-flex align-items-center justify-content-end gap-2">
			<button class="btn bg-transparent text-dark">Главная</button>
			<button class="btn bg-transparent text-dark">Расписание</button>
		</div>
	</div>
{/snippet}

<div class="d-flex flex-column gap-3 bg-white p-4 rounded-3">
	<h5 class="mb-0">Главная</h5>
</div>
