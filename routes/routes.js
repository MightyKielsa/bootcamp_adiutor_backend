import express from "express";
export const router = express.Router();
// import models here

router.get("/", async function (req, res) {
    const profileData = req.params.id
})