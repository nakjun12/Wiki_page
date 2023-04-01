import { Link } from "react-router-dom";

const MainList = ({ data, wikiList, size }) => {
  //링크로  달고 데이터 넘겨줌

  return (
    <div className="title md:flex-grow">
      <div className={size ? size : "py-8"}>
        <Link to={`/wiki/${data.id}`} state={{ wikiList, data }}>
          <h2 className="px-8 text-2xl font-medium text-gray-900 title-font mb-2">
            {data.title}
          </h2>
          {/* <span className="mt-1 text-gray-500 text-sm">{data.date}</span> */}
        </Link>
      </div>
    </div>
  );
};

export default MainList;
