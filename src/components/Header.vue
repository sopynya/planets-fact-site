<script setup>
import { ref } from 'vue'
import {useRoute} from 'vue-router';
const route = useRoute();
const isOpen = ref(false)
</script>

<template>
    <header id="header" class="flex items-center justify-between">
        <h1 class="text-white font-antonio text-2xl md:text-3xl">The Planets</h1>
        <nav id="global-nav" class="flex items-center gap-7 font-medium text-sm">
            <router-link :to="'/mercury'" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#419EBB]">
                Mercury
            </router-link>
            <router-link :to="'/venus'" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#EDA249]">
                Venus
            </router-link>
            <router-link :to="'/earth'" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#6D2ED5]">
                Earth
            </router-link>
            <router-link :to="'/mars'" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#D14C32]">
                Mars
            </router-link>
            <router-link :to="'/jupiter'" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#D83A34]">
                Jupiter
            </router-link>
            <router-link :to="'/saturn'" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#B87D43]">
                Saturn
            </router-link>
            <router-link :to="'/uranus'" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#1EC1A2]">
                Uranus
            </router-link>
            <router-link :to="'/neptune'" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#2D68F0]">
                Neptune
            </router-link>
        </nav>
        <div id="hamburguer" class="md:hidden">
            <button @click="isOpen = !isOpen">
                <img :class="{active: isOpen}" src="/assets/icon-hamburger.svg" alt="hamburger menu icon">
            </button>
            <nav v-if="isOpen" id="mobile-nav" class="absolute top-11 right-0 bg-[#070724] h-auto p-5 rounded-lg flex flex-col gap-4">
                <router-link :to="'/mercury'" @click="isOpen = false" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#419EBB]">
                <p><span :style="{backgroundColor: '#419EBB'}" class="w-2 h-2 rounded-full inline-block"></span>Mercury</p>
                <img src="/assets/icon-chevron.svg" alt="chevron icon" class="inline-block ml-2 w-2 h-2">
            </router-link>
            <router-link :to="'/venus'" @click="isOpen = false" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#EDA249]">
                <p><span :style="{backgroundColor: '#EDA249'}" class="w-2 h-2 rounded-full inline-block"></span>Venus</p>
                <img src="/assets/icon-chevron.svg" alt="chevron icon" class="inline-block ml-2 w-2 h-2">
            </router-link>
            <router-link :to="'/earth'" @click="isOpen = false" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#6D2ED5]">
                <p><span :style="{backgroundColor: '#6D2ED5'}" class="w-2 h-2 rounded-full inline-block"></span>Earth</p>
                <img src="/assets/icon-chevron.svg" alt="chevron icon" class="inline-block ml-2 w-2 h-2">
            </router-link>
            <router-link :to="'/mars'" @click="isOpen = false" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#D14C32]">
                <p><span :style="{backgroundColor: '#D14C32'}" class="w-2 h-2 rounded-full inline-block"></span>Mars</p>
                <img src="/assets/icon-chevron.svg" alt="chevron icon" class="inline-block ml-2 w-2 h-2">
            </router-link>
            <router-link :to="'/jupiter'" @click="isOpen = false" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#D83A34]">
                <p><span :style="{backgroundColor: '#D83A34'}" class="w-2 h-2 rounded-full inline-block"></span>Jupiter</p>
                <img src="/assets/icon-chevron.svg" alt="chevron icon" class="inline-block ml-2 w-2 h-2">
            </router-link>
            <router-link :to="'/saturn'" @click="isOpen = false" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#B87D43]">
                <p><span :style="{backgroundColor: '#B87D43'}" class="w-2 h-2 rounded-full inline-block"></span>Saturn</p>
                <img src="/assets/icon-chevron.svg" alt="chevron icon" class="inline-block ml-2 w-2 h-2">
            </router-link>
            <router-link :to="'/uranus'" @click="isOpen = false" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#1EC1A2]">
                <p><span :style="{backgroundColor: '#1EC1A2'}" class="w-2 h-2 rounded-full inline-block"></span>Uranus</p>
                <img src="/assets/icon-chevron.svg" alt="chevron icon" class="inline-block ml-2 w-2 h-2">
            </router-link>
            <router-link :to="'/neptune'" @click="isOpen = false" class="text-white uppercase tracking-widest font-leagueSpartan border-t-2 border-transparent hover:border-t-2 hover:border-[#2D68F0]">
                <p><span :style="{backgroundColor: '#2D68F0'}" class="w-2 h-2 rounded-full inline-block"></span>Neptune</p>
                <img src="/assets/icon-chevron.svg" alt="chevron icon" class="inline-block ml-2 w-2 h-2">
                
            </router-link>
            </nav>
        </div>
    </header>
</template>