<script setup lang="ts">

</script>

<template>
  <main>
    
    <article id="main">
        <h1>Accessible Rich Internet Applications (ARIA)</h1>
        <section>
            <h2>Allgemein</h2>
            <p>ARIA tags sind eine Ergänzung für HTML, die Screenreadern zusätzliche Informationen über DOM-Elemente geben und damit Menschen mit einer Sehbehinderung helfen können, Webseiten besser zu navigieren.</p>
        </section>
        <section>
            <h2>Welche Aria Rollen gibt es?</h2>
            <div id="content">
                <section>
                            <h3 style="background-color:lightseagreen; width:300px;">Document Structure Roles</h3>
                            <p>Beschreiben Strukturellen Aufbau der Webseite</p>
                            <h3 style="background-color:cornflowerblue; width:300px;">Widget Roles</h3>
                            <p>Beschreiben Interaktive Elemente und erfordern i.d.R. Javascript im Hintergrund</p>
                            <h3 style="background-color:darksalmon; width:300px;">Landmark Roles</h3>
                            <p>Orientierungspunkte in der Webseite wie z.B.: Das Danner, die Navigationsleiste oder Sections wie in diesem Beispiel.</p>
                            <h3 style="background-color:moccasin; width:300px;" >Live Region Roles</h3>
                            <p>Bei sich verändernden Objekten kann der Screenreader nur ein Element auf einmal vorlesen, dafür sind Live Region roles da, die dem Screenreader erklären, was als erstes vorgelesen werden soll und was z.b. gar nicht vorgelesen werden soll.</p>
                            <h3>Window Roles</h3>
                            <p>Wenn sich ein neues Fenster über dem aktuellen Fenster öffnet werden diese Rollen verwendet.</p>
                </section>
                        
                <aside>
                <pre id="code" aria-hidden="true">
                <p style="width:400px;"><code>
                  <span style="background-color:darksalmon;">&lt;section</span> <span style="background-color:cornflowerblue;">role="carousel"&gt;</span>
                        
                         <span style="background-color:lightseagreen;">&lt;img </span>
                            <span style="background-color:cornflowerblue;">role="slide"</span>
                            src="../assets/beispiel.png"
                            <span style="background-color:moccasin;">aria-atomic="false" </span>
                            role="status" 
                            <span style="background-color:moccasin;">aria-live="polite"</span>
                            aria-hidden="false" 
                            alt="image1"/&gt;
                        
                       <span style="background-color:cornflowerblue;">&lt;menu</span>  aria-lable="carousel-control"&gt;
                            &lt;button <span style="background-color:cornflowerblue;">role="next slide control"</span>&gt;&lt;/button&gt;
                            &lt;button <span style="background-color:cornflowerblue;">role="previous slide control"</span>&gt;&lt;/button&gt;
                        <span style="background-color:cornflowerblue;">&lt;/menu&gt;</span>
                    <span style="background-color:darksalmon;">&lt;/section&gt;</span>
                </code>
            </p> 
            </pre>
                </aside>
              
                
            </div>
            
        </section>
        <section>
            <h3>Weitere Regeln für den Umgang mit ARIA: </h3>
            
            <ul>
                <li><p>ARIA tags sind nur dazu gedacht, Semantische Elemente zu ergänzen und nicht zu ersetzen.</p></li>
                <li><p>Die Semantische Bedeutung von Elementen darf nicht durch ARIA verändert werden</p></li>
                <li><p>Alle mit Aria getaggten Elemente müssen mit der Tastatur bedienbar sein</p></li>
                <li><p>Role=“presentation“ und aria-hidden=”true” dürfen nicht auf erreichbaren Interaktiven Elementen verwendet werden, da sie sonst nicht von Screenreadern erkannt werden</p></li>
                <li><p>Alle interaktiven Elemente müssen einen „accessible name“ haben.</p></li>
                <li><p><a href="https://www.w3.org/TR/using-aria/#rule1">Dokumentation</a></p></li>
            </ul>
        </section>
    </article>
  </main>
</template>

<style scoped>
 code {
    font-family: "altivo", sans-serif;
  font-size: 14px;
  color: #101010;
 }

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

    ul, ol {
        padding:0;
        margin:0;
        margin-top: 10px;
        margin-bottom:20px;
        width:700px;
        
    }

    img {
        border-radius: 10px;
        border: 2px solid #101010;
    }

    #content {
        display:flex;
        flex-direction: row;
        
    }
</style>