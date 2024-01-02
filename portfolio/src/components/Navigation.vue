<script setup lang="ts">
import { useRouter } from 'vue-router';
import {watch, ref} from 'vue';
const route = useRouter()
const curRoute = ref(route.currentRoute);
const checkHome = ref(true);
const checkThemen = ref(false);

watch(curRoute, () => {
    console.log(route.currentRoute.value.name)
    if(route.currentRoute.value.name == "home"){
        checkHome.value=true;
        checkThemen.value = false;
    } else if(route.currentRoute.value.name == "themen"){
        checkThemen.value = true;
        checkHome.value = false;
    } else {
        checkHome.value = false;
        checkThemen.value = false;
    }
})


let gotoHome = () => {
    route.push("/");
} 
</script>

<template>
    <nav>
        <menu>
            <button v-if="!checkThemen" @click="$router.push('/themen')" id="menubutton">themen</button>
            <button @click="gotoHome" v-if="!checkHome" aria-label="homebutton" id="homebutton">
                <img height="45px" src="../../content/back.svg" alt="homebutton">
            </button>    
        
        </menu>
    </nav>
</template>


<style scoped>
#homebutton {
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

#homebutton:hover {
    background: #2E82FF;
    border-radius: 23px;
}

#homebutton:focus-visible {
    background: #2E82FF;
    border-radius: 23px;
}

#menubutton {
    color: #FCFCFC;
    position:absolute;
    right: 5vw;
    top: 14px;
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

#menubutton:focus-visible {
    background-color: #2E82FF;
    color: #101010
}

h1 {
    margin: 0;
    padding: 0;
}

nav {
    background-color: #f5f5f5;
    position:absolute;
    z-index:100;
    top:0;
    width:100vw;
    height:70px;
  
    display: flex;
    
    justify-content: center;
    align-items: center;
   
    
  

}

menu {
    width:90vw;
    
    margin:0;
    padding:0;

}
</style>
