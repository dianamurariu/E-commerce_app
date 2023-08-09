import Layout from "@/components/layout";
import LayoutCheckout from "@/components/checkout-page/layout-checkout";
import HeroHeaderSmall from "@/components/hero-header-small";
import CheckoutForm from "@/components/checkout-page/checkout-form";
import CheckoutCart from "@/components/checkout-page/checkout-cart";
import Stepper from "@/components/checkout-page/stepper";
import ButtonBack from "@/components/checkout-page/button-back";
import CardDetails from "@/components/checkout-page/card-details";



export default function Payment () {

    return (
        <Layout>
            <HeroHeaderSmall />
            <LayoutCheckout>

                <CheckoutForm>
                   <Stepper active={3} />
                   <ButtonBack href="/checkout/delivery-details" hrefName="delivery method" />
                   <CardDetails />

                </CheckoutForm>

                <CheckoutCart />

            </LayoutCheckout>

        </Layout>
    
    )
}