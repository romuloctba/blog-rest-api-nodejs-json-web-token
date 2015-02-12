var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , jwt = require('jwt-simple');
  var db = '';//coloque a url do db aqui
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var port = process.env.PORT || 8080;
  var router = express.Router();
  app.use('/api', router);
  /*Aqui criaremos as rotas*/
  var rotas = require('./rotas');
  router.route('/usuarios')
    .get(require('./validarJWT'), rotas.getUsuarios)  //alteramos esta
    .post(rotas.postUsuarios);
	router.route('/login')
    .post(rotas.login);
  mongoose.connect(db);
  app.listen(port);
  console.log('conectado a porta ' + port);
