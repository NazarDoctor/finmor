import{test, expect, Page} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { RegistrationPage } from '../pages/RegistrationPage';
test.describe ('перевірка реєстрації',() => {
    let basepage:BasePage;
    let registrationPage:RegistrationPage
    test.beforeEach(async ({page}) => {
        basepage=new BasePage(page);
        registrationPage= new RegistrationPage(page); 
        await basepage.goto();

    } )

   test ('реєстрація з валідними полями', async({page}) => 
    {
          await registrationPage.checkRegisterButton()  });
});