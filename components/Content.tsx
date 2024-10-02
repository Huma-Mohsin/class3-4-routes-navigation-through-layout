interface PropData{
    text:string,
    style?:React.CSSProperties,
}

function Content(props:PropData){

    return(
        <div><h1 style={props.style}>{props.text}</h1></div>
    )

}
export default Content