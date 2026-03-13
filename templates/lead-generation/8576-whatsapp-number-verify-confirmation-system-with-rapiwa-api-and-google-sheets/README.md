# 🎣 WhatsApp number verify & confirmation system with Rapiwa API and Google Sheets

> ⚡ **443 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

# WhatsApp Number Verify & Confirmation System with Rapiwa API and Google Sheets
---

## Who is this for?
This **n8n workflow** makes it easy to verify **WhatsApp numbers** submitted through a form. When someone fills out the form, the automation kicks in—capturing the data via a **webhook**, checking the WhatsApp number using the **Rapiwa API**, and sending a **confirmation message** if the number is valid. All submissions, whether verified or not, are logged into a **Google Sheet** with a clear status. 

It’s a great solution for **businesses**, **marketers**, or **developers** who need a reliable way to **verify leads**, manage **event signups**, or **onboard customers** using WhatsApp.


---

## How it works?
This **n8n automation** listens for form submissions via a webhook, **validates the provided WhatsApp number** using the **Rapiwa API**, sends a confirmation message if the number is verified, and then appends the submission data to a **Google Sheet**, marking each entry as **verified or unverified**.

---

## Features
- **Webhook Trigger**: Captures form submissions via HTTP POST
- **Data Cleaning**: Formats and sanitizes the WhatsApp number
- **Rapiwa API Integration**: Checks if the number is registered on WhatsApp
- **Conditional Messaging**: Sends confirmation messages only to verified WhatsApp users
- **Google Sheets Integration**: Appends all submissions with a validity status
- **Auto Timestamping**: Adds the submission date in `YYYY-MM-DD` format
- **Throttling Support**: Built-in delay to avoid hitting API or sheet rate limits
- **Separation of Verified/Unverified**: Distinct handling for both types of entries

---
## Nodes Used in the Workflow
- **Webhook**
- **Format Webhook Response Data** (Code)
- **Loop Over Items** (Split In Batches)
- **Cleane Number** (Code)
- **check valid whatsapp number** (HTTP Request)
- **If** (Conditional)
- **Send Message Using Rapiwa**
- **verified append row in sheet** (Google Sheets)
- **unverified append row in sheet** (Google Sheets)
- **Wait1**

---

# How to set up?
## Webhook

1. Add a `Webhook` node to the canvas.
2. Set **HTTP Method** to `POST`.
3. Copy the **Webhook URL path** (`/a9b6a936-e5f2-4xxxxxxxxxe0a970d5`).
4. In your frontend form or app, make a POST request to:
5. The request body should include:
```json
{
  "business_name": "ABC Corp",
  "location": "New York",
  "whatsapp": "+1 234-567-8901",
  "email": "user@example.com",
  "name": "John Doe"
}
```

## Format Webhook Response Data

1. Add a `Code` node after the `Webhook` node.
2. Use this JavaScript code:
```js
const result = $input.all().map(item =&gt; {
  const body = item.json.body || {};
  const submitted_date = new Date().toISOString().split('T')[0];

  return {
    business_name: body.business_name,
    location: body.location,
    whatsapp: body.whatsapp,
    email: body.email,
    name: body.name,
    submitted_date: submitted_date
  };
});
return result;
```

## Loop Over Items

1. Insert a `SplitInBatches` node after the data formatting.
2. Set the **Batch Size** to a reasonable number (e.g. 1 or 10).
3. This is useful for processing multiple submissions at once, especially if your webhook receives arrays of entries.

**Note:** If you expect only one submission at a time, it still helps future-proof your workflow.

## Cleane Number

1. Add a `Code` node named `Cleane Number`.
2. Paste the following JavaScript:
```js
const items = $input.all();
const updatedItems = items.map((item) =&gt; {
  const waNo = item?.json["whatsapp"];
  const waNoStr = typeof waNo === 'string' ? waNo : (waNo !== undefined && waNo !== null ? String(waNo) : "");
  const cleanedNumber = waNoStr.replace(/\D/g, "");
  item.json["whatsapp"] = cleanedNumber;
  return item;
});
return updatedItems;
```

## Check WhatsApp Number using Rapiwa

1. Add an `HTTP Request` node.
2. Set:
   - Method: `POST`
   - URL: `https://app.rapiwa.com/api/verify-whatsapp`
3. Add authentication:
   - Type: HTTP Bearer
   - Credentials: Select or create Rapiwa token
4. In Body Parameters, add:
   - `number`: `={{ $json.whatsapp }}`
5. This API call checks if the WhatsApp number exists and is valid.

**Expected Output:**
```json
```json
{
    "success": true,
    "data": {
        "number": "+88017XXXXXXXX",
        "exists": true,
        "jid": "88017XXXXXXXXXXXXX",
        "message": "✅ Number is on WhatsApp"
    }
}
```

## Conditional If Check

1. Add an `If` node after the Rapiwa validation.
2. Configure the condition:
   - Left Value: `={{ $json.data.exists }}`
   - Operation: `true`
3. If true → valid number → go to messaging and append as "verified".
4. If false → go to unverified sheet directly.

**Note:** This step branches the flow based on the WhatsApp verification result.

## Send WhatsApp Message (Rapiwa)

1. Add an `HTTP Request` node under the TRUE branch of the If node.
2. Set:
   - Method: `POST`
   - URL: `https://app.rapiwa.com/api/send-message`
3. Authentication:
   - Type: HTTP Bearer
   - Use same Rapiwa token
4. Body Parameters:
   - `number`: `={{ $json.data.phone }}`
   - `message_type`: `text`
   - `message`: 
     ```
     Hi {{ $('Cleane Number').item.json.name }},
     Thanks! Your form has been submitted successfully.
     ```

This sends a confirmation message via WhatsApp to the verified number.

## Google Sheets – Verified Data

1. Add a `Google Sheets` node under the TRUE branch (after the message is sent).
2. Set:
   - Operation: `Append`
   - Document ID: Choose your connected Google Sheet
   - Sheet Name: Set to your active sheet (e.g., `Sheet1`)
3. Column Mapping:
   - `Business Name`: `={{ $('Cleane Number').item.json.business_name }}`
   - `Location`: `={{ $('Cleane Number').item.json.location }}`
   - `WhatsApp Number`: `={{ $('Cleane Number').item.json.whatsapp }}`
   - `Email `: `={{ $('Cleane Number').item.json.email }}`
   - `Name`: `={{ $('Cleane Number').item.json.name }}`
   - `Date`: `={{ $('Cleane Number').item.json.submitted_date }}`
   - `validity`: `verified`

4. Use OAuth2 Google Sheets credentials for access.

**Note:** Make sure the sheet has matching column headers.


## Google Sheets – Unverified Data

1. Add a `Google Sheets` node under the FALSE branch of the If node.
2. Use the same settings as the verified node, but set:
   - `validity`: `unverified`

This stores entries with unverified WhatsApp numbers in the same Google Sheet.

## Wait Node

1. Add a `Wait` node after both Google Sheets nodes.
2. Set Wait Time:
   - Value: 2 seconds

This delay prevents API throttling and adds buffer time before processing the next item in the batch.

---

## Google Sheet Column Reference
**A Google Sheet** formatted like this ➤ [Sample Sheet](https://docs.google.com/spreadsheets/d/1H29z_8tnsu8AvCsI7o1SjiV-5LDTwiVVQk-BNr8SMk0/edit?usp=sharing)  

| Business Name      | Location     | WhatsApp Number | Email      | Name    | validity   | Date  |
|---------------------|--------------------|------------------|----------------------|------------------|------------|------------|
| SpaGreen Creative   | Dhaka, Bangladesh  | 8801322827799| contact@spagreen.net | Abdul Mannan    | unverified | 2025-09-14 |
| SpaGreen Creative   | Bagladesh          | 8801322827799| contact@spagreen.net| Abdul Mannan   | verified   | 2025-09-14 |

&gt; **Note**: The `Email ` column includes a **trailing space**. Ensure your column headers match exactly to prevent data misalignment.

---

## How to customize the workflow
- Modify confirmation message with your brand tone
- Add input validation for missing or malformed fields
- Route unverified submissions to a separate spreadsheet or alert channel
- Add Slack or email notifications on new verified entries

---

## Notes & Warnings
- Ensure your Google Sheets credential has access to the target sheet
- Rapiwa requires an active subscription for API access
- Monitor Rapiwa API limits and adjust wait time as needed
- Keep your webhook URL protected to avoid misuse

---

## Support & Community
- WhatsApp Support: [Chat Now](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Community](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)  
- Website: [spagreen.net](https://spagreen.net)  
- Developer Portfolio: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
