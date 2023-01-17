import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
// import Loader from "../../Shared/Loader/Loader";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  // const navigation = useNavigation();

  const { treatment, appointmentDate, slot, price } = booking;

  // if (navigation.state === "loading") {
  //   return <Loader />;
  // }
  return (
    <div>
      <h3 className="text-3xl">This is payment for {treatment}</h3>
      <p>
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}{" "}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
