import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

router.get("/courses/:id/enrollments", async (req, res) => {
 const { id } = req.params;
 const { data, error } = await supabase
   .from("enrollments")
   .select("student_name, course_id")
   .eq("course_id", id);

 if (error) {
   return res.status(500).json({ error: error.message });
 }

 res.json(data);
});

export default router;
