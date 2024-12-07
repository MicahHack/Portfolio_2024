import avatarStyles from './avatar.module.css';

export default function Avatar() {
    return (
        <>
            <div className={`flex flex-col w-10/12 sm:w-80 h-[400px] justify-center items-center bg-cyan-300 rounded-lg overflow-hidden pt-24 ${avatarStyles.floatItem}`}>
                <img alt={`MsHack greyscale Picture`} src={`/CVPic_1.png`} className={`md:scale-150`} />
            </div>
        </>
    )
}