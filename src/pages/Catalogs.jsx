import Catalog from '../components/Catalog';
import { getClientAccessToken, getCatalogs, getCatalogById } from '../utils/api';
import { useEffect, useState } from 'react';

function Catalogs() {
  const [catalogIds, setCatalogIds] = useState([]);
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const accessToken = await getClientAccessToken();
      const catalogIdsJson = await getCatalogs(accessToken);
      setCatalogIds(catalogIdsJson.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchCatalogs() {
      const accessToken = await getClientAccessToken();
      const requests = catalogIds.map((catalogId) => {
        return getCatalogById(accessToken, catalogId.id);
      });
      const catalogs = await Promise.all(requests);
      setCatalogs(catalogs);
    }

    if (catalogIds.length > 0) {
      fetchCatalogs();
    }
  }, [catalogIds]);


  if (catalogs.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>This is Catalogs page.</h1>
      {catalogs.map((catalog) => (
      <Catalog key={catalog.id} catalog={catalog} />
      ))}
    </div>
  );
}

export default Catalogs;
