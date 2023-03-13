<script>
	import { page } from '$app/stores';
	import Op1 from '../../../components/OP1.svelte';
	import Op2 from '../../../components/OP2.svelte';
	import Op3 from '../../../components/OP3.svelte';
	import Op4 from '../../../components/OP4.svelte';
	$: slug = $page.params.slug;
</script>

{#if slug === '1'}
	<Op1 />
{:else if slug === '2'}
	<Op2 />
{:else if slug === '3'}
	<Op3 />
{:else if slug === '4'}
	<Op4 />
	<p>NOT FOUND</p>
{/if}
