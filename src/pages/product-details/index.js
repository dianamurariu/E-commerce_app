import Breadcrumbs from '@/components/breadcrumbs';
import Layout from '@/components/layout';
import ProductComponent from '@/components/product-details/product-component';

export default function ProductDetails () {
    return (
        <>
        
        <Layout>
            <Breadcrumbs />
            <ProductComponent />
        </Layout>

        </>
    )
}