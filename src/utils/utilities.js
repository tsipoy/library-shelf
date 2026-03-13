import { imageModules } from "./lists";
export const getImageUrl = (imageName) => {
    const key = `../assets/${imageName}`;
    return imageModules[key];
};
