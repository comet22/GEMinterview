<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
</head>
<body onload="handleLoad()">
    <h1 id = 'q'>Quiz Time!</h1>
    <p id = 'description'>This quiz is meant to challenge your Pokemon knowledge!  See how many questions you can get right!!!</p>
    <div class='centerButton' id='centerStart'>
        <button id = 'start' onclick="startquiz()">Start!</button>
    </div>

    <div class = 'centerButton' id="answers" hidden>
        <button class='answer' id='0' onclick="handleClick('0')"></button>
        <button class='answer' id='1' onclick="handleClick('1')"></button>
        <button class='answer' id='2' onclick="handleClick('2')"></button>
        <button class='answer' id='3' onclick="handleClick('3')"></button>
    </div>
</body>
</html>