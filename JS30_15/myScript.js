const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items'))||[];
const buttons = document.querySelectorAll('button');


function addItem(e){
  //e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text : text,
    done : false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));

  this.reset();
}

function toggleDone(e){
  if(!e.target.matches('input')) return;// skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i) =>{
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>    
      </li>
    `;
  }).join('');
}

function main(e){
  if(this.name === "clear"){
    items.length = 0;
  }if(this.name === "check"){
    items.forEach(item => {item.done = true;});
  }if(this.name === "uncheck"){
    items.forEach(item => {item.done = false;});
  }
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
buttons.forEach(button => button.addEventListener('click', main));


populateList(items, itemsList);