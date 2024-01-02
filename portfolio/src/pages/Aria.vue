<script setup lang="ts">

</script>

<template>
  <main>
    <h1>Accessible Rich Internet Applications (ARIA)</h1>
    <article>
        <section>
            <h2>Allgemein</h2>
            <p>ARIA tags sind eine Ergänzung für HTML, die Screenreadern zusätzliche Informationen über DOM-Elemente geben und damit Menschen mit einer Sehbehinderung helfen können, Webseiten besser zu navigieren.</p>
        </section>
        <section>
            <h2>Welche Aria Rollen gibt es?</h2>
            <pre>
                <code>
                    &lt;section role="carousel"&gt;
                        &lt;article role="slide"&gt;
                            &lt;img 
                                src="../assets/beispiel.png"
                                aria-atomic="false" 
                                role="status" 
                                aria-live="polite" 
                                aria-hidden="false" 
                                alt="image1"/&gt;
                        &lt;/article&gt;

                        &lt;article role="slide"&gt;
                            &lt;img 
                                src="../assets/beispiel.png"
                                aria-atomic="false" 
                                role="status" 
                                aria-live="polite" 
                                aria-hidden="true" 
                                alt="image2"/&gt;
                        &lt;/article&gt;

                        &lt;article role="slide"&gt;
                            &lt;img 
                                src="../assets/beispiel.png"
                                aria-atomic="false" 
                                role="status" 
                                aria-live="polite" 
                                aria-hidden="true" 
                                alt="image3"/&gt;
                        &lt;/article&gt;

                        &lt;div aria-lable="carousel-control"&gt;
                            &lt;button role="next slide control"&gt;&lt;/button&gt;
                            &lt;button role="previous slide control"&gt;&lt;/button&gt;
                        &lt;/div&gt;
                    &lt;/section&gt;
                </code>
            </pre>
            <h3>Document Structure Roles</h3>
            <p>Beschreiben Strukturellen Aufbau der Webseite sollten aber nur wie in diesem Fall benutzt werden, wenn sie nötige Informationen über spezielle Elemente beinhalten</p>
            <h3>Widget Roles</h3>
            <p>Beschreiben Interaktive Elemente und erfordern i.d.R. Javascript im Hintergrund</p>
            <h3>Landmark Roles</h3>
            <p>Orientierungspunkte in der Webseite wie zb Das banner, die navigationsleiste oder Sections wie in diesem Beispiel.</p>
            <h3>Live Region Roles</h3>
            <p>Bei sich verändernden Objekten kann der Screenreader nur ein Element auf einmal vorlesen, dafür sind Live Region roles da, die dem Screenreader erklären, was als erstes vorgelesen werden soll und was z.b. gar nicht vorgelesen werden soll.</p>
            <h3>Window Roles</h3>
            <p>Wenn sich ein neues Fenster über dem aktuellen Fenster öffnet werden diese Rollen verwendet.</p>
        </section>
        <section>
            <h3>Weitere Regeln für den Umgang mit ARIA: </h3>
            
            <ol>
                <li>ARIA tags sind nur dazu gedacht, Semantische Elemente zu ergänzen und nicht zu ersetzen.</li>
                <li>Die Semantische Bedeutung von Elementen darf nicht durch ARIA verändert werden</li>
                <li>Alle mit Aria getaggten Elemente müssen mit der Tastatur bedienbar sein</li>
                <li>Role=“presentation“ und aria-hidden=”true” dürfen nicht auf erreichbaren Interaktiven Elementen verwendet werden, da sie sonst nicht von Screenreadern erkannt werden</li>
                <li>Alle interaktiven Elemente müssen einen „accessible name“ haben.</li>
                <li><a href="https://www.w3.org/TR/using-aria/#rule1">dokumentation</a></li>
            </ol>
        </section>
    </article>
  </main>
</template>

<style>
 code {
    font-family: "altivo", sans-serif;
  font-size: 14px;
  color: #101010;
 }
</style>