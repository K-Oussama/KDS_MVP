import Site from '../components/Site';
import { getClientAccessToken, getSites, getSiteById } from '../utils/api';
import { useEffect, useState } from 'react';

function Sites() {
  const [SiteIds, setSiteIds] = useState([]);
  const [Sites, setSites] = useState([]);

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

  if (Sites.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>This is Sites page.</h1>
      {Sites.map((site) => (
      <Site key={site.id} site={site} />
      ))}
    </div>
  );
}

export default Sites;
