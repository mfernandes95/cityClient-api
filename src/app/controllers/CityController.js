import City from "../schemas/City";

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

      verifyExists(city);
      return res.status(200).json({ city: city });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getCityByUf(req, res) {
    try {
      const city = await City.findOne({ uf: req.params.uf });

      verifyExists(city);
      return res.status(200).json({ city: city });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

function verifyExists(city) {
  if (!city) throw Error("City not found!");

  return;
}

export default new CityController();
