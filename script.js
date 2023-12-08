let name=document.querySelector("name")
let searchInput=document.querySelector("#axtaris")
let table=document. querySelector("table")
fetch(` https://northwind.vercel.app/api/products`)
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        table.innerHTML +=
        ` <tr>
                <td>${element.id} </td>
                <td>${element.name}</td>
                <td>${element.unitsInStock}</td>
                <td>${element.unitPrice}</td>
                <td><button class="edit">edit</button></td>
                <td><button class="delete">delete</button></td>
      </tr>`
    });
    searchInput.addEventListener("input",(e)=>{
   let DataS=data.filter(element=>{
    return element.name.toLowerCase().startsWith((e.target.value).toLowerCase());
   })
          console.log(DataS);
    })
    })
