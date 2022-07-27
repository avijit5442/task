import {useState,useEffect} from "react"
import axios from "axios"
export default function ShoppingCartPractice(){
       const [categories,setCategories]=useState([])
       const [products,setProducts]=useState([])
       const [cart,setCart]=useState([])
       axios.get("https://fakestoreapi.com/products/categories")
       .then((response)=>{
        setCategories(response.data)
       })
      function handleClick(e){
          var id=e.target.id
          axios.get(`https://fakestoreapi.com/products/${id}`)
          .then(response=>{
            cart.push(response.data)
            console.log(response.data)
          })

      }
       function handleCategoryChange(e){
             loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
       }
       function loadProducts(url){
        axios.get(url)
        .then((response)=>{
         setProducts(response.data)
        })
       }
       useEffect(()=>{
         loadProducts("https://fakestoreapi.com/products")
       },[])
       function handleEmptyCart(){
           cart.length=0
       }
    return(
        <>
        <h2 className="text-center text-danger">Products</h2>
        <div className="container row">
            <div className="col-2">
                <h4>Categories</h4>
              <select onChange={handleCategoryChange}>
                {
                  categories.map(category=>
                    <option>{category}</option>)
                }
              </select>
            </div>
            <div className="col-8">
                {
                  products.map(product=>
                    <>
                    <span>
                      <h2>{product.title}</h2>
                      <img height="150px" width="150px" src={product.image}/>
                    </span>
                    <span>
                      <button id={product.id} onClick={handleClick} className="btn btn-danger mx-4">Add to cart</button>
                    </span>
                    </>
                      )
                }
            </div>
            <div className="col-2">
                <button className="bg-danger bi bi-cart w-100"></button>
                <table>
                    <tr>
                      {cart.map(item=>
                                  <>
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <img src={item.image} width="50" height="50" />
                                </td>
                                <td>
                                    <button className="btn btn-danger mx-4 btn-sm">
                                        <span id={item.id} className="bi bi-trash"></span>
                                    </button>
                                </td>
                            </tr>
                            <hr/>
                                  </>
                      )
                      
}
               </tr>
                      <button onClick={handleEmptyCart}className="text-danger">Empty Cart</button>
                </table>
                {
                  
                }
            </div>
        </div>
        </>
    )
}