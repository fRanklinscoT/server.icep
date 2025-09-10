import express from 'express';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { Citizen, Admin, MunicipalPersonnel } from '../models/user.js';
import {validatePassword} from "./register.js";

const router = express.Router();

const SendEmail = async(email,token,username) => {

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const resetlink = `http://localhost:3000/reset-password?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        html: `<p>Hi ${username},</p>
               <p>You requested a password reset. Click the link below to reset your password:</p>
               <a href="${resetlink}">Reset Password</a>
               <p>If you did not request this, please ignore this email.</p>`
    };
    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent to ' + email);
    console.log('token:', token);
}

 router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });   
    try {
        const user = await Citizen.findOne({ where: { email } });
        const admin = await Admin.findOne({ where: { email } });
        const municipal = await MunicipalPersonnel.findOne({ where: { email } });
        if(admin){
            user = admin;
        }   else if(municipal){
            user = municipal;
        }   
        if (!user) return res.status(404).json({ error: 'User not found' });
        const token = jwt.sign({ id: user.citizen_id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '5m' });
        await SendEmail(email, token,user.firstname || 'User');
        res.status(200).json({ message: 'Password reset email sent token is '+ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }


});

router.post('/reset-password', async (req, res) => {
    const { token, newPassword, confirmPassword } = req.body;
    if (!token || !newPassword || !confirmPassword) {
        return res.status(400).json({ error: 'Token and new password required' });
    }
    if(!validatePassword(newPassword)) {
        return res.status(400).json({ error: 'Password at least 8 characters, include 1 uppercase, 1 digit, 1 symbol' });
    }
    if (newPassword !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Citizen.findOne({ where: { email: decoded.email } });
        const admin = await Admin.findOne({ where: { email: decoded.email } });
        const municipal = await MunicipalPersonnel.findOne({ where: { email: decoded.email } });    
        if(admin){
            user = admin;
        }   else if(municipal){
            user = municipal;
        }   
        if (!user) return res.status(404).json({ error: 'User not found' });
        const bcrypt = await import('bcrypt');
        const hashPassword = await bcrypt.hash(newPassword, await bcrypt.genSalt());
        user.password = hashPassword;
        await user.save();
        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        console.error(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ error: 'Token expired' });
        }
        res.status(500).json({ error: 'Server error' });
    }
        
});

export default router;


