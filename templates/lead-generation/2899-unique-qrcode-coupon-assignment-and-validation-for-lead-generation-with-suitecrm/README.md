# 🎣 Unique QRcode coupon assignment and validation for lead generation with SuiteCRM

> ⚡ **2,708 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow is designed to manage the assignment and validation of unique QR code coupons within a lead generation system with SuiteCRM.

---

### **How it Works**

This workflow automates the process of assigning unique QR code coupons to leads generated through a form submission, ensuring no duplicates are created, and validating the usage of coupons. Here's how it operates:

1. **Webhook Trigger**:
   - The workflow starts with a `Webhook` node that listens for incoming requests containing QR code data.
   - A `Set coupon` node extracts the QR code value from the request parameters.

2. **Validation of QR Code**:
   - An `If` node checks if the QR code exists in the incoming data. If it does, the process proceeds; otherwise, a "No coupon" response is sent back.

3. **Coupon Lookup**:
   - The `Get Lead` node queries a Google Sheets document to check if the QR code corresponds to an existing lead.
   - A subsequent `Not used?` node verifies whether the coupon has already been used by checking the "USED COUPON?" field in the sheet.

4. **Lead Duplication Check**:
   - When a new lead submits the form (`On form submission`), the `Duplicate Lead?` node checks if the email already exists in the system to prevent duplicates.

5. **Coupon Assignment**:
   - If the lead is not a duplicate, the `Get Coupon` node retrieves an available unassigned coupon from the Google Sheets document.
   - The `Token SuiteCRM` node generates an access token for SuiteCRM, and the `Create Lead SuiteCRM` node creates a new lead entry in SuiteCRM, associating it with the assigned coupon.

6. **QR Code Generation and Email Notification**:
   - The `Get QR` node generates a QR code image URL for the assigned coupon.
   - The `Send Email` node sends an email to the lead with the QR code attached.

7. **Response Handling**:
   - Depending on the validation results, the workflow responds with appropriate messages:
     - "Coupon OK" if the coupon is valid and unused.
     - "Coupon KO" if the coupon has already been used.
     - "Coupon not valid" if the QR code does not exist.

---

### **Set Up Steps**

To replicate this workflow in your own n8n environment, follow these steps:

1. **Configuration**:
   - Set up an n8n instance either locally or via cloud services.
   - Import the provided JSON configuration file into your workspace.
   - Configure all required credentials, such as:
     - Google Sheets OAuth2 API for accessing the spreadsheet.
     - SuiteCRM API credentials (e.g., `SUITECRMURL`, `CLIENTID`, `CLIENTSECRET`).
     - SMTP credentials for sending emails.

2. **Customization**:
   - Adjust the `Webhook` URL to match your deployment environment.
   - Modify the Google Sheets document ID and sheet name in nodes like `Duplicate Lead?`, `Get Coupon`, `Update Sheet`, and `Update coupon used`.
   - Update the SuiteCRM API endpoint and credentials in nodes like `Token SuiteCRM` and `Create Lead SuiteCRM`.
   - Customize the email template in the `Send Email` node to match your branding and messaging requirements.
   - Ensure the QR code generation URL in the `Get QR` node points to a valid QR code generator service.

By following these steps, you can effectively implement and customize this workflow to manage lead generation and coupon assignments in your organization.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
