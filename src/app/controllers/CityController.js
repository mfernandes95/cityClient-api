import City from "../schemas/City";

import VerifyTransaction from "../services/VerifyTransaction";

class CityController {
  async createCity(req, res) {
    try {
      const city = await City.create(req.body);
      return res.status(201).json({ city: city });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async getCityByName(req, res) {
    try {
      const city = await City.findOne({ name: req.params.name });

      VerifyTransaction(city, "City");
      return res.status(200).json({ city: city });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getCityByUf(req, res) {
    try {
      const city = await City.findOne({ uf: req.params.uf });

      VerifyTransaction(city, "City");
      return res.status(200).json({ city: city });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new CityController();
