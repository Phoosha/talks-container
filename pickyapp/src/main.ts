import express from "express";
import sharp from "sharp";

const app = express();
const port = 8080; // default port to listen

const useParamAsInt = (value: unknown, defaultValue: number) => {
  if (value == null) {
    return defaultValue;
  } else if (typeof value !== "string") {
    throw new TypeError("Parameter needs to be string!");
  } else if (value.trim().length === 0) {
    return defaultValue;
  } else {
    return parseInt(value);
  }
};

// define a route handler for the default home page
app.get("/", (req, res) => {
  let width: number;
  let height: number;
  try {
    width = useParamAsInt(req.query.w, 320);
    height = useParamAsInt(req.query.h, 240);
  } catch (e) {
    res.sendStatus(400);
    return;
  }

  const resizedImgStream = sharp("static/default.jpg")
    .rotate()
    .resize(width, height)
    .jpeg({ mozjpeg: true });

  res.setHeader("Cache-Control", "no-cache, no-store");
  res.setHeader("Content-Disposition", "inline");
  res.setHeader("Content-Type", "image/jpeg");
  resizedImgStream.pipe(res);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
