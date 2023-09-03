import Axios from "../lib/axios";

class CountryService {
  async getAll(): Promise<CountryAPI[]> {
    try {
      const res = await Axios.get<Array<CountryAPI>>("/all");
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getOneCountry(countryName: string): Promise<Country> {
    try {
      const res = await Axios.get<Country[]>("/name/" + countryName);
      return res.data[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new CountryService();
