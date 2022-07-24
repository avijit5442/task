import AboutProduct from "./AboutProduct";
import BlogRegister from "./BlogRegister";
import "./Blogindex.css"
import { useState } from "react";
export default function Blogindex(){
  const [details,setDetails]=useState({Link:'',Rating:''})
  function handleLink(e){
    setDetails({
      Link:e.target.value,
      Rating:details.Rating
    })
  }
  function handleRating(e){
    setDetails({
      Link:details.Link,
      Rating:e.target.value
    })
  }
  function handleSubmit(){
   alert(JSON.stringify(details))
  }
   return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                    <a className="navbar-brand mx-2">BlogEra</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav" style={{marginLeft:"43%"}}>
                        <li className="nav-item active">
                          <a className="nav-link" ><i className="bi bi-house-fill"></i> </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">Features</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" >Blogging</a>
                        </li>
                        <ul>

                        </ul>
                      </ul>

                    </div>   
                    <i className="text-success bi bi-facebook h4"></i>
                    <i className="text-success bi bi-instagram h4 mx-3"></i>  
                    <i className="text-success bi bi-youtube h4"></i>   
        </nav>
        </header>
        <main>
            <div >
              <img src={"images/e-commerce.jpg"} style={{width:"100%",height:"70vh"}}/>
              <p className="h2" style={{marginLeft:"70%",position:"absolute",marginTop:"-56vh",color:"orange"}}>Give Creative Ideas,Feedback<p className="my-4"> about E-commerce</p></p>
            </div>
        </main>
        <h3 className="text-center text-danger">Some recomended products</h3>
        <hr/>
        <section>
            <div style={{width:"100%",height:"40vh"}}>
                <div className="row container-fluid">
                <div className="col-3 h4">
                   <p className="text-center" style={{fontFamily:"monospace"}}>Electronics</p> 
                   <img className="effect" src="images/e-commerce-electronics.webp" height="200px" width="300px"style={{borderRadius:"20px"}}/>
                </div>
                <div className="col-3 h4">
                  <p className="text-center" style={{fontFamily:"monospace"}}>Jewellery</p>
                  <img className="effect"  src="images/e-commerce-jewellery.jpg" height="200px" width="300px"style={{borderRadius:"20px"}}/>
                </div>
                <div className="col-3 h4">
                  <p className="text-center" style={{fontFamily:"monospace"}}>Men's Fashion</p>
                  <img className="effect" src="images/e-commerce-men's fashion.jpg" height="200px" width="300px"style={{borderRadius:"20px"}}/>
                </div>
                <div className="col-3 h4">
                  <p className="text-center" style={{fontFamily:"monospace"}}>Women's Fashion</p>
                  <img className="effect" src="images/e-commerce-women's fashion.jpg" height="200px" width="300px"style={{borderRadius:"20px"}}/>
                </div>

                </div>
            </div>
        </section>
        <section className="row">
          <div className="col-6 overflow-auto m-4" style={{height:"600px"}}>
            <AboutProduct/>     
          </div>
          <div className="col-5 text-center">
            <BlogRegister/>
          </div>
        </section>
        <hr/>
        <section >
        <div className="row" style={{width:"100%",height:"30vh"}}>
          <div className="col-6">
              <h3 className="text-center text-primary">Feedback</h3>
              <p>Give here review about best product for you </p>
              <form>
                <label className="mx-2 h2 text-danger">Product Link : </label>
                <input name="Link"onChange={handleLink} type="text"/>
                <label className="mx-2 h2 text-danger">Rating : </label>
                <input min="1" max="5" type="number"onChange={handleRating}/>
                <button onClick={handleSubmit} className="btn btn-warning mt-4" style={{marginLeft:"50vh"}}>Submit</button>
              </form>
          </div>

          <div className="col-6">
             <h3 className="text-center text-primary">Contact us</h3>
             <p><span className="h4">Address :</span>Rajendranagar,Delhi,564231</p>
             <p><span className="h4">Phone:</span> + 6785 564 565 43 , +911234567890</p>
             <p><span className="h4">Email:</span>support@blogera.com</p>
             <p>
              <span className="h4">Connect With us :</span>
              <i className="text-primary bi bi-twitter mx-4 h4"></i>
              <i className="text-primary bi bi-youtube h4"></i>
              </p>
          </div>
        </div>
        </section>
        <hr/>
        <footer className="text-center text-primary">
          <p>Blogera solutions pvt.ltd &copy;</p>
          <p>All rights reserved -2022</p>
        </footer>
      
        </>
    )
}