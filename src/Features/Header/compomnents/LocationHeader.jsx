import Icon from "../../../Shared/Components/Icon/Icon"

function LocationHeader() {
    return (
        <>
            <div className=" w-full flex justify-center items-center gap-2" >
                <Icon Icons={"First"} />
                <Icon Icons={"second"} />
                <div className=" gap-3 flex justify-center items-center w-[60%] text-[#e2e1e1]">
                    <Icon Icons={"loc"} />

                    <p>Dhaka,Bangladesh</p>

                </div>
            </div>
        </>
    )
}

export default LocationHeader
