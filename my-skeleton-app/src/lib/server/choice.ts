import type { RequestEvent } from '@sveltejs/kit';

export const userChoice = (event: RequestEvent) => {
	console.log(event.request.formData);
};
