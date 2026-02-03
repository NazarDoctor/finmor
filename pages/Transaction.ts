import{expect, Page, Locator} from '@playwright/test';
import { checkAttribute, expectVisible, fillElement, сlickElement } from '../utils/globalMetods';
export class Transaction {
    
    readonly page:Page;
    readonly transactionForm:Locator;
    readonly transactionTitle:Locator;
    readonly transactionFormClose:Locator;
    readonly expense:Locator;
    readonly income:Locator;
    readonly amountInput:Locator;
    readonly transactionCategory:Locator;
   
   
    
    

    

    constructor(page:Page) {
        this.page=page;
        this.transactionForm=page.getByTestId('transaction-form-modal');
        this.transactionTitle=page.getByTestId('transaction-form-title');
        this.transactionFormClose=page.getByTestId('transaction-form-close');
        this.expense=page.getByTestId('expense-type-button');
        this.income=page.getByTestId('income-type-button');
        this.amountInput=page.getByTestId('transaction-amount-input');
        this.transactionCategory = page.getByTestId('transaction-category-select');
       

        
    }
    async goto() {
       await this.page.goto('/'); 
       await expect (this.page).toHaveURL('/');
       await expect(this.page).toHaveTitle('Повнофункціональний фінансовий менеджер');
    }
    async checkTransactionForm() {
        await expect(this.transactionForm).toBeVisible();
     
    }
    async checkTransactionTitle() {
        await expect(this.transactionTitle).toBeVisible();
        await expect(this.transactionTitle).toHaveText('Нова транзакція');
     
    }
    async checkTransactionFormClose() {
        await expect(this.transactionTitle).toBeVisible();
        
    }
    async clickTransactionFormClose(){
        await сlickElement(this.transactionTitle, 'закрити вікно трансакцій');
        
    }
    async clickEpense(){
        await сlickElement(this.expense, 'витрата');
        
    }
    async checkexpense() {
        await expect(this.expense).toBeVisible();
        await expect(this.expense).toHaveText('Витрата');

    }
    async checkincome() {
        await expect(this.income).toBeVisible();
        await expect(this.income).toHaveText('Дохід');

    }
    
    async clickIncome(){
        await сlickElement(this.income, 'дохід');
        
    }
    async checkAmountInput() {
        await expect(this.amountInput).toBeVisible();

    }
    async FillAmountInput() {
        await fillElement (this.amountInput, '500', 'Сума');

    }
    async checkTransactionCategory() {
        await expect(this.transactionCategory).toBeVisible();
    
    }
    
    async clickTransactionCategory(){
        await сlickElement(this.transactionCategory, 'обрати категорію');
        
    }
    async selectTransactionCategory(categoryName: string) {
        await this.transactionCategory.selectOption({ label: categoryName });

    }
    async checkSelectedCategory(categoryName: string) {
           await expect(this.transactionCategory).toHaveValue(categoryName);
    }


   



     

}