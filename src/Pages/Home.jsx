import Navbar from "../Components/Navbar";
import Hero from "../Assets/Hero.webp";
import logoText from "../Assets/Divine Glow Logo Text.png";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

export default function Home() {
    return (
        <>
            <Navbar active={0} transparent={true} />

            <div className="w-screen h-screen relative">
                <img
                    src={Hero}
                    alt="Hero"
                    className="w-full h-full object-cover absolute z-10"
                />

                <div className="absolute w-full h-full bg-black/65 z-20 flex flex-col items-center justify-evenly">
                    <img src={logoText} className="h-1/3 w-3/4 object-contain" alt="logo" />

                    <a
                        className="text-white font-semibold border-2 flex flex-row items-center border-white px-4 py-2 rounded-xl transition-all duration-300 bg-primary-hover hover:border-transparent pointer-cursor"
                        href="/product"
                    >
                        Lihat Produk
                        <ArrowCircleRightRoundedIcon className="ml-2" />
                    </a>
                </div>
            </div>
        </>
    );
}
