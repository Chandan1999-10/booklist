const nameBook=document.querySelector("#title");
const authBook=document.querySelector("#Author");
const isbnBook=document.querySelector("#ISBN");
const list=document.querySelector("#bookList");
const butt=document.querySelector("#btnn");

butt.addEventListener("click",function(){
	if(nameBook.value=="" && authBook.value=="" && isbnBook.value==""){
		alert("invalid entry")
	}
	else{

		const bookRow=document.createElement("tr")
		const newTile=document.createElement("th");

		newTile.innerHTML=nameBook.value;
		bookRow.appendChild(newTile);
		const newauth=document.createElement("th");

		newauth.innerHTML=authBook.value;
		bookRow.appendChild(newauth);
		const newIsbn=document.createElement("th");

		newIsbn.innerHTML=isbnBook.value;
		bookRow.appendChild(newIsbn);

list.appendChild(bookRow);

	}
})