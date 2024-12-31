import mongoose from "mongoose";

const RentSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  HS_rent: {
    type: Number,
    required: true,
  },
  water: {
    type: Number,
    required: true,
  },
  electricity: {
    type: Number,
    required: true,
  },
});


export const Rent_info = mongoose.model("Rent", RentSchema);

