import axios from 'axios'

export async function getData (context) {
  try {
    const response = await axios.get('https://demoapi.thedenstore.com/api/service?Request=Stores&Language=en-us');
    console.log(response.data);
    context.commit('reSetData', response.data)
  } catch (error) {
    console.error(error);
  }
}
