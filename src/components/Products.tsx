import { useRef } from "react";
import { products } from "../lib/products";
import NumberInput from "./NumberInput";
import Image from "next/image";

interface Props {
  submitTarget: string;
  enabled: boolean;
}

export default function Products({ submitTarget, enabled }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      method="get"
      action={submitTarget}
      ref={formRef}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            return (
              <div
                className="rounded-md bg-[#010101] border  border-[#232323] text-center p-8"
                key={product.id}
              >
                <div className="mb-6">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width="200"
                    height="100"
                    className="w-full h-96"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold  text-white opacity-90">
                    {product.name}
                  </h3>
                  <p className="text-sm text-white opacity-70">
                    {product.description}
                  </p>
                  <p className="my-4">
                    <span className="mt-4 text-xl font-bold text-white opacity-80">
                      ${product.priceUsd}
                    </span>
                    {product.unitName && (
                      <span className="text-sm text-white opacity-50">
                        {" "}
                        /{product.unitName}
                      </span>
                    )}
                  </p>
                  <div className="mt-1 flex items-center justify-center">
                    <NumberInput name={product.id} formRef={formRef} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="items-center px-20 rounded-md py-2 max-w-fit self-center bg-[#50EA95] text-black font-bold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!enabled}
        >
          Checkout
        </button>
      </div>
    </form>
  );
}
