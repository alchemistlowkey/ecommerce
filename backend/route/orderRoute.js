import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  placeOrderPaystack,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router()

// Admin features with middleware
orderRouter.post("/list", adminAuth, allOrders)
orderRouter.post("/status", adminAuth, updateStatus)

// Payment features
orderRouter.post("/place", authUser, placeOrder)
orderRouter.post("/stripe", authUser, placeOrderStripe)
orderRouter.post("/razorpay", authUser, placeOrderRazorpay)
orderRouter.post("/paystack", authUser, placeOrderPaystack)

// User feature
orderRouter.post("/userOrders", authUser, userOrders)

export default orderRouter