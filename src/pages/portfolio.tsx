import ReactCard from "../components/card.tsx";
import { Divider } from "@mui/material";

export default function PortfolioPage() {

    const cards = [
        { key: 1, title: 'Dream To Life', description: 'Dream to Life is a company site built to offer development services and target smaller businesses based within South Africa. The goal of Dream to Life is to promote smaller businesses and help them gain exposure faster by offering them lower prices for their development needs regardless of if the required system is internal or a public website for marketing purposes. The site was built using Angular, meaning HTML, SCSS, and Typescript were used with AWS and Cloudfront being used for the hosting.', siteUrl: 'www.dreamtolife.co.za', imageTitle: '/DreamToLife.jpg', picColor: 'purple' },
        { key: 2, title: 'Thy Gentlemen', description: 'Thy Gentlemen was built in order to provide mentorship to younger audiences who are interested in learning development or improving their english skills. The long-term goal is to expand Thy Gentlemen and add many more mentors who will assist younger audiences in all kinds of professional fields, and even possibly offer them guidance in their personal lives too, depending on the mentor. Thy Gentlemen was built using Angular, meaning HTML, SCSS, and Typescript were used with AWS and Cloudfront being used for the hosting.', siteUrl: 'www.thygentlemen.co.za', imageTitle: '/ThyGentlemen.png', picColor: 'green' },
        { key: 3, title: 'Curriculum Vitae', description: 'My curriculum vitae site was built as a mobile responsive, website copy of my existing CV. It was built simply to have access to my all my information easily, without the need of having to find or download the PDF file containing my CV. The CV site was built using Angular, meaning HTML, SCSS, and Typescript were used with AWS and Cloudfront being used for the hosting.', siteUrl: 'cv.micahhack.co.za', imageTitle: '/CvMicahHack.jpg', picColor: 'brown' },
    ]
    
    //const listviewCards = [
    //    { key: 1, id: '1', Name: 'Fx Bot', Description: 'The forex trading bot A.K.A Eve, is a console application built using C# and .Net Core, and is meant to be hosted as a service on a linux server.', DescriptionPartTwo: 'Eve functions by analyzing live market data and looking for an extremely specific pattern. If that pattern is found, either a short or long position will be entered with Eve setting the take-profit as well as stop-loss for all trades when entering the market.', isActive: true},
    //    { key: 2, id: '2', Name: 'M.S Hack CV',  Description: 'This CV site was built using Angular (Html, Css, and Typescript) to showcase all my experience, education, and the potential I can bring to the workplace.', DescriptionPartTwo: 'The site is mobile responsive, allows for changing of themes, to step between 2 pages of the sidebar, and to maximize/minimize each section such as the education, certificates, and work experience sections. In addition to these features, I\'ve included scroll-to-top button.', isActive: false},
    //    { key: 3, id: '3', Name: 'Thy Gentleman',  Description: 'Thy Gentleman was built using Angular (Html, Css, and Typescript) as more of a personal site, offering help to those in need of a helping hand', DescriptionPartTwo: 'The goal of Thy Gentleman is to provide support to those in need, and who don\'t see a way out. It\'s meant to be a helping hand for those suffering from depression, BPD, and other disorders as in today\'s society they\'re overlooked problems which need to be addressed.', isActive: false},
    //    { key: 5, id: '4', Name: 'Modern Minds',  Description: 'The Modern Minds site is currently in-progress and being re-worked using Angular (Html, Css, and Typescript). Please select \'Read more\' to obtain the original site url.', DescriptionPartTwo: 'The purpose and goal of reworking the Modern Minds site is to add a more modern feel and functionality to the site, giving it a sleeker, and easier to read layout.', isActive: false},
    //    { key: 6, id: '5', Name: 'Technical Interview (1)',  Description: 'This code was written using Javascript, with the overall goal of finding the median of monthly expenses. Please select \'Read more\' if you wish to view the github repository', DescriptionPartTwo: 'While writing this simple Javascript solution, I made sure to keep the different timezones in mind in order to make it as reliable as possible. The instruction was to take the preset data given in the expenses variable, calculate the median monthly expenses, and return them.', isActive: false},
    //]
    
    return (
        <>
            <div className={'flex flex-col h-full w-full sm:w-1/2 sm:ml-14 mt-16 pl-2 pr-2 sm:pl-0 sm:pr-0'}>
                <h1>Top 3 Projects</h1>
                <Divider style={{ borderColor: "white" }}></Divider>
            </div>
            <div className={'flex flex-col w-full h-full lg:h-[530px] mt-10 mb-24 justify-center items-center'}>
                <div className={'flex flex-col flex-wrap md:flex-row w-full h-full justify-evenly items-center'}>
                    {cards.map(card => {
                        return <ReactCard title={card.title} description={card.description} siteUrl={card.siteUrl} imageTitle={card.imageTitle} picColor={card.picColor}></ReactCard>
                    })}
                </div>
            </div>
        </>
    );
}
