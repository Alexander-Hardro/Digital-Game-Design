<h1>Emoji Math Deluxe</h1>

<b>Description</b>

Emoji Math Deluxe is an educational puzzle game built with the <b>Perlenspiel</b> game engine. Players solve a series of math problems where numbers are represented by emojis instead of traditional digits. By recognizing emoji patterns and performing arithmetic, players must determine the correct answer to progress through increasingly challenging puzzles.

<b>Features</b>

<ul>
    <li>Multiple emoji-based math puzzles with increasing difficulty.</li>
    <li>Unique emoji symbols that represent numbers or mathematical values.</li>
    <li>Keyboard-based answer input.</li>
    <li>Automatic progression through levels after correct answers.</li>
    <li>Visual feedback for correct and incorrect guesses.</li>
    <li>Fun combination of logic, arithmetic, and pattern recognition.</li>
</ul>

<h2>Gameplay</h2>

Each level presents one or more equations using emojis in place of numbers.

The player must:

<ul>
    <li>Determine the numerical value of each emoji.</li>
    <li>Solve the equation.</li>
    <li>Type the correct numerical answer using the keyboard.</li>
    <li>Press <b>Enter</b> to submit the answer.</li>
</ul>

Correct answers unlock the next puzzle, while incorrect answers allow the player to continue trying until the correct solution is found. The game gradually introduces more difficult equations that require combining information from previous clues.

<h2>Controls</h2>

<table>
    <tr>
        <th>Action</th>
        <th>Input</th>
    </tr>
    <tr>
        <td>Enter answer</td>
        <td>Keyboard (0–9)</td>
    </tr>
    <tr>
        <td>Delete digit</td>
        <td>Backspace</td>
    </tr>
    <tr>
        <td>Submit answer</td>
        <td>Enter</td>
    </tr>
</table>

<h2>Screenshots</h2>

<i>Add gameplay screenshots or an animated GIF here.</i>

<ul>
    <li>Opening puzzle</li>
    <li>Emoji equation</li>
    <li>Correct answer screen</li>
    <li>Final completion screen</li>
</ul>

<h2>Tech Stack</h2>

<ul>
    <li><b>Engine:</b> Perlenspiel 3.3</li>
    <li><b>Language:</b> JavaScript</li>
    <li><b>Graphics:</b> Emoji-based grid interface</li>
    <li><b>Audio:</b> Perlenspiel Audio API (<code>PS.audioPlay</code>)</li>
</ul>

<h2>Installation</h2>

Perlenspiel games run directly in a web browser and require no compilation.

<pre>
git clone https://github.com/username/emoji-math-deluxe.git
cd emoji-math-deluxe

# Open index.html in your browser
# or start a local web server:

python3 -m http.server
</pre>

<h2>Usage</h2>

Launch the game in a modern web browser.

Study each emoji equation, determine the value of each emoji, and calculate the correct answer. Enter your solution using the keyboard and press <b>Enter</b> to advance to the next puzzle. Continue solving equations until every level has been completed.

<h2>Known Issues</h2>

<ul>
    <li>Answers must exactly match the expected numerical solution.</li>
    <li>There is currently no hint system for difficult puzzles.</li>
    <li>The number of puzzles is limited, reducing replayability.</li>
</ul>

<h2>Credits</h2>

<ul>
    <li><b>Design & Programming:</b> Alexander Hardro</li>
    <li><b>Engine:</b> Perlenspiel 3.3</li>
    <li><b>Audio:</b> Perlenspiel Audio Library</li>
</ul>
