import { imageModules } from "./lists"

export const getImageUrl = (imageName: string): string | undefined => {
    if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
        return imageName
    }

    const key = `../assets/${imageName}`
    return imageModules[key]
};
