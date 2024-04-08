import {Router} from 'express'
import {isLoggedIn,authorizedRoles} from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';
import { getAllEvents } from '../controllers/eventController.js';


const router = Router();

router.get('/',getAllEvents)

export default router
