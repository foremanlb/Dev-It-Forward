const db = require("../db/index");
const Tutor = require("../models/tutor");
const User = require("../models/tutor");

db.on("error", console.error.bind(console, "Mongo Connection Error"));

const main = async () => {
  await Tutor.deleteMany({});
  await User.deleteMany({});

  const tutors = [
    {
      username: "tomnjerry",
      email: "tomnjerry@gmail.com",
      hourlyRate: "50",
      programmingLanguage: ["react", "node", "python"],
      description:
        "i'm a few years out from the bootcamp and happy to help others in their journey succeed",
    },
    {
      username: "michaeljones",
      email: "mjone232@gmail.com",
      hourlyRate: "23",
      programmingLanguage: ["ruby", "html", "css"],
      description: "i'm not in it for the money here to share what i know",
    },
    {
      username: "tigerpines",
      email: "tjnotagolfer@gmail.com",
      hourlyRate: "34",
      programmingLanguage: ["ruby", "django", "php"],
      description: "i'm an experienced developer",
    },
  ];

  const users = [
    {
      username: "donaldjduck",
      email: "putitonmybill@gmail.com",
    },
    {
      username: "maverick",
      email: "dallassun@gmail.com",
    },
    {
      username: "fridayblues",
      email: "fridayyeah@gmail.com",
    },
  ];

  await Tutor.insertMany(tutors);
  console.log("tutors created!");
  await User.insertMany(users);
  console.log("users created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
