const { success, error } = require("../../response/macros");
const  Register  = require("../../models").Register;
exports.registration = async (req, res) => {
  try {
    let rb = req.payload;
    let data=[]
    let create = await Register.create({
      firstName: rb.firstName,
      lastName: rb.lastName,
      email: rb.email,
      gender: rb.gender,
      age: rb.age,
    });
    data.push(create)
    return success(data, "User registerd succesfully")(res);
  } catch (err) {
    console.log(err);
    return error(err.message)(res);
  }
};
