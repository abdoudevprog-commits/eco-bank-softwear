import mongoose from "mongoose";

const trasfertOTPSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    codeHash: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    
    attempts: {
        type: Number,
        default: 0
    },
    maxAttempts: {
        type: Number,
        default: 5
    },
    used: {
        type: Boolean,
        default: false
    },
    expiresAt: {
        type: Date,
        required: true
    }
}, { timestamps: true });

trasfertOTPSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const trasfertOTP = mongoose.model("trasfertOTP", trasfertOTPSchema);

export default trasfertOTP;