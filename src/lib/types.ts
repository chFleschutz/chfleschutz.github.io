import type { SvelteComponent } from 'svelte';

export interface ProjectMetadata {
    title: string;
    coverImage: string;
    images: string[];
    tags: string[];
    repo: string;
    hidden: boolean;
    sortPriority: number;
};

export type ProjectMarkdownModule = {
	metadata: ProjectMetadata;
	default: typeof SvelteComponent;
};
