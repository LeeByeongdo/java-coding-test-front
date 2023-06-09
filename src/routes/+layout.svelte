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
	let errors: { result: string; input: string }[] = [];
	let success = false;
	let loading = false;

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
		loading = true;
		success = false;
		const sp = window.location.pathname.split('/');
		let type = 1;
		let idx = sp[sp.length - 1];
		if (!idx) {
			idx = '1';
		}

		if (sp[sp.length - 2] === 'optional-problem') {
			type = 2;
		}

		const code = codemirror.state.doc.toString().trim();
		try {
			const res = await ky.post('/api/run', {
				json: { code, idx, type }
			});

			if (!res.ok) {
				loading = false;
				throw new Error(`Fetch error: ${res.statusText}`);
			}

			errors = await res.json();
			success = errors.length === 0;
		} catch (e) {
			success = false;
			console.log(e);
		}

		loading = false;
	}
</script>

<div class="app">
	<div class="max-w-8xl mx-auto">
		<div
			class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
		>
			<div class="max-w-screen-2xl m-auto">
				<div
					class="border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0"
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
			<div class="desc basis-5/12 p-8">
				<slot />
			</div>
			<div class="basis-7/12 p-8">
				<div id="my-codemirror" bind:this={dom} />
				<br />
				<div class="text-right">
					<button
						class="ml-auto bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
						on:click={handleRunClick}
					>
						{#if loading}
							<svg
								class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								/>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
						{/if}
						{#if loading}TESTING...{:else}RUN{/if}</button
					>
				</div>
				{#if success}
				<h3 class="text-green-700">SUCCESS!</h3>
				{/if}
				{#if errors && errors.length > 0}
					<div class="relative rounded-xl overflow-auto">
						<h3 class="text-red-700">FAILED</h3>
						<div class="shadow-sm overflow-hidden my-8">
							
							<table class="border-collapse table-auto w-full text-sm">
								<thead>
									<tr>
										<th
											class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
											>결과</th
										>
										<th
											class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
											>정답</th
										>
									</tr>
								</thead>
								<tbody class="bg-white dark:bg-slate-800">
									{#each errors as error}
										<tr>
											<td
												class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
												>{error.input}</td
											>
											<td
												class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
												>{error.result}</td
											>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
