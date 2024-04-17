export default function Home() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="h-[1px] border-[1px] border-white"></div>
        <div className="mt-[12%]">
          <div className="flex justify-center py-2">
            <div className="flex-col mr-[30%]">
              <div className=" bg-orange-700 rounded-lg text-center p-5 w-[150px] ">
                Hello, I am
              </div>
              <div className="absolute ml-2 overflow-hidden">
                <div className="h-3 w-4 origin-top-right rotate-45 transform  bg-orange-700"></div>
              </div>
            </div>
          </div>
          <div className="font-bold font-serif sm:text-7xl text-3xl text-center">
            Kunal Shivhare
            <div className="font-bold font-serif sm:text-lg text-md">
              Professional Full-Stack Developer
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <button className="p-3 bg-orange-700 text-white rounded-lg w-[150px]">
              Download CV
            </button>
            <button className="p-3 border-[1px] text-white rounded-lg w-[130px] shadow-md shadow-white">
              My Work
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
