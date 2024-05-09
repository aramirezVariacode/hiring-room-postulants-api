const puppeteer = require("puppeteer-extra");

const { DEFAULT_INTERCEPT_RESOLUTION_PRIORITY } = require("puppeteer");
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(
  AdblockerPlugin({
    // Optionally enable Cooperative Mode for several request interceptors
    interceptResolutionPriority: DEFAULT_INTERCEPT_RESOLUTION_PRIORITY,
  })
);
const getGlassdoorData = async (jobPosition, country) => {
  try {
    browser = await puppeteer.launch({
      args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"
    );

    // Navega a la página web
    await page.goto("https://glassdoor.com/Salaries/index.htm");
    delay(2000);
    // busca el imput del cargo
    await page.waitForSelector('input[name="typedKeyword"]');

    //Select job position

    const inputPosition = await page.$('input[name="typedKeyword"]');
    await inputPosition.click();
    await page.type('input[name="typedKeyword"]', jobPosition);
    await delay(3000);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await delay(1000);

    //Select country

    await page.waitForSelector('input[name="Autocomplete"]');

    const inputCountry = await page.$('input[name="Autocomplete"]');
    await inputCountry.click();
    await page.type('input[name="Autocomplete"]', country);
    await delay(2000);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await delay(1000);

    //press search button

    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");
    await delay(1000);

    await page.waitForNavigation();

    await delay(2000);

    //result
    const resultText = await page.waitForSelector("p span");
    let textResponse = await resultText.evaluate((el) => el.textContent);

    if (textResponse === null || textResponse.startsWith("For")) {
      textResponse = "No content for this search";
    } else {
      textResponse = textResponse.split(".")[0];
    }

    // Cierra el navegador
    await browser.close();

    return textResponse;
  } catch (error) {
    console.error("Error occurred:", error);

    return "No content for this search";
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const delay = (miliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miliseconds);
  });
};

module.exports = {
  getGlassdoorData,
};
