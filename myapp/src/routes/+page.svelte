<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="icon" href="path/to/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
            body {
                background-color: lightblue;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20%;
            }
            #dino {
                height: 300px;
            }
            #teller {
                font-size: 150%;
            }
        </style>
    </head>
    <body>
        <button id="teller" onclick="handleClick()">
            <img id="dino" src="dino.png" alt="My Image" />
            <span id="clicks">0</span> <span id="time">Kickflips</span>
        </button>

        <script>
            let count = 0;

            function handleClick() {
                count++;
                document.getElementById("clicks").innerHTML = count;
                if (count === 1) {
                    document.getElementById("time").innerHTML = "kickflips";
                }
                console.log(count)
            }
        </script>
    </body>
</html>
