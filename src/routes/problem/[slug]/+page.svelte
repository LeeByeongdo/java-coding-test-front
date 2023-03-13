<script>
	import { page } from '$app/stores';
	import P1 from '../../../components/P1.svelte';
	import P2 from '../../../components/P2.svelte';
	import P3 from '../../../components/P3.svelte';
	import P4 from '../../../components/P4.svelte';
	import P5 from '../../../components/P5.svelte';
	$: slug = $page.params.slug;
</script>

{#if slug === '1'}
	<P1 />
{:else if slug === '2'}
	<P2 />
{:else if slug === '3'}
	<P3 />
{:else if slug === '4'}
	<P4 />
{:else if slug === '5'}
	<P5 />
{:else}
	<p>NOT FOUND</p>
{/if}
