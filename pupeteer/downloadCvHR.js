const puppeteer = require("puppeteer-extra");

const { DEFAULT_INTERCEPT_RESOLUTION_PRIORITY } = require("puppeteer");
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(
  AdblockerPlugin({
    // Optionally enable Cooperative Mode for several request interceptors
    interceptResolutionPriority: DEFAULT_INTERCEPT_RESOLUTION_PRIORITY,
  })
);

let browser = null;
const getCvHiringRoom = async (postulantId) => {
  try {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"
    );
    await page.goto("https://variacode.hiringroom.com/app/main/login");
    delay(2000);

    //search username input
    await page.waitForSelector("#login-email");

    const inputUsername = await page.$("#login-email");
    await inputUsername.click();
    await page.type("#login-email", process.env.HR_USERNAME);

    //search password input
    await page.waitForSelector("#login-password");
    const inputPassword = await page.$("#login-password");
    await inputPassword.click();
    await page.type("#login-password", process.env.HR_PASSWORD);

    //login button
    await page.waitForSelector("#submit_login");
    const loginButton = await page.$("#submit_login");
    await loginButton.click();

    await page.waitForNavigation();

    const bodyPage = await page.$("body");
    await bodyPage.click();

    await page.goto("https://variacode.hiringroom.com/app/postulants");

    await delay(1000);

    await browser.close();
  } catch (error) {
    console.error("Error occurred:", error);
    return "No content for this search";
  }
};

const delay = (miliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miliseconds);
  });
};

module.exports = {
  getCvHiringRoom,
};
