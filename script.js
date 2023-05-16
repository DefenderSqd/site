function ran(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const list = ["5f32b7ac624d9",
        "62d188a04a6fe",
        "62d5bae0388f0",
        "5f31d30d03fc2",
        "630ebbf09874c",
        "5ddf2ce189a7d",
        "62dbf2dd1ff6b",
        "632a61d7528a9",
        "63c97f63520c4",
        "5cbf49e712a89",
        "5f4c06f70202a",
        "63d6248da8238",
        "62adad0d9ba20",
        "640a692f4a6ad",
        "631d5fa749256",
        "6423fed1d56b3",
        "626aee9801f65",
        "607c21b71babd",
        "6423fed1d56b3",
];
var numlist = document.querySelector('.num-list');
numlist.textContent = 'Всего '+(list.length)+' позиций';

var winPos = -1;

var button = document.querySelector('#start');
function handleClick() {
    var winp = document.querySelector('.win-pos')
    winPos = ran(0, list.length-1)
    winp.textContent = 'Выиграла ' + list[winPos] + ' ' + winPos + ' позиция';
    winp.style.visibility = 'visible';

    if(document.querySelector('.link1') && document.querySelector('.link2')) {
        var link1 = document.querySelector('.link1')
        var link2 = document.querySelector('.link2')
        link1.href = "https://www.google.com/search?client=opera&q=" + list[winPos];
        link2.href = "https://www.google.com/search?client=opera&q=" + list[winPos];
    } else {
        var newDiv = document.createElement('a');
        newDiv.textContent = 'Link 1';
        newDiv.classList.add('button1');
        newDiv.classList.add('link1');
        newDiv.style.float = 'left';
        newDiv.href = "https://www.google.com/search?client=opera&q=" + list[winPos];
        newDiv.target = "blank";
        var container = document.querySelector('main');
        container.appendChild(newDiv);

        var newDiv = document.createElement('a');
        newDiv.textContent = 'Link 2';
        newDiv.classList.add('button1');
        newDiv.classList.add('link2');
        newDiv.style.float = 'left';
        newDiv.href = "https://www.google.com/search?client=opera&q=" + list[winPos];
        newDiv.target = "blank";
        var container = document.querySelector('main');
        container.appendChild(newDiv);
    }
}
button.addEventListener('click', handleClick);