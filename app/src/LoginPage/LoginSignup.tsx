import React,{useState,useEffect} from "react"

import './LoginSignup.css'

import user_icon from "../assets/person.png"
import email_icon from "../assets/email.png"
import password_icon from "../assets/password.png"
import gender_icon from "../assets/1249262.png"
import race_icon from "../assets/100-No-Racism.jpg"
import age_icon from "../assets/6234680.png"
import occ_icon from "../assets/occu.png";
import org_icon from "../assets/organization-hierarchy-3_47983.png";

import {jwtDecode} from 'jwt-decode'
import { GoogleLogin } from "@react-oauth/google"
import axios from "axios"



function LoginSignup(){
    const clientId = '169283847790-f4cslu2itat2eq8l57nga5g3mo0oap55.apps.googleusercontent.com';
    const [action,setAction] = useState("Login");
    const [type,setType] = useState("Youth");
    const [authenticate,setAuthenticate] = useState('');
    



    const [youth,setYouth]=useState(true);
    const [form,setForm]=useState({
        name:'',
        email:'',
        password:'',
        race:'',
        age:'',
        gender:'',
        occupation:'',
        org:''
    })
    function handleInput(event){
        const { name, value } = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));

    }
    async function  checkLogin() {
        if(type==='Youth'){
        const response = await fetch('http://3.22.180.190:3000/accounts/youth?email='+form.email+'&password='+form.password+'&type='+(type.toLowerCase()));
        const resp=await response.json();
        
        if(resp.data.length>0){
            
            setAuthenticate(resp.data[0].youthId)
            sessionStorage.setItem("authToken",resp.data[0].youthId)
            sessionStorage.setItem("user",JSON.stringify(resp.data[0]))
            sessionStorage.setItem("type","youth")
           return true;
        }
        else{
            setAuthenticate("--")
            
            return false;
        }

    }
    else{
        const response = await fetch('http://3.22.180.190:3000/accounts/volunteer?email='+form.email+'&password='+form.password+'&type='+(type.toLowerCase()));
        const resp=await response.json();
        if(resp.data.length>0){
            setAuthenticate(resp.data[0].volunteerId)
            sessionStorage.setItem("authToken",resp.data[0].volunteerId)
            sessionStorage.setItem("user",JSON.stringify(resp.data[0]))
            sessionStorage.setItem("type","volunteer")
           return true;
        }
        else{
            setAuthenticate("--")
            return false;
        }
    }
    }

    async function checkAndSignUp() {
        const forms={
         id:"randomID",
         action:"profile", 
         data:{
            profile_data:{
                userName:form.name,
                fullName:form.name,
                email:form.email,
                password:"password-to-be-changed",
                type:type.toLowerCase(),
                age:form.age,
                sex:form.gender,
                race:form.race,
                occupation:form.occupation,
                org:form.org
            }
         }  
        }
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(forms)
        }
        
        const response = await fetch('http://3.22.180.190:3000/accounts/'+type.toLowerCase(),options)
        const resp=await response.json()
        if(resp.code==200){

            console.log(resp.data.data.youthId)
            if(type==='Youth'){
            sessionStorage.setItem("authToken",resp.data.data.youthId)
            sessionStorage.setItem("user",JSON.stringify(resp.data.data))
            sessionStorage.setItem("type","youth")
        }
        else{
            sessionStorage.setItem("authToken",resp.data.data.volunteerId)
            sessionStorage.setItem("user",JSON.stringify(resp.data.data))
            sessionStorage.setItem("type","volunteer")
        }
            return true;
        }
        else{
            return false;
        }
       
        
    }
    async function checkAndSignUpGoogle(data){
        const forms={
            id:"randomID",
            action:"profile", 
            data:{
               profile_data:{
                   userName:data.name,
                   fullName:data.name,
                   email:data.email,
                   password:data.name,
                   type:type.toLowerCase(),
                   age:0,
                   sex:'--',
                   race:'--',
                   occupation:'--',
                   org:'--'
               }
            }  
           }
           const options={
               method:'POST',
               headers:{
                   'Content-Type':'application/json'
               },
               body: JSON.stringify(forms)
           }
           sessionStorage.setItem('googleImg',data.picture)
           const respo = await fetch(data.picture); // Replace with the actual image URL
           if (!respo.ok) {
             throw new Error('Failed to fetch image');
           }
           const blob = await respo.blob();
           const reader = new FileReader();
           let picBlob=null;
           reader.onloadend = () => {
             picBlob=reader.result;
           };
           reader.readAsDataURL(blob);

           const response = await fetch('http://3.22.180.190:3000/accounts/'+type.toLowerCase(),options)
           const resp=await response.json()

           if(resp.code==200){
   
               console.log(resp.data.data.youthId)
               if(type==='Youth'){
               sessionStorage.setItem("authToken",resp.data.data.youthId)
               sessionStorage.setItem("user",JSON.stringify(forms.data.profile_data))
               sessionStorage.setItem("type","youth")
               const formData = new FormData();

               if (picBlob !== null) {
                 formData.append('file', picBlob);
           
                 const authKey = sessionStorage.getItem("authToken");
                 const result = await axios.post('http://3.22.180.190:3000/upload-pics/' + authKey, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                   .then()
                   .catch(e => { console.log(e) });
               }
           }
           else{
               sessionStorage.setItem("authToken",resp.data.data.volunteerId)
               sessionStorage.setItem("user",JSON.stringify(forms.data.profile_data))
               sessionStorage.setItem("type","volunteer")
           }
               return true;
           }
           else{
               return false;
           }
   
    }

    return (
        <div className="bg">
            <img className="img" src="../Images/LoginPage.jpeg" alt="" />
            <h1 id="Y">Y</h1>
        <div className="container">
            <div className="header">
                <div><p className="text">Welcome to Youth'opia</p></div>
                <div className="text1">{action} as a {type}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" name="name" defaultValue={form.name} onChange={handleInput} placeholder="Name"/>
                </div>}
               
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="text" name="email" defaultValue={form.email} onChange={handleInput} placeholder="E-Mail" required/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name="password" defaultValue={form.password} onChange={handleInput} placeholder="Password" required/>
                </div>
                { youth &&action==="Sign Up"&&(
                <div className="input">
                    <img src={age_icon} style={{width:20,height:20}} alt=""/>
                    <input type="text" name="age" defaultValue={form.age} onChange={handleInput} placeholder="Age" required/>
                </div>
            )}
            
            { youth &&action==="Sign Up" &&(
                <div className="input">
                    <img src={race_icon} style={{width:20,height:20}} alt=""/>
                    <input type="text" name="race" defaultValue={form.race}placeholder="Race" onChange={handleInput} required/>
                </div>
            )}
            { youth &&action==="Sign Up"&&(
                <div className="input">
                    <img src={gender_icon} style={{width:20,height:20}} alt="" />
                    <input type="text" name="gender" defaultValue={form.gender} placeholder="Gender" onChange={handleInput} required/>
                </div>
            )}
               { youth &&action==="Sign Up"&&(
                <div className="input">
                    <img src={occ_icon} style={{width:20,height:20}} alt="" />
                    <input type="text" name="occupation" defaultValue={form.occupation} placeholder="Occupation" onChange={handleInput} required/>
                </div>
            )}
            { youth &&action==="Sign Up"&&(
                <div className="input">
                    <img src={org_icon} style={{width:20,height:20}} alt="" />
                    <input type="text" name="org" defaultValue={form.org} placeholder="Org" onChange={handleInput} required/>
                </div>
            )}
            </div>
            {authenticate==="--"?<div className="forgot-password"> Wrong email and password </div>:<div></div>}
            
            {action==="Sign Up"?<div></div>:<div className="forgot-password"><span className="click-here">Lost your password?</span></div>}
            {action==="Sign Up"?<div></div>:<div className="forgot-password"><span onClick={()=>{setAction("Sign Up")}}>New user?</span></div>}
            {action==="Sign Up"?<div className="forgot-password"><span onClick={()=>{setAction("Login")}}>Already have an account?</span></div>:<div></div>}
            <div className="submit-container">
            {action==="Sign Up" &&(<div className="submit" onClick={async ()=>{
                const isSign=checkAndSignUp();
                if(await isSign){
                    window.location.href='/home'
                }
                
                 
            }}>Sign Up</div>) && (<div>
                <GoogleLogin onSuccess={async (credentialResponse)=>{
                    console.log(jwtDecode(credentialResponse.credential))
                    const isSign=checkAndSignUpGoogle(jwtDecode(credentialResponse.credential))
                    if(await isSign){
                        window.location.href='/home'
                    }

                }} onError={()=>{(console.log('error'))}}></GoogleLogin>
            </div>
            
            )}
            {action==="Login"  && ( <div className="submit" onClick={async ()=>{
                const isExist=checkLogin();
                if(await isExist){

                    window.location.href='/home'
                }
               
                    
                
            }}>Log in</div>)}
                
            </div>
            <div className="submit-container">
            <div className="submit" onClick={()=>{if (type=="Youth"){
                setYouth(false)
                setType("Volunteer")}else{
                    setYouth(true)
                    setType("Youth")}}}>I'm not a {type}</div>
            </div>
            
            </div>
            
            
        </div>
    )
}

export default LoginSignup;   
 