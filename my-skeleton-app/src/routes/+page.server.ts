import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
export const actions = {
	enter: async ({ request, cookies }) => {
		console.log('hit action!');
		const form = await request.formData();
		const name = form.get('name');
		cookies.set('auth', 'regularusertoken', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});
		cookies.set('name', `${name}`, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});
		throw redirect(303, `/${name}`);
	}
} satisfies Actions;
