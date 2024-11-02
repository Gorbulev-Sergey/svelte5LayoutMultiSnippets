<script lang="ts">
	import { Header, Footer } from '$lib/scripts/store';
	$Header = header;
	$Footer = footer;

	let array: (string | number)[] = $state([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
</script>

{#snippet header()}
	<div class="d-flex align-items-center bg-success bg-opacity-50 px-3 py-2">
		<button class="btn btn-success bg-transparent border-0 text-dark"><b>Заголовок</b></button>
		<div class="flex-grow-1 d-flex align-items-center justify-content-end gap-2">
			<button class="btn bg-transparent text-dark" onclick={() => (array[0] = 'Как дела')}
				>Главная</button
			>
			<button class="btn bg-transparent text-dark">Расписание</button>
		</div>
	</div>
{/snippet}

<div class="d-flex flex-column gap-3 bg-white p-4 rounded-3">
	<h5 class="mb-0">Главная</h5>
	{#each array as item}
		<div class="bg-dark bg-opacity-10 text-dark p-3 rounded" style="min-height: 20em;">
			{item}
		</div>
	{/each}
</div>

{#snippet footer()}
	<div class="d-flex justify-content-center text-light">Подвал</div>
{/snippet}
