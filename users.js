import express from 'express';

import { createuser, getusers, getuser, deleteuser, updateuser} from './controllers/users.js';



const router = express.Router();


router.get('/', getusers);

router.post('/', createuser);

router.get('/:id', getuser);

router.delete('/:id', deleteuser);

router.patch('/:id', updateuser);    

export default router;



