import{expect, Page, Locator} from '@playwright/test';
import { checkAttribute, expectVisible, fillElement, сlickElement } from '../utils/globalMetods';
export class MainPage {
    //основні елементи сторінки//
    readonly page:Page;
    readonly userlogo:Locator;
    readonly mainlogo:Locator;
    readonly appLogo:Locator;
    readonly secondMainlogo:Locator;
    readonly toggleSidebar:Locator;
    readonly themeToggle:Locator;
    readonly userDropDown:Locator;
    readonly userName:Locator;
    readonly userEmail:Locator;
    readonly userSettings:Locator;
    readonly logoutButton:Locator;
    readonly totallIncome:Locator;
    readonly totallExpenses:Locator;
    readonly balanceCard:Locator;
    readonly recentTransactions:Locator;
    readonly budgetOverview:Locator;
    readonly addTransactionButton:Locator;

    //sidebar//
    readonly sidebarMenu:Locator;
    readonly dashboardNav:Locator;
    readonly transactionNav:Locator;
    readonly categoriesNav:Locator;
    readonly budgetNav:Locator;
    readonly accountsNav:Locator;
    readonly reportsNav:Locator;
    readonly analyticsNav:Locator;
    readonly settingsNav:Locator;
    //трансакції//
    readonly transactionsPage:Locator;
    

    //категорії//
    readonly incomeTitile:Locator;
    readonly expenceTitile:Locator;
    readonly categoriesPage:Locator;
    readonly categoriesButton:Locator;
   

    

    constructor(page:Page) {
        this.page=page;
        this.userlogo=page.getByTestId('user-menu-trigger');
        this.appLogo=page.getByTestId('app-logo');
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
        this.dashboardNav=page.getByTestId('nav-dashboard');
        this.transactionNav=page.getByTestId('nav-transactions');
        this.categoriesNav=page.getByTestId('nav-categories');
        this.budgetNav=page.getByTestId('nav-budgets');
        this.accountsNav=page.getByTestId('nav-accounts');
        this.reportsNav=page.getByTestId('nav-reports');
        this.analyticsNav=page.getByTestId('nav-analytics');
        this.settingsNav=page.getByTestId('nav-settings');
        this.totallIncome=page.getByTestId('total-income-card-title');
        this.totallExpenses=page.getByTestId('total-expenses-card');
        this.balanceCard=page.getByTestId('balance-card');
        this.recentTransactions=page.getByTestId('recent-transactions-widget');
        this.budgetOverview=page.getByTestId('budget-overview-widget');
        this.addTransactionButton=page.getByTestId('add-transaction-button');

        


        
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
    async checkAppLogo()
    {
        await expect(this.appLogo).toBeEnabled();
        await checkAttribute(this.appLogo, 'width', '24', 'ширина' );
    }
    async checkMainlogo(){
        await expect(this.mainlogo).toBeEnabled();
        await expect(this.mainlogo).toHaveText('FinanceManager');
    }
    async checkAddTransactionButton(){
        await expect(this.addTransactionButton).toBeEnabled();
        await expect(this.addTransactionButton).toHaveText('Додати транзакцію');
        
    }
    async clickAddTransactionButton(){
        await сlickElement(this.addTransactionButton, 'додати трансакцію');
        
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
        await expect(this.toggleSidebar).toBeVisible();
    }
    async clickToggleSidebar(){
        await сlickElement(this.toggleSidebar, 'сайдбар');
    }

    async checkThemeToggle(){
        await expect(this.themeToggle).toBeEnabled();
        await expect(this.themeToggle).toBeVisible();
    }
    async clickThemeToggle(){
        await сlickElement(this.themeToggle, 'зміна теми');
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
    async checkDashboardNav(){
        await expect(this.dashboardNav).toBeVisible();
        await expect(this.dashboardNav).toHaveText('Панель управління');
    }
    async clickDashboardNav(){
        await сlickElement (this.dashboardNav, 'панель управління');
        
    }
    async checkTransactionNav(){
        await expect(this.transactionNav).toBeVisible();
        await expect(this.transactionNav).toHaveText('Транзакції');
    }
    async clickTransactionNav(){
        await сlickElement(this.transactionNav,'трансакції');
        
    }
    async checkCategoriesNav(){
        await expect(this.categoriesNav).toBeVisible();
        await expect(this.categoriesNav).toHaveText('Категорії');
    }
    async clickkCategoriesNav(){
        await сlickElement(this.categoriesNav, 'категорії');
    }
    async checkBudgetNav(){
        await expect(this.budgetNav).toBeVisible();
        await expect(this.budgetNav).toHaveText('Бюджети');
    }
    async clickkBudgetNav(){
        await сlickElement(this.budgetNav, 'бюджет');
        
    }
    async checkAccountsNav(){
        await expect(this.accountsNav).toBeVisible();
        await expect(this.accountsNav).toHaveText('Рахунки');
    }
    async clickAccountsNav(){
        await сlickElement(this.accountsNav,'рахунки');
    }
    async checkReportsNav(){
        await expect(this.reportsNav).toBeVisible();
        await expect(this.reportsNav).toHaveText('Звіти');
    }
    async clickReportsNav(){
        await сlickElement(this.reportsNav, 'Звіти');
    }
    async checkAnalyticsNav(){
        await expect(this.analyticsNav).toBeVisible();
        await expect(this.analyticsNav).toHaveText('Аналітика');
    }
    async clickAnalyticsNav(){
        await сlickElement(this.analyticsNav, 'Аналітика');
        
    }
    async checkSettingNav(){
        await expect(this.settingsNav).toBeVisible();
        await expect(this.settingsNav).toHaveText('Налаштування');
    }
    async clickSettingNav(){
        await сlickElement(this.settingsNav,'Налаштування');
        
    }
    async checkTotallIncome(){
        await expectVisible (this.totallIncome,'Загальний дохід')
        await expect(this.totallIncome).toHaveText('Загальний дохід');
    }
    async checkTotallExpenses(){
        await expectVisible (this.totallExpenses,'Загальні витрати')
        await expect(this.totallExpenses).toHaveText('Загальні витрати');
    }
    async checkBalanceCard(){
        await expectVisible (this.balanceCard,'Баланс')
        await expect(this.balanceCard).toHaveText('Баланс');
    }
    async checkRecentTransactions(){
        await expectVisible (this.recentTransactions,'Останні транзакції')
        await expect(this.recentTransactions).toHaveText('Останні транзакції');
    }
    async checkBudgetOverview(){
        await expectVisible (this.budgetOverview,'Огляд бюджетів')
        await expect(this.budgetOverview).toHaveText('Огляд бюджетів');
    }




     

}