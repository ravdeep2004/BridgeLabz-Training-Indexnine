const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role: role || 'user'
        });

        const savedUser = await newUser.save();
        
        const { password: _, ...userWithoutPassword } = savedUser.toObject();

        res.status(201).json(userWithoutPassword);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

