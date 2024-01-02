<script setup lang="ts">

</script>

<template>
  <main>
    <h1>Alternativtexte</h1>
    <article>
        <section>
            <h2>Allgemein</h2>
            <p>Alternativtexte sind bei Bildern dafür da, dass auch Menschen, die nicht sehen können, wissen welche Informationen in einem Bild stecken. Bei Bildern unterscheidet man zwischen fünf Arten von Bildern, zu denen dieser Artikel jeweils ein Beispiel zeigt. </p>
        </section>
        <section>
            <h2>Informative Bilder</h2>
            <ul>
                <li>Enthalten zusätzliche Informationen zum Text und sind deshalb wichtig zum Verständnis</li>
                <li>Bildinhalt wird im Alt Text beschrieben</li>
            </ul>
            <img src="../../content/Alttext1.jpg" alt="Der neue DIY Synthesizer mit 2 Oktaven, 18 Drumpads und zusätzlichen Einstellungsmöglichkeiten"/>
            <p>Image by <a href="https://pixabay.com/users/resampled-9479920/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8227845">Anat Zhukoff</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8227845">Pixabay</a></p>
            <p>Alttext: Der neue DIY Synthesizer mit 2 Oktaven, 18 Drumpads und zusätzlichen Einstellungsmöglichkeiten</p>
        
        </section>
        <section>
            <h2>Informationsgrafik</h2>
            <img src="" alt=""/>
            <p></p>
        </section>
        <section>
            <h2>Dekorative Bilder</h2>
            <img id="blindPic" class="pic" width="600px" height="auto" alt="" src="../../content/blinder_blob.svg">
            <p>Bei diesen  Bildern wird der Alttext leer gelassen, weil sie keinen Inhalt tragen und nicht vom Rest der Seite ablenken sollen. Jedoch muss der alt tag vergeben werden, damit nicht der Dateiname vorgelesen wird.</p>
        </section>
        <section>
            <h2>Funktionale Bilder </h2>
            <p> Diese Bilder stehen für eine Funktion. In diesem Fall das Homeicon der Webseite. Bei diesen Bildern steht die Funktion des Bildes im alt tag. 
                Hier also „Startseite von Barrierefreies Design“
            </p>
        </section>
        <section>
            <h2>Schriftgrafiken</h2>
            <p>Schriftgrafiken sind Bilder, in denen sich Text befindet. Im alt tag wird dann die Schrift aus dem Bild angegeben oder auf einen Text außerhalb des Bildes verwiesen.</p>
        </section>
    </article>
    
    
</main>
</template>

<style>

</style>