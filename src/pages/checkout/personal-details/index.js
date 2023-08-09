import Layout from "@/components/layout";
import LayoutCheckout from "@/components/checkout-page/layout-checkout";
import HeroHeaderSmall from "@/components/hero-header-small";
import Tabs from "@/components/checkout-page/tabs";
import Stepper from "@/components/checkout-page/stepper";
import CheckoutForm from "@/components/checkout-page/checkout-form";
import CheckoutCart from "@/components/checkout-page/checkout-cart";

export default function PersonalDetails () {
    return (
        <Layout>
            <HeroHeaderSmall />
            <LayoutCheckout>

                <CheckoutForm>
                   <Stepper active={1} />
                   <Tabs />
                </CheckoutForm>

                <CheckoutCart />

            </LayoutCheckout>

        </Layout>
    
    )
}