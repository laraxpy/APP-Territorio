const { request } = require("https")

exports.redirector =(req, res, next) => {
    if(!request.secure){
        return res.redirect("https//" + req.headers.host + req.url);
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
