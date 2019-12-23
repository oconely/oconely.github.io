import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs';
import '../components/public/project-card/index';
import '../components/public/hamburger/index';
import '../components/pages/index/projects-section/index';
// import './pswpGalleries/lazyLoadingPswpGallery';
import '../components/public/main-banner/main-banner';
import '../components/public/header/index';
import '../js/jumpToSection';
import '../components/public/toTopButton/index';


import initToasts from './Classes/Toast/index';
const ToastNotify = new initToasts({
    transitionLength: 700,
    closeBtn: true
});
window.ToastNotify = ToastNotify;