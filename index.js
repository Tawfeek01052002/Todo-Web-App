const print = () => {
    if (localStorage.key('arr') != null) {
        let arr = JSON.parse(localStorage.getItem('arr'));
        // console.log(arr);
        let div = document.getElementById('tasks');
        for (item in arr) {
            ihtml = `<p class="task">${arr[item]}</p>`;
            div.innerHTML += ihtml;
        }
    }
    else {
        let arr = [];
        localStorage.setItem('arr', JSON.stringify(arr))
    }
}

const add = () => {
    let inp = document.getElementById('input').value;
    document.getElementById('input').value = "";
    let arr = JSON.parse(localStorage.getItem('arr'));
    if (inp != "") {
        arr.unshift(inp);
        localStorage.setItem('arr', JSON.stringify(arr));
        let div = document.getElementById('tasks');
        div.innerHTML = "";
        print();
    }
}


const clears = () => {
    localStorage.clear();
    let arr = [];
    localStorage.setItem('arr', JSON.stringify(arr))
    let div = document.getElementById('tasks');
    div.innerHTML = "";
}