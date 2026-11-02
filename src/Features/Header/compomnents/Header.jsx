import LocationHeader from './LocationHeader'
import SearchHeader from './SearchHeader'

function Header() {
    return (
        <>
            <div className=' w-[98%] mx-auto flex  items-center justify-between     '>
                <div className=" w-[20%]">
                    <LocationHeader />
                </div>
                <div className=" w-[60%] ">
                    <SearchHeader />
                </div>
            </div>
        </>
    )
}

export default Header
