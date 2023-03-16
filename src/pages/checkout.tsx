import dynamic from "next/dynamic";

const CheckoutFeature = dynamic(() => import("../features/checkout"), { ssr: false });

export default function CheckoutPage() {
  return <CheckoutFeature />;
}
