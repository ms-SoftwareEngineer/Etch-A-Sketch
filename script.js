const container = document.querySelector('.container');
const size = document.querySelector('#interval')
const button = document.querySelector('.enter')
size.addEventListener('click',(e)=>{
    e.target.placeholder = ""
})
button.addEventListener('click',()=>{
    let row = size.value
    let column = size.value
    console.log(row,'X',column)
    container.style.display = "flex"
    container.style.flexWrap = "wrap"
    for(let i = 0; i < row * column; i++){
        const div = document.createElement('div')
        div.style.display = "inline-flex"
        div.style.width = `calc(100%/${row})`
        div.style.height = `calc(100%/${column})` 
        div.style.margin = "0"
        div.style.padding = "0"
        container.append(div)
    }
})

const num = []
const sketch = document.querySelector('.sketch')
const eraser = document.querySelector('.eraser')
const clear = document.querySelector('.clear')
for(let i = 0; i <= 255; i++){
    num.push(i)
}

function generateRandomColors(){
    return num[Math.floor(Math.random()*num.length)]
}

sketch.addEventListener('click',() => {
    const divs = document.querySelectorAll('.container div')
    divs.forEach((div) => {
        div.addEventListener('mouseover',() => {
            let r = generateRandomColors()
            let g = generateRandomColors()
            let b = generateRandomColors()
            div.style.backgroundColor = `rgb(${r},${g},${b})`
        })
    })
})

eraser.addEventListener('click',() => {
    const divs = document.querySelectorAll('.container div')
    divs.forEach((div) =>{
        div.addEventListener('mouseover',() => {
        div.style.backgroundColor = "transparent"
    })
})
})

clear.addEventListener('click',() => {
    container.textContent = ""
})






