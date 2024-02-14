import Image from "next/image"

const ClubsCard = ({ club }) => {
    const { heading, about, pic } = club

    return (
        <div className="p-2 lg:p-4 ">
            <div className="flex justify-evenly items-center">
                <Image src={pic} className="w-[250px] rounded-full h-[250px]" alt="img" />
            </div>

            <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-10 p-5 text-primary-text text-center font-[700] mt-3 lg:mt-5">
                {heading}
            </h2>

            <div className="mt-2 lg:mt-4 flex items-center justify-between ">
                <span className="text-center bg-primary-gradient text-offwhite py-1 px-2 lg:py-6 text-lg shadow-primary rounded-xl flex-grow leading-9.5 lg:leading-11 font-semibold">
                    {about}
                </span>
            </div>
        </div>
    )
}

export default ClubsCard