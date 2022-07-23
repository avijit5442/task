import LoadCart from "./LoadCart"
import React from 'react'
export default class APIcalling extends React.Component{
    constructor(){
        super();
        this.state={types:[],
                    products:[]}
    }
   getCatagories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(data=>{
        data.unshift("All")
        this.setState({types:data
        })
    })
   }
   getProducts(){
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>{
        this.setState({products:data})
    })
   }
   handleCategoryChange(e){
    fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
    .then(response => response.json())
    .then(data=>{
        this.setState({
            products:data
        })
    })
   }
   handleLoadCart(){
        <LoadCart/>
   }
   componentDidMount=()=>{
    this.getCatagories()
    this.getProducts()
   }
    render(){
        return(
            <div className="container">
                <header className="bg-danger text-white text-center">
                    <h1>Needs</h1>
                </header>
                <section className="row">
                  <nav className="col-2">
                    <select onChange={this.handleCategoryChange.bind(this)}>
                       {this.state.types.map(items=>
                       <option  value={items} key={items}>{items}</option>)}
                    </select>
                    <button className="btn btn-primary m-2" onClick={this.handleLoadCart.bind(this)}>Cart</button>
                  </nav>
                    <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                     
                   {this.state.products.map(product =>
                    <>
                        <div key={product.id} className="col-6 p-2">
                            <div style={{height:"500px"}}>
                            <img src={product.image} height="200px"/>
                            <p style={{fontWeight:"bold"}}>{product.title}</p> 
                            <p style={{fontSize:"10px",color:"gray"}} >{product.description}</p>
                            <p style={{fontWeight:"bold",color:"orange"}} >{product.price}&#8377;</p>
                            <span className="bi bi-star-fill text-success"  >{product.rating.rate}[{product.rating.count}]</span>
                           </div>
                             <button className="btn btn-danger">Add to cart</button>
                             <hr/>  
                        </div>
                     </> 
                        )}
                   </main>
                </section>
            </div>            
        )
    }
}