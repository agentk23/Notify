const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models/db');
//db connection

app.use(express.json());

const usersRouter = require('./routes/userRouter');
app.use('/api', usersRouter);
const notesRouter = require('./routes/notesRouter');
app.use('/notes', notesRouter);

(async () => {
  await db.sequelize.sync({force: false})
    .then(() => {
      console.log("Drop and re-sync db.");
    });
})();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});