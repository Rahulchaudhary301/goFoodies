const UserSchema = require("../UserSchema/User");
const {
    isValidString,
    nameValidation,
    mobileValidation,
    isValidEmail,
    isValidPassword,
} = require("../validator/validation");

const bcrypt= require('bcrypt')

const jwt= require('jsonwebtoken')






const CreatUser = async function (req, res) {
    try {
        const input = req.body;
        const { name, location, email, password } = input;

        if (!name && !location && !email && !password)
            return res
                .status(400)
                .send({ status: false, msg: "All field is necessary" });

        if (!name)
            return res
                .status(400)
                .send({ status: false, msg: "user name is require" });
        if (!isValidString(name))
            return res
                .status(400)
                .send({ status: false, msg: "Name is required !!!" });
        if (!nameValidation(name))
            return res
                .status(400)
                .send({ status: false, msg: "Name is invalid !!!" });

        if (!location)
            return res
                .status(400)
                .send({ status: false, msg: "user name is require" });

        if (!email)
            return res
                .status(400)
                .send({ status: false, msg: "user name is require" });
        if (!isValidEmail(email))
            return res.status(400).send({ status: false, msg: "Invalid E-MAIlID" });

        if (!password)
            return res
                .status(400)
                .send({ status: false, msg: "user name is require" });
        if (!isValidPassword(password))
            return res.status(400).send({
                status: false,
                msg: "Invalid password (password should be between 5 to 15)",
            });
        
            req.body.password= await bcrypt.hash(password,10)
        let isEmailPresent = await UserSchema.findOne({ email: email });
        if (isEmailPresent)
            return res.status(400).send({
                status: false,
                msg: "This email is already present on dataBase",
            });
        const data = await UserSchema.create(input);

        res.status(201).send({ status: true, data: data });
    } catch (err) {
        res.status(500).send({ status: false, mag: err.message });
    }
};

const LoginUser = async function (req, res) {
    try {
        let input = req.body;

        const { email, password } = input;

        if (!email && !password)
            return res
                .status(400)
                .send({ status: false, msg: "All field is necessary" });
        if (!isValidEmail(email))
            return res.status(400).send({ status: false, msg: "Invalid E-MAIlID" });
        let isEmail = await UserSchema.findOne({ email: email });

        if (!isEmail)
            return res
                .status(400)
                .send({ status: false, msg: "This email is not present on DataBase" });

        let realPassword= await bcrypt.compare(password,isEmail.password)
        
        if (!realPassword) return res.status(400).send({ status: false, msg: " Password is not Correct" });
    
         let token  =  jwt.sign({userId:isEmail._id},"foodCorner")

        res.status(201).send({ status: true, token:token , msg: "Login Successfully" });
    } catch (err) {
        res.status(500).send({ status: false, mag: err.message });
    }
};

module.exports = { CreatUser, LoginUser };
