import Image from "next/image";

const TeamCard = ({ userData }) => {
    const { name, position, image } = userData;

    return (
        <div className="p-3 lg:p-5 h-[500px]">
            <div>
                <Image src={`https://raw.githubusercontent.com/codec-ropar/codingclub/main/static/images/profiles/${image}`} width={300} height={300} className="w-full rounded-xl" alt={name} priority={true}/>
            </div>

            <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
                {name}
            </h2>

            <div className="mt-2 lg:mt-4 flex items-center justify-between ">
                <span className="bg-primary-gradient text-irisBlueColor py-1 px-2 lg:py-6 text-[18px] rounded leading-4 lg:leading-7 font-semibold">
                    {position}
                </span>
            </div>
        </div>
    );
};
export default TeamCard;
