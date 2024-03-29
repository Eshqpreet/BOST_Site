"use client";
import Teamtemplate from "../teamtemplate";
import { rep } from "@/public/data/team.js";
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
                    ...rep.map((person, index) => ({
                        image: person.pic,
                        imageClassName: "",
                        title: person.name,
                        text: `${person.position}`,
                    })),
                    // Other hardcoded cards can be placed here if needed
                ]}

            />
        </Teamtemplate>

    )
}