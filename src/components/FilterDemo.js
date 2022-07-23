import { useState} from "react";
export default function FilterDemo(){
    const[Products,setProducts]=useState({});
    const[newProducts,setNewProducts]=useState({})
    function handleName(e){
        setProducts({
            Name:e.target.value,
            Quantity:Products.Quantity,
            City:Products.City,
            Stock:Products.Stock
            
        });
    }
    function handleQuantity(e){
        setProducts({
            Name:Products.Name,
            Quantity:e.target.value,
            City:Products.City,
            Stock:Products.Stock
            
        });
    }
    function handleCity(e){
        setProducts({
            Name:Products.Name,
            Quantity:Products.Quantity,
            City:e.target.value,
            Stock:Products.Stock
        });
    }
    function handleStock(e){
        setProducts({
            Name:Products.Name,
            Quantity:Products.Quantity,
            City:Products.City,
            Stock:e.target.checked,
        });
    }
    function handleRegisterClick(){
        setNewProducts(Products)
    }
   return(
    <>
    <div className="col-4 container">
    <div className="row">
        <label>Product Name</label>
        <input type="text" className="form-control" onChange={handleName}/>
        <label>quantity</label>
        <input className="form-control" onChange={handleQuantity} type="text"/>
        <label>City</label>
        <select className="form-select" onChange={handleCity}>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Odisha</option>
            <option>Hyderabad</option>
            <option>Pune</option>
        </select>
        <label>Stock</label>
        <p className="form-switch"><input className="form-check-input" onChange={handleStock} type="checkbox"/>Available</p>
        <button className="btn btn-primary" onClick={handleRegisterClick}>Register</button>  

    <div><dl>
            <dt>Name</dt>
            <dd>{newProducts.Name}</dd>
            <dt>quantity</dt>
            <dd>{newProducts.Quantity}</dd>
            <dt>City</dt>
            <dd>{newProducts.City}</dd>
            <dt>Availability</dt>
            <dd>{(newProducts.Stock==false)?"out of stock":"available"}</dd>
        </dl>
        </div>
    </div>  
    </div>         
    </>
   ) 
}