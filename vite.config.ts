import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ["codemirror", "@codemirror/lang-java", "@codemirror/state", "@codemirror/theme-one-dark"],
	}
});
