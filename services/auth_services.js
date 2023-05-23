const ApplierModel = require("../models/applier_model");


class AuthServices{
 
    static async registerUser(email,password){
        try{
                console.log("-----Email --- Password-----",email,password);
                
                const createUser = new ApplierModel({email,password});
                return await createUser.save();
        }catch(err){
            throw err;
        }
    }

    static async getUserByEmail(email){
        try{
            return await ApplierModel.findOne({email});
        }catch(err){
            console.log(err);
        }
    }

    static async checkUser(email){
        try {
            return await ApplierModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

   
}

module.exports = AuthServices;