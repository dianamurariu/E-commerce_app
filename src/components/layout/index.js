import Header from "../header";
import Footer from "../footer";
import SEO from "../SEO";


const Layout = ({ children }) => {
    return (
      <>
        <SEO />
        <Header />
        {children}
        <Footer />

      </>
    )
};
  
 export default Layout;