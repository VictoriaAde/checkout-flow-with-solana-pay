import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Products from "../components/Products";
import Navbar from "../components/Navbar";

export default function HomePage() {
  // We get the public key of the connected wallet, if there is one
  const { publicKey } = useWallet();

  return (
    <div className="px-6">
      <div className="flex justify-between items-center mb-10">
        <Navbar>Choco</Navbar>

        {/* We add the Solana wallet connect button */}
        <div className="">
          <WalletMultiButton className="!bg-gray-900 hover:scale-105" />
        </div>
      </div>

      {/* We disable checking out without a connected wallet */}
      <Products submitTarget="/checkout" enabled={publicKey !== null} />
    </div>
  );
}

// import Products from "../components/Products";
// import Navbar from "../components/Navbar";

// export default function HomePage() {
//   return (
//     <div className="px-6">
//       <Navbar>Choco</Navbar>

//       <Products submitTarget="/checkout" enabled={true} />
//     </div>
//   );
// }
