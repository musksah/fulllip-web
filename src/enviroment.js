const URL_APP_LOCAL = "http://localhost:3000";
const URL_APP_PRODUCCION = "https://fullipscolombia.com";
const URL_LOCAL = "http://localhost:8005/api";
const URL_PRODUCCION = "https://sebastianhr-services.site/api";
const API_KEY_PRUEBAS = "491d6a0b6e992cf924edd8d3d088aff1";
const API_KEY_FULLIPS = "58fb52a050f1e7cfc8569f7550b477f3";

const URL_API = URL_LOCAL;
const URL_WEBSITE = URL_APP_LOCAL;
const API_KEY = API_KEY_FULLIPS;

export default {
    urlApi: URL_API,
    urlWeb: URL_APP_PRODUCCION,
    epayco:{
        apiKey: API_KEY,
        responsePage: `${URL_WEBSITE}/response-payment`,
        confirmationPage: `${URL_API}/epayco/confirmation-payment`,
        acceptedPage: `${URL_WEBSITE}/accepted-payment`,
        rejectedPage: `${URL_WEBSITE}/rejected-payment"`,
        pendingPage: `${URL_WEBSITE}/pending-payment`,
        currency: "cop",
        country: "co",
    },
}