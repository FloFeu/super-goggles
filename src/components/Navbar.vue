<template>
    <header
        class="
            flex flex-wrap flex-row
            justify-between
            items-center
            md:space-x-4
            bg-purple-500
            py-6
            px-6
        "
    >
        <router-link :to="{ name: 'Home' }">
            <p class="font-serif font-normal md:font-bold m-2 text-4xl">
                Neiloe
            </p>
        </router-link>

        <button
            class="inline-block md:hidden w-8 h-8 bg-transparent p-1"
            @click="isOpened = !isOpened"
        >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
        </button>
        <nav
            :class="{ flex: isOpened, hidden: !isOpened }"
            class="
                md:flex
                absolute
                md:relative
                top-16
                md:top-0
                left-0
                z-20
                flex flex-col
                md:flex-row
                md:space-x-6
                w-full
                md:w-auto
                bg-white
                shadow-md
                md:shadow-none
                rounded-lg
                md:rounded-none
                md:bg-transparent
                font-semibold
                items-center
                p-6
                md:p-0
                mt-2
                md:mt-0
            "
        >
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

<script>
export default {
    data() {
        return {
            isOpened: false,
        }
    },
}
</script>