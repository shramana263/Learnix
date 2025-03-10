import jwt from "jsonwebtoken";

export const generateToken = (response, user, message) => {
    const token = jwt.sign(
        { userId: user._id, },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    return response.status(200).cookie("token", token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 //for 1 day
    }).json({
        success: true,
        message,
        user
    })
}