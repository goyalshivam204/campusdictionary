import React,{useRef,useEffect} from "react";
const {tableau}=window;
function Map(){
    const ref=useRef(null);
    const url="https://public.tableau.com/views/placementacrossIndia/Dashboard1?:language=en-US&:retry=yes&:display_count=n&:origin=viz_share_link"

    const initViz=()=>{
        new tableau.Viz(ref.current,url,{
            margin: "auto",
        })
    }
    useEffect(initViz,{});
    return(
       <div ref={ref}/>
        
    )
}
export default Map;