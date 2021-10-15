<template>
    <header class="flex justify-between bg-white py-6 px-6">
        <router-link :to="{ name: 'Home' }">
            <p class="font-serif font-normal md:font-bold m-2 text-4xl">
                Neiloe
            </p>
        </router-link>

        <nav class="flex flex-row items-center space-x-6 font-semibold">
            <router-link class="hover:underline" :to="{ name: 'Home' }"
                >Accueil</router-link
            >

            <router-link class="hover:underline" :to="{ name: 'About' }"
                >Concept</router-link
            >

            <router-link class="hover:underline" :to="{ name: 'Contact' }"
                >Contact</router-link
            >
        </nav>
    </header>
</template>