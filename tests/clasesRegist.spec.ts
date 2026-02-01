import{test, expect, Page} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { MainPage } from '../pages/MainPage';
import { registrationData } from './dataTest/registrationData';
import { generateUser, getValidUserFromJson } from '../utils/userRegistration';
test.describe ('перевірка реєстрації',() => {
    let basepage:BasePage;
    let registrationPage:RegistrationPage;
    let mainPage:MainPage;
    const user=getValidUserFromJson();
    
    
    //const user=generateUser();
    //const uniqueUser = `testuser_${Date.now()}`;
    //const uniqueEmail = `l_nrpi1+${Date.now()}@i.ua`;
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
          await registrationPage.fillFullName(user.fullName);
          await registrationPage.checkRegistrationEmail();
          await registrationPage.fillEnterEmailRegister(user.email);
          await registrationPage.checkRegistrationPassword();
          await registrationPage.fillEnterRegistrPaswrod(registrationData.password);
          await registrationPage.checkRepeatPassword();
          await registrationPage.fillEneterRepeatPaswrod(registrationData.password);
          await registrationPage.checkMainCurrency();
          await registrationPage.checkquestionAccount();
          await registrationPage.checkEnenterExistedAccount();
          await registrationPage.checkRegisterSubmit();
          await registrationPage.clickRegisterSubmit();
          //перевірка після реєстрації//
          await await page.waitForURL('https://finmore.netlify.app');
          await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
          await mainPage.checkMainlogo();
          






    });

});