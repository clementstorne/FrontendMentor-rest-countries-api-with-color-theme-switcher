import axios, { AxiosInstance } from "axios";

const Axios: AxiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
  headers: {
    "Content-type": "application/json",
  },
});

class CountryService {
  async getAll(): Promise<Country[]> {
    try {
      const res = await Axios.get<Array<Country>>("/all");
      return res.data;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des pays.",
        error
      );
      throw error;
    }
  }
}

export default new CountryService();
