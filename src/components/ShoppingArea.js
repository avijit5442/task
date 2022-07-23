import { useState, useEffect} from "react"
export default function ShoppingArea(){
    const[list ,setList]=useState([])
    const[products,setProducts]=useState([])
    const[cartItems,setCartItems]=useState([])
    
function LoadList(){
    fetch('http://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then (data=>{
        data.unshift(`all`)
    setList(data)
    })
}
function LoadProducts(url){
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        setProducts(data)
    })
    }
 /* 
  //not worked?
    function handleProductDetails(){
        products.map(product => 
            <div>
              {product.description}  
            </div>
            )
        }

  */ 
function handleCategoryChange(e){
    if(e.target.value ==='all'){
        LoadProducts("http://fakestoreapi.com/products")
    } else {
    LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
    }
}
function handleAddToCart(e){
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
    .then(response => response.json())
    .then(data=>{
        cartItems.push(data)  
    })
}
useEffect(()=>{
    LoadProducts("http://fakestoreapi.com/products")
    LoadList()
  },[])

  return(
    <>
    <div className="container w-100 bg-danger text-white d-flex justify-content-center align-items-center">
    <h4><em className="text-success">Shopping Zone</em></h4>
    </div>
    <div className="col-3 mt-1" style={{marginLeft:"146vh",position:"absolute"}}>
    <button className="btn btn-success w-100 bi bi-cart">Cart</button>
    <table>
         <tr>
          <td style={{fontWeight:"bold"}}>Name</td>
         </tr>
         {cartItems.map(item=>
             <tr>
               <td>{item.title}</td>
               <td><img src={item.image} width="100" height="100" /></td>
               <td>{item.price}</td>
               <td><span className="bi bi-trash"></span></td>
               <hr/>
             </tr>)} 
    </table>
    <table>
        <thead>
<tr>
    <th>Total:</th>
    <th></th>
    <th></th>
</tr>
        </thead>
    </table>
    <button className="btn btn-danger w-100">Empty Cart</button>
    </div>
        <div className="m-4 col-1">
        
           <select onChange={handleCategoryChange}>
            {list.map(Catagories=>
                <option  key={Catagories}>{Catagories}</option>)}
           </select>  
        </div>
       <div className=" container row">
        {products.map(product=>

<> <div className="col-6">
            <div key={product.id} id={product.id}>
                <h1>{product.title}</h1>
                <p className="text-sm">{product.description}</p>
                <h2>{product.price}</h2>
                <h5 className="bi bi-star-fill">{product.rating.rate}[{product.rating.count}]</h5> 
                <button id={product.id}className="btn btn-warning m-2" onClick={handleAddToCart}>Add to cart</button>
               <hr/>
            </div>
    </div>
    <div className="col-1">
               <img src={product.image} style={{height:"200px",width:"200px"}} />
    </div>
</>
    )}
    
            

</div>
          
        
    
    </>
)
}
