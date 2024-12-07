import PortfolioPage from "./portfolio.tsx";
import ExperiencePage from "./experience.tsx";
import Avatar from "../components/avatar.tsx";

export default function HomePage() {
    
    return (
        <>
            <div style={{ backgroundColor: '#252525' }} className={`flex flex-col md:flex-row h-full md:h-screen w-full justify-center items-center text-center bg-cover pl-2 pr-2 pt-5 pb-10 md:pb-0`}>
                <div className={`flex flex-col w-full h-full md:w-1/2 justify-center items-center mt-20 md:mt-0`}>
                    <Avatar></Avatar>
                </div>
                <div className={`flex flex-col w-full md:w-1/2 h-full justify-center items-center mt-10 sm:m-0`}>
                    <div className={`flex flex-col w-full h-full justify-center md:items-start items-center text-center md:text-left pl-5 pr-5 sm:pl-10 sm:pr-10`}>
                        <p style={{color: `var(--text-color-secondary)`}} className={'mb-3 font-extrabold'}>Portfolio of Micah Hack</p>
                        <h1 className={`mt-0 mb-0 text-4xl`}>A list of all my</h1>
                        <h1 style={{color: 'var(--primary-color'}} className={`mt-0 mb-0 text-5xl`}>Personal Web Dev</h1>
                        <h1 className={`mt-0 mb-2 text-4xl`}>projects</h1>
                        <p>This react site was built to showcase the personal projects I have worked on to date</p>
                        <a className={`p-button p-button-outlined no-underline cursor-pointer`} href={`/MicahHackCV.pdf`} download={`MicahHackCV.pdf`}>Download CV</a>
                    </div>

                </div>

            </div>
            <PortfolioPage></PortfolioPage>
            <ExperiencePage></ExperiencePage>
        </>
    );
}
