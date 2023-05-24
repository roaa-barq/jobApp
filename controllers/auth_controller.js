const AuthServices = require('../services/auth_services');

exports.register = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const { email, password } = req.body;
        const duplicate = await AuthServices.getUserByEmail(email);
        if (duplicate) {
            throw new Error(`UserName ${email}, Already Registered`)
        }
        const response = await AuthServices.registerUser(email, password);

        res.json({ status: true, success: 'User registered successfully' });


    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Parameter are not correct');
        }
        let user = await AuthServices.checkUser(email);
        if (!user) {
            throw new Error('User does not exist');
        }

        const isPasswordCorrect = await user.comparePassword(password);
        let tokenData;
        tokenData = { _id: user._id, email: user.email };
        const token = await AuthServices.generateAccessToken(tokenData,"secret","1h")

        if (isPasswordCorrect === false) {
            throw new Error(`Username or Password does not match`);
        }

        // Creating Token


        res.status(200).json({ status: true, success: "sendData" , token: token});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}