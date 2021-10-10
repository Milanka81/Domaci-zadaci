import axios from "axios";

const BASE = 'https://restcountries.com'
const VERSION = 'v2'
const ALL = 'all'

export const getAllCountries = () => axios.get(`${BASE}/${VERSION}/${ALL}`)