<script>
    export let data;
    const { user } = data;
    const name = user.user.name;
   const choice = user.user.choice;
    const projects = [
        {title: "Moon Bay", description: "web3 nft app built with next.js"},
        {title: "Berry Widgets", description: "Simple e-commerce solution"},
        {title: "Moon Masters", description: "NFT project website"},
        {title: "Berry Cryptos", description: "Paid membership site"},
    ];
</script>

<ol class="breadcrumb flex justify-center">
    <li class="crumb"><a href="/">Home</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a href="/">About me</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a href="/">Skills</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><a href="/">Projects</a></li>
</ol>

<div class="h-screen flex justify-center items-start text-center py-10">
    <div>
    <h1>Welcome <span class="gradient-heading">{name}</span>, nice to meet you!</h1>
    <h1>I see you chose to eat the <span class="gradient-heading">{choice}</span> lol</h1>
    <div class="card w-80 m-auto mt-10">
    <img class="rounded-lg w-full" width="200" height="200" alt="Andrew" src="/andrew2.jpeg" />
    <h2>About Me</h2>
    <p>......BLAH BLAH BLAH BLAH BLAH</p>
</div>
</div>
</div>
<h1 class="gradient-heading py-2 text-center">Check out my Projects {name}!</h1>
<div class="text-center flex justify-center h-screen">
    <ul class="w-full lg:w-1/4">
        {#each projects as project }
            <li class="card variant-filled-primary p-4 py-5 mt-2">
                <h2 class="card-header">{project.title}</h2>
                <p>{project.description}</p>
            </li>
        {/each}
    </ul>
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