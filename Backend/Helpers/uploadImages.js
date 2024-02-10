import cloudinary from "cloudinary";

const uploadImages = async (imageFiles) => {
    const uploadPromises = imageFiles.map(async (image) => {
        //Converting the image to base 64 encoded url
        const base64 = Buffer.from(image.buffer).toString("base64");

        //Adding the image type
        let dataURI = "data:" + image.mimetype + ";base64," + base64;

        //Uploading the image to cloudinary
        const res = await cloudinary.v2.uploader.upload(dataURI);

        return res.url;
    });

    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
};

//Export
export { uploadImages };
