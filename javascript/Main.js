const home = document.getElementById('logo');
const about = document.getElementById('About');
const socials = document.getElementById('Socials');
const portfolio = document.getElementById('Portfolio');
const music = document.getElementById('Music');
const random = document.getElementById('Random');
const content = document.getElementById('Content');

home.addEventListener ('click', () => {
    content.innerHTML = `
        <h1>Welcome!</h1>
        <p>
            This page is a work in progress. Strikethrough text in the navigation bar are sections that will be 
            added in future updates. For now, feel free to browse the 'About' and 'Portfolio' sections!
        </p>
        <hr>
        <h3>Update Log</h3>
        <ul>
            <li>Added "Home" welcome page.</li>
            <li>Updated Portfolio with Year 1, Semester 2 Projects.</li>
            <li>Added stylised name graphic for the site header.</li>
            <li>Fixed image scaling and alignment.</li>
            <li>Updated Portfolio with Year 1, Semester 1 Projects.</li>
            <li>Updated About section with Artist/Design Statement.</li>
            <li>Created the Dara Murphy portfolio website!</li>
        </ul>
    `;
});


about.addEventListener('click', () => {
    content.innerHTML = `
        <h1>Artist Statment</h1>
        <pre></pre>
        <div class="artist">
        <p>
            My name is Dara Murphy (he/him), and I am a 22-year-old Irish multidisciplinary creative focused on bridging the worlds of sound, 
            visuals, and digital interactivity. I'm driven by a passion to create innovative media whilst broadening my talents, 
            working as part of a team and learning throughout the process. My BSc in Music, Media and Performance Technology at the 
            University of Limerick has equipped me with a diverse digital skillset, capable of integrating the fields of graphic design, 
            video editing, creative coding, music production and web development into practical, cohesive and immersive experiences. 
            With artificial intelligence threatening the soul of art and challenging traditional creative workflows, my work prioritises 
            authenticity and strives to feel alive, creating moments where audiences don’t merely observe but actively engage and respond. 
            Iterative design, community feedback, and, in turn, growth are highly valued to give projects and art an opportunity to evolve 
            meaningfully alongside the artist. Through careful considerations of aesthetics and functionality, my designs emphasise clarity, 
            depth, and user-centric experiences. The interplay of the various digital software and fields I’m knowledgeable in continuously 
            encourages me to innovate and push creative boundaries. Whether adapting audio landscapes, designing professional marketing 
            material, or programming interactive digital spaces, the work I undertake is crafted to resonate personally and collectively, 
            whilst keeping its primary purpose in mind.  Looking forward, I am enthusiastic to collaborate on projects that expand or test 
            the limitations of my capabilities. In particular, I would love to gain more experience in web development or game audio, as 
            these fields currently interest me. I am also considering freelance work in music production, graphic design or video editing. 
            Ultimately, I aspire to continue working at the intersection of music, design, and technology, exploring new methodologies and 
            contributing thoughtfully to contemporary creative discourse. 
        </p>
        <img src="images/Selfie.jpg" alt="Selfie">
        </div>
    `;
});

portfolio.addEventListener('click', () => {
    content.innerHTML = `
        <h1>Overview of Projects</h1>
        <pre></pre>
        <div class="row" id="wd">
            <div class="project-left">
                <h2>Dynamic Website</h2>
                <p>2022 - Web Development</p>
                <pre></pre>
                <p>
                    A dynamic portfolio site built using HTML, CSS, JavaScript, and Bootstrap. The site was structured with Bootstrap for responsive layout and styled 
                    using a custom CSS file for themed visuals. Data-driven sections for education, work experience and projects were powered by JSON objects in 
                    JavaScript. A random content button cycled through content at 30-second intervals, displayed alongside a dynamic progress bar. Functions to create, 
                    retrieve, and delete cookies prompted users for their name and affiliation to simulate a login. Each element was modularised to ensure clean event 
                    handling, and user feedback was visually reinforced with background alterations and animations. This project refined core front-end skills, especially 
                    in DOM manipulation, event handling, and state management using JavaScript. Working with JSON and cookies introduced real-world data interaction 
                    patterns. The experience also emphasised the importance of accessibility, layout clarity, and user flow when building interactive web applications.
            </div>
            <div class="project-right">
                <img src="images/Bootstrap.png"></img>
            </div>
        </div>
        <pre></pre>
        <div class="row" id="cc">
            <div class="project-left">
                <h2>Interactive Keyboard</h2>
                <p>2022 - Creative Coding</p>
                <pre></pre>
                <p>
                    A Processing sketch that procedurally generates and displays a stylised keyboard layout based on MIDI values, experimenting with randomness, modular 
                    design, and visual representation of musical data. Challenges addressed included scalable layout and efficient shape reuse. Similar to the last 
                    Processing task, this was developed over four iterations. The first stage involved manually constructing and displaying a small keyboard section 
                    using custom PShape objects to represent ivory and ebony keys in their respective forms (‘L’, ‘T’, ‘J’, and sharp keys). Subsequent stages introduced 
                    randomised key range generation (MIDI 19-88), flexible key placement, and labelling of notes using array logic. Careful attention was given to 
                    spacing, note identification, and key alignment, culminating in a clean and responsive visualisation, communicating musical structure through code. 
                    User-friendly features such as altering scale type or sustaining a note were also added. This piece strengthened skills in programmatic drawing and 
                    managing visual complexity in generative systems. Key takeaways included efficient use of functions and arrays, and how abstraction can simplify 
                    visual output while maintaining clarity and expressiveness.
            </div>
            <div class="project-right">
                <img src="images/Piano.png"></img>
            </div>
        </div>
        <pre></pre>
        <div class="row" id="vp">
            <div class="project-left">
                <h2>Lack of Accomodation in UL</h2>
                <p>2021 - Video Production</p>
                <pre></pre>
                <p>
                    An educational video raising awareness of the accommodation crisis that students in Ireland were, and still are, facing, with a focus on the 
                    University of Limerick. Although editing was my primary role, I played a part in scripting during the ideation phase, as I had experience 
                    creating content for an old YouTube channel. Footage was recorded on personal video cameras and edited in PowerDirector Pro, utilising motion 
                    graphics, effective cuts and transitions to create a concise, entertaining, and informative video. I also managed the recording of the overdubbed 
                    audio, accomplished in Audacity on a Blue Yeti Studio Pro microphone in a special acoustic environment.  Overall, it gave me valuable experience 
                    in creating content as part of a team and sharpened my video production skills. The video was effective, as many students resonated with the 
                    topic, and we were given high marks.
                </p>
            </div>
            <div class="project-right">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/CSPC7o54pN4?si=5UkxE5c2FhmITPp4" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
        </div>
        <pre></pre>
        <div class="row" id="cc">
            <div class="project-left">
                <h2>Interactive Paint Tool</h2>
                <p>2021 - Creative Coding</p>
                <pre></pre>
                <p>
                    A functional drawing tool developed from scratch in Processing, with selectable shapes and colours, aimed at demonstrating foundational user 
                    interface design principles through code. The canvas was developed across four progressive stages. The first iteration focused on layout 
                    composition using fixed shapes and defined colour zones to emulate a UI prototype. From there, functionality was modularised using custom 
                    functions (drawCurrent(), drawColour(), etc.) to improve structure and reusability. Later iterations introduced interactivity, including 
                    mouse detection, drawing logic, and active tool states. Particular attention was given to variable scope, coordinate calculations, and clean 
                    visual feedback. The final version allowed users to draw multiple shapes in selected colours on the canvas dynamically. This project solidified 
                    understanding of event-driven programming, abstraction through functions, and canvas-based design thinking. A key takeaway was learning to 
                    translate ideas into working code while maintaining clean structure and visual clarity. Iteration proved essential in managing complexity and 
                    ensuring intuitive user flow.
                </p>
            </div>
            <div class="project-right">
                <img src="images/Canvas.png"></img>
            </div>
        </div>
        <pre></pre>
        <div class="row" id="gd">
            <div class="project-left">
                <h2>Album Sleeve Redesign</h2>
                <p>2021 - Graphic Design</p>
                <pre></pre>
                <p>
                    A visual reinterpretation of the album cover for Keane's debut, 'Hopes & Fears'.  Suitable for a 12" vinyl record (LP). The original design, 
                    while iconic, lacked the emotional depth and visual representation of the themes explored in the album: Change and its dual impacts. This 
                    redesign addresses the need for an artwork that more effectively communicates the narrative and mood of the music by taking advantage of 
                    symbolic imagery and colour theory.
                <p>
                    The design process began with exploration around the theme of change, using orange, a colour symbolic of both positive and negative 
                    transformation, as a central theme. The imagery drew from an illusion inspired by a movie poster, where the direction of a figure's 
                    movement is ambiguous. Early iterations involved rough digital painting in Affinity Designer, incorporating symbolic elements like a red 
                    star and careful typeface selection to align with Keane's aesthetic. Final touches were influenced by the physical limited edition of the 
                    original album, with attention to detail in the credits and logo choice. This project reinforced the importance of feedback, iteration, and 
                    balancing conceptual depth with practical execution. Discovering Photoshop brushes from feedback and experimenting with filters in Affinity 
                    Photo significantly enhanced the outcome. The process highlighted the value of mood and user perception in graphic design.
                </p>
            </div>
            <div class="project-right">
                <img src="images/Sleeve Redesign_1.png"></img>
                <img src="images/Sleeve Redesign_2.png"></img>
            </div>
        </div>
        <pre></pre>
        <div class="row" id="gd">
            <div class="project-left">
                <h2>Revari Logotypes</h2>
                <p>2021 - Graphic Design</p>
                <pre></pre>
                <p>
                    Logos designed for a fictional record label.
                <p>
                    The name Revari was conceptualised from the word "Reverie" which is the state of being pleasantly lost in one's thoughts.
                    It's spelt the way it is to reflect the word "are" as in who you are as a person. This sums up the artists' individuality
                    and ability to create captivating music. The first design is inspired by the classical genre of music and features
                    musical notation wrapped inbetween headphones. The second design is inspired by Pop music, boasting a CD with a beat at
                    its centre. The third design is inspired by Jazz and revolves around a piano with a shortened "RVI" title. This was my first 
                    graphic design project and it was undertaken primarily to learn the basic functionality of Affinity Designer. With that in 
                    mind, I am happy with how they turned out.
                </p>
            </div>
            <div class="project-right">
                <img id="LabelLogo" src="images/Music Label Logos.png"></img>
            </div>
        </div>
        <pre></pre>
    `;
});





`

`