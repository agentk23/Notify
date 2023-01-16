const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models/db');
//db connection

app.use(express.json());

const usersRouter = require('./routes/userRouter');
app.use('/api', usersRouter);

(async () => {
  await db.sequelize.sync({force: true})
    .then(() => {
      console.log("Drop and re-sync db.");
    });
})();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});