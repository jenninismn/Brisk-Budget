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
Error: strict mode violation: locator('.category-group').filter({ has: locator('.category-name-text').filter({ hasText: 'Hauptkategorie mit Unterkategorie' }) }).first().locator('.subcategory-name-text').filter({ hasText: 'Neue Unterkategorie' }) resolved to 2 elements:
    1) <span class="subcategory-name-text">Neue Unterkategorie</span> aka getByText('Neue Unterkategorie').first()
    2) <span class="subcategory-name-text">Neue Unterkategorie</span> aka getByText('Neue Unterkategorie').nth(1)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.category-group').filter({ has: locator('.category-name-text').filter({ hasText: 'Hauptkategorie mit Unterkategorie' }) }).first().locator('.subcategory-name-text').filter({ hasText: 'Neue Unterkategorie' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - button "Toggle menu" [ref=e4] [cursor=pointer]
      - heading "Brisk Budget" [level=1] [ref=e8]
    - complementary [ref=e9]:
      - button "Close menu" [ref=e11] [cursor=pointer]: ×
      - navigation [ref=e12]:
        - link "Dashboard" [ref=e13] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e14]: Dashboard
        - generic [ref=e15]:
          - generic [ref=e16]:
            - heading "Accounts" [level=2] [ref=e17]
            - generic [ref=e18]:
              - button "Create Group" [ref=e19] [cursor=pointer]:
                - img [ref=e20]
              - button "+" [ref=e22] [cursor=pointer]
          - generic [ref=e24] [cursor=pointer]:
            - generic [ref=e25]: ⋮⋮
            - generic [ref=e26]:
              - generic [ref=e28]: J
              - generic [ref=e29]: Jenni_1782547322668
            - generic [ref=e30]: £954.50
      - generic [ref=e31]:
        - button "Recurring" [ref=e32] [cursor=pointer]
        - button "Settings" [ref=e33] [cursor=pointer]
    - main [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e38]:
          - heading "Welcome back" [level=2] [ref=e39]
          - paragraph [ref=e40]: Here's your financial overview
        - generic [ref=e41]:
          - generic [ref=e42]:
            - generic [ref=e43]:
              - generic [ref=e44]: Net Worth
              - generic [ref=e45]: £954.50
            - generic [ref=e46]:
              - generic [ref=e47]: Cash
              - generic [ref=e48]: £954.50
            - generic [ref=e49]:
              - generic [ref=e50]: Savings
              - generic [ref=e51]: £0.00
            - generic [ref=e52]:
              - generic [ref=e53]: Debt
              - generic [ref=e54]: £0.00
          - generic [ref=e55]:
            - generic [ref=e56]:
              - heading "Net Worth" [level=3] [ref=e57]
              - generic [ref=e58]:
                - generic [ref=e59]:
                  - button "1W" [ref=e60] [cursor=pointer]
                  - button "1M" [ref=e61] [cursor=pointer]
                  - button "3M" [ref=e62] [cursor=pointer]
                  - button "6M" [ref=e63] [cursor=pointer]
                  - button "1Y" [ref=e64] [cursor=pointer]
                  - button "5Y" [ref=e65] [cursor=pointer]
                - generic [ref=e66]:
                  - button "Off" [ref=e67] [cursor=pointer]
                  - button "1M" [ref=e68] [cursor=pointer]
                  - button "3M" [ref=e69] [cursor=pointer]
                  - button "6M" [ref=e70] [cursor=pointer]
                  - button "1Y" [ref=e71] [cursor=pointer]
                  - button "5Y" [ref=e72] [cursor=pointer]
            - button "J Jenni_1782547322668" [ref=e74] [cursor=pointer]:
              - generic [ref=e76]: J
              - generic [ref=e77]: Jenni_1782547322668
            - img [ref=e79]: £0 £200 £400 £600 £800 £1.0K 27 May 2 Jun 8 Jun 14 Jun 21 Jun 27 Jun
          - generic [ref=e123]:
            - generic [ref=e124]:
              - heading "Money Flow by Category" [level=3] [ref=e125]
              - generic [ref=e127]:
                - textbox [ref=e128] [cursor=pointer]: 2026-05-27
                - generic [ref=e129]: to
                - textbox [ref=e130] [cursor=pointer]: 2026-06-27
            - img [ref=e132]:
              - text: Cash Flow
              - text: "Food & Drink £45.50 Income: £0.00 Deficit: £45.50 Expenses: £45.50"
  - generic [ref=e138]:
    - generic [ref=e139]:
      - heading "Settings" [level=3] [ref=e140]
      - button "×" [ref=e141] [cursor=pointer]
    - generic [ref=e142]:
      - navigation [ref=e143]:
        - button "Interface" [ref=e144] [cursor=pointer]
        - button "Categories" [ref=e145] [cursor=pointer]
        - button "Payees" [ref=e146] [cursor=pointer]
        - button "Data" [ref=e147] [cursor=pointer]
      - generic [ref=e150]:
        - generic [ref=e151]:
          - button "+ Add Category" [ref=e152] [cursor=pointer]
          - button "Reset to Defaults" [ref=e153] [cursor=pointer]
        - generic [ref=e154]:
          - generic [ref=e155]:
            - generic [ref=e156]:
              - generic [ref=e157]: ⋮⋮
              - generic [ref=e158] [cursor=pointer]: 🍽️
              - generic [ref=e159]: Food & Drink
              - generic [ref=e160]:
                - button "+" [ref=e161] [cursor=pointer]
                - button "✎" [ref=e162] [cursor=pointer]
                - button "✕" [ref=e163] [cursor=pointer]
            - generic [ref=e164]:
              - generic [ref=e165]:
                - generic [ref=e166]: ⋮⋮
                - generic [ref=e167]: Groceries
                - generic [ref=e168]:
                  - button "✎" [ref=e169] [cursor=pointer]
                  - button "✕" [ref=e170] [cursor=pointer]
              - generic [ref=e171]:
                - generic [ref=e172]: ⋮⋮
                - generic [ref=e173]: Dining Out
                - generic [ref=e174]:
                  - button "✎" [ref=e175] [cursor=pointer]
                  - button "✕" [ref=e176] [cursor=pointer]
              - generic [ref=e177]:
                - generic [ref=e178]: ⋮⋮
                - generic [ref=e179]: Takeaway
                - generic [ref=e180]:
                  - button "✎" [ref=e181] [cursor=pointer]
                  - button "✕" [ref=e182] [cursor=pointer]
              - generic [ref=e183]:
                - generic [ref=e184]: ⋮⋮
                - generic [ref=e185]: Coffee & Snacks
                - generic [ref=e186]:
                  - button "✎" [ref=e187] [cursor=pointer]
                  - button "✕" [ref=e188] [cursor=pointer]
              - generic [ref=e189]:
                - generic [ref=e190]: ⋮⋮
                - generic [ref=e191]: Alcohol & Drinks
                - generic [ref=e192]:
                  - button "✎" [ref=e193] [cursor=pointer]
                  - button "✕" [ref=e194] [cursor=pointer]
          - generic [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197]: ⋮⋮
              - generic [ref=e198] [cursor=pointer]: 📄
              - generic [ref=e199]: Bills & Utilities
              - generic [ref=e200]:
                - button "+" [ref=e201] [cursor=pointer]
                - button "✎" [ref=e202] [cursor=pointer]
                - button "✕" [ref=e203] [cursor=pointer]
            - generic [ref=e204]:
              - generic [ref=e205]:
                - generic [ref=e206]: ⋮⋮
                - generic [ref=e207]: Gas & Electric
                - generic [ref=e208]:
                  - button "✎" [ref=e209] [cursor=pointer]
                  - button "✕" [ref=e210] [cursor=pointer]
              - generic [ref=e211]:
                - generic [ref=e212]: ⋮⋮
                - generic [ref=e213]: Water
                - generic [ref=e214]:
                  - button "✎" [ref=e215] [cursor=pointer]
                  - button "✕" [ref=e216] [cursor=pointer]
              - generic [ref=e217]:
                - generic [ref=e218]: ⋮⋮
                - generic [ref=e219]: Council Tax
                - generic [ref=e220]:
                  - button "✎" [ref=e221] [cursor=pointer]
                  - button "✕" [ref=e222] [cursor=pointer]
              - generic [ref=e223]:
                - generic [ref=e224]: ⋮⋮
                - generic [ref=e225]: Internet & Phone
                - generic [ref=e226]:
                  - button "✎" [ref=e227] [cursor=pointer]
                  - button "✕" [ref=e228] [cursor=pointer]
              - generic [ref=e229]:
                - generic [ref=e230]: ⋮⋮
                - generic [ref=e231]: TV Licence
                - generic [ref=e232]:
                  - button "✎" [ref=e233] [cursor=pointer]
                  - button "✕" [ref=e234] [cursor=pointer]
              - generic [ref=e235]:
                - generic [ref=e236]: ⋮⋮
                - generic [ref=e237]: Mobile Phone
                - generic [ref=e238]:
                  - button "✎" [ref=e239] [cursor=pointer]
                  - button "✕" [ref=e240] [cursor=pointer]
          - generic [ref=e241]:
            - generic [ref=e242]:
              - generic [ref=e243]: ⋮⋮
              - generic [ref=e244] [cursor=pointer]: 🏠
              - generic [ref=e245]: Housing
              - generic [ref=e246]:
                - button "+" [ref=e247] [cursor=pointer]
                - button "✎" [ref=e248] [cursor=pointer]
                - button "✕" [ref=e249] [cursor=pointer]
            - generic [ref=e250]:
              - generic [ref=e251]:
                - generic [ref=e252]: ⋮⋮
                - generic [ref=e253]: Rent
                - generic [ref=e254]:
                  - button "✎" [ref=e255] [cursor=pointer]
                  - button "✕" [ref=e256] [cursor=pointer]
              - generic [ref=e257]:
                - generic [ref=e258]: ⋮⋮
                - generic [ref=e259]: Mortgage
                - generic [ref=e260]:
                  - button "✎" [ref=e261] [cursor=pointer]
                  - button "✕" [ref=e262] [cursor=pointer]
              - generic [ref=e263]:
                - generic [ref=e264]: ⋮⋮
                - generic [ref=e265]: Maintenance & Repairs
                - generic [ref=e266]:
                  - button "✎" [ref=e267] [cursor=pointer]
                  - button "✕" [ref=e268] [cursor=pointer]
              - generic [ref=e269]:
                - generic [ref=e270]: ⋮⋮
                - generic [ref=e271]: Furnishings
                - generic [ref=e272]:
                  - button "✎" [ref=e273] [cursor=pointer]
                  - button "✕" [ref=e274] [cursor=pointer]
              - generic [ref=e275]:
                - generic [ref=e276]: ⋮⋮
                - generic [ref=e277]: Garden
                - generic [ref=e278]:
                  - button "✎" [ref=e279] [cursor=pointer]
                  - button "✕" [ref=e280] [cursor=pointer]
          - generic [ref=e281]:
            - generic [ref=e282]:
              - generic [ref=e283]: ⋮⋮
              - generic [ref=e284] [cursor=pointer]: 🚗
              - generic [ref=e285]: Transport
              - generic [ref=e286]:
                - button "+" [ref=e287] [cursor=pointer]
                - button "✎" [ref=e288] [cursor=pointer]
                - button "✕" [ref=e289] [cursor=pointer]
            - generic [ref=e290]:
              - generic [ref=e291]:
                - generic [ref=e292]: ⋮⋮
                - generic [ref=e293]: Fuel
                - generic [ref=e294]:
                  - button "✎" [ref=e295] [cursor=pointer]
                  - button "✕" [ref=e296] [cursor=pointer]
              - generic [ref=e297]:
                - generic [ref=e298]: ⋮⋮
                - generic [ref=e299]: Public Transport
                - generic [ref=e300]:
                  - button "✎" [ref=e301] [cursor=pointer]
                  - button "✕" [ref=e302] [cursor=pointer]
              - generic [ref=e303]:
                - generic [ref=e304]: ⋮⋮
                - generic [ref=e305]: Car Insurance
                - generic [ref=e306]:
                  - button "✎" [ref=e307] [cursor=pointer]
                  - button "✕" [ref=e308] [cursor=pointer]
              - generic [ref=e309]:
                - generic [ref=e310]: ⋮⋮
                - generic [ref=e311]: Car Tax
                - generic [ref=e312]:
                  - button "✎" [ref=e313] [cursor=pointer]
                  - button "✕" [ref=e314] [cursor=pointer]
              - generic [ref=e315]:
                - generic [ref=e316]: ⋮⋮
                - generic [ref=e317]: Parking
                - generic [ref=e318]:
                  - button "✎" [ref=e319] [cursor=pointer]
                  - button "✕" [ref=e320] [cursor=pointer]
              - generic [ref=e321]:
                - generic [ref=e322]: ⋮⋮
                - generic [ref=e323]: Car Maintenance
                - generic [ref=e324]:
                  - button "✎" [ref=e325] [cursor=pointer]
                  - button "✕" [ref=e326] [cursor=pointer]
              - generic [ref=e327]:
                - generic [ref=e328]: ⋮⋮
                - generic [ref=e329]: Taxi & Uber
                - generic [ref=e330]:
                  - button "✎" [ref=e331] [cursor=pointer]
                  - button "✕" [ref=e332] [cursor=pointer]
          - generic [ref=e333]:
            - generic [ref=e334]:
              - generic [ref=e335]: ⋮⋮
              - generic [ref=e336] [cursor=pointer]: 🛍️
              - generic [ref=e337]: Shopping
              - generic [ref=e338]:
                - button "+" [ref=e339] [cursor=pointer]
                - button "✎" [ref=e340] [cursor=pointer]
                - button "✕" [ref=e341] [cursor=pointer]
            - generic [ref=e342]:
              - generic [ref=e343]:
                - generic [ref=e344]: ⋮⋮
                - generic [ref=e345]: Clothing
                - generic [ref=e346]:
                  - button "✎" [ref=e347] [cursor=pointer]
                  - button "✕" [ref=e348] [cursor=pointer]
              - generic [ref=e349]:
                - generic [ref=e350]: ⋮⋮
                - generic [ref=e351]: Electronics
                - generic [ref=e352]:
                  - button "✎" [ref=e353] [cursor=pointer]
                  - button "✕" [ref=e354] [cursor=pointer]
              - generic [ref=e355]:
                - generic [ref=e356]: ⋮⋮
                - generic [ref=e357]: Household Items
                - generic [ref=e358]:
                  - button "✎" [ref=e359] [cursor=pointer]
                  - button "✕" [ref=e360] [cursor=pointer]
              - generic [ref=e361]:
                - generic [ref=e362]: ⋮⋮
                - generic [ref=e363]: Gifts
                - generic [ref=e364]:
                  - button "✎" [ref=e365] [cursor=pointer]
                  - button "✕" [ref=e366] [cursor=pointer]
              - generic [ref=e367]:
                - generic [ref=e368]: ⋮⋮
                - generic [ref=e369]: Online Shopping
                - generic [ref=e370]:
                  - button "✎" [ref=e371] [cursor=pointer]
                  - button "✕" [ref=e372] [cursor=pointer]
          - generic [ref=e373]:
            - generic [ref=e374]:
              - generic [ref=e375]: ⋮⋮
              - generic [ref=e376] [cursor=pointer]: 🎬
              - generic [ref=e377]: Entertainment
              - generic [ref=e378]:
                - button "+" [ref=e379] [cursor=pointer]
                - button "✎" [ref=e380] [cursor=pointer]
                - button "✕" [ref=e381] [cursor=pointer]
            - generic [ref=e382]:
              - generic [ref=e383]:
                - generic [ref=e384]: ⋮⋮
                - generic [ref=e385]: Streaming Services
                - generic [ref=e386]:
                  - button "✎" [ref=e387] [cursor=pointer]
                  - button "✕" [ref=e388] [cursor=pointer]
              - generic [ref=e389]:
                - generic [ref=e390]: ⋮⋮
                - generic [ref=e391]: Cinema & Theatre
                - generic [ref=e392]:
                  - button "✎" [ref=e393] [cursor=pointer]
                  - button "✕" [ref=e394] [cursor=pointer]
              - generic [ref=e395]:
                - generic [ref=e396]: ⋮⋮
                - generic [ref=e397]: Games & Apps
                - generic [ref=e398]:
                  - button "✎" [ref=e399] [cursor=pointer]
                  - button "✕" [ref=e400] [cursor=pointer]
              - generic [ref=e401]:
                - generic [ref=e402]: ⋮⋮
                - generic [ref=e403]: Music & Concerts
                - generic [ref=e404]:
                  - button "✎" [ref=e405] [cursor=pointer]
                  - button "✕" [ref=e406] [cursor=pointer]
              - generic [ref=e407]:
                - generic [ref=e408]: ⋮⋮
                - generic [ref=e409]: Hobbies
                - generic [ref=e410]:
                  - button "✎" [ref=e411] [cursor=pointer]
                  - button "✕" [ref=e412] [cursor=pointer]
              - generic [ref=e413]:
                - generic [ref=e414]: ⋮⋮
                - generic [ref=e415]: Books & Magazines
                - generic [ref=e416]:
                  - button "✎" [ref=e417] [cursor=pointer]
                  - button "✕" [ref=e418] [cursor=pointer]
          - generic [ref=e419]:
            - generic [ref=e420]:
              - generic [ref=e421]: ⋮⋮
              - generic [ref=e422] [cursor=pointer]: 💊
              - generic [ref=e423]: Health & Wellbeing
              - generic [ref=e424]:
                - button "+" [ref=e425] [cursor=pointer]
                - button "✎" [ref=e426] [cursor=pointer]
                - button "✕" [ref=e427] [cursor=pointer]
            - generic [ref=e428]:
              - generic [ref=e429]:
                - generic [ref=e430]: ⋮⋮
                - generic [ref=e431]: Pharmacy
                - generic [ref=e432]:
                  - button "✎" [ref=e433] [cursor=pointer]
                  - button "✕" [ref=e434] [cursor=pointer]
              - generic [ref=e435]:
                - generic [ref=e436]: ⋮⋮
                - generic [ref=e437]: Gym & Fitness
                - generic [ref=e438]:
                  - button "✎" [ref=e439] [cursor=pointer]
                  - button "✕" [ref=e440] [cursor=pointer]
              - generic [ref=e441]:
                - generic [ref=e442]: ⋮⋮
                - generic [ref=e443]: Dentist
                - generic [ref=e444]:
                  - button "✎" [ref=e445] [cursor=pointer]
                  - button "✕" [ref=e446] [cursor=pointer]
              - generic [ref=e447]:
                - generic [ref=e448]: ⋮⋮
                - generic [ref=e449]: Optician
                - generic [ref=e450]:
                  - button "✎" [ref=e451] [cursor=pointer]
                  - button "✕" [ref=e452] [cursor=pointer]
              - generic [ref=e453]:
                - generic [ref=e454]: ⋮⋮
                - generic [ref=e455]: Private Healthcare
                - generic [ref=e456]:
                  - button "✎" [ref=e457] [cursor=pointer]
                  - button "✕" [ref=e458] [cursor=pointer]
              - generic [ref=e459]:
                - generic [ref=e460]: ⋮⋮
                - generic [ref=e461]: Beauty & Personal Care
                - generic [ref=e462]:
                  - button "✎" [ref=e463] [cursor=pointer]
                  - button "✕" [ref=e464] [cursor=pointer]
          - generic [ref=e465]:
            - generic [ref=e466]:
              - generic [ref=e467]: ⋮⋮
              - generic [ref=e468] [cursor=pointer]: 🛡️
              - generic [ref=e469]: Insurance
              - generic [ref=e470]:
                - button "+" [ref=e471] [cursor=pointer]
                - button "✎" [ref=e472] [cursor=pointer]
                - button "✕" [ref=e473] [cursor=pointer]
            - generic [ref=e474]:
              - generic [ref=e475]:
                - generic [ref=e476]: ⋮⋮
                - generic [ref=e477]: Home Insurance
                - generic [ref=e478]:
                  - button "✎" [ref=e479] [cursor=pointer]
                  - button "✕" [ref=e480] [cursor=pointer]
              - generic [ref=e481]:
                - generic [ref=e482]: ⋮⋮
                - generic [ref=e483]: Life Insurance
                - generic [ref=e484]:
                  - button "✎" [ref=e485] [cursor=pointer]
                  - button "✕" [ref=e486] [cursor=pointer]
              - generic [ref=e487]:
                - generic [ref=e488]: ⋮⋮
                - generic [ref=e489]: Pet Insurance
                - generic [ref=e490]:
                  - button "✎" [ref=e491] [cursor=pointer]
                  - button "✕" [ref=e492] [cursor=pointer]
              - generic [ref=e493]:
                - generic [ref=e494]: ⋮⋮
                - generic [ref=e495]: Travel Insurance
                - generic [ref=e496]:
                  - button "✎" [ref=e497] [cursor=pointer]
                  - button "✕" [ref=e498] [cursor=pointer]
              - generic [ref=e499]:
                - generic [ref=e500]: ⋮⋮
                - generic [ref=e501]: Health Insurance
                - generic [ref=e502]:
                  - button "✎" [ref=e503] [cursor=pointer]
                  - button "✕" [ref=e504] [cursor=pointer]
          - generic [ref=e505]:
            - generic [ref=e506]:
              - generic [ref=e507]: ⋮⋮
              - generic [ref=e508] [cursor=pointer]: ✈️
              - generic [ref=e509]: Travel & Holidays
              - generic [ref=e510]:
                - button "+" [ref=e511] [cursor=pointer]
                - button "✎" [ref=e512] [cursor=pointer]
                - button "✕" [ref=e513] [cursor=pointer]
            - generic [ref=e514]:
              - generic [ref=e515]:
                - generic [ref=e516]: ⋮⋮
                - generic [ref=e517]: Flights
                - generic [ref=e518]:
                  - button "✎" [ref=e519] [cursor=pointer]
                  - button "✕" [ref=e520] [cursor=pointer]
              - generic [ref=e521]:
                - generic [ref=e522]: ⋮⋮
                - generic [ref=e523]: Hotels & Accommodation
                - generic [ref=e524]:
                  - button "✎" [ref=e525] [cursor=pointer]
                  - button "✕" [ref=e526] [cursor=pointer]
              - generic [ref=e527]:
                - generic [ref=e528]: ⋮⋮
                - generic [ref=e529]: Activities & Tours
                - generic [ref=e530]:
                  - button "✎" [ref=e531] [cursor=pointer]
                  - button "✕" [ref=e532] [cursor=pointer]
              - generic [ref=e533]:
                - generic [ref=e534]: ⋮⋮
                - generic [ref=e535]: Holiday Food & Drink
                - generic [ref=e536]:
                  - button "✎" [ref=e537] [cursor=pointer]
                  - button "✕" [ref=e538] [cursor=pointer]
          - generic [ref=e539]:
            - generic [ref=e540]:
              - generic [ref=e541]: ⋮⋮
              - generic [ref=e542] [cursor=pointer]: 👶
              - generic [ref=e543]: Children
              - generic [ref=e544]:
                - button "+" [ref=e545] [cursor=pointer]
                - button "✎" [ref=e546] [cursor=pointer]
                - button "✕" [ref=e547] [cursor=pointer]
            - generic [ref=e548]:
              - generic [ref=e549]:
                - generic [ref=e550]: ⋮⋮
                - generic [ref=e551]: Childcare
                - generic [ref=e552]:
                  - button "✎" [ref=e553] [cursor=pointer]
                  - button "✕" [ref=e554] [cursor=pointer]
              - generic [ref=e555]:
                - generic [ref=e556]: ⋮⋮
                - generic [ref=e557]: School Fees & Supplies
                - generic [ref=e558]:
                  - button "✎" [ref=e559] [cursor=pointer]
                  - button "✕" [ref=e560] [cursor=pointer]
              - generic [ref=e561]:
                - generic [ref=e562]: ⋮⋮
                - generic [ref=e563]: Activities & Clubs
                - generic [ref=e564]:
                  - button "✎" [ref=e565] [cursor=pointer]
                  - button "✕" [ref=e566] [cursor=pointer]
              - generic [ref=e567]:
                - generic [ref=e568]: ⋮⋮
                - generic [ref=e569]: Children Clothing
                - generic [ref=e570]:
                  - button "✎" [ref=e571] [cursor=pointer]
                  - button "✕" [ref=e572] [cursor=pointer]
              - generic [ref=e573]:
                - generic [ref=e574]: ⋮⋮
                - generic [ref=e575]: Toys & Games
                - generic [ref=e576]:
                  - button "✎" [ref=e577] [cursor=pointer]
                  - button "✕" [ref=e578] [cursor=pointer]
          - generic [ref=e579]:
            - generic [ref=e580]:
              - generic [ref=e581]: ⋮⋮
              - generic [ref=e582] [cursor=pointer]: 🐾
              - generic [ref=e583]: Pets
              - generic [ref=e584]:
                - button "+" [ref=e585] [cursor=pointer]
                - button "✎" [ref=e586] [cursor=pointer]
                - button "✕" [ref=e587] [cursor=pointer]
            - generic [ref=e588]:
              - generic [ref=e589]:
                - generic [ref=e590]: ⋮⋮
                - generic [ref=e591]: Pet Food
                - generic [ref=e592]:
                  - button "✎" [ref=e593] [cursor=pointer]
                  - button "✕" [ref=e594] [cursor=pointer]
              - generic [ref=e595]:
                - generic [ref=e596]: ⋮⋮
                - generic [ref=e597]: Vet Bills
                - generic [ref=e598]:
                  - button "✎" [ref=e599] [cursor=pointer]
                  - button "✕" [ref=e600] [cursor=pointer]
              - generic [ref=e601]:
                - generic [ref=e602]: ⋮⋮
                - generic [ref=e603]: Pet Supplies
                - generic [ref=e604]:
                  - button "✎" [ref=e605] [cursor=pointer]
                  - button "✕" [ref=e606] [cursor=pointer]
              - generic [ref=e607]:
                - generic [ref=e608]: ⋮⋮
                - generic [ref=e609]: Grooming
                - generic [ref=e610]:
                  - button "✎" [ref=e611] [cursor=pointer]
                  - button "✕" [ref=e612] [cursor=pointer]
          - generic [ref=e613]:
            - generic [ref=e614]:
              - generic [ref=e615]: ⋮⋮
              - generic [ref=e616] [cursor=pointer]: 💰
              - generic [ref=e617]: Income
              - generic [ref=e618]:
                - button "+" [ref=e619] [cursor=pointer]
                - button "✎" [ref=e620] [cursor=pointer]
                - button "✕" [ref=e621] [cursor=pointer]
            - generic [ref=e622]:
              - generic [ref=e623]:
                - generic [ref=e624]: ⋮⋮
                - generic [ref=e625]: Salary
                - generic [ref=e626]:
                  - button "✎" [ref=e627] [cursor=pointer]
                  - button "✕" [ref=e628] [cursor=pointer]
              - generic [ref=e629]:
                - generic [ref=e630]: ⋮⋮
                - generic [ref=e631]: Benefits
                - generic [ref=e632]:
                  - button "✎" [ref=e633] [cursor=pointer]
                  - button "✕" [ref=e634] [cursor=pointer]
              - generic [ref=e635]:
                - generic [ref=e636]: ⋮⋮
                - generic [ref=e637]: Interest
                - generic [ref=e638]:
                  - button "✎" [ref=e639] [cursor=pointer]
                  - button "✕" [ref=e640] [cursor=pointer]
              - generic [ref=e641]:
                - generic [ref=e642]: ⋮⋮
                - generic [ref=e643]: Refunds
                - generic [ref=e644]:
                  - button "✎" [ref=e645] [cursor=pointer]
                  - button "✕" [ref=e646] [cursor=pointer]
              - generic [ref=e647]:
                - generic [ref=e648]: ⋮⋮
                - generic [ref=e649]: Side Income
                - generic [ref=e650]:
                  - button "✎" [ref=e651] [cursor=pointer]
                  - button "✕" [ref=e652] [cursor=pointer]
              - generic [ref=e653]:
                - generic [ref=e654]: ⋮⋮
                - generic [ref=e655]: Gifts Received
                - generic [ref=e656]:
                  - button "✎" [ref=e657] [cursor=pointer]
                  - button "✕" [ref=e658] [cursor=pointer]
          - generic [ref=e659]:
            - generic [ref=e660]:
              - generic [ref=e661]: ⋮⋮
              - generic [ref=e662] [cursor=pointer]: 📈
              - generic [ref=e663]: Savings & Investments
              - generic [ref=e664]:
                - button "+" [ref=e665] [cursor=pointer]
                - button "✎" [ref=e666] [cursor=pointer]
                - button "✕" [ref=e667] [cursor=pointer]
            - generic [ref=e668]:
              - generic [ref=e669]:
                - generic [ref=e670]: ⋮⋮
                - generic [ref=e671]: Savings
                - generic [ref=e672]:
                  - button "✎" [ref=e673] [cursor=pointer]
                  - button "✕" [ref=e674] [cursor=pointer]
              - generic [ref=e675]:
                - generic [ref=e676]: ⋮⋮
                - generic [ref=e677]: ISA
                - generic [ref=e678]:
                  - button "✎" [ref=e679] [cursor=pointer]
                  - button "✕" [ref=e680] [cursor=pointer]
              - generic [ref=e681]:
                - generic [ref=e682]: ⋮⋮
                - generic [ref=e683]: Pension
                - generic [ref=e684]:
                  - button "✎" [ref=e685] [cursor=pointer]
                  - button "✕" [ref=e686] [cursor=pointer]
              - generic [ref=e687]:
                - generic [ref=e688]: ⋮⋮
                - generic [ref=e689]: Investments
                - generic [ref=e690]:
                  - button "✎" [ref=e691] [cursor=pointer]
                  - button "✕" [ref=e692] [cursor=pointer]
          - generic [ref=e693]:
            - generic [ref=e694]:
              - generic [ref=e695]: ⋮⋮
              - generic [ref=e696] [cursor=pointer]: 💳
              - generic [ref=e697]: Fees & Charges
              - generic [ref=e698]:
                - button "+" [ref=e699] [cursor=pointer]
                - button "✎" [ref=e700] [cursor=pointer]
                - button "✕" [ref=e701] [cursor=pointer]
            - generic [ref=e702]:
              - generic [ref=e703]:
                - generic [ref=e704]: ⋮⋮
                - generic [ref=e705]: Bank Fees
                - generic [ref=e706]:
                  - button "✎" [ref=e707] [cursor=pointer]
                  - button "✕" [ref=e708] [cursor=pointer]
              - generic [ref=e709]:
                - generic [ref=e710]: ⋮⋮
                - generic [ref=e711]: Credit Card Fees
                - generic [ref=e712]:
                  - button "✎" [ref=e713] [cursor=pointer]
                  - button "✕" [ref=e714] [cursor=pointer]
              - generic [ref=e715]:
                - generic [ref=e716]: ⋮⋮
                - generic [ref=e717]: ATM Fees
                - generic [ref=e718]:
                  - button "✎" [ref=e719] [cursor=pointer]
                  - button "✕" [ref=e720] [cursor=pointer]
              - generic [ref=e721]:
                - generic [ref=e722]: ⋮⋮
                - generic [ref=e723]: Late Payment Fees
                - generic [ref=e724]:
                  - button "✎" [ref=e725] [cursor=pointer]
                  - button "✕" [ref=e726] [cursor=pointer]
          - generic [ref=e727]:
            - generic [ref=e728]:
              - generic [ref=e729]: ⋮⋮
              - generic [ref=e730] [cursor=pointer]: 🔄
              - generic [ref=e731]: Subscriptions
              - generic [ref=e732]:
                - button "+" [ref=e733] [cursor=pointer]
                - button "✎" [ref=e734] [cursor=pointer]
                - button "✕" [ref=e735] [cursor=pointer]
            - generic [ref=e736]:
              - generic [ref=e737]:
                - generic [ref=e738]: ⋮⋮
                - generic [ref=e739]: Software & Apps
                - generic [ref=e740]:
                  - button "✎" [ref=e741] [cursor=pointer]
                  - button "✕" [ref=e742] [cursor=pointer]
              - generic [ref=e743]:
                - generic [ref=e744]: ⋮⋮
                - generic [ref=e745]: Memberships
                - generic [ref=e746]:
                  - button "✎" [ref=e747] [cursor=pointer]
                  - button "✕" [ref=e748] [cursor=pointer]
              - generic [ref=e749]:
                - generic [ref=e750]: ⋮⋮
                - generic [ref=e751]: News & Publications
                - generic [ref=e752]:
                  - button "✎" [ref=e753] [cursor=pointer]
                  - button "✕" [ref=e754] [cursor=pointer]
              - generic [ref=e755]:
                - generic [ref=e756]: ⋮⋮
                - generic [ref=e757]: Other Subscriptions
                - generic [ref=e758]:
                  - button "✎" [ref=e759] [cursor=pointer]
                  - button "✕" [ref=e760] [cursor=pointer]
          - generic [ref=e761]:
            - generic [ref=e762]:
              - generic [ref=e763]: ⋮⋮
              - generic [ref=e764] [cursor=pointer]: 📚
              - generic [ref=e765]: Education
              - generic [ref=e766]:
                - button "+" [ref=e767] [cursor=pointer]
                - button "✎" [ref=e768] [cursor=pointer]
                - button "✕" [ref=e769] [cursor=pointer]
            - generic [ref=e770]:
              - generic [ref=e771]:
                - generic [ref=e772]: ⋮⋮
                - generic [ref=e773]: Courses
                - generic [ref=e774]:
                  - button "✎" [ref=e775] [cursor=pointer]
                  - button "✕" [ref=e776] [cursor=pointer]
              - generic [ref=e777]:
                - generic [ref=e778]: ⋮⋮
                - generic [ref=e779]: Books & Materials
                - generic [ref=e780]:
                  - button "✎" [ref=e781] [cursor=pointer]
                  - button "✕" [ref=e782] [cursor=pointer]
              - generic [ref=e783]:
                - generic [ref=e784]: ⋮⋮
                - generic [ref=e785]: Tuition Fees
                - generic [ref=e786]:
                  - button "✎" [ref=e787] [cursor=pointer]
                  - button "✕" [ref=e788] [cursor=pointer]
          - generic [ref=e789]:
            - generic [ref=e790]:
              - generic [ref=e791]: ⋮⋮
              - generic [ref=e792] [cursor=pointer]: ❤️
              - generic [ref=e793]: Charity & Donations
              - generic [ref=e794]:
                - button "+" [ref=e795] [cursor=pointer]
                - button "✎" [ref=e796] [cursor=pointer]
                - button "✕" [ref=e797] [cursor=pointer]
            - generic [ref=e798]:
              - generic [ref=e799]:
                - generic [ref=e800]: ⋮⋮
                - generic [ref=e801]: Charity Donations
                - generic [ref=e802]:
                  - button "✎" [ref=e803] [cursor=pointer]
                  - button "✕" [ref=e804] [cursor=pointer]
              - generic [ref=e805]:
                - generic [ref=e806]: ⋮⋮
                - generic [ref=e807]: Fundraising
                - generic [ref=e808]:
                  - button "✎" [ref=e809] [cursor=pointer]
                  - button "✕" [ref=e810] [cursor=pointer]
              - generic [ref=e811]:
                - generic [ref=e812]: ⋮⋮
                - generic [ref=e813]: Religious Donations
                - generic [ref=e814]:
                  - button "✎" [ref=e815] [cursor=pointer]
                  - button "✕" [ref=e816] [cursor=pointer]
          - generic [ref=e818]:
            - generic [ref=e819] [cursor=pointer]: ↔️
            - generic [ref=e820]: Transfer
            - generic [ref=e821]: System
          - generic [ref=e823]:
            - generic [ref=e824] [cursor=pointer]: ❓
            - generic [ref=e825]: Uncategorized
            - generic [ref=e826]: System
          - generic [ref=e828]:
            - generic [ref=e829]: ⋮⋮
            - generic [ref=e830] [cursor=pointer]: 🎓
            - generic [ref=e831]: Uni Projekt
            - generic [ref=e832]:
              - button "+" [ref=e833] [cursor=pointer]
              - button "✎" [ref=e834] [cursor=pointer]
              - button "✕" [ref=e835] [cursor=pointer]
          - generic [ref=e837]:
            - generic [ref=e838]: ⋮⋮
            - generic [ref=e839] [cursor=pointer]: ✏️
            - generic [ref=e840]: Bearbeitete Kategorie
            - generic [ref=e841]:
              - button "+" [ref=e842] [cursor=pointer]
              - button "✎" [ref=e843] [cursor=pointer]
              - button "✕" [ref=e844] [cursor=pointer]
          - generic [ref=e845]:
            - generic [ref=e846]:
              - generic [ref=e847]: ⋮⋮
              - generic [ref=e848] [cursor=pointer]: 📚
              - generic [ref=e849]: Hauptkategorie mit Unterkategorie
              - generic [ref=e850]:
                - button "+" [ref=e851] [cursor=pointer]
                - button "✎" [ref=e852] [cursor=pointer]
                - button "✕" [ref=e853] [cursor=pointer]
            - generic [ref=e854]:
              - generic [ref=e855]:
                - generic [ref=e856]: ⋮⋮
                - generic [ref=e857]: Neue Unterkategorie
                - generic [ref=e858]:
                  - button "✎" [ref=e859] [cursor=pointer]
                  - button "✕" [ref=e860] [cursor=pointer]
              - generic [ref=e861]:
                - generic [ref=e862]: ⋮⋮
                - generic [ref=e863]: Neue Unterkategorie
                - generic [ref=e864]:
                  - button "✎" [ref=e865] [cursor=pointer]
                  - button "✕" [ref=e866] [cursor=pointer]
          - generic [ref=e868]:
            - generic [ref=e869]: ⋮⋮
            - generic [ref=e870] [cursor=pointer]: 🎓
            - generic [ref=e871]: Uni Projekt
            - generic [ref=e872]:
              - button "+" [ref=e873] [cursor=pointer]
              - button "✎" [ref=e874] [cursor=pointer]
              - button "✕" [ref=e875] [cursor=pointer]
          - generic [ref=e877]:
            - generic [ref=e878]: ⋮⋮
            - generic [ref=e879] [cursor=pointer]: ✏️
            - generic [ref=e880]: Bearbeitete Kategorie
            - generic [ref=e881]:
              - button "+" [ref=e882] [cursor=pointer]
              - button "✎" [ref=e883] [cursor=pointer]
              - button "✕" [ref=e884] [cursor=pointer]
          - generic [ref=e886]:
            - generic [ref=e887]: ⋮⋮
            - generic [ref=e888] [cursor=pointer]: 📚
            - generic [ref=e889]: Hauptkategorie mit Unterkategorie
            - generic [ref=e890]:
              - button "+" [ref=e891] [cursor=pointer]
              - button "✎" [ref=e892] [cursor=pointer]
              - button "✕" [ref=e893] [cursor=pointer]
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