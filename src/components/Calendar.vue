<template>
    <div class="flex justify-center items-center m-8">
        <div
            id="calendar"
            class="flex flex-col items-center border-black border-2"
        >
            <p class="font-bold p-4">Vendredi 15 octobre 2021</p>
            <div
                id="month"
                class="p-6 w-full flex flex-row items-center justify-between"
            >
                <svg
                    class="w-6 h-6 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    ></path>
                </svg>
                <div
                    id="date"
                    class="flex flex-col items-center justify-center"
                >
                    <h1 class="font-bold">Octobre</h1>
                </div>
                <svg
                    class="w-6 h-6 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    ></path>
                </svg>
            </div>
            <div id="days" class="flex justify-between items-center space-x-7">
                <div>L</div>
                <div>M</div>
                <div>M</div>
                <div>J</div>
                <div>V</div>
                <div>S</div>
                <div>D</div>
            </div>
            <div id="numbers">
                
            </div>
        </div>
    </div>
</template>