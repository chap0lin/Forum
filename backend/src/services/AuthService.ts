
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel, User } from "../models/User";
import { InvitationModel } from "../models/Invitation";
import { PaymentService } from "./PaymentService";
import { AppError } from "../api/middlewares/errorMiddleware";

export const AuthService = {
    async validateInvite(token: string) {
        const invite = await InvitationModel.findByToken(token);
        if (!invite) throw new AppError("Invalid invitation token", 400);
        if (invite.is_revoked) throw new AppError("Invitation revoked", 400);

        const coordinator = await UserModel.findById(invite.create_by_id);
        if (!coordinator) throw new AppError("Invalid invitation source", 400);

        return { valid: true, coordinator };
    },

    async signup(data: any) {
        // Validate Token
        const { token, email, password, name, cpf, phone } = data;
        const invite = await InvitationModel.findByToken(token);
        if (!invite || invite.is_revoked) throw new AppError("Invalid token", 400);

        // Check user exists
        const existing = await UserModel.findByEmail(email);
        if (existing) throw new AppError("Email already in use", 400);

        // Create User (Pending Activation via Payment)
        const hashedPassword = await bcrypt.hash(password, 10);
        // Split name into first/last logic if needed, for now assuming legacy schema adapted
        const [firstName, ...rest] = name.split(" ");
        const lastName = rest.join(" ");

        const newUser = await UserModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName, // Mapping to legacy fields
            cpf,
            phone,
            role: "member",
            linked_coordinator_id: invite.create_by_id,
            // Status/Active logic usually handled by Subscription
        });

        // Create Payment Preference
        const paymentUrl = await PaymentService.createSubscriptionPreference(email);

        return { user: newUser, paymentUrl };
    },

    async login(data: any) {
        const { email, password } = data;

        // Check user exists
        const user = await UserModel.findByEmail(email);
        if (!user) throw new AppError("Invalid email or password", 401);

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password || "");
        if (!validPassword) throw new AppError("Invalid email or password", 401);

        // Generate Token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || "default_secret",
            { expiresIn: "1d" }
        );

        return { user, token };
    }
};
