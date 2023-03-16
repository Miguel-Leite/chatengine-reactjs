import express from 'express';
import cors from "cors";
import axios from 'axios';
const dotenv = require("dotenv")

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
      const r = await axios.put("https://api.chatengine.io/users/", 
      {username, secret: username, first_name: username},
      {headers: { "private-key": "658fed9e-8351-4ad4-901c-e206cae15511"}}
      );
      return res.status(r.status).json(r.data);
    } catch (e:any) {
      return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);