import titlebarStyles from './titlebar.module.css';

export default function Titlebar() {
    return (
        <>
            <div style={{ backgroundColor: '#252525' }} className={`flex flex-col w-full h-14 justify-start items-center drop-shadow-2xl shadow-2xl overflow-x-scroll ${titlebarStyles.noScrollbar}`}>
                <div
                    className={`flex flex-row w-full h-full items-center border-solid border-t-0 border-l-0 border-r-0 border-b border-white`}>
                    <a style={{color: `var(--primary-color)`}} className={`no-underline cursor-pointer ml-5 mr-5`}
                       href={'/'}>HOME</a>
                    <a style={{color: `var(--primary-color)`}} className={`no-underline cursor-pointer ml-5 mr-5`}
                       href={'/portfolio'}>PROJECTS</a>
                    <a style={{color: `var(--primary-color)`}} className={`no-underline cursor-pointer ml-5 mr-5`}
                       href={'/experience'}>EXPERIENCE</a>
                </div>
            </div>
        </>
    )
}