import Job_seeker from "../models/Jobseeker.js";

export const searchAndFilter = (req,res)=> {
    res.status(200).json('Get job seekers');
};

export const viewJobsDetail = (req,res) =>{
    res.status(200).send('view Jobs Detail')
};

export const submitJobApplication = (req,res) =>{
    res.status(200).send("submit app")
};

export const fetchUserProfile = (req,res) =>{
    res.status(200).send("Fetch user profile.")
};

export const updateUserProfile = (req,res) => {
    res.status(200).send("Update user profile.");
}
