<script>
	let count = 0;

function handleClick() {
    count++;
    console.log(count)
}
</script>

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
        #dino{
            height: 300px;
        }
        #teller{
            font-size: 150%;
        }
        
          </style>
    </head>
    <body>
        <button id="teller" on:click={handleClick}>
            <img  id="dino" src="dino.png" alt="My Image" />
            Clicked {count} {count === 1 ? 'time' : 'times'}
        </button>
    </body>
</html>
