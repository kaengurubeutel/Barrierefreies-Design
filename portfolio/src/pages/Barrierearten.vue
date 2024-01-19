<script setup lang="ts">

</script>

<template>
    <main>
        
        <article id="main">
            <h1>Barrierearten</h1>
            <section>
                <h2>Allgemein</h2>
                <p>In Deutschland leben nach dem <a href="https://de.statista.com/themen/261/behinderung/">Statistischen Bundesamt</a> mindestens 9,4% der Bevölkerung mit einer
                    schweren Behinderung. 30% der Bevölkerung sind aus unterschiedlichen Gründen auf Barrierefreies Design
                    angewiesen. Glücklicherweise wächst das Bewusstsein dafür immer weiter, mögliche Beeinträchtigungen in
                    der Gestaltung von Interfaces zu berücksichtigen.
                    Dieser Artikel soll eine Übersicht über die Barrieren bieten, die aus den verschiedenen Arten von
                    Behinderungen resultieren können.
                </p>
            </section>
            <section>
                <h2>Visuelle Barrieren</h2>
                <p>Die Visuelle Kommunikation ist der wichtigste Bestandteil eines Interfaces.
                    Umso schwieriger ist die Bedienung deshalb für Menschen, die im Sehen graduell oder komplett
                    eingeschränkt sind.
                    Hierbei können verschiedene Grade der Seheinschränkung auftreten, die im Design berücksichtigt werden
                    müssen:
                </p>
                <ul>
                    <li>
                        <h3>Vollständige Sehbehinderung</h3>
                        <p>Für Menschen, die komplett Blind sind muss eine Ersatzmöglichkeit geboten werden, mit dem
                            Interface zu interagieren. Hierfür ist es wichtig, dass Screenreader alle notwendigen
                            Informationen über die vorhandenen UI-Elemente erhalten und flüssig navigieren können.</p>
                    </li>
                    <li>
                        <h3>Graduelle Sehbehinderung </h3>
                        <p>Durch Farbenblindheit oder Fehlsichtigkeit kann die Unterscheidung oder Wahrnehmung von
                            UI-Elementen beeinträchtigt sein. Für diesen Fall ist es wichtig, bei der Auswahl von Farben,
                            Schrift und Liniendicke darauf zu achten, dass diese auch bei einer eingeschränkten Sicht
                            unterscheidbar und lesbar sind. </p>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Auditive Barrieren</h2>
                <p>Neben der Visuellen Einschränkung gibt es auch Auditive Einschränkungen, die das Hören beeinträchtigen.
                    Gerade bei Videos oder Audiocontent ist es deshalb wichtig, dass es ein Audioskript gibt, dass
                    unterstützend oder als Ersatz funktionieren kann.
                    Ebenfalls sollte nie ausschließlich Audiofeedback für Aktionen verwendet werden.
                </p>
            </section>

            <section>
                <h2>Motorische Barrieren</h2>
                <p>Motorische Barrieren können durch Verletzungen oder Erkrankungen entstehen und die Interaktion mit dem UI
                    erschweren. Hierbei soll darauf geachtet werden, dass alle Elemente über die Tabtaste benutzt werden
                    können und dass immer genug Zeit vorhanden ist eine Aktion auszuführen, dies erleichtert ebenfalls die
                    Bedienung mittels Screenreader.</p>
            </section>
            <section>
                <h2>Kognitive Barrieren</h2>
                <p>Auf dem Bereich der Kognitiven Barrieren gibt es ebenfalls unterschiedlichste Ausprägungen und Arten der
                    Beeinträchtigung. Menschen können durch Leseschwächen, Aufmerksamkeitsstörungen und Neurodivergenz
                    abgelenkt oder gestört werden. Hierbei ist es wichtig diese Störfaktoren in Animationen, Text und
                    Komposition der Seite zu vermeiden. </p>
                </section>
            <section>
                <h2>Psychische Barrieren</h2>
                <p>Neben den Kognitiven Barrieren gibt es ebenfalls Psychische Erkrankungen, welche berücksichtigt werden
                    müssen. Menschen mit diesen Erkrankungen können durch bestimmte Inhalte getriggert werden und sollten
                    davor mit Hilfe von Contentwarungen geschützt werden.</p>
                </section>

            <section>
                <h2>Soziale Barrieren</h2>
                <p>Nicht jeder Mensch ist mit der Bedienung von Digitalen Interfaces aufgewachsen und kennt deshalb
                    bestimmte Bedienmöglichkeiten nicht, welche Jüngere Menschen autodidaktisch erlernt haben. Deshalb
                    sollte nicht davon ausgegangen werden, dass komplexere Bedienmechanismen bereits bekannt sind. </p>
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