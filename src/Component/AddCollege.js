import React, { useState,useRef, useEffect  } from "react";
import { useHistory} from "react-router-dom";
import {app} from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => isMounted.current = false;
  }, []);

  return isMounted;
}
function AddCollege(){
  
    let history=useHistory();
    const [title,settitle]=useState("");
    const [body,setbody]=useState("");
    const [photo,setphoto]=useState("");
    const [meet_link,setlink]=useState("");
    const [placement,setplacement]=useState("");
    const [url,setUrl]=useState("");


    const upload = (e) => {
      const file = e.target.files[0];
      const storageRef = app.storage().ref()
      const fileRef = storageRef.child(file.name)
      fileRef.put(file).then(() => {
        console.log("Uploaded a file")
      })
    }

    useEffect(()=>{
      if(localStorage.getItem("user")=="HR"){
        toast.error("HR is not have Access");
        history.push('/forbidden');
      }
      if(url){
        fetch("/api/v1/college/new",{
           method:"post",
           headers:{
               "Content-Type":"application/json",
               "Authorization":localStorage.getItem("jwt")
           },
           body:JSON.stringify({
            name:title,
            description:body,
            placements:placement,
            pic:url,
            meet_link
           })
       }).then(res=>res.json())
       .then(data=>{
          if(data.error){
            toast.error(data.error);
          }
          else{
            toast.success("College Registered Successfully");
            history.push('/')
          }
       }).catch(err=>{
          console.log(err)
       })
   }
   },[url])

    const postdetails=()=>{
      
      const data=new FormData();
      data.append("file",photo);
      data.append("upload_preset","campusdict");
      data.append("cloud_name","maheshrana");
      fetch("https://api.cloudinary.com/v1_1/maheshrana/image/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      console.log(data.url);
      setUrl((data.url))
      })
      .catch(err => console.log(err))
    }
    
    
    return(
        <div className="card input-filed" style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
            }}>
            <input type="text" 
            placeholder="Enter Your College Name"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            ></input>
            <input type="text" placeholder="Enter Your College Description"
            value={body}
            onChange={(e)=>setbody(e.target.value)}
            ></input>
            <input type="text" placeholder="Enter Your College placement stats i.e placed/total"
            value={placement}
            onChange={(e)=>setplacement(e.target.value)}
            ></input>
            <input type="text" placeholder="Enter Your Meeting link"
            value={meet_link}
            onChange={(e)=>setlink(e.target.value)}
            ></input>
            <div class="file-field input-field">
            <div class="btn waves-effect #64b5f6 clrbtn">
              <span>Upload Your College Image</span>
              <input type="file"
              onChange={(e)=>setphoto(e.target.files[0])}
              />
            </div>
            
            
            <div class="file-path-wrapper">
               <input class="file-path validate" type="text"/>
            </div>

            </div>
            <div class="file-field input-field">
            <div class="btn waves-effect #64b5f6 clrbtn">
              <span>Upload Your College Placements Data</span>
              <input type="file" onChange={upload}/>
            </div>
            <div class="file-path-wrapper">
               <input class="file-path validate" type="text"/>
            </div>

            </div>
            <button  onClick={postdetails}className="clrbtn btn waves-effect #64b5f6  " type="submit" name="action">
              Submit Info
            </button>
        </div>
    );
}
export default AddCollege;