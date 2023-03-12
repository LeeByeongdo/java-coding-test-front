<script lang="ts">
	import { EditorState, EditorSelection } from '@codemirror/state';
	import { EditorView, keymap } from '@codemirror/view';
	import { defaultKeymap } from '@codemirror/commands';
	import { java } from '@codemirror/lang-java';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { onMount } from 'svelte';

	let value = '';

	let codemirror: Element;

	onMount(async () => {
		const startState = EditorState.create({
			doc: 'Hello World',
			extensions: [keymap.of(defaultKeymap)],
			selection: EditorSelection.create([
				EditorSelection.range(0, 4),
    		EditorSelection.cursor(5)
			]),
		});

		new EditorView({
			state: startState,
			parent: codemirror,

		});
	});
</script>

<div class="desc basis-1/2 p-8">
	<h1 class="text-2xl group flex whitespace-pre-wrap">1. 분기 숫자 구하기</h1>
	<p>1~12월중에 숫자를 입력받고 1분기, 2분기, 3분기, 4분기를 리턴하는 함수를 작성해주세요.</p>
	<br />

	<h3 class="text-lg">예시</h3>
	<ul>
		<li>입력: 3 -> 출력: 1</li>
		<li>입력: 5 -> 출력: 2</li>
		<li>입력: 12 -> 출력: 4</li>
	</ul>

	<h3 class="text-lg">주의</h3>
	<ul>
		<li>1부터 12까지의 정수만 입력합니다.</li>
	</ul>
</div>
<div class="basis-1/2 p-8">
	<div bind:this={codemirror} />
</div>

<style>
	h1,
	h3 {
		color: var(--tw-prose-headings);
		font-weight: 600;
		margin-bottom: 0.6em;
		line-height: 1.4;
		letter-spacing: -0.025em;
		scroll-margin-top: var(--scroll-mt);
	}

	.desc p,
	.desc ul {
		color: #334155;
	}

	.desc ul {
		list-style-type: none;
		margin-bottom: 1.25em;
		padding-left: 0;
	}

	.desc li:before {
		content: '';
		width: 0.75em;
		height: 0.125em;
		position: absolute;
		top: calc(0.875em - 0.0625em);
		left: 0;
		border-radius: 999px;
		background-color: #cbd5e1;
	}

	.desc > ul > li:not(:where([class~='not-prose'] *)) {
		padding-left: 1.75em;
		position: relative;
	}
</style>
