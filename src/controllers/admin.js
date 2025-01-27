import Admin from '../models/Admin.js';
import respone from '../../utlis/respone.js';
export const viewPlatformMetrics = (req,res) =>{
    try{
        const metr = Admin.viewPlatformMetrics();
        return respone(res,204,metr,null)
    }
    catch (error) {
        return respone(res,401,null,"Some thing want wrong.");
    }
};

export const listAllUsers = async (req,res) =>{
    
    try {
        const users = await Admin.listAllUsers();
        console.log(users)
        return  respone(res,200,users,null);
    }

    catch(error) {
        //return respone(res,401,null,err);
        console.log(error)
    }
};



export const manageUserAccounts = (req,res) =>{ // find if id body or parms
    res.status(200).send("Manage user accounts")
};






