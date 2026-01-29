import{expect, Page, Locator} from '@playwright/test';
export async function сlickElement(locator: Locator, name: string) {
  try {
    console.log(`CLICK: ${name}`);
    await locator.click();
    console.log(`CLICK SUCCESS: ${name}`);
  } catch (error) {
    throw new Error(`CLICK FAILED: ${name}\n${error}`);
  }

}
export async function fillElement(locator: Locator, value: string, name: string) {
  try {
    console.log(`FILL: ${name} -> "${value}"`);
    await locator.fill(value);
 
    const actual = await locator.inputValue();
    await expect (locator).toHaveValue(value);
    console.log(`FILL CHECK: ${name} VALUE = "${actual}"`);
  } catch (error) {
    throw new Error(`FILL FAILED: ${name}, VALUE="${value}"\n${error}`);
  }
}
export async function expectVisible(locator: Locator, name: string) {
  try {
    console.log(`CHECK VISIBLE: ${name}`);
    await expect(locator).toBeVisible();
    console.log(`VISIBLE OK: ${name}`);
  } catch (error) {
    throw new Error(` NOT VISIBLE: ${name}\n${error}`);
  }
}
export async function checkAttribute(locator: Locator, attributeName: string, expectedValue: string, elementName: string): Promise<void> {
    console.log(`CHECK ATTRIBUTE: ${elementName}.${attributeName} = "${expectedValue}"`);
    const value = await locator.getAttribute(attributeName);
    if (value !== expectedValue) {
        throw new Error(`${elementName}.${attributeName} is "${value}", expected "${expectedValue}"`);
    }
}