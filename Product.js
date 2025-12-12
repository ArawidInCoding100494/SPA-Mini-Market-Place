const productRoot = document.getElementById("productRoot")


const setToLocal = (id, title, price, image) =>{
    const oldLocal = JSON.parse(localStorage.getItem("soldProduct")) || [] 
    oldLocal.push({id, title, price, image})
   localStorage.setItem("soldProduct", JSON.stringify(oldLocal))
   alert("product add to cart!!")
   
}


const getProducts = async() => {

try{
    const res = await fetch("https://fakestoreapi.com/products")
    const products = await res.json()
    
    products.forEach((p) =>{
        const card = document.createElement("div")
        card.className= "product__card"


        card.innerHTML =`
        <div class="image">
        <img src="${p.image}"/>   
        </div>

        <div class="card-main">
        <h3 class = "cardTitle"> ${p.title}</h3>
        <p class="cardDescription">${p.description}</p>
        <p class="cardPrice">$ ${p.price}</p>
        <button class = "btn"
        onClick="setToLocal(${p.id}, '${p.title.replace(/'/g, "")}', ${p.price}, '${p.image.replace(/'/g, "")}'); location.reload()" >
        add to cart
        </button>
        </div>
        `;


        productRoot.appendChild(card)
    })
} 
catch (err){
    productRoot.innerHTML = "<p>Products load is failed</p>"
}


}

getProducts()
window.setToLocal = setToLocal