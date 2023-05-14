import Site from '../components/Site';
import Welcome from '../components/Welcome';
import LoadingSpinner from '../components/Loadings/LoadingSpinner';
import { getClientAccessToken, getSites, getSiteById } from '../utils/api';
import { useEffect, useState } from 'react';

function Sites() {
  const [SiteIds, setSiteIds] = useState([]);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const accessToken = await getClientAccessToken();
      const SiteIdsJson = await getSites(accessToken);
      setSiteIds(SiteIdsJson.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchSites() {
      const accessToken = await getClientAccessToken();
      const requests = SiteIds.map((SiteId) => {
        return getSiteById(accessToken, SiteId.id);
      });
      const Sites = await Promise.all(requests);
      setSites(Sites);
    }

    if (SiteIds.length > 0) {
      fetchSites();
    }
  }, [SiteIds]);

  console.warn('Sites', sites)

  if (sites.length === 0) {
    return (
      <div className="container my-8 px-6 mx-auto">
      <Welcome title={"Sites"} description={"Here you can find information about all of the shop's sites."}/>
      <LoadingSpinner />
      </div>
    )
  }
  return (
    <div className="container my-8 px-6 mx-auto">
      <Welcome title={"Sites"} description={"Here you can find information about all of the shop's sites."}/>
      <br/><br/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Site ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Site name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          creation date
                      </th>
                      <th scope="col" className="px-6 py-3">
                          last modified
                      </th>
                      <th scope="col" className="px-6 py-3">
                          status
                      </th>
                      <th scope="col" className="px-6 py-3">
                          cartridges
                      </th>
                  </tr>
              </thead>
              <tbody>
              {sites.map((site) => (
                  <Site key={site.id} site={site} />
              ))}
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default Sites;
