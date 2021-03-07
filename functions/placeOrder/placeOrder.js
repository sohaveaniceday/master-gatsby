const nodemailer = require('nodemailer');

const generateOrderEmail = ({ order, total }) => `<div>
    <h2>Your Recent Order for ${total}</h2>
    <p>Please start walking over, we will have your order ready in the next 20 mins.</p>
    <ul>
      ${order
        .map(
          (item) => `<li>
        <img src="${item.thumbnail}" alt="${item.name}"/>
        ${item.size} ${item.name} - ${item.price}
      </li>`
        )
        .join('')}
    </ul>
    <p>Your total is <strong>$${total}</strong> due at pickup</p>
    <style>
        ul {
          list-style: none;
        }
    </style>
  </div>`;

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const wait = (ms = 0) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  if (body.maple) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'beep bop goodbye' }),
    };
  }
  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    console.log(`Checking that ${field} is good`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Why would you order nothing?' }),
    };
  }

  const info = await transporter.sendMail({
    from: 'slick slices <slick@example.com>',
    to: `${body.name} <${body.email}>`,
    subject: 'New Order!',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  console.log('info', info);
  return { statusCode: 200, body: JSON.stringify({ message: 'Success' }) };
};
