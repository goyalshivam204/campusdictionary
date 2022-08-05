import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchFilter(){
    const [APIdata,setdata]=useState([]);
    useEffect(()=>{
        axios.get("/api/v1/college/all").then(response=>{
            setdata(response.data);
        })
        // console.log(APIdata);
    })
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if(searchInput!==''){
        const filteredData=(APIdata.length!=0)?(APIdata.colleges.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })):0
        setFilteredResults(filteredData)
        }
        else{setFilteredResults(APIdata);}
    }
    
    return(
       <section className="py-4 container">
           <div className="row justify-center">
               <div className="col-10 mb-15">
                   <div className="mb-10 col-15 mx-auto text-left">
                   <i class="material-icons left">search</i>
                       <h5 cardData="form-lable h1">Search</h5> 
                       <input 
                       className="form-control mr-sm-2" 
                       type="text" 
                       placeholder="Type College Name Here"
                       aria-label="Search" 
                       onChange={(e) => searchItems(e.target.value)}/>
                   </div>
                   

               </div>
                
               {searchInput.length>1?(
                   filteredResults.map((item,index)=>{
                    return(
                        <div className="col-11 col-md-4 col-lg-3 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src={item.pic} className="card-img-top" alt="none"/>
                            <div className="card-body">
                                <h5 style={{
                                    'fontSize':'1.4rem',
                                    'fontFamily':'sans-serif',
                                    'color':'#34b4eb'
                                }}>{item.name}</h5>
                                <p style = {{color : "#8c378b"}} className="card-text">{item.description}</p>
                                <p style = {{color : "#e6b935",fontWeight:"700"}} className="card-text">Placements stats :{item.placements}</p>
                                <a style = {{color : "#e85a72"}} href={item.meet_link}>
                                    Schedule Meet<i class="material-icons left">send</i>
                                </a>
                                <br/>
                                <a  style = {{color : "#e85a72"}} href={item.Tableu}>
                                    Dashboard<i class="material-icons left">send</i>
                                 </a>
                            </div>
                        </div>
                     </div> 
                 )
                }
               )):(APIdata.length!=0)?APIdata.colleges.map((item,index)=>{
                   return(
                    <div className="col-11 col-md-4 col-lg-3 mx-0 mb-4">
                    <div className="card p-0 overflow-hidden h-100 shadow">
                        <img src={item.pic} className="card-img-top" alt="none"/>
                        <div className="card-body">
                            <h5 style={{
                                'fontSize':'1.4rem',
                                'fontFamily':'sans-serif',
                                'color':'#34b4eb'
                            }}>{item.name}</h5>
                            <p style = {{color : "#8c378b"}} className="card-text">{item.description}</p>
                            <p style = {{color : "#e6b935",fontWeight:"700"}} className="card-text">Placements stats :{item.placements}</p>
                            <a style = {{color : "#e85a72"}} href={item.meet_link}>
                                Schedule Meet<i class="material-icons left">send</i>
                            </a>
                            <br/>
                            <a  style = {{color : "#e85a72"}} href={item.Tableu}>
                                Dashboard<i class="material-icons left">send</i>
                             </a>
                        </div>
                    </div>
                 </div> 
                )
               }):<></>
            }



               
           </div>
       </section>
    )
}
export default SearchFilter;