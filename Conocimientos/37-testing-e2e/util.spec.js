const { generateText, checkAndGenerate } = require('./util');
const puppeteer = require('puppeteer');

describe('util.js', () => {
  it('generateText success', () => {
    const name = 'Sergio';
    const age = 30;

    const value = generateText(name, age);

    expect(value).toBe('Sergio (30 years old)');
  });

  it('checkAndGenerate', () => {
    const name = 'Sergio';
    const age = 30;

    const value = checkAndGenerate(name, age);

    expect(value).toBe('Sergio (30 years old)');
  });
});

it('Generando mensaje en el navegador', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=800,600'],
  });

  const page = await browser.newPage();
  await page.goto(
    'D:/Trabajo/Cursos/Javascript_Group02/Conocimientos/37-testing-e2e/index.html'
  );

  await page.click('input#name');
  await page.type('input#name', 'Mónica');
  await page.click('input#age');
  await page.type('input#age', '13');

  await page.click('#btnAddUser');

  const textGenerated = await page.$eval('.user-item', (el) => el.textContent);
  expect(textGenerated).toBe('Mónica (13 years old)');
}, 10000);
