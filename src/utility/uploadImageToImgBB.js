import axios from "axios";

export const uploadImageToImgBB = async (imageFile) => {
  const imgBBAPIKey = "857e0ec8a6cbd959c41848a85d65d4a5";
  const formData = new FormData();
  formData.append("image", imageFile);

  const imgBBUploadResponse = await axios.post(
    `https://api.imgbb.com/1/upload?key=${imgBBAPIKey}`,
    formData
  );

  return imgBBUploadResponse.data.data.url;
};
