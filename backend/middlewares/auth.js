import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
   
    if (!token) {
        return res.json({ success: false, message: "Inavalid Token from userAuth" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.user = tokenDecode.id;
        } else {
            return res.json({ success: false, message: "Not Authorized - Login Again" });
        }

        next();
    } catch (error) {
        console.log("error in userAuth middleware ", error);
        res.json({ success: false, message: error.message });
    }
}

