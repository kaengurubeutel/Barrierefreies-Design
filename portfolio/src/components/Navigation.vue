<script setup lang="ts">
import { useRouter } from 'vue-router';


import { ref, onMounted } from 'vue'

onMounted(() => {
    console.log(`the component is now mounted.`)
})

let currantRoute = ref("");
const route = useRouter()
currantRoute.value = route.currentRoute.value.name;
console.log(currantRoute.value)

let canGoBack = true; //ToDo realtime
let gotoHome = () => {
    route.push("/");
} 
</script>

<template>
    <nav>
        <menu>
            <button @click="gotoHome" v-if="canGoBack" aria-label="backbutton" id="backbutton">
                <img height="45px" src="../../content/back.svg" alt="backbutton">
            </button>    
        <button @click="$router.push('/themen')" id="menubutton">themen</button>
        </menu>
    </nav>
</template>


<style scoped>
#backbutton {
    margin:0;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
}

#backbutton:hover {
    background: #2E82FF;
    border-radius: 23px;
}

#backbutton:focus {
    background: #2E82FF;
    border-radius: 23px;
}

#menubutton {
    color: #FCFCFC;
    font-style: normal;
    font-weight: 800;
    line-height: 128.607%;
    /* 30.866px */
    padding: 10px 20px 10px 20px;
    border-radius: 40px;
    border: 3px solid #101010;
    background: #000;

}

#menubutton:hover {
    background-color: #2E82FF;
    color: #101010
}

#menubutton:focus {
    background-color: #2E82FF;
    color: #101010
}

h1 {
    margin: 0;
    padding: 0;
}

nav {
    position:absolute;
    z-index:100;
    top:0;
    width:100vw;
    height:150px;
  
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
   
    padding-top: 30px;
    height: 20px;

}

menu {
    width:90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:0;
    padding:0;

}
</style>
