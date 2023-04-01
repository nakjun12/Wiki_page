const MainList = ({ data }) => {
  //링크로  달고 데이터 넘겨줌

  return (
    <div className="py-8 title md:flex-grow">
      <h2 className="px-8 text-2xl font-medium text-gray-900 title-font mb-2">
        {data.title}
      </h2>
      {/* <span className="mt-1 text-gray-500 text-sm">{data.date}</span> */}
    </div>
  );
};

export default MainList;
