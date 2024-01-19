<script setup lang="ts">
// TODO bilder einfügen
</script>

<template>
  <main>
    <article id="main">
      <h1>Farben und Kontraste</h1>
      <section>
        <h2>Allgemein</h2>
        <p>
          Für Menschen mit Sehbeeinträchtigungen oder Farbenblindheit ist es
          besonders wichtig, dass auf Webseiten darauf geachtet wird, dass alle
          Texte und Elemente gut erkennbar und unterscheidbar sind. Die WCAG
          bietet hierfür die notwendigen Richtlinien, welche in den folgenden
          Absätzen jeweils durch ein Negativ Beispiel sowie eine Variante nach
          WCAG AA und WCAG AAA veranschaulicht werden.
        </p>
      </section>
      <section>
        <h2>Kontraste</h2>
        <ul>
          <li>
            <h3>Text, Bilder von Text, Icons</h3>
            <img
              src="../../content/Farbe1.png"
              alt="Zwei mal Text, einer mit hohem Kontrast und einer mit niedrigem"
            />

            <p><strong>AA: </strong> 4,5:1</p>
            <p><strong>AAA: </strong> 7:1</p>
            <p>
              Hierzu Zählen alle Arten von Fließtext, ob als Textelement oder
              Bild und Icons
            </p>
          </li>
          <li>
            <h3>UI Elemente, Grafiken, Großer Text</h3>
            <img
              src="../../content/Farbe2.png"
              alt="2 Buttons mit unterschiedlich ausgeprägtem Kontrast, jeweils ein positiv und ein negativ Beispiel"
            />

            <p><strong>AA: </strong> 4,5:1</p>
            <p><strong>AAA: </strong> 7:1</p>
            <p>
              Hierzu zählt Text ab 18,5px in bold oder ab 24px in regular,
              Aktive UI-Elemente und Infografiken
            </p>
          </li>
        </ul>
      </section>
      <section id="section3">
        <h2>Farben</h2>
        <img
          src="../../content/Farbe3.png"
          alt="Abb1: Schlechter Farbkontrast, es werden sehr Ähnliche Grüntöne benutzt. Abb2: Es werden Farben benutzt die sich in der Sättigung stärker unterscheiden"
        />
        <img src="../../content/Farbe4.png" alt="" />
        <p>
          Bei Farben ist es wichtig, dass sie auch für Menschen mit einer
          Farbenblindheit unterscheidbar sind. Das heißt dass ZB Grün und
          Rottöne trotz der Farbenblindheitblindheit unterscheidbar sind.
        </p>
      </section>
    </article>
  </main>
</template>

<style scoped>
main {
  position: absolute;
  top: 100px;
  display: flex;
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
  margin-bottom: 30px;
}

ul {
  padding: 0;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
}

img {
  border-radius: 10px;
  border: 2px solid #101010;
  width: 700px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
