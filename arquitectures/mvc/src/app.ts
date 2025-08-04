import express from "express";
import usuarioRoutes from "@routes/user.routes";
import taskRoutes from "@routes/task.routes";

const app = express();
app.use(express.json());
app.use("/users", usuarioRoutes);
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});