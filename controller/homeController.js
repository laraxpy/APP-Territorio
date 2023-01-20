const { request } = require("https")

exports.redirector =(req, res, next) => {
    if(req.secure){
        res.send('Seguro')
        //return res.redirect("https//");
    }else{
        res.send('Inseguro')
    }
    next();
}
exports.pagInicio = (req,res) => {
    res.render('inicio')
}
exports.miTerritorio = (req, res) => {
    res.render('miTerritorio')
}
exports.mapa= (req, res) => {
    res.render('mapa')
}
exports.login = (req, res) => {
    res.render('login')
}
