// import Mailjet from "node-mailjet";
// import app_logger from "../logger/index"
// require('dotenv').config();

// // const mailjet = require("node-mailjet").connect(
// //     process.env.MJ_APIKEY_PUBLIC || '',
// //     process.env.MJ_APIKEY_PRIVATE || ''
// // );
// const mailjet = Mailjet.apiConnect(
//          process.env.MJ_APIKEY_PUBLIC || '',
//          process.env.MJ_APIKEY_PRIVATE || ''
// );

// export default class PublicService {


//     public sendEmail(to: string, subject: string, html: string) {

//         if (!this.validateEmail(to)) return console.log("invalid email ", to);
//         console.log("send email got ", to, subject);
//         app_logger.info('public:' + process.env.MJ_APIKEY_PUBLIC)

//         const request = mailjet.post("send", { version: "v3.1" }).request({
//             Messages: [
//                 {
//                     From: {
//                         Email: process.env.MJ_EMAIL || "",
//                         Name: "ari",
//                     },
//                     To: [
//                         {
//                             Email: to,
//                             Name: " ",
//                         },
//                     ],
//                     Subject: subject,
//                     HTMLPart: `<div>${html}</div>`,
//                 },
//             ],
//         });

//         request
//             .then((result: any) => {
//                 console.log(result.body);
//             })
//             .catch((err: any) => {
//                 console.log(err.statusCode);
//             });
//     };

//     readonly validateEmail = (email: string) => {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     }

// }



export default class PublicService {


    public sendEmail(to: string, subject: string, html: string) { 
        return true;
    }

}
// export default class PublicService {



// };