import { prisma } from "../app.js";
const Job_seeker = {

applyJob: async (data) =>{ // for delete
    prisma.jobs.create(...data);
},


searchAndFilter: async (options = {})=> {
    return await prisma.jobs.findMany(options);
},

viewJobsDetail: async (id = -1) =>{
    return await prisma.Jobs.findMany({
        select: {description: true},
        where: {jobs_id: parseInt(id)}
    })
},

updateUserProfile: async (id,data) =>{ // ned to fix
    return await prisma.Job_seeker.update({
        where: {
            jobseeker_id: parseInt(id),
        },
        data: {
            ...data,
        },
        include: {
            user: true,
        }

    })
}  ,

fetchUserProfile: async(id)=>{ // ned to be sure
   return await prisma.User.findMany({
        where:{user_id: parseInt(id)},
       
    }),
    prisma.Job_seeker.findMany({
        where: {joobseeker_id: parseInt(id)},
    })


        
},

submitJobApplication: async (data) =>{
    return await prisma.Application.create(...data)
} ,
};

export default Job_seeker;

