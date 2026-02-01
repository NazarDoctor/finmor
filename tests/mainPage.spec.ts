import{test, expect, Page} from '@playwright/test';
import {loginData} from './dataTest/loginData';
import { MainPage } from '../pages/MainPage';
import { BasePage } from '../pages/BasePage';
test.describe ('перевірка ЮІ основної сторінки',() => {
    let basepage:BasePage;
    let mainPage:MainPage;

    
    
    test.beforeEach(async ({page}) => {
        basepage=new BasePage(page);
        mainPage= new MainPage(page);
        await basepage.goto();
    //const uniqueUser = `testuser_${Date.now()}`;
    //const uniqueEmail = `l_nrpi1+${Date.now()}@i.ua`;

    } )
       




        test ('перевірка ЮІ основної сторінки', async({page}) => 
    {
        await page.goto('/');
        //перевірка наявності необхідниї полів логіну//
        await basepage.checkEnter();
        await basepage.checkCredentials();
        await basepage.checkEnterButton();
    
        //заповнення логін форм//
        await basepage.FillenterEmail();
        await basepage.FillEnterPassword();
        await basepage.ClickEnterButton();


        //завантаження головної сторінки//
        await page.waitForURL('https://finmore.netlify.app');
        await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
        //перевірка головної сторінки//
        const expectedUserName=('User Demo');
        await mainPage.checkAppLogo();
        await mainPage.checkUserLogo(expectedUserName);
        await mainPage.checkAddTransactionButton();

      



            });
});