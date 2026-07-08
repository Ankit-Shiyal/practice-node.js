import modelUser from "../model/UserModel.js";
import HttpError from "../middleware/HttpError.js";

const add = async (req, res, next) => {
    try {
        
        
        const {Name, Email, Password, Role, Address, Phone, isVerified} = req.body

        const newUser= await modelUser({
            Name, Email, Password, Role, Address, Phone, isVerified
        })

        await newUser.save()

        res.status(201).json({success:true, message:"new User added", newUser})

    } catch (error) {
          next(new HttpError(error.message, 500));
    }
}

const getAllUser = async (req, res, next)=>{

    try {
        
        const user=await modelUser.find({})

        if(user.length === 0){
            return next(new HttpError("User data not found", 404))
        }

        res.status(200).json({success:true, message:"All user data", Total:user.length, user})

    } catch (error) {
          next(new HttpError(error.message, 500));
        
    }

}




export default {add, getAllUser}