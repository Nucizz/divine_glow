import Navbar from "../Components/Navbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productData } from "../Class/Data";

export default function Product() {
    const [filter, setFilter] = useState(null);

    return (
        <>
            <Navbar active={1} />

            <div className="w-screen h-screen flex flex-col justify-start items-start gap-5 text-white py-20 px-6">
                <FilterButton setFilterRef={setFilter} />

                <ProductList filterRef={filter} />
            </div>
        </>
    );
}

function FilterButton({ setFilterRef }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setFilter = (filter) => {
        setAnchorEl(null);
        setFilterRef(filter);
    };

    return (
        <div>
            <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="flex flex-row gap-2 items-center justify-center text-gray-800 hover:text-gray-500 font-bold rounded-xl transition duration-300 pt-4"
            >
                <FilterListRoundedIcon />
                Filter
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={() => setFilter(null)}>All</MenuItem>
                <MenuItem onClick={() => setFilter("Indoor")}>Indoor</MenuItem>
                <MenuItem onClick={() => setFilter("Outdoor")}>Outdoor</MenuItem>
            </Menu>
        </div>
    );
}

function ProductList({ filterRef }) {
    const filteredProduct = filterRef
        ? productData.filter((item) => item.operatingEnvironment === filterRef)
        : productData;

    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full pb-20">
            {filteredProduct.map((item) => (
                <ProductItem data={item} />
            ))}
        </div>
    );
}

function ProductItem({ data }) {
    const productDetailLink = `/product/${encodeURIComponent(data.name)}`;
    return (
        <Link to={productDetailLink} className="rounded-xl flex flex-col border border-gray-300 cursor-pointer hover:brightness-50 transition-all duration-300">
            {data.images[0] ? (
                <img
                    src={data.images[0]}
                    alt="thumbnail"
                    className="w-full h-48 bg-gray-500 rounded-t-xl object-cover"
                />
            ) : (
                <div className="w-full h-48 bg-gray-500 rounded-t-xl object-cover flex flex-row gap-2 text-gray-800 font-semibold justify-center items-center">
                    <ImageNotSupportedRoundedIcon />
                    Image Unavailable!
                </div>
            )}
            <p className="w-full line-clamp-2 text-black font-semibold text-xl py-2 px-4">
                {data.name}
            </p>
        </Link>
    );
}

