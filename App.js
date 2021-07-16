class Product {
    constructor(name,price,year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
    
}

class UI {
    addProduct(product){
        const productList = document.getElementById("product-list")
        const element = document.createElement("div")
        element.innerHTML=`
            <div class="card text-center mb-4">
            
            <div class="card-body">
            <strong>Product Name</strong>: ${product.name}
            <strong>Product Price</strong>: ${product.price}
            <strong>Product Year</strong>: ${product.year}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
            </div>
        `
        productList.appendChild(element)
        
    }


    deleteProduct(element){
        if(element.name=="delete"){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage("Product deleted","danger")
        }
    }

    resetForm(){
        form.reset()
    }
    showMessage(message,cssClass){
        const div=document.createElement("div");
        div.className=`alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //showing in DOM
        const container = document.querySelector(".container")
        const app=document.querySelector("#App");
        container.insertBefore(div,app)
        
        setTimeout(function(){
            document.querySelector(".alert").remove()
        },3000)

        
    }
}

//DOM Events


const input = document.getElementById("name").value
const price = document.getElementById("price").value
const year = document.getElementById("year").value
//const btndelete=document.getElementsByName("delete")
const productList=document.getElementById("product-list")
const form = document.getElementById("product-form")


form.addEventListener("submit",(e)=>{
    
    console.log(input,price,year)
    const product= new Product(name,price,year)
    const ui = new UI()
    if(name===""){
        return ui.showMessage("Complete fields","danger")
    }
    ui.addProduct(product)
    ui.resetForm()
    ui.showMessage("Product Added","success")
    e.preventDefault()
})

productList.addEventListener("click",(e)=>{
    const ui = new UI()
    ui.deleteProduct(e.target)
})


