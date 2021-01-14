const fs = require("fs");




const all = document.querySelector('.container');
const number = document.querySelector('.number');
const supp = document.querySelector('.supp');
console.log(number);
console.log(number.value)



all.addEventListener('click', e=>{
    if(e.target = 'input'){
        let html = e.target.value;
        if(html != undefined){
            number.value += html;
        }
    }
})

supp.addEventListener('click', e=>{
    let x = number.value.split("");
    x.pop();
    number.value = x.join('');
})

// call number
function call() {
  let num = document.getElementById("dial").value;
  console.log(num);
  let path = "./src/memory/history.txt";
  var date = new Date();
  var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();



  if (fs.existsSync(path)) {

    fs.appendFile(
      path,
      num + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + today + " " + time + " \n",
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  } else {
    fs.writeFile(path, num + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + today + " " + time + " \n", (err) => {
      if (err) throw err;

    });
  }
};

// save contact
function store() {
  let num = document.getElementById("dial").value;
  let name = document.getElementById("name").value;
  let path = "./src/memory/contacts.txt";



  if (fs.existsSync(path)) {

    fs.appendFile(path, name + " " + num + " \n", function (err) {
      if (err) {
        console.log(err);
      }
    });
  } else {
    fs.writeFile(path, name + " " + number + " \n", (err) => {
      if (err) throw err;
    });
  }

  document.getElementById("dial").value="";
  document.getElementById("name").value="";
}


//show cantacts
function contacts() {
  let path = "./src/memory/contacts.txt";

  fs.readFile(path, "utf-8", (err, contacts) => {
    if (err) {
      alert(err.message);
      return;
    }


    let ul = document.querySelector(".list-group");
    for (var i = 0; i < contacts.toString().split(/\r?\n/).length - 1; i++) {

      ul.innerHTML +=`
      <li class="list-group-item">
      <i class="fas fa-user-circle"></i>
          ${contacts.toString().split(/\r?\n/)[i]}
      </li>
      `;
    }
  });
}


//show History
function history() {
  let path = "./src/memory/history.txt";

  fs.readFile(path, "utf-8", (err, history) => {
    if (err) {
      alert(err.message);
      return;
    }


    let ul = document.querySelector(".list-group");
    for (var i = 0; i < history.toString().split(/\r?\n/).length - 1; i++) {

      ul.innerHTML +=`
      <li class="list-group-item">
          ${history.toString().split(/\r?\n/)[i]}
      </li>
      `;
    }
  });
}
