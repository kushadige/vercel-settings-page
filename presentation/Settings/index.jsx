import styles from '../../styles/Settings.module.css'
import { MENU } from './constants';

export const Settings = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Settings</h1>
            </div>
            <div className={styles.main}>
                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.team}>
                            <div className={styles.img}></div>
                            <span>Team</span>
                        </li>
                        <li>
                            <span>General</span>
                        </li>
                        <li>
                            <span>Billing</span>
                        </li>
                        <li>
                            <span>Invoices</span>
                        </li>
                        <li>
                            <span>Members</span>
                        </li>
                        <li>
                            <span>Security</span>
                        </li>
                        <li>
                            <span>Environment Variables</span>
                        </li>
                        <li className={styles.account}>
                            <div className={styles.img}></div>
                            <span>Account</span>
                        </li>
                        <li>
                            <span>My Notifications</span>
                        </li>
                    </ul>
                </nav>
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        content
                    </div>
                </div>
            </div>
        </div>
    );
};
