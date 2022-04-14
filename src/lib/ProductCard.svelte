<script>
	export let photo;
	export let name;
	export let description;
</script>

<main class="flex flex-col p-6 bg-stone-50 w-96">
	<img src={photo} alt={name} />
	<h3>
		{name}
	</h3>
	<p>
		{description}
	</p>
</main>
