import Navbar from "../Components/Navbar";
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';

export default function Product() {
    return(
        <>
            <Navbar active={1} />
            
            <div className="w-screen h-screen flex flex-row justify-center items-center gap-5 text-white bg-primary py-16">


                <ConstructionRoundedIcon className="scale-150" />
                <h1 className="font-bold text-4xl">Dalam Tahap Pengerjaan!</h1>
                
            </div>

        </>
    );
}