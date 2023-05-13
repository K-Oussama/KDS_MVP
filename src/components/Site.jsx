


function Site({site}) {
    const { id, display_name, link, creation_date, last_modified, cartridges, storefront_status } = site;
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-semibold m-4">{display_name.default}- <span className="opacity-80 text-green-600">{storefront_status}</span></p>
      </div>
    );
}


export default Site
