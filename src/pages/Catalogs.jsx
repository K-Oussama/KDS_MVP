import Catalog from '../components/Catalog';
import LoadingSpinner from '../components/LoadingSpinner';
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
    return (<LoadingSpinner />)
  }
  return (
    <div className="container my-8 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-12 text-center">This is <span className="text-blue-600">Catalogs</span> page</h1>
      <div className="grid lg:grid-cols-3 gap-6">
      {catalogs.map((catalog) => (
      <Catalog key={catalog.id} catalog={catalog} />
      ))}
      </div>
      </section>
    </div>
  );
}

export default Catalogs;
