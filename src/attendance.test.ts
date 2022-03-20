import 'dotenv/config'
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto("https://signinssl.gmarket.co.kr/LogOut/LogOut");

  // Click text=카카오로 시작하기
  await page.locator('text=카카오로 시작하기').click();
  // assert.equal(page.url(), 'https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fis_popup%3Dfalse%26ka%3Dsdk%252F1.41.0%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fen-US%2520device%252FLinux_x86_64%2520origin%252Fhttps%25253A%25252F%25252Fsigninssl.gmarket.co.kr%26auth_tran_id%3Dzln23gwi2to46b91625fed2ffef839c84aa06faa1fcl03kjdy0%26response_type%3Dcode%26state%3D%25257B%252522uri%252522%25253A%252522https%2525253A%2525252F%2525252Fsigninssl.gmarket.co.kr%2525252FLogOut%2525252FLogOut%252522%25252C%252522query%252522%25253A%252522%252522%25257D%26redirect_uri%3Dhttps%253A%252F%252Fsigninssl.gmarket.co.kr%252Fsocial%252Fauthorizegateway%26extra.service_terms%3Ddual_join_agreement%252Cbuyer_terms_policy%252Cg9_terms_policy_required%252Cfinance_terms_policy%252Csummary_terms_notice%252Cover_14years_old%252Cpersonal_information_required%252Cpersonal_information_optional%252Creceive_marketing_info%26client_id%3D46b91625fed2ffef839c84aa06faa1fc');
  // Click text=KakaoMail ID, email, phone number KakaoMail ID, email, phone number
  await page.locator('text=KakaoMail ID, email, phone number KakaoMail ID, email, phone number').click();
  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill(process.env.ID);
  // Click text=Password >> nth=1
  await page.locator('text=Password').nth(1).click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill(process.env.PW);
  // Click button:has-text("Log In") >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://www.gmarket.co.kr/' }*/),
    page.locator('button:has-text("Log In")').first().click()
  ]);

  // Click img[alt="쿠폰·출첵"]
  await page.locator('img[alt="쿠폰·출첵"]').click();
  // assert.equal(page.url(), 'http://promotion.gmarket.co.kr/Event/CouponZone.asp');
  // Click text=플러스존HOT >> span
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=플러스존HOT >> span').click()
  ]);
  // Close page
  await page1.close();
  // Click text=룰렛 돌리고 출석체크하고 START!
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe[name="AttendRulletFrame"]').locator('text=룰렛 돌리고 출석체크하고 START!').click()
  ]);
  // Close page
  await page2.close();
  // Click img[alt="\31 0회이상\ 출석시\ 100\ Smile\ Point"]
  const [page3] = await Promise.all([
    page.waitForEvent('popup'),
    // page.waitForNavigation(/*{ url: 'http://eventnet.gmarket.co.kr/Eventplatform/InterResult?eventWinWay=F&isCallback=False&message=PROMOTION_EVENT_TEXT_45&messageCode=F302&openerUrl=http://promotion.gmarket.co.kr/Event/pluszone.asp&winNo=0&lang=KO&resultCode=302&tif=3F1855D115EA986584E579620C87317879075F74B1FF0133B498B65868B2894EDBDAFD1FAABFBB1F094C57E02384B9B1&isCrossDomain=True&ReloadYn=False&isMobile=N&isGlobalMsg=False&appType=P' }*/),
    page.locator('img[alt="\\31 0회이상\\ 출석시\\ 100\\ Smile\\ Point"]').click()
  ]);
  // Close page
  await page3.close();

  const [page4] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('img[alt="\\31 5회이상\\ 출석시\\ 200\\ Smile\\ Point"]').click()
  ]);
  // Close page
  await page4.close();

  const [page5] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('img[alt="한달\\ 모두\\ 출석시\\ 300\\ Smile\\ Point"]').click()
  ]);
  // Close page
  await page5.close();

});
