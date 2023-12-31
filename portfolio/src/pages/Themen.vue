<script setup lang="ts">
</script>

<template>
    <main>
        <menu>
            <li><button @click="$router.push('/barrierearten')" class="menuitem"><h2>Barrierearten</h2></button></li>
            <li><button @click="$router.push('/gesetzlich')" class="menuitem"><h2>Gesetzlich</h2></button></li>
            <li><button @click="$router.push('/farben')" class="menuitem"><h2>Farben</h2></button></li>
            <li><button @click="$router.push('/semantischesHtml')" class="menuitem"><h2>Semantisches HTML</h2></button></li>
            <li><button @click="$router.push('/aria')" class="menuitem"><h2>ARIA</h2></button></li>
            <li><button @click="$router.push('/typografie')" class="menuitem"><h2>Typografie</h2></button></li>
            <li><button @click="$router.push('/formulare')" class="menuitem"><h2>Formulare</h2></button></li>
            <li><button @click="$router.push('/alternativtexte')" class="menuitem"><h2>Alternativtexte</h2></button></li>
            <li><button @click="$router.push('/sprache')" class="menuitem"><h2>Sprache</h2></button></li>
            <li><button @click="$router.push('/wcaganalyse')" class="menuitem"><h2>WCAG Analyse</h2></button></li>
        </menu>
    </main>
</template>

<style scoped>
main{
    color: #FFF;
font-family: Noto Sans;
font-size: 42px;
font-style: normal;
font-weight: 800;
line-height: 128.607%;
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height: auto;
    background-color: #101010;
}
menu{
    list-style: none;
    padding: 0;
    margin:0;
    margin-top:90px;
}

.menuitem{
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    width:100vw;
    padding-top:15px;
    padding-bottom:15px;
    border: 1px solid #FFF;
    text-align: left;
    color: #fff;
}

.menuitem:hover {
    background: #2E82FF;
}

.menuitem:focus-visible {
    background: #2E82FF;
}

</style>