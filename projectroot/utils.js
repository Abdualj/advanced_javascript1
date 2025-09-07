// utils.js
export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
