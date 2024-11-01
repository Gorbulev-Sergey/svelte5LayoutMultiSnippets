import type { Snippet } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export let Header: Writable<Snippet> = writable();
export let Footer: Writable<Snippet> = writable();
