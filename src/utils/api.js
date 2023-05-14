import axios from 'axios';
import CryptoJS from 'crypto-js';

function generateClientCredentials(ocapiClientId, ocapiClientPassw) {
  const rawStr = CryptoJS.enc.Utf8.parse(`${ocapiClientId}:${ocapiClientPassw}`);
  const base64Encoded = CryptoJS.enc.Base64.stringify(rawStr);
  return base64Encoded;
}

const getClientAccessToken = async () => {
  const { data } = await axios.request({
    url: '/dwsso/oauth2/access_token',
    method: "post",
    baseURL: 'https://account.demandware.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Basic " + generateClientCredentials(import.meta.env.VITE_CLIENT_ID, import.meta.env.VITE_CLIENT_PASSWORD),
    },
    data: {
      "grant_type": "client_credentials",
    },
    }
  );
  return data.access_token;
};


async function getCatalogs(accessToken) {
  const response = await fetch(`${import.meta.env.VITE_COMMERCE_CLOUD_HOST}/s/-/dw/data/v23_2/catalogs`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'x-dw-client-id': import.meta.env.VITE_CLIENT_ID,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch catalogs');
  }

  const catalogs = await response.json();
  return catalogs;
}

async function getCatalogById(accessToken, id) {
  const response = await fetch(`${import.meta.env.VITE_COMMERCE_CLOUD_HOST}/s/-/dw/data/v23_2/catalogs/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'x-dw-client-id': import.meta.env.VITE_CLIENT_ID,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch catalog');
  }

  const catalog = await response.json();
  return catalog;
}

async function getSites(accessToken) {
  const response = await fetch(`${import.meta.env.VITE_COMMERCE_CLOUD_HOST}/s/-/dw/data/v23_2/sites`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'x-dw-client-id': import.meta.env.VITE_CLIENT_ID,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch sites');
  }

  const sites = await response.json();
  return sites;
}

async function getSiteById(accessToken, id) {
  const response = await fetch(`${import.meta.env.VITE_COMMERCE_CLOUD_HOST}/s/-/dw/data/v23_2/sites/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'x-dw-client-id': import.meta.env.VITE_CLIENT_ID,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch site');
  }

  const site = await response.json();
  return site;
}

async function searchJobExecutions(accessToken, jobId) {
  const JobExecutions = await axios.post(`${import.meta.env.VITE_COMMERCE_CLOUD_HOST}/s/-/dw/data/v23_2/job_execution_search`,
    {
      "query": {
          "text_query": {
            "fields": [
              "job_id"
            ],
            "search_phrase": jobId
          }
        },
    },
    {
      headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${accessToken}`,
      'x-dw-client-id': import.meta.env.VITE_CLIENT_ID,
      },
    }
  );

  return JobExecutions.data;
}

async function searchOrdersByEmail(accessToken, shopId, email) {
  const JobExecutions = await axios.post(`${import.meta.env.VITE_COMMERCE_CLOUD_HOST}/s/${shopId}/dw/shop/v23_2/order_search`,
    {
      "query": {
          "text_query": {
            "fields": [
              "customer_email"
            ],
            "search_phrase": email
          }
        },
      "select": "(**)",
      "sorts": [{ "field": "customer_name", "sort_order": "asc" }]
    },
    {
      headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${accessToken}`,
      'x-dw-client-id': import.meta.env.VITE_CLIENT_ID,
      },
    }
  );

  return JobExecutions.data;
}

export { getClientAccessToken, getCatalogs, getCatalogById, getSites, getSiteById, searchJobExecutions, searchOrdersByEmail };
