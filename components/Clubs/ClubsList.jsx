import ClubsCard from "./ClubsCard"
import { clubs } from "@/public/data/clubs"

const ClubsList = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            {clubs.map((club, index) => (
                <div key={index}>
                    <ClubsCard club={club} />
                </div>
            ))}
        </div>
    )
}

export default ClubsList