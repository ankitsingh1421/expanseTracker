
import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const res = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData);
        return res.data; // { imageUrl }
    } catch (error) {
        console.error("Image upload failed:", error);
        throw error;
    }
};

export default uploadImage;



