const db = require('../db');

const Fruta = {};

Fruta.get = async () => {
    return await db.query(`select * from frutas`);
}

Fruta.getPedidos = async () => {
    return await db.query(`select cantidad, f.nombre as 'nombreFruta', f.precio as 'precio' from frutas f, pedidos p where f.id=p.fruta_id`);
}


module.exports = Fruta;