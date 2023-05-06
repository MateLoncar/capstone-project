const mongoose = require("mongoose");

const experienceDataSchema = new mongoose.Schema({
  text: String,
  imageUrl: String,
  rating: Number,
});

const ExperienceData = mongoose.model("ExperienceData", experienceDataSchema);

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

module.exports = ExperienceData;
