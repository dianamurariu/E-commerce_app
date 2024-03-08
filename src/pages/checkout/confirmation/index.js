import Layout from "@/components/layout";
import LayoutCheckout from "@/components/checkout-page/layout-checkout";
import HeroHeaderSmall from "@/components/hero-header-small";
import CheckoutForm from "@/components/checkout-page/checkout-form";
import CheckoutCart from "@/components/checkout-page/checkout-cart";
import StepperConfirmation from "@/components/checkout-page/confirmation/stepper-confirmation";
import ThanksMessage from "@/components/checkout-page/confirmation/thanks-message";

export default function Confirmation() {
  return (
    <Layout>
      <HeroHeaderSmall />
      <LayoutCheckout>
        <CheckoutForm>
          <StepperConfirmation />
          <ThanksMessage title="Thank you for your purchase!" />
        </CheckoutForm>

        <CheckoutCart />
      </LayoutCheckout>
    </Layout>
  );
}
