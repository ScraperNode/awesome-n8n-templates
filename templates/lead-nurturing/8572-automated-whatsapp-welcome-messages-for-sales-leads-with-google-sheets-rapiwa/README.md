# 💬 Automated WhatsApp welcome messages for sales leads with Google Sheets & Rapiwa

> ⚡ **765 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

# Automated WhatsApp Welcome Messages for Sales Leads with Google Sheets & Rapiwa

## Who is this for?

This automation is ideal for sales teams, digital marketers, support agents, or small business owners who collect leads in Google Sheets and want to **automatically send WhatsApp welcome messages**. It's a cost-effective and easy-to-use solution built for those **not using the official WhatsApp Business API** but still looking to scale communication.

---

## What this Workflow Does

This **n8n automation** reads leads from a connected **Google Sheet**, verifies if the provided WhatsApp numbers are valid using the **Rapiwa API**, and sends a personalized welcome message. It updates the sheet based on delivery success or failure, and continues this process every 5 minutes — ensuring new leads are automatically engaged.

---

## Key Features
- **Automatic Scheduling**: Runs every 5 minutes (adjustable)
- **Google Sheets Integration**: Reads and updates lead data
- **WhatsApp Number Validation**: Confirms number validity via Rapiwa
- **Personalized Messaging**: Uses lead name for custom messages
- **Batch Processing**: Sends up to 60 messages per cycle
- **Safe API Usage**: Adds 5-second delay between each message
- **Error Handling**: Marks failed messages as `not sent` and `unverified`
- **Live Status Updates**: Sheet columns are updated after each attempt
- **Loop Logic**: Repeats continuously to catch new rows

---

## How to Use

### Step-by-step Setup

1. **Prepare Your Google Sheet**
   - Copy this [Sample Sheet](https://docs.google.com/spreadsheets/d/1amkVSIXrhOkf86YDYaddOcAamhUC4DlvFiSg3cpAH78/edit?usp=sharing)
   - Ensure it includes the following columns:
     - `WhatsApp No`
     - `name ` (note: trailing space is required)
     - `row_number`
     - `status`, `check`, `validity`

2. **Connect Google Sheets in n8n**
   - Use OAuth2 credentials to allow n8n access
   - Set the workflow to fetch rows where `check` is not empty

3. **Get a Rapiwa Account**
   - Sign up at [https://rapiwa.com](https://rapiwa.com)
   - Add your WhatsApp number
   - Retrieve your **Bearer Token** from your Rapiwa dashboard

4. **Configure HTTP Request Nodes**
   - Use Rapiwa's API endpoints:
     - Verify Number: `https://app.rapiwa.com/api/verify-whatsapp`
     - Send Message: `https://app.rapiwa.com/api/send-message`
   - Add your Bearer Token to the header

5. **Start Your Workflow**
   - Run the n8n automation
   - It will read leads, clean phone numbers, verify WhatsApp validity, send messages, and update the sheet accordingly

---

## Requirements
- A **Google Sheet** with correctly formatted columns
- Active **Rapiwa subscription** (~$5/month)
- A **valid Bearer Token** from Rapiwa
- Your **WhatsApp number** connected to Rapiwa
- n8n instance with:
  - **Google Sheets** integration (OAuth2 setup)
  - **HTTP Request** capability

---

## Google Sheet Column Reference


| name            | number        | email             | time                        | check   | validity   | status    |
|-----------------|--------------|-------------------|-----------------------------|---------|------------|-----------|
| Abdul Mannan	  | 8801322827799| contact@spagreen.net| September 14th 2025, 10:34  | checked | verified   | sent      |
| Abdul Mannan	  | 8801322827798| contact@spagreen.net| September 14th 2025, 10:34  | checked | unverified | not sent  |

---

## Workflow Logic Summary
1. **Trigger Every 5 Minutes**
2. **Fetch All Rows with Pending Status**
3. **Limit to 60 Rows per Execution**
4. **Clean and Format Phone Numbers**
5. **Check Number Validity via Rapiwa**
6. **Condition Check**:
   - If valid → Send Message
   - If invalid → Update status as `not sent`, `unverified`
7. **Send WhatsApp Message via Rapiwa**
8. **Update Sheet Row**
   - On success: `sent`, `verified`, `checked`
   - On failure: `not sent`, `unverified`
9. **Delay 5 seconds before next message**
10. **Repeat for next lead**

---

## Customization Ideas
- Add image or document sending support via Rapiwa
- Customize messages based on additional fields (e.g., product, service)
- Log failures to a separate sheet
- Send admin email for failed batches
- Add support for multilingual messages

---

## Notes & Warnings
- The column name `"name "` includes a space — do **not remove or rename** it.
- International number format is **required** for Rapiwa to work correctly.
- If you're sending many messages, increase the `Wait` node delay to prevent API throttling.

---

## Support
- WhatsApp Support: [Chat Now](https://wa.me/8801322827799)
- Discord: [Join SpaGreen Community](https://discord.gg/SsCChWEP)
- Facebook Group: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- Website: [https://spagreen.net](https://spagreen.net)
- Developer Portfolio: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
