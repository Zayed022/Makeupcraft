import multer from "multer";

const storage = multer.diskStorage({
    destination: function(_req, file, cb){
      cb(null,"./uploads/temp")
    },
    filename:function(_req, file, cb){
      cb(null,file.originalname)
    }
  })
  export const upload = multer({
    storage,
  })