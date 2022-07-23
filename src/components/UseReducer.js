import { useReducer } from "react";
var initialstate={count:0}
function reducer(state,action){
          switch(action.type){
            case "like":
            return {count:state.count+1}
            case "Unlike":
            return {count:state.count-1}
          }
}
export default function useReducer2() {
var[state,dispatch]=useReducer(reducer,initialstate)
function handleLike(){
    dispatch({type:"like"})
}
function handleUnlike(){
    dispatch({type:"Unlike"})
}
  return (
    <div>
      <button className="btn btn-primary" onClick={handleLike}>Like</button>
      <button className="btn btn-primary" onClick={handleUnlike}>Unlike</button>
      <div>{state.count}</div>
    </div>
  )
}
