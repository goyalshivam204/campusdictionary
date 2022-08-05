import React from "react";

function Forbidden(){
    return(
    <div style={{'background':'#fff'}}class="wrapper">
        <div class="box">
        <h1 style={{
            'margin':'0 0 1rem 0',
            'fontSize':'8rem',
            'textShadow':'0 0 6px #8b4d1a'
        }}>403</h1> 
        <p
        style={{
            'margin-bottom': '0.5em',
            'font-size': '1.75em',
            'color': '#ea8a1a',
            'paddingTop':'7em'  
        }}
        >Sorry, it's not allowed to go beyond this point!</p>
        <p><a 
        style={{
            'border-bottom': '1px dashed #837256',
            'font-style': 'italic',
            'text-decoration': 'none',
            'color': '#837256'
        }}
        href="/">Please, go back this way.</a></p>
        </div>
    </div>
    )
}
export default Forbidden;