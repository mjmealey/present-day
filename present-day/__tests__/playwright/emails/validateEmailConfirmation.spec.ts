import {test, expect} from "@playwright/test"

test("should check that both email fields do not match", async ({page}) => {
    await page.goto("http://localhost:5173/src/getStarted/getStarted.html")

    const firstEmail = "bobjames@gmail.com"
    const secondEmail = "bobjames@gmail.com"
    
})