"use client";
import Teamtemplate from "../teamtemplate";
export default function Reps() {
    return (
        <Teamtemplate color="40,87,255" colorDark="48,58,117">
            <Teamtemplate.Main
                title={
                    <>
                        Representatives
                        
                    </>
                } />
            <Teamtemplate.Cards
                features={[
                    {
                        image: "/images/Mehul_G.jpg",
                        imageClassName: "",
                        title: "Mehul Gupta",
                        text: "General Secretary, BOST",
                    },
                    {
                        image: "/images/ashwani-sharma.jpg",
                        imageClassName:
                            "w-[80%]",
                        title: "Dr. Ashwani Sharma",
                        text: "Faculty Advisor, BOST",
                    },
                    {
                        image: "/images/Shashi Shekhar.jpg",
                        imageClassName:
                            "",
                        title: "Dr. Shashi Shekhar Jha",
                        text: "Associate Faculty Advisor, BOST",
                    },
                ]}
            />
        </Teamtemplate>

    )
}