import { writable } from 'svelte/store';

export const currentSection = writable<number>(0);
export const sectionCount = writable<number>(0);
export const isLastSection = writable<boolean>(false);

export const scrollToSection = (section: number) => {
    const sectionElement = document.querySelector(
        `section[data-section="${section}"]`
    ) as HTMLElement;
    if (!sectionElement) return;
    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
