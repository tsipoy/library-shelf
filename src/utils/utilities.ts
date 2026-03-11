import { imageModules } from "./lists"

export const getImageUrl = (imageName: string): string | undefined => {
    const key = `../assets/${imageName}`
    return imageModules[key]
}