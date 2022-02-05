const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j','w','e','t','y','u'];

document.addEventListener('keydown', function (event) {
    keys.forEach((key) => {
        if (event.key === key){
            const audio = new Audio(`assets/${key.toUpperCase()}.mp3`);
            audio.play();
        }
    })
})