import jwt  from "jsonwebtoken";
import NodeCache from "node-cache";

const ACCESS_SECRET = "contraseñasecreta";

export const generateAcessToken = (userid:string) =>{
    return jwt.sign(
        {userid},
        ACCESS_SECRET,
        {expiresIn :'15m'}


    )
}