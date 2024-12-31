import mongoose  from 'mongoose';
import { Rent_info } from '../Models/Rent.model.js';


export const getInfo = async(req, res)=>{
    try{
        const userRent_info = await Rent_info.find({});
        res.status(200).json({ success:true, data: userRent_info});
    }catch(error){
        console.log("error", error.message);
        res.status(500).json({ success:false, message: "Server error"})
    }
}

export const createInfo = async(req, res)=>{
    const userRent_info = req.body;

    if(!userRent_info.HS_rent || !userRent_info.water || !userRent_info.electricity){
        return(res.status(400)).json({ succcess: false, message: "please provide all fields"})
    }

    const new_userRent_info = new Rent_info(userRent_info);

    try{
        await new_userRent_info.save();
        res.status(201).json({ succcess: true, data: new_userRent_info })
    }catch(error){
        console.error(error.message);
        res.status(500).json({ succcess: false, message: "server error" })
    };
}

export const updateInfo = async(req, res)=>{
    const { id } = req.params;
    const userRent_info = req.body;


    try{
        const updatedInfo = await Rent_info.findByIdAndUpdate(id, userRent_info, {new:true});
        res.status(200).json({ succcess:true, data: updatedInfo})
    }catch(error){
        res.status(500).json({ success:true, message: "server error"})
        console.log("error:", error.message)
    }
}

export const deleteInfo = async(req, res) =>{
    const{ id } = req.params;
    
    try{
        await Rent_info.findByIdAndDelete(id);
        res.status(200).json({ success: true, message:"succesfully deleted" });
    }catch(error){
    }
}