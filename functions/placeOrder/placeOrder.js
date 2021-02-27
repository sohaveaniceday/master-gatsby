const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

exports.handler = async (event, context) => {
  const info = await transporter.sendMail({
    from: 'slick slices <slick@example.com>',
    to: 'orders@example.com',
    subject: 'New Order!',
    html: '<p> Your pizza order is here </p>',
  });
  console.log('info', info);
  return { statusCode: 200, body: JSON.stringify(info) };
};
