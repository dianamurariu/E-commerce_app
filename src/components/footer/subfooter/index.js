import CopyrightBar from './copyright-bar';
import styles from './subfooter.module.css';
import Logo from "@/components/header/mainheader/logo";

export default function Subfooter () {
    return (
        <>

    <div className={styles.subfooter}>
      <div className="container">
            <div className={styles.subfooter__container}>
                <Logo image="/images/Logo-footer.svg" style={styles.logo}/>
                <CopyrightBar text="Bionic Wireframe Kit 2020 ® All rights reserved" style={styles.CopyrightBar} />
            </div>

        </div>
    </div>
        </>
    )
}