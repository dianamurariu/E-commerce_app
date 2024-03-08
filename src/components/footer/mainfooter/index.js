import styles from "./mainfooter.module.css";
import LinkSection from "./link-section";
import Newsletter from "./newsletter-section";
import SocialSection from "./social-section";

export default function MainFooter() {
  return (
    <div className={styles.mainfooter}>
      <div className="container">
        <div className={styles.mainfooter__container}>
          <div className={styles.links__container}>
            <LinkSection
              style={styles.LinkSection}
              title="Shop"
              subtitle="By Category"
              link="Placeholder"
            />
            <LinkSection
              style={styles.LinkSection}
              title="Foods"
              link="Placeholder"
            />
            <LinkSection
              style={styles.LinkSection}
              title="Products"
              link="Placeholder"
            />
            <LinkSection
              style={styles.LinkSection}
              title="Company"
              link="Placeholder"
            />
            <LinkSection
              style={styles.LinkSection}
              title="Contact"
              link="Placeholder"
            />
          </div>

          <div className={styles.contact__container}>
            <Newsletter
              heading="Subscribe"
              subheading="Don't miss out on any Dutchie news!"
            />
            <SocialSection
              heading="Follow Dutchie"
              subheading="Eget at ac dapibus felis dolor amet."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
