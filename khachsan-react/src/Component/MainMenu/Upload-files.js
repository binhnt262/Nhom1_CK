import http from "./http-common";

class UploadFilesService {
  upload(file,ten, gia, onUploadProgress) {
    let formData = new FormData();

    formData.append("image", file);
    formData.append("ten_phong", ten);
    formData.append("gia_phong", gia);
    // debugger
    return http.post("/CuoiKi/web/khachsan-laravel/public/api/rooms", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
      var img = http.get("/CuoiKi/web/khachsan-laravel/public/api/rooms")
    return img;
  
  }
}

export default new UploadFilesService();