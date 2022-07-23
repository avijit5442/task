export default function DataBinding(){
    var m=[56,88,66,34,96];
    return (
        <h2 className="container">
        <label key={m[3]}>{(m[3]<=20)?"active":"inactive"}</label>
        </h2>
    )
}