// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: '弦 · 应用商店',
			social: [{ icon: 'seti:info', label: 'blog', href: 'https://sineweb.tanxifei.top/info/start/' }],
			sidebar: [
				{
					label: '应用商店',
					autogenerate: { directory: 'Info' },
				},
			],
		}),
	],
});
