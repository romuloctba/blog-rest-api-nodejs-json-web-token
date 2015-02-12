module.exports = {
  getUsuarios: function(req, res){
    res.json({message: "rota para GET do /usuarios"})
  },
  postUsuarios: require('./controllerCriaUsuario'),
  login: require('./controllerLogin')
}