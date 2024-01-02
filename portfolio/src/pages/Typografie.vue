<script setup lang="ts">

</script>

<template>
  <main>
    
    <article>
      <h1>Typografie</h1>
        <section>
            <h2>Allgemein</h2>
            <p>Typografie ist wichtig, damit Informationen für alle Menschen leicht verständlich sind. Besonders für Menschen mit verschiedenen Bedürfnissen ist es wichtig, dass Texte gut lesbar sind. Wenn man die Schriftart und -größe richtig wählt, können Texte nicht nur schön aussehen, sondern auch für alle leichter zu verstehen sein. Das hilft, dass Informationen für jeden zugänglich sind, unabhängig von ihren individuellen Voraussetzungen. Auf Webseiten werden verschiedene Textarten verwendet, die neben allgemeinen Informationen zur Schriftwahl in den folgenden Artikeln erklärt werden.</p>
        </section>
        <section>
            <h2>Textarten</h2>
            <h3>Fließtext</h3>
            <p>Fließtext ist der Haupttextkörper in der Gestaltung von Print- und Digitalmedien. Hier werden alle Informationen detailliert dargestellt und deshalb ist es bei diesen Textblöcken besonders wichtig, dass darauf geachtet wird, dass der Text besonders leicht und flüssig zu lesen ist. </p>
            <h3>Konsulationstext</h3>
            <p>Hierbei handelt es sich um ergänzenden Text, der neben dem Fließtext steht und diesen ergänzt. Das können Fußnoten und Querverweiße sein, im Digitalbereich aber auch weiterführende Links.</p>
            <h3>Schautext</h3>
            <p>Schautext ist mehr Graphisches Element als unbedingt ein besonders Inhaltstragendendes Element. Er ist deutlich größer und ausgefallener als der Fließtext, weil die Hauptaufgabe dieses Elements ist, Aufmerksamkeit zu erregen. Da er nicht dazu gedacht ist große Mengen an Informationen zu tragen, gibt es auch weniger Regeln dazu, wie er angeordnet und gestaltet sein muss.</p>
            <h3>Signalisationstext</h3>
            <p>Signalisationstext ist eine Art von Text, der vor allem auf Warn- oder Verkehrsschildern benutzt wird. Da es wichtig ist, dass jeder Mensch ihn sofort erkennen kann, ist er an besonders strenge Regeln gebunden. </p>
        </section>
        <section>
          <h2>Auswahl der Schrift</h2>
          <p>Viele Schriften wurden nicht dafür gestaltet, möglichst barrierefrei zu sein. Deshalb haben Menschen mit verschiedenen Bedürfnissen oft Probleme damit, bestimmte Buchstaben zu erkennen oder zu unterscheiden. Folgende erkennungsmerkmale an einer Schrift können dabei helfen, dass alle dem Text auf einer Webseite besser folgen können.</p>
          <h3>Offene Buchstaben</h3>
          <img src="../../content/Typo1.jpg" alt="Vergleich zwischen Buchstaben mit weiter und enger Öffnung"/>
          <p>Einige Schriftarten, insbesondere geometrische Schriften haben recht kleine Öffnungen zwischen ihren Bögen, vor allem kleinen c und am kleinen e. Dadurch können sie schwer erkennbar sein weshalb man darauf achten sollte, eine Schrift mit Offenen Buchstaben zu benutzen.</p>
          <h3>Imposter</h3>
          <img src="../../content/Typo2.jpg" alt="Vergleich der Unterscheidbarkeit von Impostor Buchtstaben"/>
          <p>Imposter ist das englische Wort für Hochstabler. Ein Buchstabe gibt sich also als ein anderer aus. Das bedeutet, dass das I und das l sehr ähnlich aussehen können, bei einer Barrierefreien Schrift sind diese Buchstaben aber klar unterscheidbar.</p>
          <h3>Spiegelungen</h3>
          <img src="../../content/Typo3.jpg" alt="Vergleich der Unterscheidbarkeit von gespiegelten Buchstaben"/>
          <p>Da das B und das D in ihrer kleinen Schreibweise gespiegelt sind tuen sich Legastheniker besonders schwer diese Buchstaben zu unterscheiden. Man kann ihnen dabei helfen, indem man eine Schrift auswählt, in der diese Buchstaben klar voneinander unterscheidbar sind.</p>
        </section>
        <section>
          <h2>Allgemeine Regeln für den Schriftsatz</h2>
          <ul>
            <li><p>Kleine Schriften sind schwer zu erkennen, deshalb ist es wichtig, dass man, ausgehend von der Schrittgröße 16px nicht kleiner als 13px werden sollte.</p></li>
            <li><p>Überschriften sollten aber auch nicht zu groß werden. 26 Pixel ist hier das Maximum</p></li>
            <li><p>Bei hellem Text auf dunklem Hintergrund sollte der Text um ein Zehntel größer gemacht werden.</p></li>
            <li><p>Bei hellem Text auf dunklem Hintergrund sollte der Text um ein Zehntel größer gemacht werden.</p></li>
            <li><p>Für Menschen, die schlecht sehen können sollte der Text 1,4- bis 1,75-mal größer sein.</p></li>
            <li><p>Der Zeichenabstand sollte ein Drittel von der Höhe des kleinen x betragen</p></li>
            <li><p>Die Schriftweite sollte weder condensed noch breit sein.</p></li>
            <li><p>Strichstärken sollten normal oder ¾ Fett sein</p></li>
            <li><p>Fließtext sollte höchstens 700-900px breit sein.</p></li>
            <li><p>Font-size sollte immer in em, rem oder % angegeben werden damit der Text einfach zu skalieren ist</p></li>
          </ul>
        </section>
    </article>
  </main>
</template>

<style scoped>
  main{
        position:absolute;
        top:100px;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100vw;
        
    }

    p {
        width: 700px;
        margin-top: 10px;
        margin-bottom: 10px;
        
    }

    h2 {
        margin-top: 30px;
        margin-bottom: 10px;
    }

    h3 {
        margin-top: 20px;
    }

    ul {
        padding:0;
        margin:0;
        margin-top: 10px;
        margin-bottom:20px;
        
    }

    img {
        border-radius: 10px;
        border: 2px solid #101010;
    }
</style>