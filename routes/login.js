import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Citizen, Admin, MunicipalPersonnel } from '../models/user.js';

const router = express.Router();

//LOGIN 
router.post('/login', async (req,res,next) =>{
    const {email , password} = req.body;

    let user = null;
    let role = null;

    user = await Citizen.findOne({where: {email}})
    if(user) role = "citizen";

    if(!user){
        user = await Admin.findOne({where: {email}})
        if(user) role = "admin";
    }
    if(!user){
        user = await MunicipalPersonnel.findOne({where: {email}})
        if(user) role = "municipal"
    }

    if(!user){
        res.sendStatus(401).json({error: 'Invalid email or password'})
    }

    const token = jwt.sign({
        id: user.citizen_id || user.admin_id || user.municipality_id, role, process.env.JWT_SECRET, {expires}
    })
})