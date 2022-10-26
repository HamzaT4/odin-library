let myLibrary=[];
let inTitle=document.querySelector("#title");
let inAuthor =document.querySelector("#author");
let inPages = document.querySelector("#pages");
let inRead = document.querySelector("#read");
let addBookButton=document.querySelector(".create-btn");
let newBook = document.querySelector(".add-btn");
let inputContainer = document.querySelector(".inputs");
let backShadow = document.querySelector(".backdrop");
let bookContainer = document.querySelector(".books-container");




displayBook();
newBook.addEventListener('click',()=> {
    inputContainer.classList.add("show");
    backShadow.classList.add("show");

});
backShadow.addEventListener('click',(e)=> {

    inputContainer.classList.remove("show");
    backShadow.classList.remove("show");
});

document.addEventListener('keydown',(e)=>{
    if(e.key=='Escape'){
        inputContainer.classList.remove("show");
        backShadow.classList.remove("show");
    };
}

)

class bookConstructor {
    constructor(title,author,pages,read){
        this.title = title;
        this.author= author;
        this.pages= pages;
        this.read= Boolean(read);

    }

  info = ()=> `${this.title} is written by  ${this.author} with ,${this.pages} pages and ${this.read}`;
}

addBookButton.addEventListener('click',addBook);


function addBook() {
  let book = new bookConstructor(inTitle.value,inAuthor.value,inPages.value,inRead.checked);
  myLibrary.push(book);
  inTitle.value='';
  inAuthor.value='';
  inPages.value='';
  inRead.checked=false;
  inputContainer.classList.remove("show");
  backShadow.classList.remove("show");
  displayBook();
}



function displayBook(){
    bookContainer.innerHTML='';
    for (let i = 0; i < myLibrary.length; i++) {
        
        let card = document.createElement("div");
        let title = document.createElement("h4");
        let author = document.createElement("h4");
        let pages = document.createElement("h4");
        let read = document.createElement("button");
        let remove = document.createElement("button");
        card.setAttribute("obj",`obj${i}`)
        card.classList.add("book-card");
        if (myLibrary[i].read==true) {
            read.innerHTML='<i class="fa-solid fa-check"></i>';
            read.classList.add("done-btn");
        }else{
        read.innerHTML='<i class="fa-solid fa-x"></i>';
        read.classList.add("not-btn");
        }
        remove.style.width="80%";
        remove.classList.add("trash-can");
        remove.innerHTML='<i class="fa-solid fa-trash-can"></i>';
        remove.addEventListener('click',(e)=>{
            myLibrary.splice(e.path[1].getAttribute("obj").slice(-1),1)
           displayBook();
        });

        title.textContent= myLibrary[i].title;
        author.textContent="By: "+myLibrary[i].author;
        pages.textContent=myLibrary[i].pages+" Pages";

        read.addEventListener('click',(e)=> {
            myLibrary[e.path[1].getAttribute("obj").slice(-1)].read=!myLibrary[e.path[1].getAttribute("obj").slice(-1)].read;
            displayBook();
        });


        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(remove);
        bookContainer.appendChild(card);

        
    }



}

function removeBook(objNumber){
    
}





