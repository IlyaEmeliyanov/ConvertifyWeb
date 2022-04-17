import { FC } from 'react'

// Importing components
import Header from './common/Header';
import Footer from './common/Footer';

interface PrivacyPolicyProps {
}

const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {

    return (
        <>
        <Header />
        <section className='p-8 md:px-36 md:py-12 lg:px-72 xl:px-96'>
            <i className='text-lg font-medium text-gray-600'>Last updated: 25/12/2021</i>
            <br />
            <br />
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Privacy Policy</strong>
                <p className="font-base text-md text-gray-600">
                    Microlab built the Convertify app as a Free app. This SERVICE is provided by
                    Microlab at no cost and is intended for use as is.
                </p>
                <p className="font-base text-md text-gray-600">
                    This page is used to inform visitors regarding our policies with the
                    collection, use, and disclosure of Personal Information if anyone decided to
                    use our Service.
                </p>
                <p className="font-base text-md text-gray-600">
                    If you choose to use our Service, then you agree to the collection and use of
                    information in relation to this policy. The Personal Information that we
                    collect is used for providing and improving the Service. We will not use or
                    share your information with anyone except as described in this Privacy Policy.
                </p>
                <p className="font-base text-md text-gray-600">
                    The terms used in this Privacy Policy have the same meanings as in our Terms
                    and Conditions, which are accessible at Convertify unless otherwise defined in
                    this Privacy Policy.
                </p>
            </div>
            <div className="mb-8">
            <strong className="text-2xl font-semibold text-gray-800 mb-8">Information Collection and Use</strong>
            <p className="font-base text-md text-gray-600">
                For a better experience, while using our Service, we may require you to
                provide us with certain personally identifiable information. The information
                that we request will be retained by us and used as described in this privacy
                policy.
            </p>
            <p className="font-base text-md text-gray-600">
                The app does use third-party services that may collect information used to
                identify you.
            </p>
            <p className="font-base text-md text-gray-600">
                Link to the privacy policy of third-party service providers used by the app
            </p>
            <ul>
                <li>
                    <a
                        href="https://support.google.com/admob/answer/6128543?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >AdMob</a
                    >
                </li>
            </ul>
            </div>
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Log Data</strong>
                <p className="font-base text-md text-gray-600">
                    We want to inform you that whenever you use our Service, in a case of an error
                    in the app we collect data and information (through third-party products) on
                    your phone called Log Data. This Log Data may include information such as your
                    device Internet Protocol (“IP”) address, device name, operating system
                    version, the configuration of the app when utilizing our Service, the time and
                    date of your use of the Service, and other statistics.
                </p>
            </div>
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Cookies</strong>
                <p className="font-base text-md text-gray-600">
                    Cookies are files with a small amount of data that are commonly used as
                    anonymous unique identifiers. These are sent to your browser from the websites
                    that you visit and are stored on your device's internal memory.
                </p>
                <p className="font-base text-md text-gray-600">
                    This Service does not use these “cookies” explicitly. However, the app may use
                    third-party code and libraries that use “cookies” to collect information and
                    improve their services. You have the option to either accept or refuse these
                    cookies and know when a cookie is being sent to your device. If you choose to
                    refuse our cookies, you may not be able to use some portions of this Service.
                </p>
            </div>
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Service Providers</strong>
                <p className="font-base text-md text-gray-600">
                    We may employ third-party companies and individuals due to the following
                    reasons:
                </p>
                <ul>
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                </ul>
                <p className="font-base text-md text-gray-600">
                    We want to inform users of this Service that these third parties have access
                    to their Personal Information. The reason is to perform the tasks assigned to
                    them on our behalf. However, they are obligated not to disclose or use the
                    information for any other purpose.
                </p>
            </div>
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Security</strong>
                <p className="font-base text-md text-gray-600">
                    We value your trust in providing us your Personal Information, thus we are
                    striving to use commercially acceptable means of protecting it. But remember
                    that no method of transmission over the internet, or method of electronic
                    storage is 100% secure and reliable, and we cannot guarantee its absolute
                    security.
                </p>
            </div>
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Links to Other Sites</strong>
                <p className="font-base text-md text-gray-600">
                    This Service may contain links to other sites. If you click on a third-party
                    link, you will be directed to that site. Note that these external sites are
                    not operated by us. Therefore, we strongly advise you to review the Privacy
                    Policy of these websites. We have no control over and assume no responsibility
                    for the content, privacy policies, or practices of any third-party sites or
                    services.
                </p>
            </div>
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Children’s Privacy</strong>
                <p className="font-base text-md text-gray-600">
                    These Services do not address anyone under the age of 13. We do not
                    knowingly collect personally identifiable information from children under 13
                    years of age. In the case we discover that a child under 13 has provided us
                    with personal information, we immediately delete this from our servers. If
                    you are a parent or guardian and you are aware that your child has provided
                    us with personal information, please contact us so that we will be able to
                    do the necessary actions.
                </p>
            </div>
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Changes to This Privacy Policy</strong>
                <p className="font-base text-md text-gray-600">
                    We may update our Privacy Policy from time to time. Thus, you are advised to
                    review this page periodically for any changes. We will notify you of any
                    changes by posting the new Privacy Policy on this page.
                </p>
                <p className="font-base text-md text-gray-600">This policy is effective as of 2021-12-25</p>
            </div>
            <div className="mb-8">
                <strong className="text-2xl font-semibold text-gray-800 mb-8">Contact Us</strong>
                <p className="font-base text-md text-gray-600">
                    If you have any questions or suggestions about our Privacy Policy, do not
                    hesitate to contact us at <a href="">hello@microlab.dev</a>.
                </p>
                <p className="font-base text-md text-gray-600">
                    This privacy policy page was created at
                    <a
                        href="https://privacypolicytemplate.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >privacypolicytemplate.net </a
                    >and modified/generated by 
                    <a
                        href="https://app-privacy-policy-generator.nisrulz.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    > App Privacy Policy Generator</a
                    >
                </p>
            </div>
            <p className="font-base text-md text-gray-600">© Microlab 2020-2022</p>
        </section>
        </>
    );
}

export default PrivacyPolicy;