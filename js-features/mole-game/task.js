let hit = 0;
let miss = 0;

clear = () => {
    hit = 0;
    miss = 0;
    document.getElementById('dead').textContent = 0;
    document.getElementById('lost').textContent = 0;
}

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById('hole' + i);

    hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' )) {
            hit++;
            document.getElementById('dead').textContent = hit;
            if (hit === 10) {
                alert('Победа!');
                clear();
            }
        } else {
            miss++;
            document.getElementById('lost').textContent = miss;
            if (miss === 5) {
                alert('Вы проиграли!');
                clear();
            }
        }
    }  
}