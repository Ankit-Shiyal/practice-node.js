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

export default {add}