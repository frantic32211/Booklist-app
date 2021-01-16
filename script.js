var bookName = document.querySelector("#name");
var bookAuthor = document.querySelector("#author");
var bookTitle = document.querySelector("#title");


const sub = document.querySelector("#form")
sub.addEventListener("submit", e => {
    e.preventDefault();
    if (bookName.value == "" || bookAuthor.value == "" || !bookTitle.value ){
        alert("Please enter all the details")
        } else {
       listDisplay();
       bookName.value = ""
       bookAuthor.value = ""
       bookTitle.value = ""
       }
})

const listDisplay = () => {
    const myLi = document.createElement("div")
    const liOne = document.createElement("p")
    const liTwo = document.createElement("p")

    liOne.textContent = bookName.value
    liTwo.textContent = bookAuthor.value
    liOne.classList.add("listOne")
    liTwo.classList.add("listTwo")
    myLi.classList.add("myList")

    const image = document.createElement("img")
    const im = window.URL.createObjectURL(bookTitle.files[0])
    image.setAttribute("src", im)
    image.classList.add("listTitle")

    const close = document.createElement("img")
    close.setAttribute("src", "https://image.flaticon.com/icons/svg/753/753345.svg" )
    close.classList.add("close")
    
    close.addEventListener("click", e => {
        const myLi = e.target.parentNode;
        display.removeChild(myLi)
       })

    myLi.appendChild(image)
    myLi.appendChild(close)
    myLi.appendChild(liOne)
    myLi.appendChild(liTwo)

    document.body.appendChild(myLi)
    document.querySelector("#display").appendChild(myLi)

}
