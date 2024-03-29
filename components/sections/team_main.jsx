"use client";
import Teamtemplate from "../teamtemplate";
export default function Teammain() {
    return (
        <Teamtemplate color="194,97,254" colorDark="53,42,79">
            <Teamtemplate.Main
                title={
                    <>
                        BOST Team
                        
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
                            "",
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