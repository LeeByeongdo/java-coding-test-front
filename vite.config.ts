import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ["codemirror", "@codemirror/view", "@codemirror/lang-markdown",
		"@codemirror/lang-java", "@codemirror/state", "@codemirror/theme-one-dark", "@codemirror/highlight", "@codemirror/matchbrackets", "@codemirror/basic-setup"],
	}
});
