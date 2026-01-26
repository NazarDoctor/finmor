import{test, expect, Page, Locator} from '@playwright/test';
export class MainPage {
    //основні елементи сторінки//
    readonly page:Page;
    readonly userlogo:Locator;
    readonly mainlogo:Locator;
    readonly secondMainlogo:Locator;
    readonly toggleSidebar:Locator;
    readonly themeToggle:Locator;
    readonly userDropDown:Locator;
    readonly userName:Locator;
    readonly userEmail:Locator;
    readonly userSettings:Locator;
    readonly logoutButton:Locator;

    //sidebar//
    readonly sidebarMenu:Locator;
    //трансакції//
    

    //категорії//
    readonly incomeTitile:Locator;
    readonly expenceTitile:Locator;
    readonly categoriesPage:Locator;
    readonly categoriesButton:Locator;
   

    

    constructor(page:Page) {
        this.page=page;
        this.userlogo=page.getByTestId('user-menu-trigger');
        this.mainlogo=page.locator('text=FinanceManager');
        this.secondMainlogo=page.getByTestId('sidebar').getByTestId('app-title');
        this.sidebarMenu=page.getByTestId('main-navigation');
        this.toggleSidebar=page.getByTestId('sidebar-toggle');
        this.themeToggle=page.getByTestId('theme-toggle');
        this.userDropDown=page.getByTestId('user-menu-dropdown');
        this.userName=page.getByTestId('user-name');
        this.userEmail=page.getByTestId('user-email');
        this.userSettings=page.getByTestId('user-settings');
        this.logoutButton=page.getByTestId('logout-button');
        this.categoriesPage=page.getByTestId('categories-page-title');
        this.categoriesButton=page.getByTestId('add-category-button');
        this.incomeTitile=page.getByTestId('income-categories-title');
        this.expenceTitile=page.getByTestId('expense-categories-title');
        this.transactionsPage=page.getByTestId('transactions-page-title');
        

        


        
    }
    async goto() {
       await this.page.goto('/'); 
       await expect (this.page).toHaveURL('/');
       await expect(this.page).toHaveTitle('Повнофункціональний фінансовий менеджер');
    }
    async checkUserLogo(expectedUserName: string) {
        await expect(this.userlogo).toBeVisible();
        await expect(this.userlogo).toHaveText(expectedUserName);
    }
    async checkMainlogo(){
        await expect(this.mainlogo).toBeEnabled();
        await expect(this.mainlogo).toHaveText('FinanceManager');
    }
    async checkSecondMainlogo(){
        await expect(this.secondMainlogo).toBeVisible();
        await expect(this.secondMainlogo).toHaveText('FinanceManager');
    }
    async checkSidebarMenu (){ 
        await expect(this.sidebarMenu).toBeVisible();
    }
    async checkToggleSidebar(){
        await expect(this.toggleSidebar).toBeEnabled();
        await expect(this.secondMainlogo).toBeVisible();
    }
    async checkThemeToggle(){
        await expect(this.themeToggle).toBeEnabled();
        await expect(this.themeToggle).toBeVisible();
    }
     async checkUserDropDown(){
        await expect(this.userDropDown).toBeEnabled();
        await expect(this.userDropDown).toBeVisible();
    }
    async checkUserName(expectedUserName: string){
        await expect(this.userName).toBeEnabled();
        await expect(this.userName).toBeVisible();
        await expect(this.userName).toHaveText(expectedUserName);

    }
    async checkUserEmail(expectedUserEmail: string){
        await expect(this.userEmail).toBeEnabled();
        await expect(this.userEmail).toBeVisible();
        await expect(this.userEmail).toHaveText(expectedUserEmail);
    }
    async checkUserSettings(){
        await expect(this.userSettings).toBeEnabled();
        await expect(this.userSettings).toBeVisible();
        await expect(this.userSettings).toHaveText('Settings');

    }
    async checklogoutButton(){
        await expect(this.logoutButton).toBeEnabled();
        await expect(this.logoutButton).toBeVisible();
        await expect(this.logoutButton).toHaveText('Logout');

    }
    async checkCategoriesPage(){
        await expect(this.categoriesPage).toBeVisible();
        await expect(this.categoriesPage).toHaveText('Управління категоріями');
    }
    async checkCategoriesButton(){
        await expect(this.categoriesButton).toBeVisible();
        await expect(this.categoriesButton).toHaveText('Додати категорію');
    }
    async checkIncometitile(){
        await expect(this.incomeTitile).toBeVisible();
        await expect(this.incomeTitile).toHaveText('Категорії доходів');
    }
    async checkExpenceTitile(){
        await expect(this.expenceTitile).toBeVisible();
        await expect(this.expenceTitile).toHaveText('Категорії витрат');
    }
    async checkTransactionsPage(){
        await expect(this.transactionsPage).toBeVisible();
        await expect(this.transactionsPage).toHaveText('Транзакції');
    }

    


     

}