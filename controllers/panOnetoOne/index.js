const { success, error } = require("../../response/macros");
const Pan_number = require('../../models').PAN;
const User = require("../../models").User;

async function panOnetoOne(req,res){
    try {
        const {user_id,pan_no} = req.payload;
        let create = await Pan_number.create({
            user_id:user_id,
            pan_no: pan_no
        })
        let data = await Pan_number.findAll({
            include: User
         })
        return success(data,'Pan generated succesfully')(res)
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    panOnetoOne
}