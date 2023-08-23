import Layout from "@/components/layout";
import LayoutCheckout from "@/components/checkout-page/layout-checkout";
import HeroHeaderSmall from "@/components/hero-header-small";
import CheckoutForm from "@/components/checkout-page/checkout-form";
import CheckoutCart from "@/components/checkout-page/checkout-cart";
import Stepper from "@/components/checkout-page/stepper";
import ButtonBack from "@/components/checkout-page/button-back";
import DeliveryForm from "@/components/checkout-page/delivery-details/delivery-form";

export default function DeliveryDetails() {
  return (
    <Layout>
      <HeroHeaderSmall />
      <LayoutCheckout>
        <CheckoutForm>
          <Stepper active={2} />
          <ButtonBack
            href="/checkout/personal-details"
            hrefName="personal details"
          />
          <DeliveryForm />
        </CheckoutForm>

        <CheckoutCart />
      </LayoutCheckout>
    </Layout>
  );
}
