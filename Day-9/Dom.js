

function changeContent() {

    let h1 = document.getElementById('header');
    let p = document.getElementById('para');

    h1.innerText = 'Dom Practice gets better'
    p.innerText = 'Dom Practice goes very well thanoyu for this opportunity.'

    let color = document.getElementsByClassName('first');

    for (let i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = 'yellow';
    }
}



function addDiv() {

    let div1 = document.createElement('div');
    div1.innerHTML = `<h1> HEllO EVERYBODY</h1><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quasi eos quibusdam voluptatum doloremque asperiores! Exercitationem dignissimos dolores blanditiis atque deserunt qui, minus fugiat optio assumenda mollitia consequuntur quos natus?
    </p>`

    document.body.appendChild(div1);


}
// window.onload = addDiv()


function changeList() {
    let listt = document.getElementById('list');
    let list = document.createElement('li')
    list.innerHTML = '<li>Wake</li>'

    listt.appendChild(list);
}


function removelast() {
    let div = document.getElementById('divv');

    if (div.lastChild) {
        div.removeChild(div.lastChild)
    }

}

function changeImage() {
    let img = document.getElementById('image');
    img.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1676321046449-5fc72b124490?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')


}

function addHighlight(){
    let div = document.getElementById('divv');
    div.classList.add('highlight')
}
function removeHighlight(){
    let div = document.getElementById('divv');
    div.classList.remove('highlight')
}
function toggleHighlight(){
    let div = document.getElementById('divv');
    div.classList.toggle('highlight')
}

document.getElementById('divv').addEventListener('mouseover', function(){
    let div = document.getElementById('divv');
    div.classList.add('highlight');
})
document.getElementById('divv').addEventListener('mouseout', function(){
    let div = document.getElementById('divv');
    div.classList.remove('highlight');
})