const EmployeesModel = require("../model/employees");

const getAllEmployees = async (req, res) => {
  try {
    const employee = await EmployeesModel.findAll();


      res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const createNewEmployee = async (req, res) => {
  try {
    const newEmployee = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };

    if (!newEmployee.firstname || !newEmployee.lastname) {
      return res
        .status(400)
        .json({ message: "First and last names are required." });
    }

    const newEmployeeResult = await EmployeesModel.create(newEmployee);

    res.status(201).json(newEmployeeResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateEmployee = async (req, res) => {
try {
    const employee = await EmployeesModel.findOne({
        where: {
            id: parseInt(req.params.id),
        }
    });
    if (!employee) {
        return res.status(400).json({ message: `Employee ID ${req.params.id} not found` });
    }
    const result = await EmployeesModel.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }, {
        where: {
            id: parseInt(req.params.id)
        }
    });

    res.json(result);
    
} catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
}
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = EmployeesModel.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!employee) {
      return res
        .status(400)
        .json({ message: `Employee ID ${req.params.id} not found` });
    }
    const result = await EmployeesModel.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(204).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employee = await EmployeesModel.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!employee) {
      return res
        .status(400)
        .json({ message: `Employee ID ${req.params.id} not found` });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
