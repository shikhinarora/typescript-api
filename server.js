const express = require('express');
const bodyParser = require('body-parser')

const userController = require('./controllers/user');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.use('/api', router);

router.post(
  '/user/bulk',
  userController.validateUser(),
  userController.createUser,
);

app.listen(3000);
