
let myLibrary =[];

let table = document.querySelector('table');
let add = document.querySelector('.add');
let exit = document.querySelector('.exit');

table.addEventListener('click' , deleteElement);
add.addEventListener('click' , popUp);
exit.addEventListener('click' , popUp);

function deleteElement(event){
    if(event.target.className == 'deleteBtn'){
      table.removeChild(event.target.parentElement);
    } 
    else if(event.target.className == 'Not_read'){
      event.target.className='read';
    }
}

function popUp(){
    let form = document.querySelector('.form_container');
    let blur = document.getElementById('blur');
    form.classList.toggle('popUp');
    blur.classList.toggle('blur');
}

function display(book , id){
  // show all books

    let table = document.querySelector('table');
    // create table row for book  
    let tr = document.createElement('tr');

    //add class book
    tr.classList.add('book');

    //intialize all complete
    tr.classList.add('complete');

    //assign id to row for selecting it
    tr.id = id;
    
    for(let data in book) {
        let td = document.createElement('td');

        td.className = 'table-data';


        td.innerText = book[data];

        //append it to the row
        tr.appendChild(td);

      };
      
      
      if(book.read=='Not yet'){
        //add not-yet class and complete button
        let complete = document.createElement('input');
        complete.type='checkbox';
        complete.className = 'checkbox';

        console.log(complete);
        tr.classList.toggle('not_yet');
        
        tr.appendChild(complete);
      }
        
        
      //add delete button
      btn = document.createElement('button');
      btn.className= "deleteBtn";
      btn.innerText = 'X';

      tr.appendChild(btn);

    table.appendChild(tr);
}

function Book(author , title , pages ,read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = (read =='true' ? 'read it' :'Not yet');
}

function addBookToLibrary(event) {
  event.preventDefault();

  let author = document.querySelector('input[id="author"]');
  let title = document.querySelector('input[id="title"]');
  let pages = document.querySelector('input[id="pages"]');
  let read = document.querySelector('select[id="read"]');

  let book = new Book(author.value , title.value , pages.value , read.value);

  myLibrary.push(book);

  display(book , myLibrary.length-1);

  author.value = "";
  title.value = "";
  pages.value = "";
  read.value = "true";
  popUp();
}


let btn = document.querySelector('form');
btn.addEventListener('submit' , addBookToLibrary);