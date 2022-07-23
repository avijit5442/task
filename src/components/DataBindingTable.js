export default function DataBindingTable(){
    var products=[
        {Name:"Avijit",course:"React",traits:["hii1","bye1"]},
        {Name:"Rajesh",course:"React",traits:["hii2","bye2"]},
        {Name:"Aditya",course:"Fullstack",traits:["hii3","bye3"]},
        {Name:"Akash",course:"Oracle",traits:["hii4","bye3"]},
        {Name:"Debasis",course:"Fullstack Java",traits:["hii5","bye5"]},
        {Name:"Satya",course:"Testing &Java",traits:["hii6","bye6"]},
        {Name:"Rahul",course:"Fullstack",traits:["hii7","bye7"]},
        {Name:"Swnapil",course:"Fullstack",traits:["hii8","bye8"]},
        {Name:"Himansu",course:"Cloud",traitss:["hii9","bye9"]},
        {Name:"Jitendra",course:"Python",traits:["hii0","bye0"]}
    ]
    return(
    <div className="container">
          <table className="table">
          <thead>
            <tr>
               <th>Name</th>
               <th>Course</th>
            </tr>            
          </thead>
          <tbody>
            {products.map(category=>
            <tr>
                <td key={category.Name}>{category.Name}</td>
                <td key={category.course}>{category.course}</td>  
            </tr>
            
            )}
            
          </tbody>
        </table>
        
    </div>
)
}

