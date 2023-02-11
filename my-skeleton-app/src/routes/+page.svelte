<script lang="ts">
export let form: any;
console.log(form);
    </script>
    
    
    <div class="h-screen flex justify-center items-center">
    <div class="text-center">
    <h2>Hello, my name is Andrew. What's your name?</h2>
    <div class="flex justify-center items-center">
    <form class="mt-2 text-center w-56" method="POST" action="?/enter">
        <label class="label">
            {#if form?.errors.name}
            <span class="text-sm text-red-600 font-bold">{form?.errors.name[0]}</span>
            {/if}
    <input name="name" class="input variant-form-material w-56" />
        </label>
    <label class="label">
        <span class="text-2xl font-bold">Choose a food..</span>
    <select name="choice" class="select variant-form-material">
        <option value="hotdog">hotdog</option>
        <option value="hamburger">hamburger</option>
    </select>
    </label>
    <button class="mt-2 btn variant-filled-tertiary">Submit</button>
    </form>
    </div>
    </div>
    </div>