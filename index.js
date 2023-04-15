
const server = require('./config/server')
const baseRouter = require('./routes')

const init = async () => {
  
 
  // Adding plugins for swagger docs;
  
  await server.register(baseRouter,{
  routes:{
    prefix:'/api'
  }
});

  server.events.on('response', function (request) {
      console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode);
  });
  await server.start();
  console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});
init()