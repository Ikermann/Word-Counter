const input = document.getElementById("input")

const wordCount = (textarea) =>
     textarea.split(" ").filter(word => word.length > 0)

const check = () => {
    const value = input.value
    const count = wordCount(value)

document.getElementById("display").textContent = count.length
}


document.getElementById("input").addEventListener('click' check)




