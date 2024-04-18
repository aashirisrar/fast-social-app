import nodemailer from 'nodemailer';
import dotenv from 'dotenv'; // To get env variables
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465, // Gmail service not working for 587
    secure: true,
    auth: {
        user: process.env.SMTP_USER, // For your gmail account create an app password to use here
        pass: process.env.SMTP_PASSWORD,
    },
});

//Asynchronous function
export const sendEmail = async (options: { to: string[]; subject: string; text: string }) => {
    console.log("Sending Email");
    const mailOptions = {
        from: process.env.SMTP_FROM, //'User Name to show in email <User_email>' 
        to: options.to, // Creating list of receipents
        subject: options.subject,
        text: options.text,
    };
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        await transporter.sendMail(mailOptions);
        console.log("Success");
    }
    catch (error) {
        console.error(error);
    }
};
//Format eg. sendEmail({to:['l226797@lhr.nu.edu.pk','ehanayaz@gmail.com'],subject: "Hi",text: "Hello"});