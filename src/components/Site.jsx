


function Site({site}) {
    const { id, display_name, creation_date, last_modified, cartridges, storefront_status } = site;

    const truncatedCartridges =cartridges.length > 50 ? cartridges.slice(0, 50) + '...' : cartridges;

    const createdDate = new Date(creation_date);
    const formattedCreationDate = createdDate.toLocaleDateString();

    const lastModifiedDate = new Date(last_modified);
    const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString();
    return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 opacity-70 whitespace-nowrap dark:text-white">
                    {id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {display_name?.default}
                </th>
                <td className="px-6 py-4">
                    {formattedCreationDate}
                </td>
                <td className="px-6 py-4">
                    {formattedLastModifiedDate}
                </td>
                <td className="px-6 py-4">
                    <div className={`h-2.5 w-2.5 float-left rounded-full ${storefront_status === 'online' ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>{storefront_status}
                </td>
                <td className="px-6 py-4">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{truncatedCartridges}</span>
                </td>
            </tr>
    );
}


export default Site
