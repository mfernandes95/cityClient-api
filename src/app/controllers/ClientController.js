import Client from "../schemas/Client";

import verifyTransaction from "../services/verifyTransaction";

class ClientController {
  async createClient(req, res) {
    try {
      const client = await Client.create(req.body);
      return res.status(201).json({ client: client });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getClientByName(req, res) {
    try {
      const client = await Client.findOne({ full_name: req.params.name });

      verifyTransaction(client, "Client");
      return res.status(200).json({ client: client });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getClientById(req, res) {
    try {
      const client = await Client.findById(req.params.id);

      verifyTransaction(client, "Client");
      return res.status(200).json({ client: client });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteClientById(req, res) {
    try {
      const client = await Client.findByIdAndDelete(req.params.id);

      verifyTransaction(client, "Client");
      return res.status(200).json({ message: "Client removed!" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async updateClientById(req, res) {
    try {
      const client = await Client.findByIdAndUpdate(
        req.params.id,
        { full_name: req.body.full_name },
        {
          new: true,
        }
      );

      verifyTransaction(client, "Client");
      return res.status(200).json({ client: client });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new ClientController();
