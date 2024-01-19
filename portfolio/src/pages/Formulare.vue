<script setup lang="ts">



</script>

<template>
    <main>
        <article id="main">



            <h1>Formulare</h1>
            <section>
                <h2>Allgemein</h2>
                <p>Barrierefreie Formulare verbinden die Kenntnisse, die in den vorhergehenden Abschnitten gesammelt wurden.
                    Hier ist es besonders wichtig, dass Screenreader sie lesen können, weil der Aufbau von ihnen ohne gute
                    Labels schnell verwirrend sein kann. Im folgenden Artikel wird deshalb anhand eines Beispiels erklärt,
                    worauf geachtet werden muss, wenn man ein Formular Barrierefrei gestalten möchte.</p>
            </section>
            <section id="beispiel">

                <aside>
                    <form>
                        <h2>Probier mich!</h2>
                        <label :class="{ highlight: state == 'necc' }" for="vorname">Vorname (notwändig)</label>
                        <input :class="{ highlight: state == 'text' }" id="vorname" type="text">
                        <div aria-label="nachname" :class="{ error2: state == 'error' }">
                            <label :class="{ highlight: state == 'necc' }" for="nachname">Nachname (notwändig)</label>
                            <input :class="{ errorhighlight: state == 'error' }" id="nachname" type="text"><br />
                            <lable class="error" v-if="state == 'error'">Ein Name kann nicht aus Zahlen bestehen</lable>
                        </div>



                        <fieldset>
                            <legend>
                                <h3>Meine Lieblingsprogrammiersprache</h3>
                            </legend>
                            <div>
                                <input type="radio" id="language1" name="language" value="JS">
                                <label for="language1">Javascript/Typescript</label>
                            </div>
                            <div>
                                <input type="radio" id="language2" name="language" value="Python">
                                <label for="language2">Python</label>
                            </div>
                            <div>
                                <input type="radio" id="language3" name="language" value="Ruby">
                                <label for="language3">Ruby</label>
                            </div>
                            <div>
                                <input type="radio" id="language4" name="language" value="PHP">
                                <label for="language4">PHP</label>
                            </div>

                        </fieldset>
                        <button lable="probier mich" :class="{ highlight: state == 'button' }" id="testbutton">Probier
                            Mich!</button>
                    </form>
                </aside>

                <section id="textsection">

                    <section >
                        <h2>Buttons/Links</h2>
                        <ul>
                            <li>
                                <p class="sidetext">Ein Button ist ein UI-Element, das eine Aktion ausführt</p>
                            </li>
                            <li>
                                <p class="sidetext">Ein Link ist ein Element, dass zu einer Seite navigiert</p>
                            </li>
                        </ul>
                        <p class="sidetext">In unserem Beispiel haben wir einen Button, mit dem die obenstehenden Daten
                            bestätigt werden, und
                            der zum
                            nächsten Schritt des Formulars leitet. <br /> In diesem Fall habe ich einen Button benutzt, da
                            er zwar
                            technisch gesehen auf eine neue Seite leitet aber semantisch mehr als Bestätigung der
                            eingegebenen Daten
                            funktioniert</p>
                    </section>


                    <section >
                        <h2>Radioboxen</h2>
                        <p class="sidetext">Radiobuttons sind ein UI Element für Formulare in dem eine Auswahlmöglichkeiten
                            markiert werden kann.
                            In der WCAG Dokumentation heißt es dazu, dass eine Checkbox entweder über das eigene Element mit
                            role=“radio“, oder per aria-labelled-by von einem 2. Element beschrieben werden muss.
                            Ebenfalls muss der Radiobutton per Pfeiltaste aktiviert oder deaktiviert werden können und per
                            ARIA
                            anzeigen ob sie aktiv ist oder nicht.
                            In diesem Fall wäre die Checkbox über die Überschrift definiert.
                        </p>
                    </section>


                    <section >
                        <h2>Textfelder</h2>
                        <p class="sidetext"> In Textfeldern kann vom Nutzer Text eingegeben werden. Hierbei ist ebenfalls
                            wichtig, dass immer
                            klar
                            ist was in dem Feld gefordert wird. Bei kritischen Feldern muss es ebenfalls möglich sein die
                            Daten noch
                            einmal zu ändern.
                            Hierfür kann man verschiedene Labels benutzen. Im Idealfall hat man ein sichtbares Lable wie in
                            meinem
                            Beispiel, dieses kann sich als Platzhaltertext im Inputfield befinden oder als Beschriftung
                            darüber oder
                            daneben. Sollte das aus Designgründen nicht möglich sein ist es ratsam das Lable zu verstecken
                            (über
                            clipping oder z-index, display: none oder visibility: hidden funktionieren aber nicht.)
                        </p>
                    </section>


                    <section >
                        <h2>Fehlermeldungen</h2>
                        <p class="sidetext">Sollten in dem Formular Fehler auftreten, zum Beispiel ein Feld vergessen worden
                            sein, müssen an
                            dem
                            Element Fehlermeldungen auftreten. Um WCAG AA zu erfüllen, müssen diese ebenfalls erklären wie
                            der
                            Fehler behoben werden kann.
                            Hierbei ist es wichtig, dass gerade bei dem Roten Text, den man normal für Fehler verwendet, die
                            Greyscale so gewählt ist, dass auch farbenblinde den Text erkennen können.
                        </p>
                    </section>


                    <section >
                        <h2>Pflichtfelder</h2>
                        <p class="sidetext">Normal befindet sich neben dem Lable ein Sternchen, das visuell anzeigt, dass es
                            sich um ein
                            Pflichtfeld
                            handelt. Dieses Sternchen wird jedoch von Screenreadern nicht richtig erkannt, weshalb man
                            entweder ein
                            Bild mit Alttext „required“ benutzen sollte, oder es im Text des Lables selber angibt.</p>
                    </section>


                </section>
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
}

#textsection {

    height: 650px;
    display: flex;
    align-items: center;
    flex-direction: column;
}


form {
    display: flex;
    flex-direction: column;
    border: 2px solid #000;
    align-items: flex-start;
    padding: 30px;
    width: 350px;

}

input[type=text] {
    border-radius: 4px;
    border: 2px solid #000;
    background: #E4E4E4;
    height: 30px;
    font-size: 1.5em;
    font-weight: 400;
    line-height: 128.607%;
    color: #101010;
    margin: 5px;
    padding: 4px;
}

.error {

    width: 200px;
    padding: 5px;
    color: rgb(174, 0, 0);
    font-size: 16px;
}

.errorhighlight {
    border: 3px solid rgb(174, 0, 0);
    padding: 5px;
}

input[type=radio] {
    background-color: aliceblue;
}

#testbutton {
    width: 300px;
    height: 60px;

}

#testbutton:hover {
    background: #E4E4E4;
    color: #101010;
}

#testbutton:focus-visible {
    background: #E4E4E4;
    color: #101010;
}


.radio {

    margin-top: 10px;
    margin-bottom: 10px;
}

#beispiel {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 50px;
}

.sidetext {
    width: 700px;
}

.highlight {
    border: 3px solid blue;
    padding: 5px;
}

#menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-left: 0;
    padding-left: 0;
}


.articlemenu {
    border: 0px;
}

.articlemenu:hover {
    background-color: #2E82FF;
    border-radius: 50%;
}

button:focus-visible {
    background-color: #2E82FF;
    border: 2px solid #000
}

.articlemenu:active {
    background-color: #82b4ff;
    border-radius: 50%;
}

.menubutton {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height: 60px;
    width: 60px;
}

.error2 {
    border: 3px solid rgb(174, 0, 0);
    color: rgb(174, 0, 0);
}

fieldset {
    all: unset;
    text-align: left;
}

fieldset {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}
</style>