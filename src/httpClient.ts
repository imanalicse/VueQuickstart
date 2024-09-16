import axios from "axios";
import { environment } from './config';

const httpClient = axios.create({
    baseURL: environment.apiBaseUrl + '/api'
});

export default httpClient;