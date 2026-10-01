import { useState } from "react";
import axios from 'axios';

function Landing(){
    const [mode,setMode]=useState("signup");
    const [showPassword,setShowPassword]=useState(false);
    const [fullname,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const [msgType,setMsgType]=useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setMsg("")

        if(mode === "signup"){
            try {
                const response=await axios.post(
                    "http://localhost:3000/api/auth/register",
                    {
                        fullname:fullname,
                        email:email,
                        password:password
                    } 
                )
                setMsg(response.data.message);
                setMsgType("success");
                setEmail("");
                setFullName("")      
                setPassword("");
                setMode("login")    
                
            } catch (error) {
                console.log(error.response.data.message);
                
                setMsg(error.response?.data?.message || "Oops we are having some technical problems");
                setMsgType("error");
                
            }
        }else{
            try {
               
                const response=await axios.post(
                    "http://localhost:3000/api/auth/login",
                    {
                        email:email,
                        password:password
                    }
                )
                 localStorage.setItem("token",response.data.token)
                 setMsg(response.data.message);
                setMsgType("success");
                setEmail("");
                setFullName("")      
                setPassword("");
            } catch (error) {
                 setMsg(error.response?.data?.message || "Oops we are having some technical problems");
                setMsgType("error");
            }
        }
                
    }
    return(
        <main>
            <section className="image-section">

            </section>
            <section className="text-section">
                <div className="text-area">
                    {msg && (
                        <div className={`msg-section ${msgType}`}>
                            {msg}
                        </div>
                    )}
                    <h2>WELCOME TO APERTURE</h2>
                    <h1>
                       {mode === "login" ?" Your Studio, at a glance":" A brighter way to create"}
                    </h1>
                    <p className="p1">
                        {mode ==="login"?"Sign in to pick up right where inspiration left you":"Create your account and bring your best work to focus"}
                    </p>
                    <div className="social-btns">
                        <button onClick={()=>setMode("login")} className={mode === "login"? "active":""}>Log In</button>
                        <button onClick={()=>setMode("signup")}className={mode === "signup"? "active":""}>Sign up</button>
                    </div>
                    <form action="" className="form" onSubmit={handleSubmit}>
                        {mode === "signup" && (
                             <div className="form-group">
                                <label>Full name</label>
                                <input 
                                    type="text" 
                                    value={fullname}
                                    placeholder="Your name" 
                                    required
                                    onChange={(e)=>setFullName(e.target.value)}
                                />
                             </div>
                        )}
                       
                        <div className="form-group">
                            <label>Email address</label>
                            <input 
                                type="email" 
                                placeholder="you@yourstudio.com"
                                value={email}
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                             />
                        </div>
                        <div className="form-group">
                            <div className="password-sector">
                                 <label>Password</label>
                                <input 
                                    type={showPassword ? "text":"password"} 
                                    minLength={6}
                                     placeholder="At least 6 characters"
                                     required
                                     value={password}
                                     onChange={(e)=>setPassword(e.target.value)}
                                     />
                                    <button type="button" onClick={()=>setShowPassword(!showPassword)} className="toggle">
                                        {showPassword ? "Hide":"Show"}
                                    </button>
                            </div>
                           
                            
                        </div>
                        
                        <p className="p2">
                           {mode === "login"? "A little less admin.A lot more creating":" Your creative workspace is one click away"}
                        </p>
                        <button type="submit" className="submit-btn">
                            <span>{mode === "login"? "Enter your studio":" Create your account"}</span>
                            <span className="direction">
                                    →
                            </span>
                            
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
export default Landing;