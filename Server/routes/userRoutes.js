import { Router } from "express";
import { changePassword, forgotPassword, getProfile, login, logout, register, resetPassword, updateUser } from "../controllers/userController.js";
import {isLoggedIn} from "../middleware/authMiddleware.js";
import upload from '../middleware/multerMiddleware.js'

const router = Router()

// ROUTES
router.post('/register',upload.single('avatar'),register) //tested
router.post('/login',login) //tested
router.get('/logout',logout) //tested
router.get('/me',isLoggedIn,getProfile ) //tested
router.post('/forgot-password',forgotPassword)
router.post('/reset-password/:resetToken',resetPassword)
router.post('/change-password',isLoggedIn,changePassword) //tested
router.post('/update',isLoggedIn,upload.single('avatar'),updateUser) //tested

export default router 