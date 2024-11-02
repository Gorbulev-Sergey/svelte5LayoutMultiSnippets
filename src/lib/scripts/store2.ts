import type { Snippet } from 'svelte';

let Header: Snippet;
export let setHeader = (snippet: Snippet) => (Header = snippet);
export let getHeader = (): Snippet => Header;

let Footer: Snippet;
export let setFooter = (snippet: Snippet) => (Footer = snippet);
export let getFooter = (): Snippet => Footer;
