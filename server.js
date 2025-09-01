import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));