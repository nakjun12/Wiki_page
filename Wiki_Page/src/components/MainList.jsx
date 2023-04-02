import { Link } from "react-router-dom";

const MainList = ({ data, wikiList, size }) => {
  return (
    <h2 className="md:flex-grow hover:bg-gray-300">
      <div className={size ? size : "py-8"}>
        <Link to={`/wiki/${data.id}`} state={{ wikiList, data }}>
          <h2 className=" px-8 text-2xl font-medium text-gray-900 title-font mb-2">
            {data.title}
          </h2>
        </Link>
      </div>
    </h2>
  );
};

export default MainList;
