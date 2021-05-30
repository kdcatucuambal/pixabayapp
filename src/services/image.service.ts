import axios from "axios";
import { getUrl } from "./global";

export class ImagesService {
  static getImages = async (
    search: string,
    imagesByPage: number,
    currentPage: number
  ) => {
    const urlAPI = getUrl(search, imagesByPage, currentPage);
    const response = await axios.get(urlAPI);
    return response.data;
  };

  static getTotalPages = (totalHits: number, imagesByPage: number) => {
    return Math.ceil(totalHits / imagesByPage);
  };
}
