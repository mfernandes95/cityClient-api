import Customer from "../schemas/Customer";

class CustomerController {
  async store(req, res) {
    try {
      console.log(req.body);

      const customer = await Customer.create(req.body);
      return res.status(201).json({ customer: customer });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new CustomerController();
