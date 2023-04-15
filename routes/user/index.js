const Joi = require("joi");
const {registration} = require('../../controllers/registration')
const {userOnetoOne} = require('../../controllers/userOnetoOne');
const { panOnetoOne } = require("../../controllers/panOnetoOne");
const router = [
  {
      path: '/user-registration',
      method: 'post',
      options: {
          handler: registration,
          description: 'Registration of an user with basic infos',
          notes: 'User registration',
          tags: ['api', 'user'],
          auth: false,
          validate: {
              payload: Joi.object({
                  firstName:  Joi.string().required(),
                  lastName:  Joi.string().required(),
                  email:  Joi.string().email().required(),
                  gender: Joi.string().required(),
                  age: Joi.string().required()
              })
          }
      }
  },
  {
    path: '/user-one-to-one',
    method: 'post',
    options: {
        handler: userOnetoOne,
        description: 'One to one established',
        notes: 'One to one established',
        tags: ['api', 'user'],
        auth: false,
        validate: {
            payload: Joi.object({
                name: Joi.string().required(),
                location: Joi.string().required()
            })
        }
    }
},
{
    path: '/pan-one-to-one',
    method: 'post',
    options: {
        handler: panOnetoOne,
        description: 'One to one established',
        notes: 'One to one established',
        tags: ['api', 'user'],
        auth: false,
        validate: {
            payload: Joi.object({
                user_id: Joi.number().integer().required(),
                pan_no: Joi.number().integer().required()
            })
        }
    }
}
];

module.exports = router;
