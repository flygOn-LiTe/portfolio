import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { z } from 'zod';
const registerScheme = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(3, { message: 'Name must be atleast 3 characters' })
		.max(12, { message: 'Name must be less than 12 characters' })
		.trim(),
	choice: z.string()
});
export const actions = {
	enter: async ({ request, cookies }) => {
		console.log('hit action!');
		const formData = Object.fromEntries(await request.formData());
		let success;
		try {
			const result = registerScheme.parse(formData);
			console.log('success');
			success = true;
			console.log(result);
			cookies.set('auth', 'regularusertoken', {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 // 1 hour
			});
			cookies.set('name', `${formData.name}`, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 // 1 hour
			});
			cookies.set('choice', `${formData.choice}`, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 // 1 hour
			});
		} catch (err: any) {
			const { fieldErrors: errors } = err.flatten();
			const { ...stuff } = formData;
			return {
				data: stuff,
				errors
			};
		}
		if (success === true) {
			throw redirect(303, `/${formData.name}`);
		}
	}
} satisfies Actions;
