import Icon from "../../../Shared/Components/Icon/Icon"
import ThemeToggle from "./ThemeToggle"

function SearchHeader() {
    return (
        <>
            <div className=" w-full flex justify-between items-center">
         
                <div className="w-[65%] bg-transparent relative">
                    <input
                        type="text"
                        className="w-full bg-[#232325] hover:bg-gray-800 duration-200  text-right placeholder:text-left  placeholder:pl-12 text-[#bcbbbb] border-none placeholder:text-[#bcbbbb] p-3 rounded-[10px] pr-10"
                        placeholder="Search City"
                    />

                    <div className="absolute  translate-x-8 flex justify-center items-center  top-1/2 -translate-y-1/2 text-[#bcbbbb]">
                        <Icon Icons={"search"} />
                    </div>
                </div>

                <div className="  flex  justify-between items-center w-[20%]">
                    <ThemeToggle />
                    <img src="./public/img.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default SearchHeader
