import { useState } from "react";
import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import FormCard from "../components/formCard";
import ReservationDetails from "../modules/admin/makeAReservationPage/reservationDetails/reservationDetails";
import CustomersInfo from "../modules/admin/makeAReservationPage/customersInfo/customersInfo";
import Payment from "../modules/admin/makeAReservationPage/payment/payment";
import FormCompleted from "../components/formCompleted";
import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";

const MakeAReservation = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className="min-h-screen relative">
      <NextSeo
        title={`${SEO.title} - Make a reservation`}
        description={SEO.description}
      />
      <Header />
      <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></div>
      <div className="pb-32">
        <FormCard currentStep={formStep}>
          {formStep == 0 && (
            <ReservationDetails
              formStep={formStep}
              nextFormStep={nextFormStep}
            />
          )}
          {formStep == 1 && (
            <CustomersInfo
              formStep={formStep}
              nextFormStep={nextFormStep}
              prevFormStep={prevFormStep}
            />
          )}
          {formStep == 2 && (
            <Payment
              formStep={formStep}
              nextFormStep={nextFormStep}
              prevFormStep={prevFormStep}
            />
          )}

          {formStep > 2 && <FormCompleted />}
        </FormCard>
      </div>
      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default MakeAReservation;
