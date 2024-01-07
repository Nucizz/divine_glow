import Navbar from "../Components/Navbar";
import { Carousel } from "@material-tailwind/react";
import { useParams, Link } from "react-router-dom";
import { productData } from "../Class/Data";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import { WhatsApp } from "@mui/icons-material";
import { useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Breadcrumbs,
} from "@mui/material";

export default function ProductDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { productName } = useParams();
    const decodedProductName = decodeURIComponent(productName);
    const product = productData.find((item) => item.name === decodedProductName);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <>
            <Navbar active={1} />

            <div className="px-6 py-24 flex flex-col gap-5 items-start justify-center w-full">
                <Breadcrumbs aria-label="breadcrumb" className="text-black">
                    <Link
                        to="/product"
                        className="text-gray-500 cursor-pointer hover:underline"
                    >
                        Produk
                    </Link>
                    <button
                        onClick={handleRefresh}
                        className="text-black cursor-pointer hover:underline"
                    >
                        {product.name}
                    </button>
                </Breadcrumbs>

                <MainInformation data={product} />

                <InformationTable data={product} />
            </div>
        </>
    );
}

function MainInformation({ data }) {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-5">
            <CarouselThumbnail name={data.name} count={data.imageCount} />

            <div className="flex flex-col gap-5 items-center justify-center md:items-start md:justify-start">
                <div className="font-bold text-black text-xl md:text-3xl lg:text-5xl">
                    {data.name}
                </div>

                <div className="flex flex-row gap-5">
                    <div className="bg-black rounded-xl text-white text-base md:text-xl w-fit flex flex-row items-center gap-2 py-2 px-4">
                        <span className="font-bold text-xl">P</span>
                        <span className="font-semibold">{data.pixelPitch}</span>
                    </div>

                    <div
                        className={
                            "rounded-xl font-semibold text-white text-base md:text-xl w-fit flex flex-row items-center gap-2 py-2 px-4 " +
                            (data.operatingEnvironment === "Indoor"
                                ? "bg-blue-700"
                                : "bg-green-500")
                        }
                    >
                        {data.operatingEnvironment === "Indoor" ? (
                            <ChairRoundedIcon />
                        ) : (
                            <ForestRoundedIcon />
                        )}
                        <span className="font-semibold">{data.operatingEnvironment}</span>
                    </div>
                </div>

                <a
                    className="bg-primary bg-secondary-hover text-xl py-2 px-4 text-white font-semibold rounded-xl transition duration-300 w-fit flex flex-row items-center gap-3"
                    href={
                        "https://wa.me/+6287891992727?text=Hai, Apakah produk " +
                        data.name +
                        " masih tersedia?"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <WhatsApp />
                    <span>Tanya Tentang Produk</span>
                </a>
            </div>
        </div>
    );
}

function CarouselThumbnail({ name, count }) {
    const images = [];

    const loadThumbnail = (index, format) => {
        try {
            return require(`../Assets/Products/${name}/${index}.${format}`);
        } catch (error) {
            return null;
        }
    };

    for (let index = 1; index <= count; index++) {
        const thumbnail =
            loadThumbnail(index, "png") ||
            loadThumbnail(index, "jpg") ||
            loadThumbnail(index, "svg");

        if (thumbnail) {
            images.push(
                <img
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-contain bg-gray-800"
                />
            );
        }
    }

    if (images.length > 0) {
        return (
            <Carousel
                className="w-72 h-72 rounded-xl"
                transition={{ duration: 1 }}
                autoplay={true}
                loop={true}
                autoplayDelay={4000}
            >
                {images}
            </Carousel>
        );
    } else {
        return (
            <div className="w-72 h-72 bg-gray-500 rounded-xl object-cover flex flex-row gap-2 text-gray-800 font-semibold justify-center items-center">
                <ImageNotSupportedRoundedIcon />
                Image Unavailable!
            </div>
        );
    }
}

function InformationTable({ data }) {
    const renderTableCell = (key, value) => {
        const formatValue = (formattedValue) => (
            <TableCell>{formattedValue}</TableCell>
        );

        switch (key) {
            case "size":
                return formatValue(
                    `${value.width} x ${value.height} x ${value.depth} mm`
                );
            case "pixelDensity":
                return formatValue(`${value} pixels/m²`);
            case "resolution":
                return formatValue(
                    `${value.width} x ${value.height} = ${value.width * value.height
                    } pixels`
                );
            case "cabinetPixelDensity":
                return formatValue(
                    <ul>
                        {value.map((subvalue, index) => (
                            <li key={index}>
                                {value.length > 1 && `- `}
                                {`${subvalue.width} x ${subvalue.height} = ${subvalue.width * subvalue.height
                                    } pixels`}
                            </li>
                        ))}
                    </ul>
                );
            case "cabinetWeight":
                return formatValue(
                    value.minimum === value.maximum
                        ? `${value.maximum} kg`
                        : `${value.minimum}-${value.maximum} kg`
                );
            case "bestViewingDistance":
                return formatValue(`${value} m`);
            case "maxPowerConsumption":
                return formatValue(`${value} watt/m²`);
            case "refreshRate":
                return formatValue(`${value} Hz`);
            case "lifeSpan":
                return formatValue(`${value} hours`);
            case "brightness":
                return formatValue(
                    value.minimum === value.maximum
                        ? `${value.maximum} cd/m²`
                        : `${value.minimum}-${value.maximum} cd/m²`
                );
            default:
                return formatValue(value);
        }
    };

    const renderTableTitle = (key) => {
        const titleMap = {
            operatingEnvironment: "Operating Environment",
            pixelPitch: "Pixel Pitch",
            specification: "Specification",
            size: "Size",
            structure: "Structure",
            pixelDensity: "Pixel Density",
            resolution: "Resolution",
            cabinetMaterial: "Cabinet Material",
            cabinetPixelDensity: "Cabinet Pixel Density",
            cabinetWeight: "Cabinet Weight",
            bestViewingDistance: "Best Viewing Distance",
            maxPowerConsumption: "Max Power Consumption",
            refreshRate: "Refresh Rate",
            lifeSpan: "Life Span",
            brightness: "Brightness",
        };

        return titleMap[key] || key;
    };

    return (
        <TableContainer className="border rounded-xl border-gray-300 mt-5">
            <Table>
                <TableBody>
                    {Object.entries(data).map(([key, value]) => {
                        if (key !== "name" && key !== "imageCount") {
                            return (
                                <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                        {renderTableTitle(key)}
                                    </TableCell>
                                    {renderTableCell(key, value)}
                                </TableRow>
                            );
                        }
                        return null;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
