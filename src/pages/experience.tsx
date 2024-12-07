import { Fieldset } from 'primereact/fieldset';
import {Chip} from "primereact/chip";
import {Divider} from "@mui/material";
import CompanyCarousel from "../components/companycarousel.tsx";

export default function ExperiencePage() {
    const experienceChips = [
        { Name: 'HTML', Color: 'green' },
        { Name: 'CSS', Color: 'green' },
        { Name: 'Typescript', Color: 'green' },
        { Name: 'Javascript', Color: 'green' },
        { Name: 'Angular', Color: 'green' },
        { Name: 'React', Color: 'green' },
        { Name: 'Node.Js', Color: 'green' },
        { Name: 'Express.Js', Color: 'green' },
        { Name: 'C#', Color: 'green' },
        { Name: '.NET', Color: 'green' },
        { Name: 'Entity Framework', Color: 'green' },
        { Name: 'Postgresql', Color: 'green' },
        { Name: 'MS SQL', Color: 'green' },
        { Name: 'Visual Basic', Color: 'green' },
        { Name: 'Linux', Color: 'green' },
        { Name: 'Firewalls', Color: 'green' },
        { Name: 'Email Server Management', Color: 'green' },
        { Name: 'VoIP', Color: 'green' },
        { Name: 'AWS', Color: 'green' },
        { Name: 'Nginx', Color: 'green' },
        { Name: 'Apache', Color: 'green' },
        { Name: 'MikroTik', Color: 'green' },
    ]
    
    const skillsChips = [
        { Name: 'Git', Color: 'yellow' },
        { Name: 'Github', Color: 'yellow' },
        { Name: 'BitBucket', Color: 'yellow' },
        { Name: 'Jira', Color: 'yellow' },
        { Name: 'RESTful API\'s', Color: 'yellow' },
        { Name: 'npm / nvm', Color: 'yellow' },
        { Name: 'SendGrid', Color: 'yellow' },
        { Name: 'DNS Management', Color: 'yellow' },
        { Name: 'Time Management', Color: 'yellow' },
        { Name: 'Fast Learner', Color: 'yellow' },
        { Name: 'Patience', Color: 'yellow' },
        { Name: 'Commitment', Color: 'yellow' },
    ]
    
    return (
        <>
            <div style={{ backgroundColor: '#252525' }} className={`flex flex-col h-full w-full`}>
                
                {/* Carousel of companies I've worked for */}
                <div className={`flex flex-col h-full w-full justify-center items-center mt-[100px] mb-[100px] text-center`}>
                    <h2 className={`mb-[55px]`}>Companies Served On Employers Behalf</h2>
                    <CompanyCarousel></CompanyCarousel>
                </div>
                
                {/* Experience Section */}
                <div className={`flex flex-col md:flex-row h-full w-full justify-around items-center md:items-start p-2`}>
                    <div className={`flex flex-col h-full w-full md:w-1/2 p-2`}>
                        <h1>Experience Overview</h1>
                        <Divider style={{borderColor: "white"}}></Divider>
                        <p>My journey in the IT field began with my two-year tenure as a Junior Systems Administrator.
                            This role allowed me to develop my problem-solving
                            skills and gain hands-on experience with various IT systems including PBX systems for VoIP,
                            linux firewall systems, and email server management,
                            to name a few.</p>
                        <p>Transitioning into the development world, I have spent the last year and few months honing my
                            coding skills. I am proficient in C#, HTML, CSS,
                            Node.js, TypeScript, and Angular, and my ability to work with Linux systems has been
                            invaluable in hosting and managing my side projects. In addition, I have been learning more
                            about AWS in my spare time. This
                            diverse skill set, coupled with my eagerness to tackle new challenges, makes me confident in
                            my abilities and any tasks I might take on in the future</p>
                    </div>
                    <div className={`flex flex-col h-full w-full md:w-1/3 mt-3 md:mt-[64px]`}>
                        <Fieldset legend="Experience Summary">
                            {experienceChips.map((chip) => {
                                return <Chip style={{border: `solid 1px ${chip.Color}`}} className={`m-1`}
                                             label={chip.Name}></Chip>
                            })}
                        </Fieldset>
                    </div>
                </div>

                {/* Skills Section */}
                <div className={`flex flex-col md:flex-row h-full w-full justify-around items-center md:items-start mt-[100px] mb-[100px] p-2`}>
                    <div className={`flex flex-col h-full w-full md:w-1/2 p-2`}>
                        <h1>Skills Overview</h1>
                        <Divider style={{borderColor: "white"}}></Divider>
                        <p>In addition to my hands-on experience in various IT and development roles, I have cultivated
                            a diverse skill set essential for modern web development and project management. My
                            technical proficiency spans version control systems like Git and GitHub, collaborative tools
                            such as Jira, and advanced API management including RESTful APIs. I am, furthermore, adept
                            at using package managers like npm and nvm to control the various node versions between my
                            projects, and have experience with email services like SendGrid</p>
                        <p>While I have learnt a lot throughout my time at my previous and current employer, I have
                            primarily been self-taught and I pride myself on this as well as in being a fast learner,
                            developing patience, and maintaining a strong commitment to my work. These skills, combined
                            with my ability to adapt and learn new technologies quickly, enable me to tackle complex
                            challenges and contribute effectively to any project.</p>
                    </div>
                    <div className={`flex flex-col h-full w-full md:w-1/3 mt-3 md:mt-[64px]`}>
                        <Fieldset legend="Skills Summary">
                            {skillsChips.map((chip) => {
                                return <Chip style={{border: `solid 1px ${chip.Color}`}} className={`m-1`}
                                             label={chip.Name}></Chip>
                            })}
                        </Fieldset>
                    </div>
                </div>
            </div>

        </>
    )
}