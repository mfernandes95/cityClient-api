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

  async show(req, res) {
    try {
      const client = await Client.findById(req.params.id);

      if (!client)
        return res.status(404).json({ message: "Client not found!" });

      return res.status(200).json({ client: client });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const client = await Client.findByIdAndDelete(req.params.id);

      if (!client)
        return res.status(404).json({ message: "Client not found!" });

      return res.status(200).json({ message: "Client removed!" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (!client)
        return res.status(404).json({ message: "Client not found!" });
      return res.status(200).json({ client: client });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new ClientController();
