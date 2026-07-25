<h1>Balloon Pump</h1>

<b>Description</b>

Balloon Pump is a simple arcade-style reflex game built using the <b>Perlenspiel</b> game engine. Players repeatedly click a hand pump to inflate a balloon, but every pump brings it one step closer to popping. After each pop, the balloon requires even more pumps to burst again, creating an increasingly challenging test of endurance and timing.

<b>Features</b>

<ul>
    <li>Animated hand pump that moves with every click.</li>
    <li>Balloon grows dynamically with each pump, stretching upward as it inflates.</li>
    <li>Increasing difficulty after every successful pop.</li>
    <li>Fullscreen pop animation with sound effects.</li>
    <li>One-click reset to immediately begin the next round.</li>
    <li>Simple gameplay that's easy to learn but progressively more challenging.</li>
</ul>

<h2>Gameplay</h2>

The objective is straightforward: click the pump handle to inflate the balloon as much as possible.

Each click:
<ul>
    <li>Moves the pump handle up or down.</li>
    <li>Increases the balloon's size.</li>
    <li>Plays a pumping sound effect.</li>
</ul>

Once the balloon reaches its current maximum size, it bursts with a fullscreen animation and sound effect. Clicking anywhere on the screen resets the game for the next round. After every pop, the balloon's maximum size increases, requiring more pumps before the next burst.

There is no final level or victory condition—the goal is simply to continue pumping through increasingly longer rounds.

<h2>Controls</h2>

<table>
    <tr>
        <th>Action</th>
        <th>Input</th>
    </tr>
    <tr>
        <td>Pump the balloon</td>
        <td>Click (or tap) the pump handle</td>
    </tr>
    <tr>
        <td>Reset after popping</td>
        <td>Click (or tap) anywhere on the screen</td>
    </tr>
</table>

<h2>Screenshots</h2>

<i>Add gameplay screenshots or an animated GIF here.</i>

<ul>
    <li>Pump idle state</li>
    <li>Balloon inflating</li>
    <li>Balloon popping animation</li>
</ul>

<h2>Tech Stack</h2>

<ul>
    <li><b>Engine:</b> Perlenspiel</li>
    <li><b>Language:</b> JavaScript</li>
    <li><b>Audio:</b> Perlenspiel Audio API (<code>PS.audioPlay</code>)</li>
</ul>

<h2>Installation</h2>

Perlenspiel games run directly in a web browser and require no compilation.

<pre>
git clone https://github.com/username/balloon-pump.git
cd balloon-pump

# Open index.html in your browser
# or start a local web server:

python3 -m http.server
</pre>

<h2>Usage</h2>

Open <code>index.html</code> in a modern web browser (or access it through a local server).

Click the pump repeatedly to inflate the balloon. When it pops, click anywhere on the screen to reset and begin the next round. Each successive round requires more pumps before the balloon bursts.

<h2>Known Issues</h2>

<ul>
    <li>No warning is given as the balloon approaches its popping point.</li>
    <li>Difficulty increases indefinitely with no maximum level.</li>
    <li>No score tracking or high-score system.</li>
</ul>

<h2>Credits</h2>

<ul>
    <li><b>Design & Programming:</b> Alexander Hardro</li>
    <li><b>Engine:</b> Perlenspiel</li>
    <li><b>Sound Effects:</b> Perlenspiel Audio Library (<code>fx_swoosh</code>, <code>fx_tada</code>)</li>
</ul>
