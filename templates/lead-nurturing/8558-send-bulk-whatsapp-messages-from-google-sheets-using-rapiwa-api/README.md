# 💬 Send bulk WhatsApp messages from Google Sheets using Rapiwa API

> ⚡ **1,424 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Bulk WhatsApp Campaign Automation with Rapiwa API (Unofficial Integration)

## Who’s it for
This **n8n workflow** lets you send **bulk WhatsApp messages** using your own number through Rapiwa API, avoiding the high cost and limitations of the official WhatsApp API. It integrates seamlessly with **Google Sheets**, where you can manage your contacts and messages with ease. Ideal for **easy-to-maintain** bulk messaging solution using their own personal or business WhatsApp number.
This solution is perfect for small businesses, marketers, or teams looking for a cost-effective way to manage WhatsApp communication at scale.


## How it Works / What It Does
- Reads data from a Google Sheet where the `Status` column is marked as `"pending"`.
- Cleans each phone number (removes special characters, spaces, etc.).
- Verifies if the number is a valid WhatsApp user using the **Rapiwa API**.
- If valid:
  - Sends the message via Rapiwa.
  - Updates `Status = sent` and `Verification = verified`.
- If invalid:
  - Skips message sending.
  - Updates `Status = not sent` and `Verification = unverified`.
- Waits for a few seconds (rate-limiting).
- Loops through the next item.
- The entire process is triggered automatically **every 5 minutes**.

---

## How to Set Up
1. **Duplicate the Sample Sheet**: Use [this format](https://docs.google.com/spreadsheets/d/1Ui4TzzI-Gq-bsEsrZELwW1Kyddw0IU9L1wxlHikktqw/edit?usp=sharing).
2. **Fill Contacts**: Add columns like `WhatsApp No`, `Name`, `Message`, `Image URL`, and set `Status = pending`.
3. **Connect Google Sheets**: Authenticate and link Google Sheets node inside n8n.
4. **Subscribe to Rapiwa**: Go to [Rapiwa.com](https://app.rapiwa.com) and get your API key.
5. **Paste API Key**: Use the HTTP Bearer token credential in n8n.
6. **Activate the Workflow**: Let n8n take care of the automation.

---

## Requirements
- Google Sheets API credentials
- Configured Google Sheet (template linked above)
- WhatsApp (Personal or Business)
- n8n instance with credentials setup

---

## How to Customize the Workflow
- **Add delay between messages**: Use the Wait node to introduce pauses (e.g., 5–10 seconds).
- **Change message format**: Modify the HTTP Request node to send media or templates.
- **Personalize content**: Include dynamic fields like `Name`, `Image URL`, etc.
- **Error handling**: Add IF or SET nodes to capture failed attempts, retry, or log errors.

---

## Workflow Highlights
- **Triggered every 5 minutes** using the Schedule Trigger node.
- **Filters messages** with `Status = pending`.
- **Cleans numbers** and **verifies WhatsApp existence** before sending.
- **Sends WhatsApp messages** via Rapiwa (Unofficial API).
- **Updates Google Sheets** to mark `Status = sent` or `not sent` and `Verification = verified/unverified`.
- **Wait node** prevents rapid-fire sending that could lead to being flagged by WhatsApp.
---

## Setup in n8n
### 1. Connect Google Sheets
- Add a **Google Sheets** node
- Authenticate using your Google account
- Select the document and worksheet
- Use filter: `Status = pending`

### 2. Loop Through Rows
- Use **SplitInBatches** or a **Code** node to process rows in small chunks (e.g., 5 rows)
- Add a **Wait** node to delay 5 seconds between messages

### 3. Send Message via HTTP Node
- How the "Send Message Using Rapiwa" Node Sends Messages
- This node makes an HTTP `POST` request to the Rapiwa API endpoint:  
    `https://app.rapiwa.com/api/send-message`
- It uses **Bearer Token Authentication** with your Rapiwa API key.
- When this node runs, it sends a WhatsApp message to the specified number with the given text and optional image.
- The Rapiwa API handles message delivery using your own WhatsApp number connected to their service.

- **JSON Body**:
```
{
  "number": "{{ $json['WhatsApp No'] }}",
  "message": "{{ $json['Message'] }}"
}
```
---
## Sample Google Sheet Structure
A Google Sheet formatted like this [sample](https://docs.google.com/spreadsheets/d/1Ui4TzzI-Gq-bsEsrZELwW1Kyddw0IU9L1wxlHikktqw/edit?usp=sharing)  

| SL | WhatsApp No   | Name                  | Message             | Image URL                                                                 | Verification | Status  |
|----|----------------|------------------------|----------------------|---------------------------------------------------------------------------|--------------|---------|
| 1  | 8801322827799 | SpaGreen Creative      | This is Test Message | https://spagreen.sgp1.cdn.digitaloceanspaces.com/...                      | verified     | sent    |
| 2  | 8801725402187 | Abdul Mannan Zinnat    | This is Test Message | https://spagreen.sgp1.cdn.digitaloceanspaces.com/...                      | verified     | sent    |
---

## Tips
- Modify the **Limit** node to increase/decrease messages per cycle.
- Adjust the **Wait** node to control how fast messages are sent (e.g., 5–10s delay).
- Make sure WhatsApp numbers are properly formatted (e.g., `8801XXXXXXXXX`, no `+`, no spaces).
- Store your Rapiwa API key securely using **n8n credentials**.
- Use **publicly accessible image URLs** if sending images.
- Always mark processed messages as **"sent"** to avoid duplicates.
- Use the **Error workflow** in n8n to catch failed sends for retry.
- Test with a **small batch** before going full-scale.
- Schedule the **Trigger** node for **every 5 minutes** to keep automation running.
---

## Useful Links
- **Dashboard:** [https://app.rapiwa.com](https://app.rapiwa.com/login)
- **Official Website:** [https://rapiwa.com](https://rapiwa.com/)
- **Documentation:** [https://docs.rapiwa.com](https://docs.rapiwa.com/)


## Support & Community
Need help setting up or customizing the workflow? Reach out here:
- WhatsApp: [Chat with Support](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Server](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Community](https://www.facebook.com/groups/spagreenbd)  
- Website: [SpaGreen Creative](https://spagreen.net)  
- Envato: [SpaGreen Portfolio](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
