const express =require("express");
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    ()=>{
        console.log("MongoDB database connection established successfully");
    }
  );

  app.use("/exercises",require("./routes/exercisesRouter"));
  app.use("/users",require("./routes/usersRouter"));
  
  const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));