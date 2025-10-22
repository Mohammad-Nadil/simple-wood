import Banner from "@/components/Banner";
import Catalogue from "@/components/Catalogue";
import CanvasCursor from "@/components/layer/CanvasCursor";
import DiscountForm from "@/components/layer/DiscountForm";
export default function Home() {
  return (
    <div>
      <CanvasCursor />
      <Banner />
      <Catalogue />
      <DiscountForm />
    </div>
  );
}
