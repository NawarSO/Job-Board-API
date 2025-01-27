import { Router } from 'express'
import {viewPlatformMetrics,
        listAllUsers,
        manageUserAccounts
        } from '../controllers/admin.js'

const router = Router();

router.get('/analytics',viewPlatformMetrics);
router.get('/users',listAllUsers);
router.delete('/users/:id',manageUserAccounts)

export default router;