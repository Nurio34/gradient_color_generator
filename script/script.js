
const selectInp = document.querySelector(".direction select")
const colorInps = document.querySelectorAll(".color-inputs input")
const colorEl = document.querySelector(".color-box")
const textAreaInp = document.querySelector(".textarea textarea")
const refreshBtn = document.querySelector(".refreshBtn")
const copyBtn = document.querySelector(".copyBtn")

let direction = "to left";
let color = "pink,purple"

    console.log(refreshBtn);


    selectInp.addEventListener("input", ()=> {

        direction = "to " + selectInp.value
        colorEl.style = `background : linear-gradient(${direction},${color})`
        textAreaInp.innerText = `background : linear-gradient(${direction},${color})`
    })

    colorInps.forEach(inp => inp.addEventListener("input", ()=> {

        color = `${colorInps[0].value},${colorInps[1].value}`
        
        colorEl.style = `background : linear-gradient(${direction},${color})`
        textAreaInp.innerText = `background : linear-gradient(${direction},${color})`
    }))



const colorArr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

    refreshBtn.addEventListener("click", ()=>{

        let randomColor1 = "#"
        let randomColor2 = "#"

        for(let i=0;i<6;i++) {
            const randomNum1 = Math.floor(Math.random()*colorArr.length)
            const randomNum2 = Math.floor(Math.random()*colorArr.length)

            randomColor1 += colorArr[randomNum1]
            randomColor2 += colorArr[randomNum2]
        }

        color = `${randomColor1},${randomColor2}`
        colorEl.style = `background : linear-gradient(${direction},${color})`
        textAreaInp.innerText = `background : linear-gradient(${direction},${color})`

        colorInps[0].value = randomColor1
        colorInps[1].value = randomColor2
    })

    copyBtn.addEventListener("click",()=> {
        const value = textAreaInp.value
        navigator.clipboard.writeText(value)
        copyBtn.innerText = "Code Copied"
        setTimeout(() => {
            copyBtn.innerText = "Copy Code"
        }, 2000);
    })


    

