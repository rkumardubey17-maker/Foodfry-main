import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login again"})
    }
    try {
       const token_decode=jwt.verify(token,process.env.JWT_SECRET);
       console.log("Decoded:", token_decode);
console.log("Method:", req.method);
console.log("Body:", req.body);

       console.log(token_decode);
       req.body.userId=token_decode.userId;
       next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error while verifying User"})
    }
};

export default authMiddleware;