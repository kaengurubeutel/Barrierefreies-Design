<script setup lang="ts">

</script>

<template>
    <main>
        <article id="main">
            <h1>WCAG Analyse</h1>
            <section>
                <h2>Allgemein</h2>
                <p>In der WCAG Analyse betrachte ich die Seite von dem World Wide Web Consortium (W3C). Der Stand der Seite
                    ist der 28.12.2023. Dabei behandle ich die <a href=" https://www.w3.org/">Startseite</a>
                    die <a href=" https://www.w3.org/groups/wg/">Working Groups Seite</a> und die <a
                        href=" https://www.w3.org/donate/">Spendenseite </a> Diese 3 Links stellen in der angegebenen Ordnung die Stichproben 1-3 dar.
                </p>
                
                <p>Für die Analyse von Farbkontrasten, Textgröße, ARIA und Alt Texten benutze ich das Tool WAVE von der Utah
                    State University als Browser Add-on für Firefox, welches man unter
                    <a href="https://wave.webaim.org/">https://wave.webaim.org/</a> finden kann. Ebenfalls werde ich die
                    Webdevelopertools von Firefox benutzen, um den Accessability Tree zu untersuchen.
                </p>
            </section>
            <section>
                <h2>Prüfschritte WCAG 1.1</h2>
                <p>In den Schritten von Absatz 1 werden die Alttexte von Grafiken auf der Seite überprüft. Diese werden auf
                    allen Unterseiten vorbildlich umgesetzt. </p>
                <div id="galery1" label="imagesection">
                    <div id="galery11" lable="imagesection">
                        <img src="../../content/wcag1.png" width="400px" alt="Screenshot von einem Dekorativen Bild" />
                        <img src="../../content/wcag2.png" width="235px" alt="Screenshot von einem Funktionalen Bild mit entsprechendem Tag" />
                    </div>
                    <img src="../../content/wcag3.png" width="700px" alt="Screenshot von beschrifteten Informativen Bildern" />
                </div>
            </section>
            <section>
                <h2>Prüfschritte WCAG 1.2</h2>
                <p>Zu den Prüfschritten zu Audio und Media Inhalten kann leider nicht allzu viel geschrieben werden, weil
                    auf der Webseite keine Medieninhalte verwendet werden.</p>
            </section>
            <section>
                <h2>Prüfschritte WCAG 1.3</h2>
                <h3>1.3.1 - 1.3.3</h3>
                <ul>
                    <li>
                        <p>Es wird semantisches HTML verwendet</p>
                    </li>
                    <li>
                        <p>Listen befinden sich in UL oder OL Elementen</p>
                    </li>
                    <li>
                        <p>Jede Seite hat immer nur eine H1 Überschrift</p>
                    </li>
                    <li>
                        <p>H2 oder H3 für Elemente die niedriger in der Hierarchie sind</p>
                    </li>
                </ul>
                <p>Stichprobe 1</p>
                <img src="../../content/wcag4.png" alt="Screenshot des Accessibilitytrees" />
                <p>Stichprobe 2</p>
                <img src="../../content/wcag5.png" alt="Screenshot des Accessibilitytrees" />
                <p>Stichprobe 3</p>
                <img src="../../content/wcag6.png" alt="Screenshot des Accessibilitytrees" />
                <h3>1.3.4 - 1.3.6</h3>
                <ul>
                    <li>
                        <p>Die Bildschirmausrichtung lässt sich dank dem responsiven Design problemlos ändern</p>
                    </li>
                    <li>
                        <p>Formulare sind Vorbildlich beschriftet</p>
                    </li>
                </ul>
                <img src="../../content/wcag7.png" alt="Screenshot einer Searchbar mit Beschriftungen" />
            </section>
            <section>
                <h2>Prüfschritte WCAG 1.4</h2>
                <ul>
                    <li>
                        <p>Das WAVE-Tool hat keinerlei Kontrast Fehler entdecken können. Es gibt ebenfalls keinen Text, der
                            für das Verständnis der Seite wichtig ist und sich über oder in einem Bild befindet.</p>
                    </li>
                    <li>
                        <p>Auf der gesamten Webseite werden Farben vermieden, die für farbenblinde Menschen schwer
                            unterscheidbar wären</p>
                    </li>
                    <li>
                        <p>Der Text lässt sich ohne Probleme auf 200% vergrößern</p>
                    </li>
                    <li>
                        <p>Es gibt keine Hintergrundmusik</p>
                    </li>
                    <li>
                        <p>Die folgenden Kontrast Stichproben zu Fließtext und UI Elementen beweisen darüber hinaus, dass
                            die Webseite auch die Anforderungen zu 1.4.6 erfüllt.</p>
                    </li>
                </ul>
                <div id="galery2" lable="imagesection">
                    <img width="330px" height="250px" src="../../content/wcag8.png" alt="Der Farbkontrast von Schwarz zu weiß ist 17.81" />
                    <img width="3300px" height="250px" src="../../content/wcag9.png" alt="Der Farbkontrast von Weiß zu Blau ist 9.07" />
                </div>
                
            </section>
            <section>
                <h2>Prüfschritte WCAG 2.1 - 2.58</h2>
                <ul>
                    <li>
                        <p>Die Webseite ist komplett über die Tabtaste bedienbar und die Tabreihenfolge ist schlüssig</p>
                    </li>
                </ul>
                <img src="../../content/wcag10.png" alt="Ein screenshot von der Tabreihenfolge der Spendenseite" />
                <ul>
                    <li>
                        <p>Die Navbar kann übersprungen werden</p>
                    </li>
                    <li>
                        <p>Fokusstate erfüllt AAA Standart, wird also nie überdeckt und ist klar sichtbar</p>
                    </li>
                    <li>
                        <p>In der Bedienung gibt es keine Eingaben, die Zeitbegrenzt sind</p>
                    </li>
                    <li>
                        <p>Buttons und Links flackern nicht bei Bedienung, sonst keine Animationen</p>
                    </li>
                    <li>
                        <p>Sämtliche Links sind mit ARIA Tags versehen, die das Ziel verständlich wiedergeben</p>
                    </li>
                    <li>
                        <p>Alle UI-Elemente erfüllen die Mindestgröße</p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Prüfschritte WCAG 3.1 - 3.39</h2>
                <ul>
                    <li>
                        <p>Hauptsprache der Seite wird angegeben</p>
                    </li>
                </ul>
                <img src="../../content/wcag11.png" alt="Die Hauptseite der Sprache ist Englisch" />
                <ul>
                    <li>
                        <p>Das Sprachniveau ist das einzige Manko der Seite. Nach Capito analyse beträgt es B1+</p>
                    </li>
                </ul>
                <img src="../../content/wcag12.png"
                    alt="Der analyse balken von Capito zeigt bei B1 mit 81% den Höchsten Wert an, gefolgt von A2 mit 17% und A1 mit 0%" />
                <ul>
                    <li>
                        <p>Zu den Formularen kann man nicht viel schreiben, weil die Transaktion selbst zu einem
                            Drittanbieter ausgelagert wird. Jedoch sind alle Formularfelder sichtbar beschriftet (siehe
                            1.3.4)</p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Prüfschritte WCAG 4</h2>
                <ul>
                    <li>
                        <p>Die HTML-Struktur sowie die ARIA Beschriftung wurden konsistent fehlerfrei umgesetzt </p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Zusammenfassung</h2>
                <p>Nachdem die Webseite der Organisation gehört, die selbst die WCAG-Richtlinien veröffentlicht, war es
                    eigentlich recht klar, dass sie Ihre eigenen Richtlinien umsetzen wird. Diese Annahme wurde durch die
                    Analyse dieser 3 Unterseiten fast vollständig bestätigt.
                    Der einzige Punkt der negativ aufgefallen ist war, dass die Seite nicht in einfacher Sprache angeboten
                    wird, was aber wohl dem allgemeinen Thema der Seite geschuldet sein wird.
                    Einige Punkte konnten nicht überprüft werden, da sie Inhalte wie z.B. Videos behandeln, die nicht auf
                    der Seite vorhanden sind. Streng genommen wären die Punkte also auch erfüllt, der Vollständigkeit halber
                    werden diese aber als nicht überprüfbar angegeben.
                </p>
                <img src="../../content/wcag14.png"
                    alt="WCAG Richtlininen 70% Erfüllt, 28% nicht prüfbar, 2% nicht erfüllt"
                    width="700px" />
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

    #galery1 {
        display:flex;
        flex-direction: column;
    }

    #galery11{
        width:700px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    #galery2 {
        width: 700px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

</style>