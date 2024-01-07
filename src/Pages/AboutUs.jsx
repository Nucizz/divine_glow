import { carouselData, AboutUsText } from "../Class/Data";
import Navbar from "../Components/Navbar";
import { Carousel, Typography } from "@material-tailwind/react";
import logo from "../Assets/Divine Glow Logo Text.png"

export default function AboutUs() {
    return (
        <>
            <Navbar active={2} />

            <div className="w-screen flex flex-col gap-12 py-20">

                <CarouselBanner />

                <Information />

            </div>

        </>
    );
}

function CarouselBanner() {
    return (
        <Carousel
            className="w-full h-fit"
            transition={{ duration: 1 }}
            autoplay={true}
            loop={true}
            autoplayDelay={4000}
        >
            {carouselData.map((item, index) => (
                <div className="w-full h-full relative" key={index}>
                    <img
                        src={require(`../Assets/Carousel/${index + 1}.png`)}
                        alt={`Carousel data ${index + 1}`}
                        className="w-full min-h-64 lg:min-h-0 h-full object-cover"
                    />

                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/65">
                        <div className="w-3/4 md:w-1/2 lg:w-3/5 flex flex-col items-center justify-center gap-5">
                            <Typography
                                variant="h1"
                                color="white"
                                className="text-xl md:text-3xl lg:text-5xl text-center px-4"
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="opacity-80 text-xs md:text-sm lg:text-base text-center px-4"
                            >
                                {item.description}
                            </Typography>
                        </div>
                    </div>

                </div>

            ))}

        </Carousel>
    );
}

function Information() {
    return(
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-3xl lg:text-5xl text-center">Tentang Kami</h1>

            <div className="flex md:flex-row flex-col gap-12 justify-evenly items-center mx-8 md:mx-20 lg:mx-0">

                <img src={logo} alt="logo" className="lg:w-1/5 md:w-1/3 w-2/3 invert" />

                <p className="opacity-80 text-sm lg:text-base text-justify lg:w-3/5 md:w-2/3 w-full">
                    <AboutUsText />
                </p>

            </div>
        </div>
    );
}