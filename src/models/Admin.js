import { prisma } from "../app.js";
const Admin = {
    manageUserAccounts: async (id)=>{ 
        return( await prisma.User.delete({
            where:{
                user_id: parseInt(id),
            }
        },),

        await prisma.Job_seeker.delete({
            where:{
                user_id: parseInt(id),
            }
        },),

        await prisma.Employers.delete({
            where:{
                user_id: parseInt(id),
            }
        },)
        )   

    },

    listAllUsers: async ()=> {
        return ( await prisma.User.findMany({
            include : {
                job_seeker: true,
                emp: true
                 }
            })
        )
    },
    
    viewPlatformMetrics: async ()=>{ // need to add some values
        return await prisma.User.aggregate({
            _count:{
                User: user_id,
            },
        })
    } ,
    
};
export default Admin;