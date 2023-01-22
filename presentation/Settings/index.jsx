import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../../styles/Settings.module.css'
import { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';

const Settings = ({ children }) => {

    const { isNavOpen, dispatch } = useContext(SettingsContext);

    useEffect(() => {
        const nav = document.getElementById('nav');
        if(isNavOpen) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    }, [isNavOpen]);

    const handleClick = () => {
        dispatch({
            type: 'SET_IS_NAV_OPEN',
            payload: false
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Settings</h1>
            </div>
            <div className={styles.main}>
                <nav className={styles.nav} id="nav">
                    <ul>
                        <li className={styles.team}>
                            <div className={styles.img}></div>
                            <span>Team</span>
                        </li>
                        <li>
                            <Link onClick={handleClick} scroll={false} href="/settings">General</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} scroll={false} href="/settings/billing">Billing</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} scroll={false} href="/settings/invoices">Invoices</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} scroll={false} href="/settings/members">Members</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} scroll={false} href="/settings/security">Security</Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} scroll={false} href="/settings/environment-variables">Environment Variables</Link>
                        </li>
                        <li className={styles.account}>
                            <div className={styles.img}></div>
                            <span>Account</span>
                        </li>
                        <li>
                            <Link onClick={handleClick} scroll={false} href="/settings/notifications">My Notifications</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.content}>
                    <div className={styles.setbtn}>
                        <button onClick={() => {
                            dispatch({
                                type: 'SET_IS_NAV_OPEN',
                                payload: true
                            })
                        }}>Settings</button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Settings;