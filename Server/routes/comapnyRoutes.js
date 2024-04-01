import { Router } from "express";

import { getAllCompany,updateCompany,removeCompany,createnewCompany } from "../controllers/companyController.js";

import {isLoggedIn,authorizedRoles} from '../middleware/authMiddleware.js'

const router = new Router()

router.route('/')
.get(getAllCompany) //tested
.post(isLoggedIn,authorizedRoles('ADMIN'),createnewCompany) //tested

router.route('/:id')
    .get(isLoggedIn)
    .put(isLoggedIn,authorizedRoles('ADMIN'),updateCompany) //tested
    .delete(isLoggedIn,authorizedRoles('ADMIN'),removeCompany) //tested
    .post(isLoggedIn,authorizedRoles('ADMIN'))


    export default router