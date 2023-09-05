import Confirmed from "@/components/Confirmed";
import BackLink from "../../components/BackLink";

interface PaymentSuccessProps {
  // You can pass any additional data or props you need here
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = () => {
  return (
    <div className="flex flex-col gap-8 items-center mt-28">
      <BackLink href="/shop">Next order</BackLink>

      {/* <PageHeading>Thankyou, enjoy your cookies!</PageHeading> */}

      <div className="bg-green-200 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Payment Successful
        </h2>
        <p className="text-lg text-green-800">
          Thank you for your purchase! Your payment was successful.
        </p>
        <Confirmed />
        {/* You can add more information or links as needed */}
      </div>
    </div>
  );
};

export default PaymentSuccess;
