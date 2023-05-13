


function Catalog({catalog}) {
  console.warn(catalog)  
    const { id, name, link, creation_date, last_modified, category_count } = catalog;
    return (<>

      <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover bg50">
        <img src={`https://source.unsplash.com/800x600/?${id}`} className="w-full transition duration-300 ease-linear align-middle" alt={id}/>
        <a href={link}>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-[#fdfdfd26]">
            <div className="flex justify-start items-end h-full">
              <h5 className="text-lg font-bold text-white m-6">{name?.default}</h5>
            </div>
          </div>
          <div className="hover-overlay">
            <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[#fdfdfd26]"></div>
          </div>
        </a>
      </div>


      </>
    );
}


export default Catalog
