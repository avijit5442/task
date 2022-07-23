import React from 'react'
import { Link} from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <ul className='list-unstyled h2  p-4' style={{backgroundColor:'lightblue',width:"32%",borderRadius:"20px"}}>
            <li><a href="facebook.com"><i class="bi bi-facebook"></i></a></li>
            <li><a href="youtube.com"><i class="bi bi-youtube"></i></a></li>
            <li><a href="instagram.com"><i class="bi bi-instagram"></i></a></li>
            <li><a href="twitter.com"><i class="bi bi-twitter"></i></a></li> 
        </ul>
        <br/>
        <br/>
        <Link to="/givereview"><button className='btn btn-primary btn-lg'>Give Review</button></Link>
        
        <Link to="/getreview"><button className='btn btn-primary btn-lg my-4'>Get Reviews</button></Link>
    </div>
  )
}
