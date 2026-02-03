import{expect, Page, Locator} from '@playwright/test';
import { checkAttribute, expectVisible, fillElement, сlickElement } from '../utils/globalMetods';
export class Transaction {
    
    readonly page:Page;
    readonly transactionForm:Locator;
    

    

    constructor(page:Page) {
        this.page=page;
        this.transactionForm=page.getByTestId('utransaction-form');
        
    }
    async goto() {
       await this.page.goto('/'); 
       await expect (this.page).toHaveURL('/');
       await expect(this.page).toHaveTitle('Повнофункціональний фінансовий менеджер');
    }
    async checkTransactionForm(expectedUserName: string) {
        await expect(this.transactionForm).toBeVisible();
        
     
    }
   



     

}