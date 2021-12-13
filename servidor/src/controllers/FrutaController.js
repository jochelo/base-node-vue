const Fruta = require("../models/Fruta");
const FrutaController = {};

FrutaController.index = async (req, res) => {
    const frutas = await Fruta.get();
    res.status(200).json(frutas);
}

FrutaController.indexPedido = async (req, res) => {
    const frutasPedido = await Fruta.getPedidos();
    res.status(200).json(frutasPedido);
}

FrutaController.storePedido = async (req, res) => {
    const data = req.body;// await Fruta.getPedidos();
    for (const pedido of data) {
        await Fruta.createPedido(pedido);
    }
    const frutasPedido = await Fruta.getPedidos();
    res.status(200).json(frutasPedido);
}


module.exports = FrutaController;