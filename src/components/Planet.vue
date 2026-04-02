<script setup>
import {useRoute} from 'vue-router';
import planets from '../data/data.json';
import { computed, ref } from 'vue'
const route = useRoute();
const view = ref('planet')
const planetName = route.params.planet
const planet = computed(() =>
  planets.find(p => p.name.toLowerCase() === route.params.planet)
) 
const colors = {
    mercury: '#419EBB',
    venus: '#EDA249',
    earth: '#6D2ED5',
    mars: '#D14C32',
    jupiter: '#D83A34',
    saturn: '#B87D43',
    uranus: '#1EC1A2',
    neptune: '#2D68F0'
}
</script>

<template>
    <main v-if="planet" id="planet">
        <div id="buttons-mobile">
            <button class="font-leagueSpartan text-white width-full flex gap-6 letter-spacing text-xxs" @click="view = 'planet'" :style="view === 'planet' ? { borderBottom: `2px solid ${colors[planet.name.toLowerCase()]}` } : {}">OVERVIEW</button>
            <button class="font-leagueSpartan text-white width-full flex gap-6 letter-spacing text-xxs" @click="view = 'internal'" :style="view === 'internal' ? { borderBottom: `2px solid ${colors[planet.name.toLowerCase()]}` } : {}">STRUCTURE</button>
            <button class="font-leagueSpartan text-white width-full flex gap-6 letter-spacing text-xxs" @click="view = 'geology'" :style="view === 'geology' ? { borderBottom: `2px solid ${colors[planet.name.toLowerCase()]}` } : {}">SURFACE</button>
        </div>
        <div id="planet-container" class="flex flex-col items-center gap-20 md:flex-row width-100 ">
            <div id="planet-image">
                <img :src="planet.images[view]" :alt="planet.name">
            </div>
            <div id="planet-main" class="flex flex-col gap-5 max-w-xs">
                <div class="flex flex-col gap-5" id="planet-info">
                <h2 class="text-white font-antonio text-7xl uppercase">
                    {{ planet.name }}
                </h2>
                <p class="text-white font-leagueSpartan text-sm leading-6 ">
                    {{ view === 'planet' ? planet.overview.content : view === 'internal' ? planet.structure.content : planet.geology.content}}
                </p>
                
                <p class="text-white/70 font-leagueSpartan text-sm leading-6 text-justify font-thin ">
                    Source: <a :href="view === 'planet' ? planet.overview.source : view === 'internal' ? planet.structure.source : planet.geology.source" class="underline text-gray-500 font-leagueSpartan font-semibold text-justify" target="_blank">Wikipedia</a>
                    <img src="/assets/icon-source.svg" alt="source icon" class="inline-block ml-2 w-3 h-3">
                </p>
                </div>
                <div id="buttons-normal" class="flex flex-col gap-5">
                <button class="font-leagueSpartan text-white width-full flex gap-6 letter-spacing font-semibold" @click="view = 'planet'" :style="view === 'planet' ? { backgroundColor: colors[planet.name.toLowerCase()] } : {}"><span class="text-white/60">01</span>OVERVIEW</button>
                <button class="font-leagueSpartan text-white width-full flex gap-6 letter-spacing font-semibold" @click="view = 'internal'" :style="view === 'internal' ? { backgroundColor: colors[planet.name.toLowerCase()] } : {}"><span class="text-white/60">02</span>INTERNAL STRUCTURE</button>
                <button class="font-leagueSpartan text-white width-full flex gap-6 letter-spacing font-semibold" @click="view = 'geology'" :style="view === 'geology' ? { backgroundColor: colors[planet.name.toLowerCase()] } : {}"><span class="text-white/60">03</span>SURFACE GEOLOGY</button>
                </div>
            </div>
        </div>
        <div id="planet-stats" class="flex flex-col gap-6 md:flex-row justify-between mt-20">
            <div class="flex flex-col gap-2 p-5 text-start" >
                <h3 class="text-white/70 font-leagueSpartan text-xs uppercase">rotation time</h3>
                <p class="text-white font-antonio text-3xl uppercase">{{ planet.rotation }}</p>
            </div>
            <div class="flex flex-col gap-2 p-5 text-start">
                <h3 class="text-white/70 font-leagueSpartan text-xs uppercase">revolution time</h3>
                <p class="text-white font-antonio text-3xl uppercase">{{ planet.revolution }}</p>
            </div>
            <div class="flex flex-col gap-2 p-5 text-start">
                <h3 class="text-white/70 font-leagueSpartan text-xs uppercase">radius</h3>
                <p class="text-white font-antonio text-3xl uppercase">{{ planet.radius }}</p>
            </div>
            <div class="flex flex-col gap-2 p-5 text-start">
                <h3 class="text-white/70 font-leagueSpartan text-xs uppercase">average temp.</h3>
                <p class="text-white font-antonio text-3xl uppercase">{{ planet.temperature }}</p>
            </div>
        </div>
    </main>
</template>