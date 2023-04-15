const { success, error } = require("../../response/macros");
const User = require("../../models").User;
const Pan_number = require('../../models').PAN;

async function userOnetoOne(req, res) {
  try {
    const { name, location } = req.payload;

    let create = await User.create({
      name: name,
      location: location,
    });

    let data = await User.findAll({
       include: Pan_number
    })

    return success(data, "User generated succesfully")(res);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  userOnetoOne,
};
