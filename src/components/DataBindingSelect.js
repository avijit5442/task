import { useState } from "react";
export default function DataBindingSelect(){
    const[catagories]=useState([
        {Brands:"Apple",specification:["RAM:1GB","ROM:16GB","Camera:10MP"]},
        {Brands:"Honor",specification:["RAM:2GB","ROM:32GB","Camera:20MP"]},
        {Brands:"Nokia",specification:["RAM:3GB","ROM:32GB","Camera:25MP"]},
        {Brands:"sony",specification:["RAM:4GB","ROM:64GB","Camera:40MP"]}
    ])
    return(
        <select>
            {catagories.map(type=>
                <optgroup key={type.Brands} label={type.Brands}>
                 {type.specification.map(product=>
                    <option key={product}>${product}</option>)}
                </optgroup>)}
        </select>
    )
}