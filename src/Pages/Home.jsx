import ParentItem from "../Features/ListDayItem/Components/ParentItem"

function Home() {
    return (

        <div className=" mx-auto w-[97%] flex  flex-col  bg-gray-600 ">
            <div className=" w-full   text-cyan-100 bg-yellow-200">
               <ParentItem/>
            </div>
          <div className=" text-white">
            under
          </div>
        </div>
    )
}

export default Home
