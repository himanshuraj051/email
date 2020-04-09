"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'hr18021999@gmail.com', // generated ethereal user
      pass: 'raj@1234' // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"State Bank Of India" <hr18021999@example.com>', // sender address
    to: "priyanshukumar0544@gmail.com", // list of receivers
    subject: "Important", // Subject line
    text: "Have a nice day!!", // plain text body
    html: "<p>Dear customer, <b>Arun Kumar Tiwary</b> your account is in due of <b>Rs: 2000</b> <br>Kindly credit your account with sufficient amount, if done please ignore!<br>For more details kindly contact to your bank<br>THANK YOU</p>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);