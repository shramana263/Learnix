import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register= async(req,res)=>{
    try{
        const {name,email,password}= req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({
                status:false,
                message:"User already exists"
            })
        }
        const hashedPassword= await bcrypt.hash(password,10);
        await User.create({
            name,
            email,
            password:hashedPassword
        });
        return res.status(201).json({
            success:true,
            message:"User created successfully"
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Failed to register"
        })
    }
}

export const login= async(request, response)=>{
    try{
        const {email, password}= request.body
        if(!email){
            return response.status(400).json({
                success:false,
                message:"Email is required"
            })
        }
        if(!password){
            return response.status(400).json({
                success:false,
                message:"Password is required"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return response.status($00).json({
                success:false,
                message:"Invalid credentials"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return response.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }

        generateToken(response, user, `Welcome back ${user.name}`);
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Failed to login"
        })
    }
}