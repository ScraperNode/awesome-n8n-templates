# 🧾 Automate client invoicing & payments with Stripe, Google Sheets, Drive and Gmail

> ⚡ **296 views** · 🧾 [Invoice Processing](../)

## Description

# Google Sheets → Stripe Payment Automation Workflow  

## 📌 Overview  
This workflow automates the end-to-end process of generating and sending client payment links using **Google Sheets** and **Stripe**.  

Whenever a new or updated entry is added to the Google Sheet, the workflow will:  
1. Fetch client and invoice details.  
2. Create a **Stripe Product** and **Price**.  
3. Generate a **Stripe Payment Link**.  
4. Store the link back in the Google Sheet.  
5. Upload a copy of the invoice to **Google Drive**.  
6. Send a professional, formatted email with the payment link to the client using **Gmail**.  

🔗 **Demo Video:** [Watch on YouTube](https://youtu.be/0tuQSe-b8G0)  

---

## ⚡️ Workflow Steps  
1. **Trigger** – The workflow is triggered on any update in the **Google Sheet**.  
2. **Filter** – Ensures only relevant rows (e.g., `PENDING` invoices) proceed.  
3. **Stripe Automation**  
   - Create **Stripe Product**  
   - Create **Stripe Price**  
   - Generate **Stripe Payment Link**  
4. **Google Drive** – Store invoice files (if required).  
5. **Google Sheets** – Update the sheet with the generated **Stripe Payment Link** and timestamp.  
6. **Gmail** – Send a client-facing email with the invoice details and payment link.  

---

## 🛠 Setup Guide  

### Prerequisites  
- **n8n account**  
- **Google Sheets & Google Drive credentials**  
- **Gmail API credentials**  
- **Stripe API Key**  

### Steps  
1. **Clone/Import Workflow**  
   - Import the workflow JSON file into your **n8n** instance.  

2. **Configure Google Sheets**  
   - Create a Google Sheet with columns:  
     - `Order ID, Client Name, Client Email, Items Description, Due Date, Amount, Currency, Invoice Status, Invoice Link, Stripe Payment Link, Last Updated`  
   - Connect your **Google Sheets node** to this sheet.  

3. **Set Up Stripe**  
   - Obtain your **Stripe Secret Key** from [Stripe Dashboard](https://dashboard.stripe.com/).  
   - Add it in the Stripe nodes for **Product**, **Price**, and **Payment Link** creation.  

4. **Google Drive**  
   - Configure to store invoice backups (optional).  

5. **Gmail**  
   - Authorize Gmail and set up the **Send Email** node.  
   - Customize the email template with client details and the Stripe link.  

6. **Test the Workflow**  
   - Add a sample row in Google Sheets.  
   - Run the workflow manually or update the sheet to trigger automatically.  
   - Verify that the Stripe link is created, updated in the sheet, and emailed to the client.  

---

✅ Now your workflow is ready to automatically manage client invoices and payments with **Stripe + Google Sheets + Gmail + Google Drive**.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
