import { useState } from "react";

function Landing(){
    const [mode,setMode]=useState("signup");
    const [showPassword,setShowPassword]=useState(false)
    return(
        <main>
            <section className="image-section">

            </section>
            <section className="text-section">
                <div className="text-area">
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
                    <form action="" className="form">
                        {mode === "signup" && (
                             <div className="form-group">
                                <label>Full name</label>
                                <input type="text" placeholder="Your name" required/>
                             </div>
                        )}
                       
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" placeholder="you@yourstudio.com" />
                        </div>
                        <div className="form-group">
                            <div className="password-sector">
                                 <label>Password</label>
                                <input type={showPassword ? "text":"password"} minLength={6} placeholder="At least 6 characters" />
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