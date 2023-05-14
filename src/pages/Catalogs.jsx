import Catalog from '../components/Catalog';
import Welcome from '../components/Welcome';
import LoadingSpinner from '../components/Loadings/LoadingSpinner';
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
    return (
    <div className="container my-8 px-6 mx-auto">
      <Welcome title={"Catalogs"} description={"Browse through the extensive list of catalogs and find what you're looking for."}/>
      <LoadingSpinner />
    </div>)
  }
  return (
    <div className="container my-8 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
      <Welcome title={"Catalogs"} description={"Browse through the extensive list of catalogs and find what you're looking for."}/>
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
