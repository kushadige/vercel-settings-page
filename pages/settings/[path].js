import { useRouter } from "next/router"
import Settings from "../../presentation/Settings"
import Billing from "../../presentation/Settings/Billing";
import Environment from "../../presentation/Settings/Environment";
import Invoices from "../../presentation/Settings/Invoices";
import Members from "../../presentation/Settings/Members";
import Notifications from "../../presentation/Settings/Notifications";
import Security from "../../presentation/Settings/Security";

export default function route() {
    const router = useRouter();

    const path = router.query.path;
    
    return (
        <div>
            <Settings>
                {path === 'billing' ? (
                    <Billing />
                ) : path === 'invoices' ? (
                    <Invoices />
                ) : path === 'members' ? (
                    <Members />
                ) : path === 'security' ? (
                    <Security />
                ) : path === 'environment-variables' ? (
                    <Environment />
                ) : path === 'notifications' && (
                    <Notifications />
                )}
            </Settings>
        </div>
    )
}