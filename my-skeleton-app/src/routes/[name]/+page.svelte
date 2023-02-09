<script>
    export let data;
    const { user } = data;
    const name = user.user.name;
</script>
<div class="h-1/4 flex justify-center items-center">
    <h1>
       Hello <span class="gradient-heading">
		{name}!
	</span>Welcome to my secret lair!
    </h1>
</div>
<style>
    .gradient-heading {
	@apply bg-clip-text text-transparent box-decoration-clone;
	/* Direction */
	@apply bg-gradient-to-br;
	/* Color Stops */
	@apply from-primary-400 via-tertiary-400 to-secondary-400;
}
</style>