import Employers from "../models/Employer.js";

export const createJobListing = (req,res) =>{ // continue it.
    try {
        Employers.createJobListing()
    }
    catch (error) {
        
    }
    

};




















export const updateJobDetails = (req,res) =>{
    res.status(200).send("Update job details.")
};

export const deleteJobListing = (req,res) =>{
    res.status(200).send("Delete a job listing.")
};

export const  viewApplicationsForJob = (req,res) => { // find if job id parms or body
    res.status(200).send(" View applications for a job.") 
};


