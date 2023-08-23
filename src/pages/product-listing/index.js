import Layout from "@/components/layout";
import HeroCategory from "@/components/product-listing/hero-category";
import Breadcrumbs from "@/components/breadcrumbs";
import Filters from "@/components/product-listing/filters";

export default function ProductListing() {
  return (
    <Layout>
      <HeroCategory />
      <Breadcrumbs />
      <Filters />
    </Layout>
  );
}
