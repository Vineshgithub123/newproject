

// index file script
// adding an array of items



let data = ["delectus aut autem","quis ut nam facilis et officia qui","fugiat veniam minus","et porro tempora","laboriosam mollitia et enim quasi adipisci quia provident illum","qui ullam ratione quibusdam voluptatem quia omnis","illo expedita consequatur quia in","quo adipisci enim quam ut ab","molestiae perspiciatis ipsa",
"illo est ratione doloremque quia maiores aut","vero rerum temporibus dolor","ipsa repellendus fugit nisi","et doloremque nulla",
"repellendus sunt dolores architecto voluptatum","ab voluptatum amet voluptas","accusamus eos facilis sint et aut voluptatem","quo laboriosam deleniti aut qui","dolorum est consequatur ea mollitia in culpa",
"molestiae ipsa aut voluptatibus pariatur dolor nihil","ullam nobis libero sapiente ad optio sint","suscipit repellat esse quibusdam voluptatem incidunt","distinctio vitae autem nihil ut molestias quo","et itaque necessitatibus maxime molestiae qui quas velit","adipisci non ad dicta qui amet quaerat doloribus ea",
"voluptas quo tenetur perspiciatis explicabo natus","aliquam aut quasi",]

let list =  document.getElementById("list");
data.forEach((item) => {
        let ary = document.createElement("li");
        ary.innerText = item;
        list.appendChild(ary);
      });


// Add a "checked" symbol when clicking on a list item

var list1 = document.querySelector('li');
list1.addEventListener('click', function(ev) {
  if (ev.target.tagName == 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// promise for clickin 5
let getchecked = new Promise(function(resolve,reject){

    // let notable = document.getElementById("list")
    let notable = false;
    if(!notable){


        resolve(" 5 task");
    }
    else{
        reject("no task")
    }
    
});

getchecked.then(function(fromresolve){
    alert("You have completed" + fromresolve)


}).catch(function(fromreject){
   alert("not checked" + fromreject)
})


