import { prisma } from "../app.js";
const Employers = {

    createJobListing:  async (data) =>{
        return await prisma.Jobs.create({
            data:{
                ...data
            }
        })
    },

    viewApplicationsForJob: async (id)=>{
        return await prisma.Application.findMany({
            where:{
                job_id: parseInt(id),
            }
        })
    }  ,

    deleteJobListing:  async (id)=>{
        return await prisma.Jobs.delete({
            where:{
                job_id: parseInt(id),
            }
        })
    },

    updateJobDetails: async (id,data) =>{
        return await prisma.Jobs.update({
            where: {job_id: parseInt(id)},
            data: {
                ...data
            },

        })
    } ,

};
export default Employers;