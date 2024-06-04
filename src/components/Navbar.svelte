<script>
 let isOpen = false;

 import { onMount } from 'svelte';

 onMount(async () => {
     console.log("bruh");
 });
</script>

<nav class="p-4">
    <div class="container mx-auto flex justify-between items-center">
        <div class="sm:hidden">
            <button
                class="text-white focus:outline-none"
                on:click={() => {
                         isOpen = !isOpen;
                         console.log("now: " + isOpen);
                         }} >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
        <div class="sm:flex max-sm:hidden items-center space-x-6">
            <div class="flex flex-col sm:flex-row sm:text-lg">
                <a href="/" class="text-white py-2 sm:py-0 sm:px-4">About</a>
                <a href="/projects" class="text-white py-2 sm:py-0 sm:px-4">Projects</a>
                <a href="/connect" class="text-white py-2 sm:py-0 sm:px-4">Connect</a>
                <a href="/blog" class="text-white py-2 sm:py-0 sm:px-4">Blog</a>
            </div>
        </div>

        {#if isOpen}
        <div class="sm:hidden">
            <div class="flex flex-col">
                <a href="/" class="text-white py-2 sm:py-0 sm:px-4">About</a>
                <a href="/projects" class="text-white py-2 sm:py-0 sm:px-4">Projects</a>
                <a href="/connect" class="text-white py-2 sm:py-0 sm:px-4">Connect</a>
                <a href="/blog" class="text-white py-2 sm:py-0 sm:px-4">Blog</a>
            </div>
        </div>
        {/if}
    </div>
</nav>
