import { writable } from 'svelte/store';

export const currentSection = writable<number>(0);
export const sectionCount = writable<number>(0);
export const isLastSection = writable<boolean>(false);
