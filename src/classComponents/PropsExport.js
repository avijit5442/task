export default function PropsExport(props){
  
    return(
      <> 
      <table className="mx-2">
        <tbody>
          <tr>
            <td><h6>{props.user.address.city}</h6></td>
            <td> {props.user.address.zipcode}</td>
          </tr>
        </tbody>
      </table>

    </>
    )
}