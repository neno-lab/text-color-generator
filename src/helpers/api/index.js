import { API_URL } from '../constants';
import axios from 'axios';

export const colorApi = axios.create({
  baseURL: API_URL
});
