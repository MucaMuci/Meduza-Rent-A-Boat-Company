import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import Notes from "../modules/notes/notes";
import LeftArrow from "../assets/left_arrow.png";
import RightArrow from "../assets/right_arrow.png";
import Reservations from "../modules/reservations/reservations";
import Image from "next/image";
import Schedule from "../modules/schedule/schedule";

const Home = () => {
    return (
        <>

            <Header />
            <main className="">
                <div className="flex flex-row">
                    <div className="flex flex-col justify-center w-9/12">

                        <div className="flex flex-col pt-10 pb-2 bg-gradient-to-b from-hci-gradient to-white">
                            <div className="flex flex-row justify-center pb-2">
                                <button className="px-2   bg-hci-gradient rounded-full">
                                    <Image
                                        src={LeftArrow}
                                        height={13}
                                        width={13}
                                    />
                                </button>
                                <div className="px-5  text-lg font-semibold self-center">
                                    Today&apos;s schedule:
                                </div>
                                <button className="px-2  bg-hci-gradient rounded-full">
                                    <Image
                                        src={RightArrow}
                                        height={13}
                                        width={13}
                                    />
                                </button>

                            </div>
                        </div>
                        <div>
                            <div className='self-center border border-solid w-full h-0 border-black'></div>
                            <div className="flex max-w-5xl mx-auto justify-center">
                                <Reservations />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-self-end flex-col w-3/12">
                        <div className="flex flex-row border w-full">
                            <div className = "flex bg-hci-modra w-10 h-full justify-start"> </div>
                            <div className = "flex w-full text-xl self-center justify-center">
                                NOTES
                            </div>
                        </div>
                        <Notes/>
                        <div className="flex flex-row border w-full">
                            <div className = "flex bg-hci-modra w-10 h-full justify-start"> </div>
                            <div className = "flex w-full text-xl self-center justify-center">
                                SCHEDULE
                            </div>
                        </div>
                        <Schedule/>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;