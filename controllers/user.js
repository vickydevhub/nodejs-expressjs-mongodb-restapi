import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const getAllUser = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        res.json({ message: error });
    }
};

export const addUser = async (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !password || !username) {
        return res.status(422).json({ error: "Please add all fields" });
    }
    try {
        const savedUser = await User.findOne({ email });
        if (savedUser) {
            return res.status(422).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();
        res.json({ message: "Saved Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
