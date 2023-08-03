import test from "./Support/Fixture/pageObjectFixture"


    test("verify functionality of login with invalid credential", async({loginPage})=> {
        await loginPage.landingToLoginPage()
        await loginPage.loginWithInvalidCredential()
    })

    test("Verify functionality of cancel button", async({loginPage})=> {
        await loginPage.landingToLoginPage()
        await loginPage.verifyCancelButton()
    })

    test("Verify login functionality with valid credentials", async({loginPage})=> {
        await loginPage.landingToLoginPage()
        await loginPage.loginWitValidCredential()
    })
// })
