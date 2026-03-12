# 🎣 Drive-to-store lead generation (with coupon) with Google Sheets & SuiteCRM

> ⚡ **3,352 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Drive-to-Store is a multi-channel marketing strategy that includes both the web and the physical context, with the aim of increasing the number of customers and sales in physical stores. This strategy guides potential customers from the online world to the physical point of sale through the provision of a coupon that can be spent in the store or on an e-commerce site.

The basic idea is to have a landing page with a form and a series of unique coupons to assign to leads as a "reward" for filling out the form.

This workflow is ideal for businesses looking to automate lead generation and management, especially when integrating with CRM systems like SuiteCRM and using Google Sheets for data tracking.

### **How It Works**
1. **Form Submission**:
   - The workflow starts with the **On form submission** node, which triggers when a user submits a form on a landing page. The form collects the user's name, surname, email, and phone number.

2. **Form Data Processing**:
   - The **Form Fields** node extracts and sets the form data (name, surname, email, and phone) for use in subsequent steps.

3. **Duplicate Lead Check**:
   - The **Duplicate Lead?** node checks if the submitted email already exists in a Google Sheets document. If the email is found, the workflow responds with a "duplicate lead" message (**Respond KO** node) and stops further processing.

4. **Coupon Retrieval**:
   - If the email is not a duplicate, the **Get Coupon** node retrieves a coupon code from the Google Sheets document based on the lead's email.

5. **Lead Creation in SuiteCRM**:
   - The **Create Lead SuiteCRM** node creates a new lead in SuiteCRM using the form data and the retrieved coupon code. The lead includes:
     - First name, last name, email, phone number, and coupon code.

6. **Google Sheets Update**:
   - The **Update Sheet** node updates the Google Sheets document with the newly created lead's details, including:
     - Name, surname, email, phone, coupon code, lead ID, and the current date and time.

7. **Response to Webhook**:
   - The **Respond OK** node sends a success response back to the webhook, indicating that the lead was created successfully.

---

### **Set Up Steps**
1. **Configure Form Trigger**:
   - Set up the **On form submission** node to collect user data (name, surname, email, and phone) via a web form.

2. **Set Up Google Sheets Integration**:
   - Configure the **Duplicate Lead?**, **Get Coupon**, and **Update Sheet** nodes to interact with the Google Sheets document. Ensure the document contains columns for email, coupon, lead ID, and other relevant fields.

3. **Set Up SuiteCRM Authentication**:
   - Configure the **Token SuiteCRM** node with the appropriate client credentials (client ID and client secret) to obtain an access token from SuiteCRM.

4. **Set Up Lead Creation in SuiteCRM**:
   - Configure the **Create Lead SuiteCRM** node to send a POST request to SuiteCRM's API to create a new lead. Include the form data and coupon code in the request body.

5. **Set Up Webhook Responses**:
   - Configure the **Respond OK** and **Respond KO** nodes to send appropriate JSON responses back to the webhook based on whether the lead was created or if it was a duplicate.

6. **Test the Workflow**:
   - Submit a test form to ensure the workflow correctly checks for duplicates, retrieves a coupon, creates a lead in SuiteCRM, and updates the Google Sheets document.

7. **Activate the Workflow**:
   - Once tested, activate the workflow to automate the process of handling form submissions and lead creation.

---

### **Key Features**
- **Duplicate Lead Check**: Prevents duplicate leads by checking if the email already exists in the Google Sheets document.
- **Coupon Assignment**: Retrieves a coupon code from Google Sheets and assigns it to the new lead.
- **SuiteCRM Integration**: Automatically creates a new lead in SuiteCRM with the form data and coupon code.
- **Data Logging**: Logs all lead details in a Google Sheets document for tracking and analysis.
- **Webhook Responses**: Provides immediate feedback on whether the lead was created successfully or if it was a duplicate.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
