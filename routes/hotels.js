import express from "express";
import { createHotel } from "../controllers/hotel.js";
import { updateHotel } from "../controllers/hotel.js";
import { deleteHotel } from "../controllers/hotel.js";
import { getHotel } from "../controllers/hotel.js";
import { getHotels } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router();

//Create

router.post("/", verifyAdmin, createHotel);

//Update

router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//GET

router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;