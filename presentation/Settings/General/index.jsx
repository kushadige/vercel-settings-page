import styles from './styles.module.css';

const General = () => {
    return (
        <div>
            <section className={styles.fieldset}>
                <div className={styles.fieldset_content}>
                    <h4 className={styles.fieldset_title}>Team Name</h4>
                    <p className={styles.fieldset_p}>This is your team's visible name within Vercel. For example, the name of your company or department.</p>
                    <div className={styles.input_wrapper}>
                        <div className={styles.input_box}>
                            <input type="text" value="kushadige-team" />
                        </div>
                    </div>
                </div>
                <div className={styles.fieldset_footer}>
                    <div className={styles.fieldset_status}>Please use 32 characters at maximum.</div>
                    <div className={styles.fieldset_actions}>
                        <button className={`${styles.btn} ${styles.primary}`}>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className={styles.fieldset}>
                <div className={styles.fieldset_content}>
                    <h4 className={styles.fieldset_title}>Team URL</h4>
                    <p className={styles.fieldset_p}>This is your team’s URL namespace on Vercel. Within it, your team can inspect their projects, check out any recent activity, or configure settings to their liking.</p>
                    <div className={styles.input_wrapper}>
                        <div className={styles.label}>
                            <span>vercel.com/</span>
                        </div>
                        <div className={styles.input_box}>
                            <input type="text" value="kushadige-team" />
                        </div>
                    </div>
                </div>
                <div className={styles.fieldset_footer}></div>
            </section>
            <section className={styles.fieldset}>
                <div className={styles.fieldset_content}>
                    <div className={styles.feature_icon}>
                        
                    </div>
                </div>
            </section>
            <section className={styles.fieldset}>
                <div className={styles.fieldset_content}></div>
            </section>
            <section className={styles.fieldset}>
                <div className={styles.fieldset_content}></div>
            </section>
            <section className={styles.fieldset}>
                <div className={styles.fieldset_content}></div>
            </section>
        </div>
    );
};

export default General;