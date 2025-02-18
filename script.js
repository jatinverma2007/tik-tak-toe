const grid = document.querySelectorAll(".box");
let turn = document.querySelector("#turn")
let won = document.querySelector("#winner")
let reset_btn = document.querySelector("#reset")


let type = 0
let arr = ["1","2","3","4","5","6","7","8","9"]

reset_btn.addEventListener("click" , () => {
    reset()
})

grid.forEach( (ele) => {
    ele.addEventListener("click" , () => {
        let index = Number(ele.getAttribute("id").slice(3))
        let sign = cahage_innerText(ele,index)
        if (sign){
            let nextSign = type % 2 === 0 ? "❌" : "⭕"
            turn.innerText = nextSign+" "+"Turn"
            let winner = game(arr,sign)
            if (winner){
                won.innerText = sign+" "+"Won!"
                won.style.color = "#388E3C"
                setTimeout(() => {
                    reset()
                }, 1000);
                
            }else if (type == 9){
                won.innerText = "Draw"
                setTimeout(() => {
                    reset()
                }, 1000);
            }
        }
    })
})

const cahage_innerText = (ele,index) => {
    if (!(arr[index] == "✘" || arr[index] == "ø")){
        let sign = type%2==0 ? "❌" : "⭕"
        ele.innerText = sign
        arr[index] = sign
        type+=1
        return sign
    }
    return
}

const game = (arr,sign) => {
    if (
        (arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] === arr[4] && arr[4] === arr[6])
    ){
        return sign;
    }
    return false
}
const reset = () => {
    arr = ["1","2","3","4","5","6","7","8","9"]
    type = 0
    grid.forEach( (elee) => {
        elee.innerText = ""
    })
    turn.innerText = "❌ Turn";
    won.innerText = "Start The Game"
    won.style.color = "#ffeb3b"
}