import Confirmed from "@/components/Confirmed";
import BackLink from "../components/BackLink";

interface PaymentSuccessProps {
  // You can pass any additional data or props you need here
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = () => {
  return (
    <div className="flex flex-col gap-4 items-center mt-28">
      <BackLink href="/">Home</BackLink>

      <div className="bg-none p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-[#50EA95] mb-4">
          Payment Successful
        </h2>
        <h3 className="text-lg text-[#50EA95] mb-8">
          Thank you for your purchase! Your payment was successful.
        </h3>
        <div className="">
          <Confirmed />
        </div>
        {/* You can add more information or links as needed */}
      </div>
    </div>
  );
};

export default PaymentSuccess;
