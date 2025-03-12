import express from 'express';

// //Load Controllers 
// import { doInitiateForgotPassword, doLogin, doResetPassword } from '../controllers/admin/authController.js';
// import { doFetchContactUsList, doArchiveContactUs } from '../controllers/admin/contactUsController.js';
// import { doFetchNewsletterList, doArchiveNewsletter } from '../controllers/admin/newsletterController.js';


// import { uploadFile } from '../controllers/uploadController.js';

// //Load Middlewares
// import { adminProtect } from '../middleware/adminProtect.js';



const router = express.Router();

// // Unprotected Routes
// router.post('/login', doLogin);
// router.put('/initiateForgotPassword', doInitiateForgotPassword);
// router.patch('/resetPassword', doResetPassword);

// /**
//  * Protected Routes
// **/

// // Contact Us Routes
// router.get('/fetchContactUsList', adminProtect, doFetchContactUsList);
// router.put('/archiveContactUs', adminProtect, doArchiveContactUs);

// // Newsletter Routes
// router.get('/fetchNewsletterList', adminProtect, doFetchNewsletterList);
// router.put('/archiveNewsletter', adminProtect, doArchiveNewsletter);



// // Upload routes
// router.post('/upload/:uploadType', adminProtect, uploadFile);

export default router;
