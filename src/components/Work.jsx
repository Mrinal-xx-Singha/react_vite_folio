import WorkItem from "./WorkItem";
import workData from "./Workdata";
const Work = () => {
  return (
    <div name="work" className="bg-[#080808] w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {workData.map((work) => (
            <WorkItem
              key={work.id}
              title={work.title}
              image={work.image}
              demoLink={work.demoLink}
              codeLink={work.codeLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;