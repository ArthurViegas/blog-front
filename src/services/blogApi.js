export async function requestApi() {
  try {
    const response = await fetch('https://viegas-blog-api.herokuapp.com/post/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};