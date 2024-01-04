<script setup lang="ts">

    import {ref} from 'vue'
    const buttonsChecked = ref(false);
    const checkboxChecked = ref(false);
    const textfieldChecked = ref(false);
    const errorChecked = ref(false);
    const neccecaryChecked = ref(true);



</script>

<template>
    <main>
        <article>
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
                        <label for="vorname">Vorname (notwändig)</label>
                        <input id="vorname" type="text">
                        <label for="nachname">Nachname (notwändig)</label>
                        <input id="nachname" type="text">
                        <h3>Meine Lieblingsprogrammiersprache</h3>
                        <div class="radio">
                            <input type="radio" id="language1" name="language" value="JS">
                            <label for="language1">Javascript/Typescript</label>
                        </div>
                        <div class="radio">
                            <input type="radio" id="language2" name="language" value="Python">
                            <label for="language2">Python</label>
                        </div>

                        <div class="radio">
                            <input type="radio" id="language3" name="language" value="Ruby">
                            <label for="language3">Ruby</label>
                        </div>
                        <div class="radio">
                            <input type="radio" id="language4" name="language" value="PHP">
                            <label for="language4">PHP (ich bin ein Psychopath)</label>
                        </div>


                        <button id="testbutton">Probier Mich!</button>
                    </form>
                </aside>
                <section>
                    <section v-if="buttonsChecked">
                        <h2>Buttons/Links</h2>
                        <ul>
                            <li>
                                <p>Ein Button ist ein UI-Element, das eine Aktion ausführt</p>
                            </li>
                            <li>
                                <p>Ein Link ist ein Element, dass zu einer Seite navigiert</p>
                            </li>
                        </ul>
                        <p>In unserem Beispiel haben wir einen Button, mit dem die obenstehenden Daten bestätigt werden, und
                            der zum
                            nächsten Schritt des Formulars leitet. <br /> In diesem Fall habe ich einen Button benutzt, da
                            er zwar
                            technisch gesehen auf eine neue Seite leitet aber semantisch mehr als Bestätigung der
                            eingegebenen Daten
                            funktioniert</p>
                    </section>


                    <section v-if="checkboxChecked">
                        <h2>Checkboxen</h2>
                        <p class="sidetext">Checkboxen sind ein UI Element für Formulare in dem ein oder mehrere Auswahlmöglichkeiten
                            markiert werden
                            können.
                            In der WCAG Dokumentation heißt es dazu, dass eine Checkbox entweder über das eigene Element mit
                            role=“checkbox“, oder per aria-labelled-by von einem 2. Element beschrieben werden muss.
                            Ebenfalls muss die Checkbox per Lehrtaste aktiviert oder deaktiviert werden können und per ARIA
                            anzeigen
                            ob sie aktiv ist oder nicht.
                            In diesem Fall wäre die Checkbox über das nebenstehende Lable Element definiert.
                        </p>
                    </section>


                    <section v-if="textfieldChecked">
                        <h2>Textfelder</h2>
                        <p class="sidetext"> In Textfeldern kann vom Nutzer Text eingegeben werden. Hierbei ist ebenfalls wichtig, dass immer
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


                    <section v-if="errorChecked">
                        <h2>Fehlermeldungen</h2>
                        <p class="sidetext">Sollten in dem Formular Fehler auftreten, zum Beispiel ein Feld vergessen worden sein, müssen an
                            dem
                            Element Fehlermeldungen auftreten. Um WCAG AA zu erfüllen, müssen diese ebenfalls erklären wie
                            der
                            Fehler behoben werden kann.
                            Hierbei ist es wichtig, dass gerade bei dem Roten Text, den man normal für Fehler verwendet, die
                            Greyscale so gewählt ist, dass auch farbenblinde den Text erkennen können.
                        </p>
                    </section>


                    <section v-if="neccecaryChecked">
                        <h2>Pflichtfelder</h2>
                        <p class="sidetext">Normal befindet sich neben dem Lable ein Sternchen, das visuell anzeigt, dass es sich um ein
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

#beispiel{
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 50px;
}

.sidetext{
    width: 400px;
}



</style>