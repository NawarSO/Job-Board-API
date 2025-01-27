import {Router} from 'express';
import {searchAndFilter,
        viewJobsDetail,
        submitJobApplication,
        fetchUserProfile,
        updateUserProfile
} from '../controllers/jobseeker.js';

const router = Router();

router.get('/jobs',searchAndFilter);
router.get('/jobs:id',viewJobsDetail);
router.post('/applications',submitJobApplication);
router.get('/profile',fetchUserProfile);
router.put('/profile',updateUserProfile);



export default router;

/*
GET /jobs: Search and filter jobs.
○ GET /jobs/:id: View job details.
○ POST /applications: Submit job application.
○ GET /profile: Fetch user profile.
○ PUT /profile: Update user profile.
*/ 