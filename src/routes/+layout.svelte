<script context="module">
	import { EditorView, minimalSetup, basicSetup } from 'codemirror';
	import { keymap } from '@codemirror/view';
	import { java } from '@codemirror/lang-java';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { defaultKeymap, indentWithTab } from '@codemirror/commands';
	import ky from 'ky';
	export { minimalSetup, basicSetup };
</script>

<script lang="ts">
	import './styles.css';
	import { onMount } from 'svelte';
	import Navigation from '../components/Navigation.svelte';

	let value =
		'public void solution() {\n\t System.out.println("hello world!");\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';

	let dom: Element;
	let codemirror: EditorView;

	onMount(async () => {
		codemirror = new EditorView({
			doc: value,
			extensions: [
				basicSetup,
				java(),
				oneDark,
				keymap.of(defaultKeymap),
				keymap.of([indentWithTab])
			],
			parent: dom
		});
	});

	async function handleRunClick() {
		const sp = window.location.pathname.split('/');
		let type = 1;
		let idx = sp[sp.length - 1];
		if (!idx) {
			idx = '1';
		}

		if (sp[sp.length - 2] !== 'problem') {
			type = 2;
		}

		const code = codemirror.state.doc.toString().trim();
		const res = await ky.post('http://localhost:8080/', {
			json: { code, idx, type },
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		});

		if (!res.ok) {
			throw new Error(`Fetch error: ${res.statusText}`);
		}

		console.log(await res.json());
	}
</script>

<div class="app">
	<div class="max-w-8xl mx-auto">
		<div
			class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
		>
			<div class="max-w-screen-2xl m-auto">
				<div
					class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						focusable="false"
						role="img"
						viewBox="0 0 216.92 31.62"
						class="inline-block"
						width="150"
						height="66"
						color="#63489a"
						><g
							><g
								><path
									fill="#010100"
									d="M170.33,30.15H165.8a.36.36,0,0,1-.36-.36V1a.43.43,0,0,1,.36-.4h4.53a.43.43,0,0,1,.39.4V29.79A.37.37,0,0,1,170.33,30.15Z"
								/><path
									fill="#010100"
									d="M201.55,30.7a15.35,15.35,0,1,1,15.37-15.33A15.33,15.33,0,0,1,201.55,30.7Zm0-26.09C196,4.61,191.5,9.3,191.5,15.37s4.46,10.8,10.05,10.8,10-4.73,10-10.8S207.11,4.61,201.55,4.61Z"
								/><rect fill="#63489a" y="0.52" width="144.45" height="31.1" /></g
							></g
						></svg
					>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-row max-w-screen-2xl m-auto">
		<Navigation />
		<div class="flex flex-grow">
			<div class="desc basis-1/2 p-8">
				<slot />
			</div>
			<div class="basis-1/2 p-8">
				<div id="my-codemirror" bind:this={dom} />
				<br />
				<div class="text-right">
					<button
						class="ml-auto bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
						on:click={handleRunClick}>RUN</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
