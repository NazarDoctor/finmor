import{test, expect, Page} from '@playwright/test';
import {loginData} from './dataTest/loginData';
import { MainPage } from '../pages/MainPage';
import { BasePage } from '../pages/BasePage';
import { Transaction } from '../pages/Transaction';
test.describe ('перевірка ЮІ основної сторінки',() => {
    let basepage:BasePage;
    let mainPage:MainPage;
    let transaction:Transaction;

    
    
    test.beforeEach(async ({page}) => {
        basepage=new BasePage(page);
        mainPage= new MainPage(page);
        transaction=new Transaction(page);
        await basepage.goto();
        await basepage.login();
       
    

    } )
       




        test ('перевірка ЮІ основної сторінки', async({page}) => 
    {
     
        //завантаження головної сторінки//
        await page.waitForURL('https://finmore.netlify.app');
        await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
        //перевірка головної сторінки//
        
        await mainPage.checkAppLogo();
        await mainPage.checkUserLogo(loginData.userName);
        await mainPage.checkAddTransactionButton();
        await mainPage.clickAddTransactionButton();


        //Перевірка вікна нова трансакція//
        await transaction.checkTransactionForm();
        await transaction.checkTransactionTitle();
        await transaction.checkTransactionFormClose();
        await transaction.checkexpense();
        await transaction.checkincome();
        await transaction.checkAmountInput();
        await transaction.fillAmountInput();
        await transaction.checkTransactionCategory();
        await transaction.clickTransactionCategory();
        await transaction.selectTransactionCategory('Розваги');
        await transaction.checkSelectedCategory('Розваги');
        

      



            });
});