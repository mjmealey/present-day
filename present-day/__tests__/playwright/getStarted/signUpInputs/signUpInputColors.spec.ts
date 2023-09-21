import { Locator, test, expect} from "@playwright/test";
import {
  setEmailPlaceholder,
  confirmEmailPlaceholder,
} from "../../variables/placeholders.js";
import { errorMessage } from "../../../../src/objects/formState.js";
import { signUpPage } from "../../variables/urls.js";
import { setEmail } from "../../variables/inputIds.js";

test.beforeEach(async ({ page }) => {
 await page.goto(signUpPage);
});

test("add a crimson border color if the email error text is visible", async ({
  page,
}) => {
  
    interface InvalidEmails {
        invalidPattern: string
    }

    const invalidEmails: InvalidEmails = {
        invalidPattern: "markjmealeygmail.com"
    }

    await page.getByPlaceholder(setEmailPlaceholder).fill(invalidEmails.invalidPattern) 
    const setEmailId: Locator = page.getByTestId("setEmailId")
    const setEmailBorder = await setEmailId.evaluate((el) => {
        const styles = window.getComputedStyle(el)
        return {
            borderColor: styles.borderColor
        }
    }) 

    expect(setEmailBorder.borderColor).toBe("crimson")
        
});
