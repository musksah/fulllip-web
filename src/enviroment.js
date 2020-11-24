const URL_APP_LOCAL = "http://localhost:3000";
const URL_APP_PRODUCCION = "https://fullipscolombia.com";
const URL_LOCAL = "http://localhost:8005/api";
const URL_PRODUCCION = "https://sebastianhr-services.site/api";
const API_KEY_PRUEBAS = "491d6a0b6e992cf924edd8d3d088aff1";
const API_KEY_FULLIPS = "58fb52a050f1e7cfc8569f7550b477f3";

export default {
    urlApi: URL_PRODUCCION,
    urlWeb: URL_APP_PRODUCCION,
    epayco:{
        apiKey: API_KEY_FULLIPS,
        responsePage: `${URL_APP_PRODUCCION}/response-payment`,
        confirmationPage: `${URL_PRODUCCION}/epayco/confirmation-payment`,
        acceptedPage: `${URL_APP_PRODUCCION}/accepted-payment`,
        rejectedPage: `${URL_APP_PRODUCCION}/rejected-payment"`,
        pendingPage: `${URL_APP_PRODUCCION}/pending-payment`,
        currency: "cop",
        country: "co",
    },
}