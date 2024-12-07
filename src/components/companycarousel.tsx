import CarouselStyles from './companycarousel.module.css';
import {useState} from "react";
import {Carousel} from "primereact/carousel";

export default function CompanyCarousel() {
    const logos = [
        { key: 1, Path: '/CompanyLogos/AdaptIT.png'},
        { key: 2, Path: '/CompanyLogos/ExonicWhite.png'},
        { key: 3, Path: '/CompanyLogos/Lemonaide.png'},
        { key: 4, Path: '/CompanyLogos/RaizcorpWhite.png'},
        { key: 5, Path: '/CompanyLogos/Seremed.png'},
        { key: 6, Path: '/CompanyLogos/TreasuryOne.png'},
    ]
    const [LogoState] = useState(logos);
    
    const logoElement = ((logo) => {
        return (
            <img alt="Company Logo" src={logo.Path} className={`${CarouselStyles.companyLogo}`} />
        )
    })
    
    return (
        <>
            <div className={`flex flex-row h-full w-full md:w-3/4 justify-center items-center`}>
                <Carousel value={LogoState} numVisible={1} numScroll={1} className={`h-full w-full`} circular
                          autoplayInterval={3000} itemTemplate={logoElement} />
            </div>
        </>
    )
}