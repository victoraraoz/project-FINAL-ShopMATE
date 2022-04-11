const express = require(express);
const helmet = require(helmet);
const morgan = require(morgan);
const cors = require(cors);

const App = express();
App.use(helmet());
App.use(morgan("tiny"));
App.use(cors());
App.use(express.json());

App.listen(8000, () => {
  console.log("Listening on Port 8000");
});
