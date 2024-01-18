import express from "express";
import {
  postImage,
  getAllImage,
  getOneImage,
} from "../controller/imageController";
import multer from "multer";
// import { image } from "../Utils/multer"

const image = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
}).single("image");

const router = express.Router();

router.route("/post-image").post(image, postImage);
router.route("/get-images").get(getAllImage);
router.route("/get-image").get(getOneImage);

export default router;
