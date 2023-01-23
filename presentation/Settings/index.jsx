import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../../styles/Settings.module.css'
import { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { useRouter } from 'next/router';

const Settings = ({ children }) => {

    const router = useRouter();
    const path = router.pathname.split('/')[2] || '/';
    
    const { isNavOpen, dispatch } = useContext(SettingsContext);

    useEffect(() => {
        const nav = document.getElementById('nav');
        if(isNavOpen) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    }, [isNavOpen]);

    const handleClick = (e) => {

        const href = e.target.getAttribute('href');
        const active = router.asPath === href;
        // e.view.scroll(false);
        e.preventDefault();
        active || router.push(href);

        dispatch({
            type: 'SET_IS_NAV_OPEN',
            payload: false
        });
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.heading}>
                <h1>Settings</h1>
            </div>
            <div className={styles.main_wrapper}>
                <div className={styles.main}>
                    <nav className={styles.nav} id="nav">
                        <ul>
                            <li className={styles.team}>
                                <div className={styles.img}></div>
                                <span>Team</span>
                            </li>
                            <li>
                                <Link className={(path === '/') ? styles.active : ''} onClick={handleClick} scroll={false} href="/settings">General</Link>
                            </li>
                            <li>
                                <Link className={path === 'billing' ? styles.active : ''} onClick={handleClick} scroll={false} href="/settings/billing">Billing</Link>
                            </li>
                            <li>
                                <Link className={path === 'invoices' ? styles.active : ''} onClick={handleClick} scroll={false} href="/settings/invoices">Invoices</Link>
                            </li>
                            <li>
                                <Link className={path === 'members' ? styles.active : ''} onClick={handleClick} scroll={false} href="/settings/members">Members</Link>
                            </li>
                            <li>
                                <Link className={path === 'security' ? styles.active : ''} onClick={handleClick} scroll={false} href="/settings/security">Security</Link>
                            </li>
                            <li>
                                <Link className={path === 'environment-variables' ? styles.active : ''} onClick={handleClick} scroll={false} href="/settings/environment-variables">Environment Variables</Link>
                            </li>
                            <li className={styles.account}>
                                <div className={styles.img}></div>
                                <span>Account</span>
                            </li>
                            <li>
                                <Link className={path === 'notifications' ? styles.active : ''} onClick={handleClick} scroll={false} href="/settings/notifications">My Notifications</Link>
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
        </div>
    );
};

export default Settings;