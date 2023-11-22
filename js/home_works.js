const eMailInput = document.querySelector('#gmail_input')
const eMailCheck = document.querySelector('#gmail_button')
const eMailResult = document.querySelector('#gmail_result')
const eMailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

eMailCheck.onclick = () => {
    if (eMailRegexp.test(eMailInput.value)){
        eMailResult.innerHTML = 'OK'
        eMailResult.style.color = 'green'
    }else {
        eMailResult.innerHTML = 'NOT OK'
        eMailCheck.style.color = 'red'
    }
}


const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let currentPosition = 0;

function moveBlock() {
    currentPosition += 2
    childBlock.style.left = currentPosition + 'px'
    if (currentPosition < parentBlock.offsetWidth - childBlock.offsetWidth){
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()





