# 🧾 Send PDF renewal invoices for expiring domains with CraftMyPDF, Gmail, and Google Sheets

> ⚡ **76 views** · 🧾 [Invoice Processing](../)

## Description

This workflow automates the **management of expiring domains** and **invoice generation**.

The workflow checks whether a domain is expiring on the current date. If so, it automatically generates a PDF invoice using an external API, downloads the invoice, and emails it to the client.

After sending the invoice, the workflow updates the Google Sheet to mark the invoice as sent and **adds a new expiration date for the next year**, ensuring continuous tracking of domain renewals.

---

### **Key Advantages**

#### **1. ✅ Full Automation of Billing Process**

The workflow eliminates manual work by automatically:

* Detecting expiring domains
* Generating invoices
* Sending emails to clients

This reduces administrative effort and human error.

#### **2. ✅ Time-Saving and Scalable**

Once set up, the system can handle **any number of domains** without additional effort, making it ideal for scaling domain management operations.

#### **3. ✅ Accurate and Timely Notifications**

By comparing expiration dates with the current date, invoices are sent **exactly when needed**, avoiding missed renewals or delays.

#### **4. ✅ Seamless Integration**

The workflow integrates multiple services:

* Google Sheets (data source and tracking)
* CraftMyPDF API (invoice generation)
* Gmail (email delivery)

This creates a smooth, end-to-end automation pipeline.

#### **5. ✅ Data Consistency and Tracking**

After processing:

* The sheet is updated to mark invoices as sent
* A new expiration date is added automatically

This ensures your data remains always up-to-date and reliable.

#### **6. ✅ Improved Cash Flow Management**

Automatic invoice delivery helps ensure clients receive renewal requests promptly, increasing the likelihood of **on-time payments**.

#### **7. ✅ Customizable and Extendable**

The workflow can easily be expanded (e.g., adding reminders, payment tracking, or CRM integration) thanks to n8n’s modular structure.

---

### **How it works**

1. **Trigger**  
   The workflow can be triggered manually or on a schedule (e.g., daily) to check for domains expiring.

2. **Fetch domain data**  
   It reads a Google Sheets document (`Expiring domains`) containing rows with domain names, renewal prices, client emails, expiration dates, and an `INVOICE SENT` flag.

3. **Check expiration condition**  
   The `If` node compares the row’s `EXPIRING` date with the current date. Only rows where the expiration date equals today proceed.

4. **Generate PDF invoice**  
   For each matching domain, it calls the CraftMyPDF API to generate an invoice using a predefined template.  
   The invoice includes the domain name, renewal price, and grand total.

5. **Download the PDF**  
   A second HTTP request fetches the generated PDF from the URL returned by CraftMyPDF.

6. **Send email with attachment**  
   Gmail sends the invoice as an attachment to the client’s email address, with a custom message regarding domain renewal.

7. **Update the sheet**  
   The `INVOICE SENT` column is marked with `"x"` for the processed row.

8. **Add next expiration date**  
   A new row is appended to the same sheet with the same domain, renewal price, client email, and a new expiration date set to one year from today.

---

### **Set up steps**

1. **Google Sheets setup**  
   - Create a Google Sheet with columns: `EXPIRING`, `DOMAIN`, `RENEW`, `CLIENT EMAIL`, `INVOICE SENT`.  
   - Share the sheet with the Google account used in n8n.  

2. **Credentials**  
   - **Google Sheets OAuth2** – authenticate with access to the spreadsheet.  
   - **Gmail OAuth2** – authenticate the email account used to send invoices.  
   - **HTTP Header Auth** – create a credential for CraftMyPDF with the appropriate API key.

3. **CraftMyPDF template**  
   - Design an invoice template in CraftMyPDF.  
   - Copy the template ID and replace `"xxxxxxxx"` in the HTTP request node’s JSON body.

4. **Adjust date format**  
   Ensure the date format (`dd/LL/yyyy`) in the `If` node and `Add next expire date` node matches your sheet’s date format.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
