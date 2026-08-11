export const getWelcomeEmailTemplate = (name, type) => {
  let title;
  let subtitle;
  let message;
  let icon;
  let buttonText;
  let buttonLink;

  // USER
  if (type === "user") {
    title = `Welcome to Eat&Joy, ${name}! 🎉`;
    subtitle = "Good Food. Good Mood. ❤️";
    message = `
      Your account has been successfully created.
      You can now discover restaurants, explore delicious food,
      place orders, and enjoy fast delivery right at your doorstep.
    `;
    icon = "🍽️";
    buttonText = "Explore Restaurants 🍴";
    buttonLink = "https://eatandjoy.com/restaurants";
  }

  // PROVIDER
  else if (type === "provider") {
    title = `Welcome to Eat&Joy, ${name}! 🎉`;
    subtitle = "Grow your business with Eat&Joy";
    message = `
      Your provider account has been successfully created.
      You can now manage your services, connect with customers,
      and grow your business with Eat&Joy.
    `;
    icon = "👨‍🍳";
    buttonText = "Go to Provider Dashboard";
    buttonLink = "https://eatandjoy.com/provider/dashboard";
  }

  // RESTAURANT
  else if (type === "restaurant") {
    title = `${name} Added Successfully! 🎉`;
    subtitle = "Welcome to Eat&Joy";
    message = `
      Your restaurant has been successfully added to Eat&Joy.
      You can now manage your restaurant, add food items,
      manage orders, and serve your customers.
    `;
    icon = "🏪";
    buttonText = "Manage Restaurant";
    buttonLink = "https://eatandjoy.com/restaurant/dashboard";
  }

  // INVALID TYPE
  else {
    throw new Error("Invalid email template type");
  }

  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>${title}</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#f4f4f4;
  font-family:Arial, Helvetica, sans-serif;
  color:#333333;
">

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="background:#f4f4f4;"
>
  <tr>
    <td align="center" style="padding:25px 10px;">

      <!-- Main Card -->
      <table
        width="600"
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="
          width:100%;
          max-width:600px;
          background:#ffffff;
          border-radius:12px;
          overflow:hidden;
        "
      >

        <!-- Header -->
        <tr>
          <td
            align="center"
            style="
              background:#e23744;
              padding:35px 20px;
            "
          >

            <div style="
              font-size:42px;
              line-height:1;
              margin-bottom:12px;
            ">
              ${icon}
            </div>

            <h1 style="
              margin:0;
              color:#ffffff;
              font-size:32px;
              font-weight:700;
            ">
              Eat&Joy
            </h1>

            <p style="
              margin:10px 0 0;
              color:#ffffff;
              font-size:14px;
            ">
              ${subtitle}
            </p>

          </td>
        </tr>


        <!-- Content -->
        <tr>
          <td style="padding:40px 35px 25px;">

            <h2 style="
              margin:0 0 18px;
              font-size:25px;
              color:#222222;
            ">
              ${title}
            </h2>

            <p style="
              margin:0 0 20px;
              font-size:15px;
              line-height:1.7;
              color:#555555;
            ">
              Hello <strong>${name}</strong>,
            </p>

            <p style="
              margin:0;
              font-size:15px;
              line-height:1.8;
              color:#555555;
            ">
              ${message}
            </p>


            <!-- Success Box -->
            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
              style="
                margin:30px 0;
                background:#fff5f5;
                border-radius:10px;
                border:1px solid #ffe1e1;
              "
            >
              <tr>
                <td
                  align="center"
                  style="padding:25px;"
                >

                  <div style="
                    font-size:38px;
                    margin-bottom:10px;
                  ">
                    ✅
                  </div>

                  <h3 style="
                    margin:0 0 8px;
                    color:#e23744;
                    font-size:18px;
                  ">
                    Successfully Added
                  </h3>

                  <p style="
                    margin:0;
                    font-size:14px;
                    line-height:1.6;
                    color:#666666;
                  ">
                    Your ${type} is now successfully registered
                    with Eat&Joy.
                  </p>

                </td>
              </tr>
            </table>


            <!-- CTA -->
            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
            >
              <tr>
                <td align="center">

                  <a
                    href="${buttonLink}"
                    style="
                      display:inline-block;
                      background:#e23744;
                      color:#ffffff;
                      text-decoration:none;
                      padding:15px 32px;
                      border-radius:7px;
                      font-size:15px;
                      font-weight:bold;
                    "
                  >
                    ${buttonText}
                  </a>

                </td>
              </tr>
            </table>


            <!-- Support -->
            <p style="
              margin:30px 0 0;
              padding-top:25px;
              border-top:1px solid #eeeeee;
              font-size:13px;
              line-height:1.7;
              color:#777777;
            ">
              Need help? Our support team is always here for you.
              Contact us at
              <a
                href="mailto:support@eatandjoy.com"
                style="
                  color:#e23744;
                  text-decoration:none;
                  font-weight:bold;
                "
              >
                support@eatandjoy.com
              </a>
            </p>

          </td>
        </tr>


        <!-- Footer -->
        <tr>
          <td
            align="center"
            style="
              background:#f8f8f8;
              padding:25px 20px;
              border-top:1px solid #eeeeee;
            "
          >

            <p style="
              margin:0 0 8px;
              font-size:12px;
              color:#888888;
            ">
              © 2026 Eat&Joy. All rights reserved.
            </p>

            <p style="
              margin:0;
              font-size:12px;
              color:#999999;
            ">
              This email was sent by Eat&Joy.
            </p>

            <p style="
              margin:15px 0 0;
              font-size:12px;
            ">

              <a
                href="#"
                style="
                  color:#e23744;
                  text-decoration:none;
                "
              >
                Privacy Policy
              </a>

              &nbsp; • &nbsp;

              <a
                href="#"
                style="
                  color:#e23744;
                  text-decoration:none;
                "
              >
                Terms
              </a>

              &nbsp; • &nbsp;

              <a
                href="#"
                style="
                  color:#e23744;
                  text-decoration:none;
                "
              >
                Contact
              </a>

            </p>

          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>
`;
};

export const getLoginSuccessEmailTemplate = (userName) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Successful - Eat&Joy</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#f5f5f5;
  font-family:Arial, Helvetica, sans-serif;
  color:#333;
">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table
          width="600"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width:600px;
            width:100%;
            background:#ffffff;
            margin:30px auto;
            border-radius:10px;
            overflow:hidden;
          "
        >

          <!-- Header -->
          <tr>
            <td
              style="
                background:#e23744;
                padding:30px 20px;
                text-align:center;
                color:#ffffff;
              "
            >
              <h1 style="
                margin:0;
                font-size:30px;
              ">
                🍽️ Eat&Joy
              </h1>

              <p style="
                margin:8px 0 0;
                font-size:15px;
              ">
                Welcome Back!
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:35px 30px;">

              <h2 style="
                margin:0 0 15px;
                color:#222;
                font-size:24px;
              ">
                Login Successful! 🎉
              </h2>

              <p style="
                font-size:15px;
                line-height:1.7;
                color:#555;
              ">
                Hello <strong>${userName}</strong>,
              </p>

              <p style="
                font-size:15px;
                line-height:1.7;
                color:#555;
              ">
                You have successfully logged in to your
                <strong>Eat&Joy</strong> account.
                We're happy to see you again!
              </p>

              <!-- Login Success Box -->
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  background:#fff5f5;
                  border-radius:8px;
                  margin:25px 0;
                "
              >
                <tr>
                  <td style="
                    padding:22px;
                    text-align:center;
                  ">

                    <div style="
                      font-size:40px;
                      margin-bottom:10px;
                    ">
                      ✅
                    </div>

                    <h3 style="
                      margin:0 0 8px;
                      color:#e23744;
                      font-size:18px;
                    ">
                      You're Successfully Logged In
                    </h3>

                    <p style="
                      margin:0;
                      font-size:14px;
                      color:#666;
                      line-height:1.6;
                    ">
                      Your Eat&Joy account is ready.
                      Start exploring delicious food and restaurants!
                    </p>

                  </td>
                </tr>
              </table>

              <!-- What You Can Do -->
              <h3 style="
                margin:25px 0 15px;
                color:#222;
                font-size:18px;
              ">
                🍴 What's waiting for you?
              </h3>

              <p style="
                margin:10px 0;
                font-size:14px;
                color:#555;
              ">
                🔍 Discover restaurants near you
              </p>

              <p style="
                margin:10px 0;
                font-size:14px;
                color:#555;
              ">
                🍕 Explore delicious food and menus
              </p>

              <p style="
                margin:10px 0;
                font-size:14px;
                color:#555;
              ">
                🛒 Order your favorite meals
              </p>

              <p style="
                margin:10px 0;
                font-size:14px;
                color:#555;
              ">
                🚴 Enjoy fast doorstep delivery
              </p>

              <p style="
                margin:10px 0;
                font-size:14px;
                color:#555;
              ">
                ⭐ Rate and review your orders
              </p>

              <!-- CTA -->
              <div style="
                text-align:center;
                margin:30px 0;
              ">

                <a
                  href="https://eatandjoy.com/restaurants"
                  style="
                    background:#e23744;
                    color:#ffffff;
                    padding:14px 32px;
                    text-decoration:none;
                    border-radius:6px;
                    font-size:16px;
                    font-weight:bold;
                    display:inline-block;
                  "
                >
                  Explore Restaurants 🍴
                </a>

              </div>

              <!-- Security Notice -->
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  background:#f8f8f8;
                  border-radius:8px;
                  margin:25px 0;
                "
              >
                <tr>
                  <td style="padding:20px;">

                    <h3 style="
                      margin:0 0 8px;
                      color:#222;
                      font-size:16px;
                    ">
                      🔐 Security Notice
                    </h3>

                    <p style="
                      margin:0;
                      font-size:13px;
                      color:#666;
                      line-height:1.6;
                    ">
                      If you did not perform this login, please change
                      your password immediately and contact our support team.
                    </p>

                  </td>
                </tr>
              </table>

              <!-- Support -->
              <p style="
                font-size:14px;
                color:#666;
                line-height:1.7;
                margin-top:25px;
              ">
                Need help? Our support team is always here for you.
                Contact us at
                <strong>support@eatandjoy.com</strong>.
              </p>

              <hr style="
                border:none;
                border-top:1px solid #eee;
                margin:30px 0;
              " />

              <p style="
                margin:0;
                font-size:14px;
              ">
                Happy ordering! 🍕🍔🍟
              </p>

              <p style="
                margin:6px 0 0;
                font-size:14px;
              ">
                <strong>Team Eat&Joy</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="
                background:#f8f9fa;
                text-align:center;
                padding:20px;
                font-size:12px;
                color:#888;
              "
            >

              <p style="margin:5px 0;">
                © 2026 Eat&Joy. All rights reserved.
              </p>

              <p style="margin:5px 0;">
                You received this email because you logged in
                to your Eat&Joy account.
              </p>

              <p style="margin:12px 0 0;">

                <a
                  href="#"
                  style="
                    color:#e23744;
                    text-decoration:none;
                  "
                >
                  Privacy Policy
                </a>

                &nbsp; | &nbsp;

                <a
                  href="#"
                  style="
                    color:#e23744;
                    text-decoration:none;
                  "
                >
                  Terms
                </a>

                &nbsp; | &nbsp;

                <a
                  href="#"
                  style="
                    color:#e23744;
                    text-decoration:none;
                  "
                >
                  Contact Us
                </a>

              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
};