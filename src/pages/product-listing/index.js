import Layout from '@/components/layout';
import HeroCategory from '@/components/product-listing/hero-category';
import Breadcrumbs from '@/components/breadcrumbs';
import LayoutProductListing from '@/components/product-listing/layout-product-listing';
import FilterSection from '@/components/product-listing/filters/filter-section';
import AppliedFilters from '@/components/product-listing/filters/filters-applied';
import styles from './product-listing.module.css';
import Filters from '@/components/product-listing/filters';

export default function ProductListing () {
    return (
        <>

        <Layout>
        
            <HeroCategory />
            <Breadcrumbs />
            <Filters />

        </Layout>

        </>
    )
}

  