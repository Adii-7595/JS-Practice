
let i = 0;
function changeContent() {
    let header = document.getElementById('header')
    let para = document.getElementById('para')

    
    if (i % 2 == 0) {

        header.innerText = 'this is a changed content !'
        para.innerText = 'change is eternal and inevitable.'
     

    } else {
        header.innerText = 'Event Handler need to change after clicking the below button'
        para.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatibus, quas dolores ad officia eligendi esse aperiam sint deleniti perferendis.'
       
    }
    i++
    console.log(i)


}

function toggleVisibility(){
    let img  = document.getElementById('image');
    img.classList.toggle('lost');
    console.log('img')
}


function changeBackground(){
    let div = document.getElementById('divv');
    div.addEventListener('mouseover', function(){
        let div = document.getElementById('divv');
        div.classList.add('bcg');
    })
    document.getElementById('divv').addEventListener('mouseout', function(){
        let div = document.getElementById('divv');
        div.classList.remove('bcg');
    })
}


document.addEventListener('keydown', function(event){
    if (event.key === 'c' || event.key === 'C'){
        toggleVisibility()
    }
    console.log(`key down : ${event.key}`)
})

document.addEventListener('keyup', function(event){
    let p = document.createElement('p')
    let div = document.getElementById('divv');
    p.innerHTML = event.key;
    div.appendChild(p)
    

})
document.getElementById('colorSelect').addEventListener('change', function(event) {
    let selectedColor = event.target.value; // Get the selected value
    let paragraph = document.getElementById('selected-color');
    paragraph.innerText = `Selected color: ${selectedColor}`; // Update the paragraph text
});


document.getElementById('my-form').addEventListener('submit', function(event){
    event.preventDefault()

    const data = new FormData(this)

    const obj = {}

    data.forEach((value,key)=>{
        obj[key]=value;
    });
    console.log('data prevented:', obj);
})


document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('Clicked element:', event.target.textContent);
    }
});

document.getElementById('addItemButton').addEventListener('click', function() {
    const newItem = document.createElement('li');
    const itemCount = document.querySelectorAll('#myList li').length + 1;
    newItem.textContent = `Item ${itemCount}`;
    document.getElementById('myList').appendChild(newItem);
});
