import{test, expect, Page} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { MainPage } from '../pages/MainPage';
test.describe ('перевірка реєстрації',() => {
    let basepage:BasePage;
    let registrationPage:RegistrationPage;
    let mainPage:MainPage;
    test.beforeEach(async ({page}) => {
        basepage=new BasePage(page);
        registrationPage= new RegistrationPage(page); 
        mainPage= new MainPage(page);
        await basepage.goto();

    } )

   test ('реєстрація з валідними полями', async({page}) => 
    {
        //перевірка основних елементів//
          await registrationPage.checkRegisterButton(); 
          await registrationPage.clickRegisterButton();
          await expect (page).toHaveTitle('Повнофункціональний фінансовий менеджер');
          await expect (page).toHaveURL('https://finmore.netlify.app');
          await registrationPage.checkBlueIcon();
          await registrationPage.checkRegistraionForm();
          await registrationPage.checkRegistrationNameText();
          await registrationPage.checkRegistrationText();
          await registrationPage.checkcEnterFullName();
          //введення данних для реєстрації//
          const uniqueUser = `testuser_${Date.now()}`;
          await registrationPage.fillFullName(uniqueUser);
          const uniqueEmail = `l_nrpi1+${Date.now()}@i.ua`;
          await registrationPage.checkRegistrationEmail();
          await registrationPage.fillEnterEmailRegister(uniqueEmail);
          await registrationPage.checkRegistrationPassword();
          await registrationPage.fillEnterRegistrPaswrod('Testing');
          await registrationPage.checkRepeatPassword();
          await registrationPage.fillEneterRepeatPaswrod('Testing');
          await registrationPage.checkMainCurrency();
          await registrationPage.checkquestionAccount();
          await registrationPage.checkEnenterExistedAccount();
          await registrationPage.checkRegisterSubmit();
          await registrationPage.clickRegisterSubmit();
          //перевірка після реєстрації//
          await await page.waitForURL('https://finmore.netlify.app');
          await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
          






    });

});