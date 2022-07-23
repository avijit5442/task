import { useState, useEffect } from "react";

export default function ShoppingComponent()
{
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    
    function GetCartItemsCount(){
        setItemsCount(cartItems.length);
    }

    function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then(response=> response.json())   
        .then(data=> {
            data.unshift('all');
            setCategories(data);
        })
    }

    function LoadProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products")
    },[cartItems.length])

    function handleCategoryChange(e){
        if(e.target.value=='all'){
            LoadProducts("http://fakestoreapi.com/products")
        } else {
        LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }

    function handleAddtoCart(e){
            alert("Item Added to Cart");
            fetch(`http://fakestoreapi.com/products/${e.target.id}`)
            .then(response=> response.json())
            .then(data=>{
                cartItems.push(data);
                GetCartItemsCount();
            })
           
    }


    function emptyCart(){
        cartItems.length = 0;
        setItemsCount(0)
    }

    //Total price
    let count=0;
    cartItems.map(item=>
        count+=item.price)

    function handleRemoveItem(e){
       for (let i= 0;i<=cartItems.length;i++){
        if(e.target.id==cartItems[i].id){
            let arrindex=cartItems.indexOf(e.target.id);
            alert(arrindex);
            cartItems.splice(arrindex,2)
           setItemsCount(cartItems.length)
              }
        }
    }
    function handledescription(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
            .then(response=> response.json())
            .then(data=>{
                e.product.id.push(data);
                GetCartItemsCount();
            })
    }
    return(
        <div className="container-fluid">
          <header className="bg-danger text-white text-center p-2">
             <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
          </header>
          <section className="row mt-3">
            <nav className="col-2">
               <div>
                <label>Select a Category</label>
                <div>
                    <select onChange={handleCategoryChange} className="form-select">
                        {
                            categories.map(category=>
                                <option value={category} key={category}>{category.toUpperCase()}</option>
                                )
                        }
                    </select>
                </div>
               </div>
            </nav>
            <main className="col-6 d-flex flex-wrap overflow-auto" style={{height:'600px'}}  >
                {
                    products.map(product=>
                        <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                            <img id={product.id} onClick={handledescription} src={product.image} className="card-img-top" height="150" />
                            <div className="card-header" style={{height:'160px'}}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-success"></span>
                                        {product.rating.rate} <span>[{product.rating.count}]</span>
                                    </dd>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                    <span className="bi bi-cart4"></span> Add to Cart
                                </button>
                            </div>
                        </div>
                        )
                }
            </main>
            <aside className="col-4">
                <button className="btn btn-danger w-100">
                    <span className="bi bi-cart3"></span> [{itemsCount}] Your Cart Items
                </button>
                <table className="table table-hover">
                  <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        cartItems.map(item=>
                        
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <img src={item.image} width="50" height="50" />
                                </td>
                                <td>
                                    <button className="btn btn-danger">
                                        <span id={item.id} onClick={handleRemoveItem} className="bi bi-trash"></span>
                                    </button>
                                    

                                </td>
                            
                            </tr>
                            )  
                    }
                    <tr>
                        <td>Total :</td>
                        <td>{count.toFixed(2)}</td>
                    </tr>
                <tr type="button" className="container-fluid btn btn-danger" onClick={emptyCart} style={{width:"480px",position:"absolute"}}>Empty Cart</tr>
                  </tbody>
                  
                  
        

                </table>
            </aside>
          </section>
        </div>
    )
}