import {httpClient} from "../environments/environment";

export const getFrutas = async () => {
    const {data} = await httpClient.get(`/get-frutas`);
    return data;
}

export const getFrutasPedido = async () => {
    const {data} = await httpClient.get(`/get-frutas-pedido`);
    return data;
}

export const storeFrutasPedido = async (lista) => {
    const {data} = await httpClient.post(`/store-frutas-pedido`, lista);
    return data;
}