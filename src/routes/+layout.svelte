<script>
	import './styles.css';
</script>

<div class="app">
	<div class="flex flex-row">
		<div class="p-8">
			<div>
				<h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">필수 테스트</h5>
				<ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/docs/installation">1. 분기 숫자 구하기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/docs/editor-setup">2. 사용하지 않는 가장 작은 숫자 찾기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/docs/using-with-preprocessors">3. 승점 구하기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/docs/optimizing-for-production">4. 자동 줄바꿈 프로그램</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/docs/browser-support">5. 더하고 빼기</a
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
							href="/docs/installation">1. 모음 찾기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/docs/editor-setup">2. 중간 숫자 찾기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/docs/using-with-preprocessors">3. 친구 찾기</a
						>
					</li>
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
							href="/docs/optimizing-for-production">4. 아이큐 테스트</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-grow">
			<slot />
		</div>
	</div>
</div>
