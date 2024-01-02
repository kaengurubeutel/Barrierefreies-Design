<script setup lang="ts">

</script>

<template>
  <main>
    <h1>Semantisches HTML</h1>
    <article>
        <section>
            <h2>Allgemein</h2>
            <p>Seit HTML5 gibt es neue Semantische Tags, die in der Struktur von Html Seiten benutzt werden sollten. So können durch die Benennung von Tags, Informationen an z.B.: Screenreader geschickt werden, die bei dem Auslesen der Seite durch eine besser erkennbare Struktur helfen.</p>
        </section>
        <section>
            <h2>
                Accessibility Object Model(AOM)
            </h2>
            <p>
                Wenn der Browser das HTML-Element empfängt, erstellt er ein Document Object Model und ein CSS-Objektmodell um die übertragenen Informationen zu rendern. Beim Verwenden von Semantic-tags wird die Erstellung eines AOM erleichtert, da jedes Element, statt mit divs und spans, so benannt wird, dass sie für einen Mensch, der nicht Programmieren kann, verständlich sind. Dieses AOM wird dann dafür verwendet, dass Screenreader immer eine Information darüber mitgeben in welchem Abschnitt man sich befindet.
            </p>
        </section>
        <section>
            <h2>Beispiele</h2>
            <p>
                Hier sieht man den Unterschied zwischen einem DOM in dem ausschließlich Divs und Spans verwendet wurden und einem DOM in dem Semantic HTML verwendet wurde.
            </p>

            <p>
                Es gibt spezielle Namen für Sektionen und Elemente wie z.B.:
            </p>

            <ul>
                <li><p>&lt;nav&gt; für die Navigationsleiste</p></li>
                <li><p>&lt;header&gt; für die Oberste Leiste der Webseite</p></li>
                <li><p>&lt;footer&gt; für die unterste Leiste der Webseite</p></li>
                <li><p>&lt;main&gt; für den Hauptteil der Seite</p></li>
                <li><p>&lt;article&gt; z.B. für einen Zeitungsartikel</p></li>
                <li><p>&lt;section&gt; für allgemeine Abschnitte auf der Webseite</p></li>
                <li><p>&lt;aside&gt; für nebensächliche Abschnitte</p></li>
                <li><p>&lt;ol&gt;, &lt;ul&gt; für geordnete und ungeordnete Listen</p></li>
            </ul>
        </section>
    </article>
  </main>
</template>

<style>

</style>