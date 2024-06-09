import express from "express";
import { StatusCodes } from "http-status-codes";
import userService from './services/user.service';

const router = express.Router();

const STATUS = {
  SUCCESS: "OK",
  ERROR: "FAILED",
};


//running at localhost:8080 or whatever port is stated
router.get("/", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("Hello world!");
});

router.post("/add", (req, res) => {
  const data = [];
  const { body: user } = req;

  if (!user.name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.ERROR,
      message: 'Name is required!',
    });
  }

  res.status(StatusCodes.CREATED).send({
    status: STATUS.SUCCESS,
    message: data,
  });
});

export default router;