<script>
	import '../app.css';
	import Header from '@/components/Header.svelte';
	import Footer from '@/components/Footer.svelte';
</script>

<Header></Header>
<slot />
<Footer></Footer>