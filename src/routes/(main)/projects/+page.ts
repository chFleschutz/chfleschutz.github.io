import type { ProjectMarkdownModule, ProjectMetadata } from '$lib/types';

interface LoadedProject {
    id: string;
    metadata: ProjectMetadata;
}

export async function load() {
    const paths = import.meta.glob<ProjectMarkdownModule>('/src/content/projects/*.md', { eager: true });

    const projects: LoadedProject[] = Object.entries(paths)
        .map(([path, file]) => {
            const id = path.split('/').pop()?.replace('.md', '');
            const metadata = file?.metadata;
            if (!id || !metadata || metadata.hidden) {
                return null;
            }

            return {
                id,
                metadata: {
                    ...metadata,
                    coverImage: metadata.coverImage || metadata.images?.[0] || '/textures/planet.png',
                    hidden: metadata.hidden ?? false,
                    sortPriority: metadata.sortPriority ?? 0
                }
            }
        })
        .filter((Boolean)) as LoadedProject[];

    projects.sort((a, b) => b.metadata.sortPriority - a.metadata.sortPriority);

    return { projects };
}