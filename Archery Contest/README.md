<h1>Robin Hood Archery Challenge</h1>

<b>Description</b>

Robin Hood Archery Challenge is a turn-based target shooting game built with the <b>Perlenspiel</b> game engine. Players compete against an AI opponent in a three-round archery contest by carefully timing both vertical and horizontal aiming. Precision determines the number of points earned each round, and the highest score after three rounds wins.

<b>Features</b>

<ul>
    <li>Animated moving crosshair with independent vertical and horizontal aiming phases.</li>
    <li>Turn-based gameplay against a computer-controlled opponent.</li>
    <li>Accuracy-based scoring system rewarding shots closest to the center.</li>
    <li>Three-round match with automatic round progression.</li>
    <li>Sprite-based target and crosshair graphics.</li>
    <li>Sound effects for aiming, shooting, victory, and defeat.</li>
    <li>Restart option without refreshing the page.</li>
</ul>

<h2>Gameplay</h2>

The player competes against an AI archer in a best-score competition over three rounds.

Each round consists of two aiming stages:

<ul>
    <li>The crosshair moves vertically across the target.</li>
    <li>Press the <b>Spacebar</b> to lock the vertical position.</li>
    <li>The crosshair then moves horizontally.</li>
    <li>Press <b>Spacebar</b> again to fire your shot.</li>
</ul>

Your score is based on how close the shot lands to the center of the target. After your turn, the AI automatically takes its shot using randomly generated aim values. Once all three rounds have been completed, the game compares the final scores and declares the winner.

<h2>Controls</h2>

<table>
    <tr>
        <th>Action</th>
        <th>Input</th>
    </tr>
    <tr>
        <td>Lock vertical aim</td>
        <td>Spacebar</td>
    </tr>
    <tr>
        <td>Fire arrow</td>
        <td>Spacebar</td>
    </tr>
    <tr>
        <td>Restart game</td>
        <td>R</td>
    </tr>
</table>

<h2>Screenshots</h2>

<i>Add gameplay screenshots or an animated GIF here.</i>

<ul>
    <li>Target waiting for the first shot</li>
    <li>Vertical aiming phase</li>
    <li>Horizontal aiming phase</li>
    <li>Final scoreboard and winner screen</li>
</ul>

<h2>Tech Stack</h2>

<ul>
    <li><b>Engine:</b> Perlenspiel 3.3</li>
    <li><b>Language:</b> JavaScript</li>
    <li><b>Graphics:</b> Sprite-based target and crosshair images</li>
    <li><b>Audio:</b> Perlenspiel Audio API (<code>PS.audioPlay</code>)</li>
</ul>

<h2>Installation</h2>

Perlenspiel games run directly in a web browser and require no compilation.

<pre>
git clone https://github.com/username/robin-hood-archery.git
cd robin-hood-archery

# Open index.html in your browser
# or start a local web server:

python3 -m http.server
</pre>

<h2>Usage</h2>

Launch the game in a modern web browser.

Press the <b>Spacebar</b> once to lock the vertical aim and again to fire after aligning the horizontal aim. The computer immediately takes its turn after each player shot. After three rounds, the game announces the winner. Press <b>R</b> at any time after the match ends to begin a new game.

<h2>Known Issues</h2>

<ul>
    <li>The AI selects random aim values rather than using a strategic difficulty system.</li>
    <li>The game is limited to three rounds with no customizable match length.</li>
    <li>Shots are represented through score calculations rather than visible projectile animations.</li>
</ul>

<h2>Credits</h2>

<ul>
    <li><b>Design & Programming:</b> Alexander Hardro</li>
    <li><b>Engine:</b> Perlenspiel 3.3</li>
    <li><b>Audio:</b> Perlenspiel Audio Library</li>
</ul>
