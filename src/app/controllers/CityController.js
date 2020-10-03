import City from "../schemas/City";

class CityController {
  async store(req, res) {
    try {
      console.log(req.body);

      const city = await City.create(req.body);
      return res.status(201).json({ city: city });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new CityController();
