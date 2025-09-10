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
})