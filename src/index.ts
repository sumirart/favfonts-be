import express, { NextFunction, Request, Response } from "express";

// users routes
import userRoutes from "./routes/user";
// fonts routes

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use("/auth", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

// error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
