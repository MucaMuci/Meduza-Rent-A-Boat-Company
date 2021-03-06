import Image from "next/image";
import Brod1 from "../assets/brod1.png"

const PastRide = ({ date, name, pickUpTime, pickUpPlace, checkOutTime, checkOutPlace, additionalEquipment }) => (
    <div className="flex py-5">
        <div className="flex flex-col md:flex-row shadow-btn-sjena rounded-2xl px-5 py-5">
            <div className="flex ">
                <Image
                    src={Brod1}
                    height={320}
                    width={320}
                    alt="Brod" />
            </div>
            <div className="md:pl-10 flex flex-col">
                <div className="text-lg">
                    {date}
                </div>
                <div className="flex text-4xl pb-4">
                    {name}
                </div>
                <div className="flex flex-row text-lg">
                    <div className="flex flex-col items-start ">

                        <div className="flex">
                            <div className="flex pr-2 font-medium">
                                Pick-up time:
                            </div>
                            <div className="flex text-hci-siva-slova">
                                {pickUpTime}
                            </div>
                        </div>
                        <div className="flex pb-4">
                            <div className="flex pr-2 font-medium">
                                Pick-up place:
                            </div>
                            <div className="flex text-hci-siva-slova">
                                {pickUpPlace}
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex pr-2 font-medium">
                                Check-out time:
                            </div>
                            <div className="flex text-hci-siva-slova">
                                {checkOutTime}
                            </div>
                        </div>
                        <div className="flex pb-4">
                            <div className="flex pr-2 font-medium">
                                Check-out place:
                            </div>
                            <div className="flex text-hci-siva-slova">
                                {checkOutPlace}
                            </div>
                        </div>
                        <div className="flex pb-2">
                            <div className="flex pr-2 font-medium">
                                Additional equipment:
                            </div>
                            <div className="flex text-hci-siva-slova">
                                {additionalEquipment}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex text-lg font-medium">
                    <button className="text-hci-modra">
                        More information
                    </button>
                </div>
                <div className="pt-2">
                    <button className="bg-hci-modra text-white w-full py-0.5 rounded-md">
                        Leave a review
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default PastRide