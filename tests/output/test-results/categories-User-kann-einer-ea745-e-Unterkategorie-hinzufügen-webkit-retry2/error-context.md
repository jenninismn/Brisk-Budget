# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: categories.spec.js >> User kann einer Kategorie eine Unterkategorie hinzufügen
- Location: tests/e2e/categories.spec.js:42:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.category-group').filter({ has: locator('.category-name-text').filter({ hasText: 'Hauptkategorie mit Unterkategorie' }) }).first().locator('.subcategory-name-text').filter({ hasText: 'Neue Unterkategorie' })
Expected: visible
Error: strict mode violation: locator('.category-group').filter({ has: locator('.category-name-text').filter({ hasText: 'Hauptkategorie mit Unterkategorie' }) }).first().locator('.subcategory-name-text').filter({ hasText: 'Neue Unterkategorie' }) resolved to 7 elements:
    1) <span class="subcategory-name-text">Neue Unterkategorie</span> aka getByText('Neue Unterkategorie').first()
    2) <span class="subcategory-name-text">Neue Unterkategorie</span> aka getByText('Neue Unterkategorie').nth(1)
    3) <span class="subcategory-name-text">Neue Unterkategorie</span> aka getByText('Neue Unterkategorie').nth(2)
    4) <span class="subcategory-name-text">Neue Unterkategorie</span> aka getByText('Neue Unterkategorie').nth(3)
    5) <span class="subcategory-name-text">Neue Unterkategorie</span> aka getByText('Neue Unterkategorie').nth(4)
    6) <span class="subcategory-name-text">Neue Unterkategorie</span> aka getByText('Neue Unterkategorie').nth(5)
    7) <span class="subcategory-name-text">Neue Unterkategorie</span> aka locator('div:nth-child(22) > .subcategories-list > div:nth-child(7) > .subcategory-name-text')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.category-group').filter({ has: locator('.category-name-text').filter({ hasText: 'Hauptkategorie mit Unterkategorie' }) }).first().locator('.subcategory-name-text').filter({ hasText: 'Neue Unterkategorie' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - button "Toggle menu" [ref=e4] [cursor=pointer]
      - heading "Brisk Budget" [level=1] [ref=e8]
    - complementary [ref=e9]:
      - button "Close menu" [ref=e11] [cursor=pointer]: ×
      - navigation [ref=e12]:
        - link "Dashboard" [ref=e13]:
          - /url: "#"
          - generic [ref=e14]: Dashboard
        - generic [ref=e15]:
          - generic [ref=e16]:
            - heading "Accounts" [level=2] [ref=e17]
            - generic [ref=e18]:
              - button "Create Group" [ref=e19] [cursor=pointer]:
                - img [ref=e20]
              - button "+" [ref=e22] [cursor=pointer]
          - generic [ref=e23]:
            - generic [ref=e24] [cursor=pointer]:
              - generic [ref=e25]: ⋮⋮
              - generic [ref=e26]:
                - generic [ref=e28]: J
                - generic [ref=e29]: Jenni_1782547322668
              - generic [ref=e30]: £954.50
            - generic [ref=e31] [cursor=pointer]:
              - generic [ref=e32]: ⋮⋮
              - generic [ref=e33]:
                - generic [ref=e35]: J
                - generic [ref=e36]: Jenni_1782547359408
              - generic [ref=e37]: £954.50
      - generic [ref=e38]:
        - button "Recurring" [ref=e39] [cursor=pointer]
        - button "Settings" [ref=e40] [cursor=pointer]
    - main [ref=e41]:
      - generic [ref=e42]:
        - generic [ref=e45]:
          - heading "Welcome back" [level=2] [ref=e46]
          - paragraph [ref=e47]: Here's your financial overview
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]:
              - generic [ref=e51]: Net Worth
              - generic [ref=e52]: £1,909.00
            - generic [ref=e53]:
              - generic [ref=e54]: Cash
              - generic [ref=e55]: £1,909.00
            - generic [ref=e56]:
              - generic [ref=e57]: Savings
              - generic [ref=e58]: £0.00
            - generic [ref=e59]:
              - generic [ref=e60]: Debt
              - generic [ref=e61]: £0.00
          - generic [ref=e62]:
            - generic [ref=e63]:
              - heading "Net Worth" [level=3] [ref=e64]
              - generic [ref=e65]:
                - generic [ref=e66]:
                  - button "1W" [ref=e67] [cursor=pointer]
                  - button "1M" [ref=e68] [cursor=pointer]
                  - button "3M" [ref=e69] [cursor=pointer]
                  - button "6M" [ref=e70] [cursor=pointer]
                  - button "1Y" [ref=e71] [cursor=pointer]
                  - button "5Y" [ref=e72] [cursor=pointer]
                - generic [ref=e73]:
                  - button "Off" [ref=e74] [cursor=pointer]
                  - button "1M" [ref=e75] [cursor=pointer]
                  - button "3M" [ref=e76] [cursor=pointer]
                  - button "6M" [ref=e77] [cursor=pointer]
                  - button "1Y" [ref=e78] [cursor=pointer]
                  - button "5Y" [ref=e79] [cursor=pointer]
            - generic [ref=e80]:
              - button "J Jenni_1782547322668" [ref=e81] [cursor=pointer]:
                - generic [ref=e83]: J
                - generic [ref=e84]: Jenni_1782547322668
              - button "J Jenni_1782547359408" [ref=e85] [cursor=pointer]:
                - generic [ref=e87]: J
                - generic [ref=e88]: Jenni_1782547359408
            - img [ref=e90]:
              - generic [ref=e94]: £0
              - generic [ref=e95]: £500
              - generic [ref=e96]: £1.0K
              - generic [ref=e97]: £1.5K
              - generic [ref=e98]: £2.0K
              - generic [ref=e99]: 27 May
              - generic [ref=e100]: 2 Jun
              - generic [ref=e101]: 8 Jun
              - generic [ref=e102]: 14 Jun
              - generic [ref=e103]: 21 Jun
              - generic [ref=e104]: 27 Jun
          - generic [ref=e109]:
            - generic [ref=e110]:
              - heading "Money Flow by Category" [level=3] [ref=e111]
              - generic [ref=e113]:
                - textbox [ref=e114] [cursor=pointer]: 2026-05-27
                - generic [ref=e115]: to
                - textbox [ref=e116] [cursor=pointer]: 2026-06-27
            - img [ref=e118]:
              - generic [ref=e121]: Cash Flow
              - generic [ref=e123]: Food & Drink
              - generic [ref=e124]: £91.00
              - generic [ref=e125]: "Income: £0.00"
              - generic [ref=e126]: "Deficit: £91.00"
              - generic [ref=e127]: "Expenses: £91.00"
  - generic [ref=e130]:
    - generic [ref=e131]:
      - heading "Settings" [level=3] [ref=e132]
      - button "×" [ref=e133] [cursor=pointer]
    - generic [ref=e134]:
      - navigation [ref=e135]:
        - button "Interface" [ref=e136] [cursor=pointer]
        - button "Categories" [ref=e137] [cursor=pointer]
        - button "Payees" [ref=e138] [cursor=pointer]
        - button "Data" [ref=e139] [cursor=pointer]
      - generic [ref=e142]:
        - generic [ref=e143]:
          - button "+ Add Category" [ref=e144] [cursor=pointer]
          - button "Reset to Defaults" [ref=e145] [cursor=pointer]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - generic [ref=e148]:
              - generic [ref=e149]: ⋮⋮
              - generic [ref=e150] [cursor=pointer]: 🍽️
              - generic [ref=e151]: Food & Drink
              - generic [ref=e152]:
                - button "+" [ref=e153] [cursor=pointer]
                - button "✎" [ref=e154] [cursor=pointer]
                - button "✕" [ref=e155] [cursor=pointer]
            - generic [ref=e156]:
              - generic [ref=e157]:
                - generic [ref=e158]: ⋮⋮
                - generic [ref=e159]: Groceries
                - generic [ref=e160]:
                  - button "✎" [ref=e161] [cursor=pointer]
                  - button "✕" [ref=e162] [cursor=pointer]
              - generic [ref=e163]:
                - generic [ref=e164]: ⋮⋮
                - generic [ref=e165]: Dining Out
                - generic [ref=e166]:
                  - button "✎" [ref=e167] [cursor=pointer]
                  - button "✕" [ref=e168] [cursor=pointer]
              - generic [ref=e169]:
                - generic [ref=e170]: ⋮⋮
                - generic [ref=e171]: Takeaway
                - generic [ref=e172]:
                  - button "✎" [ref=e173] [cursor=pointer]
                  - button "✕" [ref=e174] [cursor=pointer]
              - generic [ref=e175]:
                - generic [ref=e176]: ⋮⋮
                - generic [ref=e177]: Coffee & Snacks
                - generic [ref=e178]:
                  - button "✎" [ref=e179] [cursor=pointer]
                  - button "✕" [ref=e180] [cursor=pointer]
              - generic [ref=e181]:
                - generic [ref=e182]: ⋮⋮
                - generic [ref=e183]: Alcohol & Drinks
                - generic [ref=e184]:
                  - button "✎" [ref=e185] [cursor=pointer]
                  - button "✕" [ref=e186] [cursor=pointer]
          - generic [ref=e187]:
            - generic [ref=e188]:
              - generic [ref=e189]: ⋮⋮
              - generic [ref=e190] [cursor=pointer]: 📄
              - generic [ref=e191]: Bills & Utilities
              - generic [ref=e192]:
                - button "+" [ref=e193] [cursor=pointer]
                - button "✎" [ref=e194] [cursor=pointer]
                - button "✕" [ref=e195] [cursor=pointer]
            - generic [ref=e196]:
              - generic [ref=e197]:
                - generic [ref=e198]: ⋮⋮
                - generic [ref=e199]: Gas & Electric
                - generic [ref=e200]:
                  - button "✎" [ref=e201] [cursor=pointer]
                  - button "✕" [ref=e202] [cursor=pointer]
              - generic [ref=e203]:
                - generic [ref=e204]: ⋮⋮
                - generic [ref=e205]: Water
                - generic [ref=e206]:
                  - button "✎" [ref=e207] [cursor=pointer]
                  - button "✕" [ref=e208] [cursor=pointer]
              - generic [ref=e209]:
                - generic [ref=e210]: ⋮⋮
                - generic [ref=e211]: Council Tax
                - generic [ref=e212]:
                  - button "✎" [ref=e213] [cursor=pointer]
                  - button "✕" [ref=e214] [cursor=pointer]
              - generic [ref=e215]:
                - generic [ref=e216]: ⋮⋮
                - generic [ref=e217]: Internet & Phone
                - generic [ref=e218]:
                  - button "✎" [ref=e219] [cursor=pointer]
                  - button "✕" [ref=e220] [cursor=pointer]
              - generic [ref=e221]:
                - generic [ref=e222]: ⋮⋮
                - generic [ref=e223]: TV Licence
                - generic [ref=e224]:
                  - button "✎" [ref=e225] [cursor=pointer]
                  - button "✕" [ref=e226] [cursor=pointer]
              - generic [ref=e227]:
                - generic [ref=e228]: ⋮⋮
                - generic [ref=e229]: Mobile Phone
                - generic [ref=e230]:
                  - button "✎" [ref=e231] [cursor=pointer]
                  - button "✕" [ref=e232] [cursor=pointer]
          - generic [ref=e233]:
            - generic [ref=e234]:
              - generic [ref=e235]: ⋮⋮
              - generic [ref=e236] [cursor=pointer]: 🏠
              - generic [ref=e237]: Housing
              - generic [ref=e238]:
                - button "+" [ref=e239] [cursor=pointer]
                - button "✎" [ref=e240] [cursor=pointer]
                - button "✕" [ref=e241] [cursor=pointer]
            - generic [ref=e242]:
              - generic [ref=e243]:
                - generic [ref=e244]: ⋮⋮
                - generic [ref=e245]: Rent
                - generic [ref=e246]:
                  - button "✎" [ref=e247] [cursor=pointer]
                  - button "✕" [ref=e248] [cursor=pointer]
              - generic [ref=e249]:
                - generic [ref=e250]: ⋮⋮
                - generic [ref=e251]: Mortgage
                - generic [ref=e252]:
                  - button "✎" [ref=e253] [cursor=pointer]
                  - button "✕" [ref=e254] [cursor=pointer]
              - generic [ref=e255]:
                - generic [ref=e256]: ⋮⋮
                - generic [ref=e257]: Maintenance & Repairs
                - generic [ref=e258]:
                  - button "✎" [ref=e259] [cursor=pointer]
                  - button "✕" [ref=e260] [cursor=pointer]
              - generic [ref=e261]:
                - generic [ref=e262]: ⋮⋮
                - generic [ref=e263]: Furnishings
                - generic [ref=e264]:
                  - button "✎" [ref=e265] [cursor=pointer]
                  - button "✕" [ref=e266] [cursor=pointer]
              - generic [ref=e267]:
                - generic [ref=e268]: ⋮⋮
                - generic [ref=e269]: Garden
                - generic [ref=e270]:
                  - button "✎" [ref=e271] [cursor=pointer]
                  - button "✕" [ref=e272] [cursor=pointer]
          - generic [ref=e273]:
            - generic [ref=e274]:
              - generic [ref=e275]: ⋮⋮
              - generic [ref=e276] [cursor=pointer]: 🚗
              - generic [ref=e277]: Transport
              - generic [ref=e278]:
                - button "+" [ref=e279] [cursor=pointer]
                - button "✎" [ref=e280] [cursor=pointer]
                - button "✕" [ref=e281] [cursor=pointer]
            - generic [ref=e282]:
              - generic [ref=e283]:
                - generic [ref=e284]: ⋮⋮
                - generic [ref=e285]: Fuel
                - generic [ref=e286]:
                  - button "✎" [ref=e287] [cursor=pointer]
                  - button "✕" [ref=e288] [cursor=pointer]
              - generic [ref=e289]:
                - generic [ref=e290]: ⋮⋮
                - generic [ref=e291]: Public Transport
                - generic [ref=e292]:
                  - button "✎" [ref=e293] [cursor=pointer]
                  - button "✕" [ref=e294] [cursor=pointer]
              - generic [ref=e295]:
                - generic [ref=e296]: ⋮⋮
                - generic [ref=e297]: Car Insurance
                - generic [ref=e298]:
                  - button "✎" [ref=e299] [cursor=pointer]
                  - button "✕" [ref=e300] [cursor=pointer]
              - generic [ref=e301]:
                - generic [ref=e302]: ⋮⋮
                - generic [ref=e303]: Car Tax
                - generic [ref=e304]:
                  - button "✎" [ref=e305] [cursor=pointer]
                  - button "✕" [ref=e306] [cursor=pointer]
              - generic [ref=e307]:
                - generic [ref=e308]: ⋮⋮
                - generic [ref=e309]: Parking
                - generic [ref=e310]:
                  - button "✎" [ref=e311] [cursor=pointer]
                  - button "✕" [ref=e312] [cursor=pointer]
              - generic [ref=e313]:
                - generic [ref=e314]: ⋮⋮
                - generic [ref=e315]: Car Maintenance
                - generic [ref=e316]:
                  - button "✎" [ref=e317] [cursor=pointer]
                  - button "✕" [ref=e318] [cursor=pointer]
              - generic [ref=e319]:
                - generic [ref=e320]: ⋮⋮
                - generic [ref=e321]: Taxi & Uber
                - generic [ref=e322]:
                  - button "✎" [ref=e323] [cursor=pointer]
                  - button "✕" [ref=e324] [cursor=pointer]
          - generic [ref=e325]:
            - generic [ref=e326]:
              - generic [ref=e327]: ⋮⋮
              - generic [ref=e328] [cursor=pointer]: 🛍️
              - generic [ref=e329]: Shopping
              - generic [ref=e330]:
                - button "+" [ref=e331] [cursor=pointer]
                - button "✎" [ref=e332] [cursor=pointer]
                - button "✕" [ref=e333] [cursor=pointer]
            - generic [ref=e334]:
              - generic [ref=e335]:
                - generic [ref=e336]: ⋮⋮
                - generic [ref=e337]: Clothing
                - generic [ref=e338]:
                  - button "✎" [ref=e339] [cursor=pointer]
                  - button "✕" [ref=e340] [cursor=pointer]
              - generic [ref=e341]:
                - generic [ref=e342]: ⋮⋮
                - generic [ref=e343]: Electronics
                - generic [ref=e344]:
                  - button "✎" [ref=e345] [cursor=pointer]
                  - button "✕" [ref=e346] [cursor=pointer]
              - generic [ref=e347]:
                - generic [ref=e348]: ⋮⋮
                - generic [ref=e349]: Household Items
                - generic [ref=e350]:
                  - button "✎" [ref=e351] [cursor=pointer]
                  - button "✕" [ref=e352] [cursor=pointer]
              - generic [ref=e353]:
                - generic [ref=e354]: ⋮⋮
                - generic [ref=e355]: Gifts
                - generic [ref=e356]:
                  - button "✎" [ref=e357] [cursor=pointer]
                  - button "✕" [ref=e358] [cursor=pointer]
              - generic [ref=e359]:
                - generic [ref=e360]: ⋮⋮
                - generic [ref=e361]: Online Shopping
                - generic [ref=e362]:
                  - button "✎" [ref=e363] [cursor=pointer]
                  - button "✕" [ref=e364] [cursor=pointer]
          - generic [ref=e365]:
            - generic [ref=e366]:
              - generic [ref=e367]: ⋮⋮
              - generic [ref=e368] [cursor=pointer]: 🎬
              - generic [ref=e369]: Entertainment
              - generic [ref=e370]:
                - button "+" [ref=e371] [cursor=pointer]
                - button "✎" [ref=e372] [cursor=pointer]
                - button "✕" [ref=e373] [cursor=pointer]
            - generic [ref=e374]:
              - generic [ref=e375]:
                - generic [ref=e376]: ⋮⋮
                - generic [ref=e377]: Streaming Services
                - generic [ref=e378]:
                  - button "✎" [ref=e379] [cursor=pointer]
                  - button "✕" [ref=e380] [cursor=pointer]
              - generic [ref=e381]:
                - generic [ref=e382]: ⋮⋮
                - generic [ref=e383]: Cinema & Theatre
                - generic [ref=e384]:
                  - button "✎" [ref=e385] [cursor=pointer]
                  - button "✕" [ref=e386] [cursor=pointer]
              - generic [ref=e387]:
                - generic [ref=e388]: ⋮⋮
                - generic [ref=e389]: Games & Apps
                - generic [ref=e390]:
                  - button "✎" [ref=e391] [cursor=pointer]
                  - button "✕" [ref=e392] [cursor=pointer]
              - generic [ref=e393]:
                - generic [ref=e394]: ⋮⋮
                - generic [ref=e395]: Music & Concerts
                - generic [ref=e396]:
                  - button "✎" [ref=e397] [cursor=pointer]
                  - button "✕" [ref=e398] [cursor=pointer]
              - generic [ref=e399]:
                - generic [ref=e400]: ⋮⋮
                - generic [ref=e401]: Hobbies
                - generic [ref=e402]:
                  - button "✎" [ref=e403] [cursor=pointer]
                  - button "✕" [ref=e404] [cursor=pointer]
              - generic [ref=e405]:
                - generic [ref=e406]: ⋮⋮
                - generic [ref=e407]: Books & Magazines
                - generic [ref=e408]:
                  - button "✎" [ref=e409] [cursor=pointer]
                  - button "✕" [ref=e410] [cursor=pointer]
          - generic [ref=e411]:
            - generic [ref=e412]:
              - generic [ref=e413]: ⋮⋮
              - generic [ref=e414] [cursor=pointer]: 💊
              - generic [ref=e415]: Health & Wellbeing
              - generic [ref=e416]:
                - button "+" [ref=e417] [cursor=pointer]
                - button "✎" [ref=e418] [cursor=pointer]
                - button "✕" [ref=e419] [cursor=pointer]
            - generic [ref=e420]:
              - generic [ref=e421]:
                - generic [ref=e422]: ⋮⋮
                - generic [ref=e423]: Pharmacy
                - generic [ref=e424]:
                  - button "✎" [ref=e425] [cursor=pointer]
                  - button "✕" [ref=e426] [cursor=pointer]
              - generic [ref=e427]:
                - generic [ref=e428]: ⋮⋮
                - generic [ref=e429]: Gym & Fitness
                - generic [ref=e430]:
                  - button "✎" [ref=e431] [cursor=pointer]
                  - button "✕" [ref=e432] [cursor=pointer]
              - generic [ref=e433]:
                - generic [ref=e434]: ⋮⋮
                - generic [ref=e435]: Dentist
                - generic [ref=e436]:
                  - button "✎" [ref=e437] [cursor=pointer]
                  - button "✕" [ref=e438] [cursor=pointer]
              - generic [ref=e439]:
                - generic [ref=e440]: ⋮⋮
                - generic [ref=e441]: Optician
                - generic [ref=e442]:
                  - button "✎" [ref=e443] [cursor=pointer]
                  - button "✕" [ref=e444] [cursor=pointer]
              - generic [ref=e445]:
                - generic [ref=e446]: ⋮⋮
                - generic [ref=e447]: Private Healthcare
                - generic [ref=e448]:
                  - button "✎" [ref=e449] [cursor=pointer]
                  - button "✕" [ref=e450] [cursor=pointer]
              - generic [ref=e451]:
                - generic [ref=e452]: ⋮⋮
                - generic [ref=e453]: Beauty & Personal Care
                - generic [ref=e454]:
                  - button "✎" [ref=e455] [cursor=pointer]
                  - button "✕" [ref=e456] [cursor=pointer]
          - generic [ref=e457]:
            - generic [ref=e458]:
              - generic [ref=e459]: ⋮⋮
              - generic [ref=e460] [cursor=pointer]: 🛡️
              - generic [ref=e461]: Insurance
              - generic [ref=e462]:
                - button "+" [ref=e463] [cursor=pointer]
                - button "✎" [ref=e464] [cursor=pointer]
                - button "✕" [ref=e465] [cursor=pointer]
            - generic [ref=e466]:
              - generic [ref=e467]:
                - generic [ref=e468]: ⋮⋮
                - generic [ref=e469]: Home Insurance
                - generic [ref=e470]:
                  - button "✎" [ref=e471] [cursor=pointer]
                  - button "✕" [ref=e472] [cursor=pointer]
              - generic [ref=e473]:
                - generic [ref=e474]: ⋮⋮
                - generic [ref=e475]: Life Insurance
                - generic [ref=e476]:
                  - button "✎" [ref=e477] [cursor=pointer]
                  - button "✕" [ref=e478] [cursor=pointer]
              - generic [ref=e479]:
                - generic [ref=e480]: ⋮⋮
                - generic [ref=e481]: Pet Insurance
                - generic [ref=e482]:
                  - button "✎" [ref=e483] [cursor=pointer]
                  - button "✕" [ref=e484] [cursor=pointer]
              - generic [ref=e485]:
                - generic [ref=e486]: ⋮⋮
                - generic [ref=e487]: Travel Insurance
                - generic [ref=e488]:
                  - button "✎" [ref=e489] [cursor=pointer]
                  - button "✕" [ref=e490] [cursor=pointer]
              - generic [ref=e491]:
                - generic [ref=e492]: ⋮⋮
                - generic [ref=e493]: Health Insurance
                - generic [ref=e494]:
                  - button "✎" [ref=e495] [cursor=pointer]
                  - button "✕" [ref=e496] [cursor=pointer]
          - generic [ref=e497]:
            - generic [ref=e498]:
              - generic [ref=e499]: ⋮⋮
              - generic [ref=e500] [cursor=pointer]: ✈️
              - generic [ref=e501]: Travel & Holidays
              - generic [ref=e502]:
                - button "+" [ref=e503] [cursor=pointer]
                - button "✎" [ref=e504] [cursor=pointer]
                - button "✕" [ref=e505] [cursor=pointer]
            - generic [ref=e506]:
              - generic [ref=e507]:
                - generic [ref=e508]: ⋮⋮
                - generic [ref=e509]: Flights
                - generic [ref=e510]:
                  - button "✎" [ref=e511] [cursor=pointer]
                  - button "✕" [ref=e512] [cursor=pointer]
              - generic [ref=e513]:
                - generic [ref=e514]: ⋮⋮
                - generic [ref=e515]: Hotels & Accommodation
                - generic [ref=e516]:
                  - button "✎" [ref=e517] [cursor=pointer]
                  - button "✕" [ref=e518] [cursor=pointer]
              - generic [ref=e519]:
                - generic [ref=e520]: ⋮⋮
                - generic [ref=e521]: Activities & Tours
                - generic [ref=e522]:
                  - button "✎" [ref=e523] [cursor=pointer]
                  - button "✕" [ref=e524] [cursor=pointer]
              - generic [ref=e525]:
                - generic [ref=e526]: ⋮⋮
                - generic [ref=e527]: Holiday Food & Drink
                - generic [ref=e528]:
                  - button "✎" [ref=e529] [cursor=pointer]
                  - button "✕" [ref=e530] [cursor=pointer]
          - generic [ref=e531]:
            - generic [ref=e532]:
              - generic [ref=e533]: ⋮⋮
              - generic [ref=e534] [cursor=pointer]: 👶
              - generic [ref=e535]: Children
              - generic [ref=e536]:
                - button "+" [ref=e537] [cursor=pointer]
                - button "✎" [ref=e538] [cursor=pointer]
                - button "✕" [ref=e539] [cursor=pointer]
            - generic [ref=e540]:
              - generic [ref=e541]:
                - generic [ref=e542]: ⋮⋮
                - generic [ref=e543]: Childcare
                - generic [ref=e544]:
                  - button "✎" [ref=e545] [cursor=pointer]
                  - button "✕" [ref=e546] [cursor=pointer]
              - generic [ref=e547]:
                - generic [ref=e548]: ⋮⋮
                - generic [ref=e549]: School Fees & Supplies
                - generic [ref=e550]:
                  - button "✎" [ref=e551] [cursor=pointer]
                  - button "✕" [ref=e552] [cursor=pointer]
              - generic [ref=e553]:
                - generic [ref=e554]: ⋮⋮
                - generic [ref=e555]: Activities & Clubs
                - generic [ref=e556]:
                  - button "✎" [ref=e557] [cursor=pointer]
                  - button "✕" [ref=e558] [cursor=pointer]
              - generic [ref=e559]:
                - generic [ref=e560]: ⋮⋮
                - generic [ref=e561]: Children Clothing
                - generic [ref=e562]:
                  - button "✎" [ref=e563] [cursor=pointer]
                  - button "✕" [ref=e564] [cursor=pointer]
              - generic [ref=e565]:
                - generic [ref=e566]: ⋮⋮
                - generic [ref=e567]: Toys & Games
                - generic [ref=e568]:
                  - button "✎" [ref=e569] [cursor=pointer]
                  - button "✕" [ref=e570] [cursor=pointer]
          - generic [ref=e571]:
            - generic [ref=e572]:
              - generic [ref=e573]: ⋮⋮
              - generic [ref=e574] [cursor=pointer]: 🐾
              - generic [ref=e575]: Pets
              - generic [ref=e576]:
                - button "+" [ref=e577] [cursor=pointer]
                - button "✎" [ref=e578] [cursor=pointer]
                - button "✕" [ref=e579] [cursor=pointer]
            - generic [ref=e580]:
              - generic [ref=e581]:
                - generic [ref=e582]: ⋮⋮
                - generic [ref=e583]: Pet Food
                - generic [ref=e584]:
                  - button "✎" [ref=e585] [cursor=pointer]
                  - button "✕" [ref=e586] [cursor=pointer]
              - generic [ref=e587]:
                - generic [ref=e588]: ⋮⋮
                - generic [ref=e589]: Vet Bills
                - generic [ref=e590]:
                  - button "✎" [ref=e591] [cursor=pointer]
                  - button "✕" [ref=e592] [cursor=pointer]
              - generic [ref=e593]:
                - generic [ref=e594]: ⋮⋮
                - generic [ref=e595]: Pet Supplies
                - generic [ref=e596]:
                  - button "✎" [ref=e597] [cursor=pointer]
                  - button "✕" [ref=e598] [cursor=pointer]
              - generic [ref=e599]:
                - generic [ref=e600]: ⋮⋮
                - generic [ref=e601]: Grooming
                - generic [ref=e602]:
                  - button "✎" [ref=e603] [cursor=pointer]
                  - button "✕" [ref=e604] [cursor=pointer]
          - generic [ref=e605]:
            - generic [ref=e606]:
              - generic [ref=e607]: ⋮⋮
              - generic [ref=e608] [cursor=pointer]: 💰
              - generic [ref=e609]: Income
              - generic [ref=e610]:
                - button "+" [ref=e611] [cursor=pointer]
                - button "✎" [ref=e612] [cursor=pointer]
                - button "✕" [ref=e613] [cursor=pointer]
            - generic [ref=e614]:
              - generic [ref=e615]:
                - generic [ref=e616]: ⋮⋮
                - generic [ref=e617]: Salary
                - generic [ref=e618]:
                  - button "✎" [ref=e619] [cursor=pointer]
                  - button "✕" [ref=e620] [cursor=pointer]
              - generic [ref=e621]:
                - generic [ref=e622]: ⋮⋮
                - generic [ref=e623]: Benefits
                - generic [ref=e624]:
                  - button "✎" [ref=e625] [cursor=pointer]
                  - button "✕" [ref=e626] [cursor=pointer]
              - generic [ref=e627]:
                - generic [ref=e628]: ⋮⋮
                - generic [ref=e629]: Interest
                - generic [ref=e630]:
                  - button "✎" [ref=e631] [cursor=pointer]
                  - button "✕" [ref=e632] [cursor=pointer]
              - generic [ref=e633]:
                - generic [ref=e634]: ⋮⋮
                - generic [ref=e635]: Refunds
                - generic [ref=e636]:
                  - button "✎" [ref=e637] [cursor=pointer]
                  - button "✕" [ref=e638] [cursor=pointer]
              - generic [ref=e639]:
                - generic [ref=e640]: ⋮⋮
                - generic [ref=e641]: Side Income
                - generic [ref=e642]:
                  - button "✎" [ref=e643] [cursor=pointer]
                  - button "✕" [ref=e644] [cursor=pointer]
              - generic [ref=e645]:
                - generic [ref=e646]: ⋮⋮
                - generic [ref=e647]: Gifts Received
                - generic [ref=e648]:
                  - button "✎" [ref=e649] [cursor=pointer]
                  - button "✕" [ref=e650] [cursor=pointer]
          - generic [ref=e651]:
            - generic [ref=e652]:
              - generic [ref=e653]: ⋮⋮
              - generic [ref=e654] [cursor=pointer]: 📈
              - generic [ref=e655]: Savings & Investments
              - generic [ref=e656]:
                - button "+" [ref=e657] [cursor=pointer]
                - button "✎" [ref=e658] [cursor=pointer]
                - button "✕" [ref=e659] [cursor=pointer]
            - generic [ref=e660]:
              - generic [ref=e661]:
                - generic [ref=e662]: ⋮⋮
                - generic [ref=e663]: Savings
                - generic [ref=e664]:
                  - button "✎" [ref=e665] [cursor=pointer]
                  - button "✕" [ref=e666] [cursor=pointer]
              - generic [ref=e667]:
                - generic [ref=e668]: ⋮⋮
                - generic [ref=e669]: ISA
                - generic [ref=e670]:
                  - button "✎" [ref=e671] [cursor=pointer]
                  - button "✕" [ref=e672] [cursor=pointer]
              - generic [ref=e673]:
                - generic [ref=e674]: ⋮⋮
                - generic [ref=e675]: Pension
                - generic [ref=e676]:
                  - button "✎" [ref=e677] [cursor=pointer]
                  - button "✕" [ref=e678] [cursor=pointer]
              - generic [ref=e679]:
                - generic [ref=e680]: ⋮⋮
                - generic [ref=e681]: Investments
                - generic [ref=e682]:
                  - button "✎" [ref=e683] [cursor=pointer]
                  - button "✕" [ref=e684] [cursor=pointer]
          - generic [ref=e685]:
            - generic [ref=e686]:
              - generic [ref=e687]: ⋮⋮
              - generic [ref=e688] [cursor=pointer]: 💳
              - generic [ref=e689]: Fees & Charges
              - generic [ref=e690]:
                - button "+" [ref=e691] [cursor=pointer]
                - button "✎" [ref=e692] [cursor=pointer]
                - button "✕" [ref=e693] [cursor=pointer]
            - generic [ref=e694]:
              - generic [ref=e695]:
                - generic [ref=e696]: ⋮⋮
                - generic [ref=e697]: Bank Fees
                - generic [ref=e698]:
                  - button "✎" [ref=e699] [cursor=pointer]
                  - button "✕" [ref=e700] [cursor=pointer]
              - generic [ref=e701]:
                - generic [ref=e702]: ⋮⋮
                - generic [ref=e703]: Credit Card Fees
                - generic [ref=e704]:
                  - button "✎" [ref=e705] [cursor=pointer]
                  - button "✕" [ref=e706] [cursor=pointer]
              - generic [ref=e707]:
                - generic [ref=e708]: ⋮⋮
                - generic [ref=e709]: ATM Fees
                - generic [ref=e710]:
                  - button "✎" [ref=e711] [cursor=pointer]
                  - button "✕" [ref=e712] [cursor=pointer]
              - generic [ref=e713]:
                - generic [ref=e714]: ⋮⋮
                - generic [ref=e715]: Late Payment Fees
                - generic [ref=e716]:
                  - button "✎" [ref=e717] [cursor=pointer]
                  - button "✕" [ref=e718] [cursor=pointer]
          - generic [ref=e719]:
            - generic [ref=e720]:
              - generic [ref=e721]: ⋮⋮
              - generic [ref=e722] [cursor=pointer]: 🔄
              - generic [ref=e723]: Subscriptions
              - generic [ref=e724]:
                - button "+" [ref=e725] [cursor=pointer]
                - button "✎" [ref=e726] [cursor=pointer]
                - button "✕" [ref=e727] [cursor=pointer]
            - generic [ref=e728]:
              - generic [ref=e729]:
                - generic [ref=e730]: ⋮⋮
                - generic [ref=e731]: Software & Apps
                - generic [ref=e732]:
                  - button "✎" [ref=e733] [cursor=pointer]
                  - button "✕" [ref=e734] [cursor=pointer]
              - generic [ref=e735]:
                - generic [ref=e736]: ⋮⋮
                - generic [ref=e737]: Memberships
                - generic [ref=e738]:
                  - button "✎" [ref=e739] [cursor=pointer]
                  - button "✕" [ref=e740] [cursor=pointer]
              - generic [ref=e741]:
                - generic [ref=e742]: ⋮⋮
                - generic [ref=e743]: News & Publications
                - generic [ref=e744]:
                  - button "✎" [ref=e745] [cursor=pointer]
                  - button "✕" [ref=e746] [cursor=pointer]
              - generic [ref=e747]:
                - generic [ref=e748]: ⋮⋮
                - generic [ref=e749]: Other Subscriptions
                - generic [ref=e750]:
                  - button "✎" [ref=e751] [cursor=pointer]
                  - button "✕" [ref=e752] [cursor=pointer]
          - generic [ref=e753]:
            - generic [ref=e754]:
              - generic [ref=e755]: ⋮⋮
              - generic [ref=e756] [cursor=pointer]: 📚
              - generic [ref=e757]: Education
              - generic [ref=e758]:
                - button "+" [ref=e759] [cursor=pointer]
                - button "✎" [ref=e760] [cursor=pointer]
                - button "✕" [ref=e761] [cursor=pointer]
            - generic [ref=e762]:
              - generic [ref=e763]:
                - generic [ref=e764]: ⋮⋮
                - generic [ref=e765]: Courses
                - generic [ref=e766]:
                  - button "✎" [ref=e767] [cursor=pointer]
                  - button "✕" [ref=e768] [cursor=pointer]
              - generic [ref=e769]:
                - generic [ref=e770]: ⋮⋮
                - generic [ref=e771]: Books & Materials
                - generic [ref=e772]:
                  - button "✎" [ref=e773] [cursor=pointer]
                  - button "✕" [ref=e774] [cursor=pointer]
              - generic [ref=e775]:
                - generic [ref=e776]: ⋮⋮
                - generic [ref=e777]: Tuition Fees
                - generic [ref=e778]:
                  - button "✎" [ref=e779] [cursor=pointer]
                  - button "✕" [ref=e780] [cursor=pointer]
          - generic [ref=e781]:
            - generic [ref=e782]:
              - generic [ref=e783]: ⋮⋮
              - generic [ref=e784] [cursor=pointer]: ❤️
              - generic [ref=e785]: Charity & Donations
              - generic [ref=e786]:
                - button "+" [ref=e787] [cursor=pointer]
                - button "✎" [ref=e788] [cursor=pointer]
                - button "✕" [ref=e789] [cursor=pointer]
            - generic [ref=e790]:
              - generic [ref=e791]:
                - generic [ref=e792]: ⋮⋮
                - generic [ref=e793]: Charity Donations
                - generic [ref=e794]:
                  - button "✎" [ref=e795] [cursor=pointer]
                  - button "✕" [ref=e796] [cursor=pointer]
              - generic [ref=e797]:
                - generic [ref=e798]: ⋮⋮
                - generic [ref=e799]: Fundraising
                - generic [ref=e800]:
                  - button "✎" [ref=e801] [cursor=pointer]
                  - button "✕" [ref=e802] [cursor=pointer]
              - generic [ref=e803]:
                - generic [ref=e804]: ⋮⋮
                - generic [ref=e805]: Religious Donations
                - generic [ref=e806]:
                  - button "✎" [ref=e807] [cursor=pointer]
                  - button "✕" [ref=e808] [cursor=pointer]
          - generic [ref=e810]:
            - generic [ref=e811] [cursor=pointer]: ↔️
            - generic [ref=e812]: Transfer
            - generic [ref=e813]: System
          - generic [ref=e815]:
            - generic [ref=e816] [cursor=pointer]: ❓
            - generic [ref=e817]: Uncategorized
            - generic [ref=e818]: System
          - generic [ref=e820]:
            - generic [ref=e821]: ⋮⋮
            - generic [ref=e822] [cursor=pointer]: 🎓
            - generic [ref=e823]: Uni Projekt
            - generic [ref=e824]:
              - button "+" [ref=e825] [cursor=pointer]
              - button "✎" [ref=e826] [cursor=pointer]
              - button "✕" [ref=e827] [cursor=pointer]
          - generic [ref=e829]:
            - generic [ref=e830]: ⋮⋮
            - generic [ref=e831] [cursor=pointer]: ✏️
            - generic [ref=e832]: Bearbeitete Kategorie
            - generic [ref=e833]:
              - button "+" [ref=e834] [cursor=pointer]
              - button "✎" [ref=e835] [cursor=pointer]
              - button "✕" [ref=e836] [cursor=pointer]
          - generic [ref=e837]:
            - generic [ref=e838]:
              - generic [ref=e839]: ⋮⋮
              - generic [ref=e840] [cursor=pointer]: 📚
              - generic [ref=e841]: Hauptkategorie mit Unterkategorie
              - generic [ref=e842]:
                - button "+" [ref=e843] [cursor=pointer]
                - button "✎" [ref=e844] [cursor=pointer]
                - button "✕" [ref=e845] [cursor=pointer]
            - generic [ref=e846]:
              - generic [ref=e847]:
                - generic [ref=e848]: ⋮⋮
                - generic [ref=e849]: Neue Unterkategorie
                - generic [ref=e850]:
                  - button "✎" [ref=e851] [cursor=pointer]
                  - button "✕" [ref=e852] [cursor=pointer]
              - generic [ref=e853]:
                - generic [ref=e854]: ⋮⋮
                - generic [ref=e855]: Neue Unterkategorie
                - generic [ref=e856]:
                  - button "✎" [ref=e857] [cursor=pointer]
                  - button "✕" [ref=e858] [cursor=pointer]
              - generic [ref=e859]:
                - generic [ref=e860]: ⋮⋮
                - generic [ref=e861]: Neue Unterkategorie
                - generic [ref=e862]:
                  - button "✎" [ref=e863] [cursor=pointer]
                  - button "✕" [ref=e864] [cursor=pointer]
              - generic [ref=e865]:
                - generic [ref=e866]: ⋮⋮
                - generic [ref=e867]: Neue Unterkategorie
                - generic [ref=e868]:
                  - button "✎" [ref=e869] [cursor=pointer]
                  - button "✕" [ref=e870] [cursor=pointer]
              - generic [ref=e871]:
                - generic [ref=e872]: ⋮⋮
                - generic [ref=e873]: Neue Unterkategorie
                - generic [ref=e874]:
                  - button "✎" [ref=e875] [cursor=pointer]
                  - button "✕" [ref=e876] [cursor=pointer]
              - generic [ref=e877]:
                - generic [ref=e878]: ⋮⋮
                - generic [ref=e879]: Neue Unterkategorie
                - generic [ref=e880]:
                  - button "✎" [ref=e881] [cursor=pointer]
                  - button "✕" [ref=e882] [cursor=pointer]
              - generic [ref=e883]:
                - generic [ref=e884]: ⋮⋮
                - generic [ref=e885]: Neue Unterkategorie
                - generic [ref=e886]:
                  - button "✎" [ref=e887] [cursor=pointer]
                  - button "✕" [ref=e888] [cursor=pointer]
          - generic [ref=e890]:
            - generic [ref=e891]: ⋮⋮
            - generic [ref=e892] [cursor=pointer]: 🎓
            - generic [ref=e893]: Uni Projekt
            - generic [ref=e894]:
              - button "+" [ref=e895] [cursor=pointer]
              - button "✎" [ref=e896] [cursor=pointer]
              - button "✕" [ref=e897] [cursor=pointer]
          - generic [ref=e899]:
            - generic [ref=e900]: ⋮⋮
            - generic [ref=e901] [cursor=pointer]: ✏️
            - generic [ref=e902]: Bearbeitete Kategorie
            - generic [ref=e903]:
              - button "+" [ref=e904] [cursor=pointer]
              - button "✎" [ref=e905] [cursor=pointer]
              - button "✕" [ref=e906] [cursor=pointer]
          - generic [ref=e908]:
            - generic [ref=e909]: ⋮⋮
            - generic [ref=e910] [cursor=pointer]: 📚
            - generic [ref=e911]: Hauptkategorie mit Unterkategorie
            - generic [ref=e912]:
              - button "+" [ref=e913] [cursor=pointer]
              - button "✎" [ref=e914] [cursor=pointer]
              - button "✕" [ref=e915] [cursor=pointer]
          - generic [ref=e917]:
            - generic [ref=e918]: ⋮⋮
            - generic [ref=e919] [cursor=pointer]: 📚
            - generic [ref=e920]: Hauptkategorie mit Unterkategorie
            - generic [ref=e921]:
              - button "+" [ref=e922] [cursor=pointer]
              - button "✎" [ref=e923] [cursor=pointer]
              - button "✕" [ref=e924] [cursor=pointer]
          - generic [ref=e926]:
            - generic [ref=e927]: ⋮⋮
            - generic [ref=e928] [cursor=pointer]: 📚
            - generic [ref=e929]: Hauptkategorie mit Unterkategorie
            - generic [ref=e930]:
              - button "+" [ref=e931] [cursor=pointer]
              - button "✎" [ref=e932] [cursor=pointer]
              - button "✕" [ref=e933] [cursor=pointer]
          - generic [ref=e935]:
            - generic [ref=e936]: ⋮⋮
            - generic [ref=e937] [cursor=pointer]: 🎓
            - generic [ref=e938]: Uni Projekt
            - generic [ref=e939]:
              - button "+" [ref=e940] [cursor=pointer]
              - button "✎" [ref=e941] [cursor=pointer]
              - button "✕" [ref=e942] [cursor=pointer]
          - generic [ref=e944]:
            - generic [ref=e945]: ⋮⋮
            - generic [ref=e946] [cursor=pointer]: ✏️
            - generic [ref=e947]: Bearbeitete Kategorie
            - generic [ref=e948]:
              - button "+" [ref=e949] [cursor=pointer]
              - button "✎" [ref=e950] [cursor=pointer]
              - button "✕" [ref=e951] [cursor=pointer]
          - generic [ref=e953]:
            - generic [ref=e954]: ⋮⋮
            - generic [ref=e955] [cursor=pointer]: 📚
            - generic [ref=e956]: Hauptkategorie mit Unterkategorie
            - generic [ref=e957]:
              - button "+" [ref=e958] [cursor=pointer]
              - button "✎" [ref=e959] [cursor=pointer]
              - button "✕" [ref=e960] [cursor=pointer]
          - generic [ref=e962]:
            - generic [ref=e963]: ⋮⋮
            - generic [ref=e964] [cursor=pointer]: 📚
            - generic [ref=e965]: Hauptkategorie mit Unterkategorie
            - generic [ref=e966]:
              - button "+" [ref=e967] [cursor=pointer]
              - button "✎" [ref=e968] [cursor=pointer]
              - button "✕" [ref=e969] [cursor=pointer]
          - generic [ref=e971]:
            - generic [ref=e972]: ⋮⋮
            - generic [ref=e973] [cursor=pointer]: 📚
            - generic [ref=e974]: Hauptkategorie mit Unterkategorie
            - generic [ref=e975]:
              - button "+" [ref=e976] [cursor=pointer]
              - button "✎" [ref=e977] [cursor=pointer]
              - button "✕" [ref=e978] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class CategoryPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.addCategoryBtn = this.page.locator('#addCategoryBtn');
  7  |     this.modal = this.page.locator('#categoryEditModal');
  8  |     this.nameInput = this.page.locator('#categoryEditName');
  9  |     this.emojiInput = this.page.locator('#categoryEditEmoji');
  10 |     this.saveButton = this.page.getByRole('button', { name: /save|speichern/i });
  11 |   }
  12 | 
  13 |   async addCategory(name, emoji) {
  14 |     const responsePromise = this.page.waitForResponse(response => 
  15 |       response.url().includes('/categories') && response.request().method() === 'POST'
  16 |     );  
  17 | 
  18 |     await this.addCategoryBtn.click();
  19 |     await expect(this.modal).toBeVisible(); 
  20 |     await this.nameInput.fill(name);
  21 |     await this.emojiInput.fill(emoji);
  22 |     await this.saveButton.click();
  23 | 
  24 |     const response = await responsePromise;
  25 | 
  26 |     expect(response.status()).toBe(201);
  27 |     expect(response.ok()).toBeTruthy();
  28 | 
  29 |     return response;
  30 |   }
  31 | 
  32 |   async expectCategoryExists(name) {
  33 |     const category = this.page.locator('.category-name-text', {
  34 |       hasText: name
  35 |     }).first();
  36 | 
  37 |     await expect(category).toBeVisible();
  38 |   }
  39 | 
  40 |   getCategoryGroup(name) {
  41 |     return this.page.locator('.category-group').filter({
  42 |       has: this.page.locator('.category-name-text', { hasText: name })
  43 |     }).first();
  44 |   }
  45 | 
  46 |   async editCategory(currentName, newName, newEmoji) {
  47 |     const categoryGroup = this.getCategoryGroup(currentName);
  48 |     const responsePromise = this.page.waitForResponse(response =>
  49 |       response.url().includes('/api/categories/') &&
  50 |       response.request().method() === 'PUT'
  51 |     );
  52 | 
  53 |     await categoryGroup.locator('.category-header .btn-edit').click();
  54 |     await expect(this.modal).toBeVisible();
  55 |     await this.nameInput.fill(newName);
  56 |     await this.emojiInput.fill(newEmoji);
  57 |     await this.saveButton.click();
  58 | 
  59 |     return responsePromise;
  60 |   }
  61 | 
  62 |   async addSubcategory(categoryName, subcategoryName) {
  63 |     const categoryGroup = this.getCategoryGroup(categoryName);
  64 |     const responsePromise = this.page.waitForResponse(response =>
  65 |       response.url().includes('/subcategories') &&
  66 |       response.request().method() === 'POST'
  67 |     );
  68 | 
  69 |     await categoryGroup.locator('.category-header .btn-add-sub').click();
  70 |     await expect(this.modal).toBeVisible();
  71 |     await this.nameInput.fill(subcategoryName);
  72 |     await this.saveButton.click();
  73 | 
  74 |     return responsePromise;
  75 |   }
  76 | 
  77 |   async expectSubcategoryExists(categoryName, subcategoryName) {
  78 |     const categoryGroup = this.getCategoryGroup(categoryName);
  79 |     await expect(
  80 |       categoryGroup.locator('.subcategory-name-text', {
  81 |         hasText: subcategoryName
  82 |       })
> 83 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  84 |   }
  85 | }
  86 | 
```