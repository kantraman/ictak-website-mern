const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const path = require("path");
const auth = require("./src/helpers/auth");
const cource = require("./data/Cource");
const courceRoutes = require("./src/routes/courceRouter");

const app = express();
const PORT = process.env.PORT || 5000;

const userAccountsRouter = require("./src/routes/userAccountsRouter");
const partnerRouter = require("./src/routes/partnershipRouter");
const memberRouter = require("./src/routes/membershipRouter");
const contactUsRouter = require("./src/routes/contactUsRouter");

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/admin", userAccountsRouter);
app.use("/api/partnership", partnerRouter);
app.use("/api/cource",courceRoutes);
app.use("/api/membership", memberRouter);
app.use("/api/contact", contactUsRouter);

// app.use(express.static(path.resolve(__dirname, "./client")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client", "index.html"));
// });

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    })
  })
  
// app.get("/api/cource", (req, res) => {
//   res.json(cource);
// });
// app.get("/api/cource/:id", (req, res) => {
//   const cource = cource.find((n) => n._id === req.params.id);
//   res.json(cource);
// });
 
//Admin-login routing
app.post("api/login", async (req, res) => {

    try {
        console.log(req.body)
        const { username, password } = req.body;


        if (!(username && password)) {
            res.status(400).send("All input is required");
        }

        const user = await UserInfo.findOne({ username });

        if (user.password == password) {

            const token = JWT.sign(
                { user_id: user._id, username },
                'jaison'
            );


            user.token = token;


            res.status(200).json(user);
        } else {
            res.status(400).send("Invalid Credentials");

        }
    } catch (err) {
        console.log(err);
    }

});


mongoose.connect(process.env.DBConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(app.listen(PORT, () =>
        console.log(`Server listening on PORT ${PORT}`)))
    .catch((err) => console.log(err));


