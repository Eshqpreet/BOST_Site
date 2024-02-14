"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Image from Next.js
import VanillaTilt from 'vanilla-tilt'; // Import VanillaTilt for card animation
import TeamCard from './TeamCard';

const TeamList = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        const url = 'https://docs.google.com/spreadsheets/d/1KbvLXThlUEhoPrzYyD8gmLIi974UsBTv7tC-KwKdQOo/export?format=tsv&gid=0';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.text();
                const rows = data.split('\n');
                let result = [];
                let currentSection = null;
                for (let i = 1; i < rows.length; i++) {
                    const cells = rows[i].split('\t');
                    if (cells[0].trim() === '-') {
                        currentSection = cells[1].trim();
                        result.push([]);
                    } else {
                        result[result.length - 1].push({
                            name: cells[0].trim(),
                            position: cells[1].trim(),
                            batch: cells[2].trim(),
                            image: cells[3].trim(),
                            handle: cells[4].trim(),
                            cfTitle: cells[5].trim(),
                            linkedin: cells[6].trim(),
                            github: cells[7].trim(),
                            section: currentSection,
                        });
                    }
                }
                setTeamData(result);
                // Apply VanillaTilt to cards after data is fetched and set
                VanillaTilt.init(document.querySelectorAll(".card"), {
                    max: 25,
                    speed: 400,
                    glare: true,
                    "max-glare": 0.5,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            {teamData.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <h1>{section[0].section}</h1>
                    {section.map((member, index) => (
                        <TeamCard key={index} userData={member} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TeamList;
