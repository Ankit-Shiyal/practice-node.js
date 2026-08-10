export const getWelcomeEmailTemplate = (userName) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Eat&Joy</title>
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
                Delicious food, delivered to your door
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
                Welcome, ${userName}! 🎉
              </h2>

              <p style="
                font-size:15px;
                line-height:1.7;
                color:#555;
              ">
                Thank you for creating your account with
                <strong>Eat&Joy</strong>.
                We're excited to have you with us!
              </p>

              <p style="
                font-size:15px;
                line-height:1.7;
                color:#555;
              ">
                Your account has been successfully created.
                You can now discover delicious food from your
                favorite restaurants, place orders, and enjoy
                fast delivery right at your doorstep.
              </p>

              <!-- Features -->
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
                  <td style="padding:22px;">

                    <h3 style="
                      margin:0 0 18px;
                      color:#e23744;
                      font-size:18px;
                    ">
                      🍴 What you can do
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
                      🛒 Add your favorite food to cart
                    </p>

                    <p style="
                      margin:10px 0;
                      font-size:14px;
                      color:#555;
                    ">
                      🚴 Get fast doorstep delivery
                    </p>

                    <p style="
                      margin:10px 0;
                      font-size:14px;
                      color:#555;
                    ">
                      ⭐ Rate and review your orders
                    </p>

                  </td>
                </tr>
              </table>

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

              <!-- First Order Section -->
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
                  <td
                    style="
                      padding:20px;
                      text-align:center;
                    "
                  >

                    <h3 style="
                      margin:0 0 8px;
                      color:#222;
                    ">
                      🎁 Ready for your first order?
                    </h3>

                    <p style="
                      margin:0;
                      font-size:14px;
                      color:#666;
                      line-height:1.6;
                    ">
                      Explore nearby restaurants and find
                      something delicious to enjoy today.
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
                You received this email because you created
                an account on Eat&Joy.
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