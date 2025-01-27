import { Router} from "express";
import {createJobListing,
        updateJobDetails,
        deleteJobListing,
        viewApplicationsForJob
        } from '../controllers/employers.js';
        
const router = Router();

router.post('/jobs',createJobListing );
router.put('/jobs:id',updateJobDetails );
router.delete('/jobs:id', deleteJobListing);
router.get('/jobs/:id/applications',viewApplicationsForJob);

export default router;