import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {

    const path = 'settings';

    const handleMouseMove = (e) => {
        const tab_highlight = document.getElementById('tab_highlight');
        const targetOffsetLeft = e.target.offsetLeft;
        const targetWidth = e.target.offsetWidth;
        
        tab_highlight.style.transform = `translateX(${targetOffsetLeft}px)`;
        tab_highlight.style.width = `${targetWidth}px`;
    }

    return (
        <>
            <div className={styles.nav_menu}>
                <h1>Header</h1>
            </div>
            <div className={styles.overflow_menu}>
                <ul onMouseMove={handleMouseMove}>
                    <div id='tab_highlight' className={styles.tab_highlight}></div>
                    <li>
                        <Link className={path === 'overview' ? styles.active : ''} href="#">Overview</Link>
                    </li>
                    <li>
                        <Link className={path === 'integrations' ? styles.active : ''} href="#">Integrations</Link>
                    </li>
                    <li>
                        <Link className={path === 'activity' ? styles.active : ''} href="#">Activity</Link>
                    </li>
                    <li>
                        <Link className={path === 'domains' ? styles.active : ''} href="#">Domains</Link>
                    </li>
                    <li>
                        <Link className={path === 'usage' ? styles.active : ''} href="#">Usage</Link>
                    </li>
                    <li>
                        <Link className={path === 'stores' ? styles.active : ''} href="#">Edge Config</Link>
                    </li>
                    <li>
                        <Link className={path === 'settings' ? styles.active : ''} href="#">Settings</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.product_banner}>
                <div className={styles.product_banner_content}>
                    <div>
                        <span>Your trial expires in <strong>13 days</strong>. To maintain access to premium features, upgrade to Pro.</span>
                    </div>
                    <div>
                        <button className={`${styles.btn} ${styles.secondary}`}>
                            <span>Upgrade</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;