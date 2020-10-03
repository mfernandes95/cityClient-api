import Client from "../schemas/Client";

class ClientController {
  async store(req, res) {
    try {
      console.log(req.body);

      const client = await Client.create(req.body);
      return res.status(201).json({ client: client });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new ClientController();
