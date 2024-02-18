"use client";

import Container from './container';
import classNames from 'classnames';
import { useInView } from "react-intersection-observer";
export default function Teamtemplate({ children, color, colorDark }) {
    const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: false });
    return (
        <section
            ref={ref}
            className={classNames(
                "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
                inView &&
                "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
                !inView && "before:rotate-180 before:opacity-40"
            )}
            style={
                {
                    "--feature-color": color,
                    "--feature-color-dark": colorDark,
                }
            }
        >
            <div className="mb-16 w-full mt-[25.2rem] md:mb-[12.8rem]">
                {children}
            </div>
        </section>
    );
}

export const Mainfeature = ({ title }) => {
    return (
        <>
            <div className='relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'>
                <div className={classNames(
                    "max-w-[90%] text-center w-[50rem] mx-auto",
                    //   imageSize === "small" ? "md:w-[78rem]" : "md:w-[102.4rem]"
                )}>
                    <h2 className='text-gradient text-6xl translate-y-[20%] [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-[-20%] md:text-8xl mb-11 p-2'>{title}</h2>
                </div>
            </div>
            <div className='max-w-[90%] text-center mx-auto'>
                <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
            </div>
        </>

    )
}
const Featurecard = ({ features }) => {
    return (
        <Container>
            <div className='w-[80%] lg:w-[100%] mx-auto'>
                <div className="grid w-full grid-cols-1 gap-6 gap-y-10 lg:grid-cols-3 md:grid-cols-2">
                    {features.map(({ title, text, image, imageClassName }) => (
                        <div
                            key={title}
                            className="relative aspect-[1.1/1] lg:min-h-[290px] mx-[10%] md:mx-0 min-h-[190px] max-h-[290px] md:max-h-[320px] lg:max-h-[450px] overflow-hidden rounded-[2.4rem] border border-white-a08 bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] py-4 px-4 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-10"
                        >
                            <h3 className="mb-2 text-2xl text-white">{title}</h3>
                            <p className="max-w-[31rem] text-md text-primary-text">{text}</p>
                            <img
                                className={classNames("absolute rounded-full h-[170px] w-[170px] md:h-[200px] md:w-[200px]", imageClassName)}
                                src={image}
                            />
                        </div>
                    ))}
                </div>
            </div>


        </Container>
    );
};
Teamtemplate.Main = Mainfeature;
Teamtemplate.Cards = Featurecard;


