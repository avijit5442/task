import React from 'react'
import {useState,useEffect} from 'react'

export default function ReactTest() {

  let loadCategoryApi=(categoryApi)=>{
    fetch(categoryApi)
    .then(res=>res.json())
    .then(json=>{
      json.unshift("all")
     setCatagroy(json)
    })
  }
  let getItemsCount=()=>{
    setCount(cartItems.length)
  }
  const [products,setProducts]=useState([]);
  const [Category,setCatagroy]=useState([])
  const [cartItems,setCartItems]=useState([])
  const [totalPrice,setTotal]=useState(0)
  

  const [cartItemsCount,setCount]=useState(0);
  
  
  useEffect(()=>{
    loadCategoryApi('https://fakestoreapi.com/products/categories')
 URL_products('https://fakestoreapi.com/products/')

  },[cartItems.length])
  let handleCategory=(e)=>{
  if (e.target.value=='all'){
    URL_products('http://fakestoreapi.com/products')
  }else {
    URL_products(`http://fakestoreapi.com/products/category/${e.target.value}`)
  }
  }
    if(!Category)return 'loading'



  let URL_products=(products_url)=>{
    fetch(products_url)
    .then(res =>res.json())
    .then(data=>{
     
      setProducts(data)
    })
  }
  
  let handleAddToCart=(e)=>{
  
   fetch(`https://fakestoreapi.com/products/${e.target.value}`)
   .then(res=>res.json()).then(data=>{
    cartItems.push(data)
    CalculateTotal()
    getItemsCount()
  })
  }
   let deleteItem=(e)=>{
    let id=e.target.id
  console.log(`${id} got deleted `)
    for (let i= 0;i<=cartItems.length;i++){
      if(id ==cartItems[i].id){
        cartItems.splice(0,1)
        setCount(cartItems.length)
        CalculateTotal()
      }
      
    } 
  }
  let CalculateTotal=()=>{
    let sum=0.0
    cartItems.map((item)=>{
        sum=sum+item.price
    })
    setTotal(sum)
    }
    console.log(cartItems)
  if (! products) return 'loading..!'
  if(!cartItems) return 'loading'
  return (
    <div>
     <>
        <div className=' navbar navbar-expand-lg bg-light p-3   '>
        <div className='container-fluid d-flex align-items-center '>
         <span className='nav-brand text-info '> ER Store</span>
        
          <button className="navbar-toggler  me-5 text-info" type='button' data-bs-toggle='collapse' data-bs-target='#div_id ' aria-controls='div_id' aria-expanded='false' aria-label='toggle  navigation' >
            
          </button>
             <div className="collapse navbar-collapse  " id='div_id'>
          <ul className='navbar-nav ms-auto  me-5 p-1 p-lg-2 links-nav '>
          <li className='nav-item '>
                   <a className='nav-link'href='#'>Home</a>
            </li>
            <li className='nav-item '>
                   <a className='nav-link'href='#'>Services</a>
            </li>
            <li className='nav-item '>
                   <a className='nav-link'href='#'>Contact</a>
            </li>
            <li className="nav-item dropdown  d-flex flex-column  w-25">
            <a className="nav-link dropdown-toggle align-self-center " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Select Category
            </a>
            <select className="dropdown-menu text-primary " onChange={handleCategory} aria-labelledby="navbarDropdown">
            {
             Category.map((cat)=>{
              return(
               
               
                    <option className='dropdown-item' value={cat}  key={cat}> {cat.toUpperCase()} </option>

               )
             })
            }
             </select> 
            </li>
            </ul>
           </div>
          <span ><a className=' text-danger ' href='#'></a></span>
        </div>
     
        </div>
      
   
 </>
     <div className='container-fluid '>
      <div className='row '>
        <div className='col-8'>

        
      <div className='container-fluid d-flex justify-content-center flex-wrap overflow-auto' style={{"height":"600px"}}>
       {
         
         products.map((item)=>{
           return (
             
          <div key={item.id} className='card  p-1 m-4 p-lg-0   h-3 d-flex justify-content-center align-items-center ' >
          <img className='card-img-top  ' src={item.image}  ></img>
         <div className='card-header '>{item.title}</div>
         <div className='card-body d-flex justify-content-center  ' > 
         <div className='card-price'> price : {item.price}$</div>

         </div>
         <button onClick={handleAddToCart} value={item.id} className='btn btn-danger w-100'>Add To Cart</button>
        </div>
       
           )
         })
     }
     </div>

     </div>
     <div className='col-4'>
     <span className='text-danger'>You Have {cartItemsCount} Items In Basket</span>
     <div className='container-fluid'>
      <table className='table table-hovered'>
        <thead>
          <tr>
          <th> Title</th>
          <th>Price</th>
          <th>Preview</th>
         
          </tr>
        </thead>
    <tbody >
     {
     (!cartItems)?( <div> 'No Choosen Items'</div>):(cartItems.map((cartItem)=>{
      return(
        <>
        <tr key={cartItem.id}></tr>
        <td>{cartItem.title}</td>
        <td>{cartItem.price}</td>
        <td ><img src={cartItem.image} height={'90px'} /></td>
        <td> <button onClick={deleteItem} id={cartItem.id}  className='btn btn-danger mt-2 ' style={{'backgroundColor':'red'}}>Delete</button></td> 
        </>
      )
    })
   ) 
     }
    </tbody>
    <tfoot>
      <td><h5>Total in Basket</h5>  </td>
      <td><h5></h5></td>
      <td>{totalPrice} $</td>
    </tfoot>
      </table>
     </div>
     
    </div>
     </div>
      </div>
     </div>
    
  )
  
    }

