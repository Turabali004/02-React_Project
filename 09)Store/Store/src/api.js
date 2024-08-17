const axios = require('axios');
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://real-time-amazon-data.p.rapidapi.com/search',
  params: {
    query: 'Phone',
    page: '1',
    country: 'US',
    sort_by: 'RELEVANCE',
    product_condition: 'ALL',
    is_prime: 'false'
  },
  headers: {
    'x-rapidapi-key': 'a0ea104757msh7b2930007562b72p176614jsn4c42bcf303b7',
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}