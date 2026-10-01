import pool from "../db.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
export const signup=async (req,res) => {
    try {
        const {fullname,email,password}=req.body
        if(!fullname || !email || !password){
            return res.status(400).json({
                message:"Kindly fill all the fields for signup"
            })
        }
        const hashedPassword=await bcrypt.hash(password,12);
        const result=await pool.query(`INSERT INTO users(fullname,email,password) VALUES ($1,$2,$3) RETURNING fullname,email`,[fullname,email,hashedPassword]);
        res.status(201).json({
            message:`User ${email} created successfully`
        })
    } catch (error) {
        console.error(error);
        
        if(error.code==="23505"){
            return res.status(400).json({
                message:"Account exists",
            })
        }
        res.status(500).json({
            message:"Problem encountered in signup"
        })

    }
}


export const login=async (req,res) => {
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"Kindly fill all the fields for login"
            })
        }
        const record=await pool.query(`SELECT * FROM users WHERE email=$1`,[email]);
        if(record.rows.length === 0){
            return res.status(400).json({
                message:"Wrong email or password"
            })
        }
        const user=record.rows[0];
        const passMatch=await bcrypt.compare(password,user.password);
        if(!passMatch){
            return res.status(400).json({
                message:"Wrong email or password"
            })
        };
        const token=jwt.sign(
            {
                id:user.id,
                email:user.email
            },
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.status(200).json({
            message:`Login successfull ${email}`,
            token
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            message:"Problem encountered in login"
        })
        
    }
}