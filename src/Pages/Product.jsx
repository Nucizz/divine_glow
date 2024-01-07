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
    const [search, setSearch] = useState('');

    return (
        <>
            <Navbar active={1} />

            <div className="w-screen h-screen flex flex-col justify-start items-start gap-5 text-white py-20 px-6">

                <div className="flex flex-row items-center justify-left w-full gap-5 mt-4 w-full">

                    <FilterButton setFilterRef={setFilter} />

                    <SearchBar setSearchRef={setSearch} searchRef={search} />

                </div>

                <ProductList filterRef={filter} searchRef={search} />
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
                className="flex flex-row gap-2 items-center justify-center text-gray-800 hover:text-gray-500 font-bold rounded-xl transition duration-300"
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

function SearchBar({ setSearchRef, searchRef }) {
    return (
        <input 
            placeholder="Cari Produk"
            type="text"
            id="search"
            onChange={(event) => setSearchRef(event.target.value)}
            value={searchRef}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 cursor-pointer bg-gray-300 border-0 py-2 px-4 rounded-xl text-black focus:outline-none focus:ring-0 appearance-none"
        />
    );
}

function ProductList({ filterRef, searchRef }) {
    const filteredProduct = filterRef
        ? productData.filter((item) => item.operatingEnvironment === filterRef)
        : productData;

    const searchedProduct = searchRef
        ? filteredProduct.filter((item) =>
              item.name.toLowerCase().includes(searchRef.toLowerCase())
          )
        : filteredProduct;

    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full pb-20">
            {searchedProduct.sort((a, b) => a.pixelPitch - b.pixelPitch).map((item) => (
                <ProductItem data={item} />
            ))}
        </div>
    );
}

function ProductItem({ data }) {
    const productDetailLink = `/product/${encodeURIComponent(data.name)}`;

    const loadThumbnail = (format) => {
        try {
          return require(`../Assets/Products/${data.name}/1.${format}`);
        } catch (error) {
          return null;
        }
    };
    
    const thumbnail = loadThumbnail('png') || loadThumbnail('jpg') || loadThumbnail("svg");

    return (
        <Link
            to={productDetailLink}
            className="rounded-xl flex flex-col border border-gray-300 cursor-pointer hover:brightness-50 transition-all duration-300"
        >
            {data.imageCount > 0 && thumbnail ? (
                <img
                    src={thumbnail}
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
