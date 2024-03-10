

const WorkItem = ({ title, image, demoLink, codeLink }) => (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[rgb(219,39,119)] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100 text-center">
        <span className="text-2xl font-bold text-white tracking-widest">{title}</span>
        <div>
          <a href={demoLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={codeLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
  
  export default WorkItem