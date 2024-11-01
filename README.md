# Несколько сниппетов в макете
#### В svelte 5 нашёл для себя такой вариант добавить в макет несколько сниппетов

Мой store.ts файл:

```javascript
import type { Snippet } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export let Header: Writable<Snippet> = writable();
export let Footer: Writable<Snippet> = writable();
```

Мой +layout.svelte:

```svelte
<script lang="ts">
	import { Footer, Header } from '$lib/scripts/store';
	let { children } = $props();
</script>

{@render $Header?.()}
{@render children?.()}
{@render $Footer?.()}
```

Мой +page.svelte:

```svelte
<script lang="ts">
	import { Header, Footer } from '$lib/scripts/store';
	$Header = header;
	$Footer = footer;
</script>

{#snippet header()}
	Header
{/snippet}

<div>Content</div>

{#snippet footer()}
	Header
{/snippet}
```
Результат:

![alt text](static/1.png)
