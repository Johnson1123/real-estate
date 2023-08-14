import mongoose from "mongoose";
import bcrypt from "bcrypt";

const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    require: true,
  },
  application: {
    type: String,
    require: true,
  },
  address: [
    {
      name: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      country: {
        type: String,
      },
      city: {
        type: String,
      },
    },
  ],
  linkedin: {
    type: String,
  },
  facebook: {
    type: String,
  },
  image: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Passsword is required"],
    select: false,
    minLenght: [4, "provide password with 4 min lenght"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  approve: {
    type: Boolean,
    default: false,
  },
});

agentSchema.methods.comparedPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

agentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});
const Agent = mongoose.model("Agent", agentSchema);

export default Agent;
