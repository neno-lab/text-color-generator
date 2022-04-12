import { API_URL } from '../constants';

export const apiGetRandomColor = async () => {
  try {
    const fetchRes = await fetch(`${API_URL}/color/random`, {
      method: 'GET',
      cors: 'no-cors',
      cache: 'no-cache'
    });
    const { colors, success } = await fetchRes.json();
    return { colors, success };
  } catch (err) {
    return { status: 500 };
  }
};
