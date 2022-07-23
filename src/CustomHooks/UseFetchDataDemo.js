import {UseFetchData} from "./UseFetchData";

export default function UseFetchDataDemo()
{
    const [data] = UseFetchData("http://fakestoreapi.com/products/2");

    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <ol>
                {
                    data.data.map(product=>
                        <li>{product.title}</li>
                        )
                }
            </ol>
        </div>
    )
}