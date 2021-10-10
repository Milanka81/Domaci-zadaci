import axios from "axios";

export const getAllCountries = () => axios.get('https://restcountries.com/v2/all')