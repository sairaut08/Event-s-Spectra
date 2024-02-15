import {Router} from 'express'

import { createClub,removeClub,getAllClubs, } from "../controllers/clubsController.js";
import {isLoggedIn,authorizedRoles} from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';
const router = Router();

router.route('/').get(getAllClubs)
.post(
    isLoggedIn,
    authorizedRoles('ADMIN'),
    upload.single('thumbnail'),
    createClub)


router.route('/:id')

//.get(isLoggedIn, getLectuersByCourseId)

.delete(isLoggedIn,
    authorizedRoles('ADMIN'),
    removeClub)
.post(
    //addLectureToCourseById,
    authorizedRoles('ADMIN'),
    //isLoggedIn
    upload.single('club')

)

export default router;