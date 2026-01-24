import{test, expect, Page} from '@playwright/test';
export class BasePage {
    readonly page:Page
    constructor(page:Page) {
        this.page=page
        
    }
    async goto() {
       await this.page.goto('/'); 
       await expect (this.page).toHaveURL('/');
       await expect(this.page).toHaveTitle('Повнофункціональний фінансовий менеджер');
    } 

}