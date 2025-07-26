import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ProjectMarkdownModule } from '$lib/types';


export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../../content/projects/${params.projectId}.md`) as ProjectMarkdownModule;
		return {
			id: params.projectId,
			meta: post.metadata,
			content: post.default
		};
	} catch {
		throw error(404, `Project not found: ${params.projectId}`);
	}
};