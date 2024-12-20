import './Footer.css'; 
import az from '../../Assets/az.svg';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import logo from '../../Assets/logo.svg';
import { LuPhoneCall } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { LuArrowUpCircle } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import karabakh from '../../Assets/karabakhisazerbaijan1.jpg';

function Footer() {

    const { t } = useTranslation();

    const [openAboutUsAlert, setOpenAboutUsAlert] = useState(false);
    const [openContactUsAlert, setOpenContactUsAlert] = useState(false);
    const [openPrivacyPolicyAlert, setOpenPrivacyPolicyAlert] = useState(false);
    const [openWhatWeOfferAlert, setOpenWhatWeOfferAlert] = useState(false);

    const handleAlertClick = (alertType) => {
        switch (alertType) {
            case 'about_us':
                setOpenAboutUsAlert(true);
                setOpenContactUsAlert(false);
                setOpenPrivacyPolicyAlert(false);
                setOpenWhatWeOfferAlert(false);
                break;
            case 'contact_us':
                setOpenAboutUsAlert(false);
                setOpenContactUsAlert(true);
                setOpenPrivacyPolicyAlert(false);
                setOpenWhatWeOfferAlert(false);
                break;
            case 'privacy_policy':
                setOpenAboutUsAlert(false);
                setOpenContactUsAlert(false);
                setOpenPrivacyPolicyAlert(true);
                setOpenWhatWeOfferAlert(false);
                break;
            case 'what_we_offer':
                setOpenAboutUsAlert(false);
                setOpenContactUsAlert(false);
                setOpenPrivacyPolicyAlert(false);
                setOpenWhatWeOfferAlert(true);
                break;
            default:
                break;
        }
    };

    const handleCloseAlert = (alertType) => {
        switch (alertType) {
            case 'about_us':
                setOpenAboutUsAlert(false);
                break;
            case 'contact_us':
                setOpenContactUsAlert(false);
                break;
            case 'privacy_policy':
                setOpenPrivacyPolicyAlert(false);
                break;
            case 'what_we_offer':
                setOpenWhatWeOfferAlert(false);
                break;
            default:
                break;
        }
    };


    const email = "lalayemurad@gmail.com";
    const subject = "Tour To Azerbaijan";
    const body = "Hello, can you give me further details? I'm interested in your tours";

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleClick = () => {
        history.push('/home');
        const sectionFourth = document.getElementById('sectionfourth');
        if (sectionFourth) {
            sectionFourth.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [openAlert, setOpenAlert] = useState(false);

    return (
        <footer>
            <div className="greencircle" onClick={scrollToTop}>
                <LuArrowUpCircle size={60} strokeWidth={1} color='white' />
            </div>

            <div className="divgreenline"></div>

            <div className="containerftr">
                <div className="cardfooter shadowfooter">
                    <img src={logo} alt="logo" className="logofooter" loading='lazy' />
                    <p>{t('footer.discover')}</p>
                    <div className="socialfooter">
                        <a className="socialContainer containerOnefooter" href="#">
                            <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                ></path>
                            </svg>
                        </a>
                        <a className="socialContainer containerTwofooter" href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" width="20" height="20">
                                <path fill="white" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                                <path fill="white" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                                <path fill="white" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                                <path fill="white" d="M72 74V48l24 18 24-18v26L96 92" />
                                <path fill="white" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                            </svg>
                        </a>
                        <a className="socialContainer containerThreefooter" href="#">
                            <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                                <path
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                ></path>
                            </svg>
                        </a>
                        <a className="socialContainer containerFourfooter" href="whatsapp://send?phone=+994502740181&text=Hello,+can+you+give+me+further+details+?%2C%20I'm%20interested%20in%20your%tours!" target="_blank">
                            <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">

                                <path
                                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="giveusacall">
                    <div className="usefullinks">
                        <h1>{t('footer.useful_links')}</h1>
                        <div className="hypertagholder">
                            <div className="tagholderone">
                                <a>
                                    <span onClick={() => handleAlertClick('about_us')}>{t('footer.about_us')}</span>
                                    <Alert
                                        variant="filled"
                                        severity="warning"
                                        className='variant'
                                        style={{ display: openAboutUsAlert ? 'flex' : 'none', justifyContent: 'space-between' }}
                                        onClose={() => handleCloseAlert('about_us')}
                                    >
                                        <span>This is a filled warning Alert for About Us.</span>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleCloseAlert('about_us')}>×</span>
                                    </Alert>
                                </a>

                                <a>
                                    <span onClick={() => handleAlertClick('contact_us')}>{t('footer.contact_us')}</span>
                                    <Alert
                                        variant="filled"
                                        severity="error"
                                        className='variant'
                                        style={{ display: openContactUsAlert ? 'flex' : 'none', justifyContent: 'space-between' }}
                                        onClose={() => handleCloseAlert('contact_us')}
                                    >
                                        <span>This is a filled warning Alert for Contact Us.</span>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleCloseAlert('contact_us')}>×</span>
                                    </Alert>
                                </a>

                                <a>
                                    <span onClick={() => handleAlertClick('privacy_policy')}>{t('footer.privacy_policy')}</span>
                                    <Alert
                                        variant="filled"
                                        severity="error"
                                        className='variant'
                                        style={{ display: openPrivacyPolicyAlert ? 'flex' : 'none', justifyContent: 'space-between' }}
                                        onClose={() => handleCloseAlert('privacy_policy')}
                                    >
                                        <span>This is a filled warning Alert for Privacy Policy.</span>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleCloseAlert('privacy_policy')}>×</span>
                                    </Alert>
                                </a>

                                <a>
                                    <span onClick={() => handleAlertClick('what_we_offer')}>{t('footer.what_we_offer')}</span>
                                    <Alert
                                        variant="filled"
                                        severity="error"
                                        className='variant'
                                        style={{ display: openWhatWeOfferAlert ? 'flex' : 'none', justifyContent: 'space-between' }}
                                        onClose={() => handleCloseAlert('what_we_offer')}
                                    >
                                        <span>This is a filled warning Alert for What We Offer.</span>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleCloseAlert('what_we_offer')}>×</span>
                                    </Alert>
                                </a>
                            </div>
                            <div className="tagholdertwo">
                                <a href="#">{t('footer.one_day_tour')}</a>
                                <a href="#">{t('footer.multi_day_tours')}</a>
                                <a href="#">{t('footer.destinations')}</a>
                                <a href="#">{t('footer.visa_information')}</a>
                            </div>
                        </div>
                    </div>
                    <div className="txtholder">
                        <LuPhoneCall size={20} /> <h1>{t('footer.phone')}</h1>
                    </div>
                    <div className="txtholder">
                        <IoLocationOutline size={20} /> <h1>{t('footer.location')} <img src={az} alt="flag" className='flag' loading='lazy' /></h1>
                    </div>
                </div>
                <div className="footerrightpart">
                    <img src={karabakh} alt="Karabakh is Azerbaijan!" className='ftrpc' loading='lazy' />
                    <div className="copyrighttext">
                        <h1>{t('footer.copyright')}</h1>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
