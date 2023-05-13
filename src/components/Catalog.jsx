


function Catalog({catalog}) {
    const { id, name, link, creation_date, last_modified, category_count } = catalog;
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-semibold m-4">{name?.default}- <span className="opacity-50">{category_count} categories </span></p>
      </div>
    );
}


export default Catalog
