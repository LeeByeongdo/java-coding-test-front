<script context="module">
	import { EditorView, minimalSetup, basicSetup } from 'codemirror';
	import { java } from '@codemirror/lang-java';
	import { oneDark } from '@codemirror/theme-one-dark';
	export { minimalSetup, basicSetup };
</script>

<script lang="ts">
	import './styles.css';
	import { onMount } from 'svelte';

	let value =
		'public void solution() {\n\t System.out.println("hello world!");\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';

	let dom: Element;
	let codemirror: EditorView;

	onMount(async () => {
		codemirror = new EditorView({
			doc: value,
			extensions: [basicSetup, java(), oneDark],
			parent: dom
		});
	});

	function handleRunClick() {
		console.log(codemirror.state.doc.toString().trim());
	}
</script>

<div class="app">
	<div class="flex flex-row">
		<div class="p-8 nav">
			<div>
				<h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">필수 테스트</h5>
				<ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/problem/1">1. 분기 숫자 구하기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/problem/2">2. 사용하지 않는 가장 작은 숫자 찾기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/problem/3">3. 승점 구하기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/problem/4">4. 자동 줄바꿈 프로그램</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/problem/5">5. 더하고 빼기</a
						>
					</li>
				</ul>
			</div>
			<div class="mt-12 lg:mt-8">
				<h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">선택 테스트</h5>
				<ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/optional-problem/1">1. 모음 찾기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/optional-problem/2">2. 중간 숫자 찾기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/optional-problem/3">3. 친구 찾기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/optional-problem/4">4. 아이큐 테스트</a
						>
					</li>
				</ul>
			</div>
		</div>
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
