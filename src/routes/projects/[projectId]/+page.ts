import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ProjectMetadata } from '$lib/types';

type MarkdownModule = {
	metadata: ProjectMetadata;
	default: ConstructorOfATypedSvelteComponent;
};

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../content/projects/${params.projectId}.md`) as MarkdownModule;
		return {
			id: params.projectId,
			meta: post.metadata,
			content: post.default
		};
	} catch {
		throw error(404, `Project not found: ${params.projectId}`);
	}
};