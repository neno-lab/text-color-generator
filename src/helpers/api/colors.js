import { colorApi } from '.';

export const apiGetRandomColor = async () => {
  try {
    const { data, status } = await colorApi.get(`/color/random?query&timestamp=${new Date().getTime()}`);
    return { data, status };
  } catch (err) {
    return { status: 500 };
  }
};
