"use client";
import Teamtemplate from "../teamtemplate";
import { secretary } from "@/public/data/team.js";
export default function Secretary() {
    return (
        <Teamtemplate color="0,225,244" colorDark="31,49,64">
            <Teamtemplate.Main
                title={
                    <>
                       Club Secretary
                        
                    </>
                } />
            <Teamtemplate.Cards
                features={[
                    ...secretary.map((person, index) => ({
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