# 🔬 Automate full agreement lifecycle with JotForm, approvals, Signwell e-signatures & tracking

> ⚡ **288 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*Client Form → Draft → Approve → Sign → Deliver, fully automated*

  This workflow automates the entire agreement lifecycle from client form submission to signed document delivery. It generates personalized agreements from templates, manages internal approvals, orchestrates e-signatures via Signwell, and delivers fully executed documents with complete audit trails in n8n Data Tables.

  ### Good to know
  - Handles client data collection via JotForm with custom field mapping
  - Automatically populates Google Doc templates with client-specific details
  - Internal approval workflow with email-based confirmation
  - Signwell integration for embedded e-signatures - **test mode enabled by default** - disable for legally binding documents
  - Complete lifecycle tracking in n8n Data Tables (draft → approval → sent → signed)
  - Auto-cleanup: removes documents from Signwell after completion to save storage

  ## Who's it for
  Service businesses, consultants, agencies, and freelancers who send agreements to clients regularly. Perfect for anyone wanting to avoid other costly e-signature platforms with limited API and automation capabilities. [Signwell has an affordable entry level tier](https://www.signwell.com/pricing/) with generous API limits. If you're looking to eliminate manual document preparation, have an approval workflow, and track signatures while maintaining professional client communication, then this solution is a good fit.

## How it works
### Phase 1: Draft Creation
  1. JotForm trigger captures client submission (company name, address, contact details, position)
  2. Standardizes form data and duplicates Google Doc template with custom filename
  3. Replaces template variables with client information (company name, address, full name, position, dates)
  4. Creates clean document URL and logs initial record to Data Tables
  5. Emails internal team with draft review link and client details
### Phase 2: Approval & Preparation
  1. Gmail monitors inbox for "Approved" reply email
  2. Fetches agreement record from Data Tables and marks as approved
  3. Downloads Google Doc as PDF and uploads to Drive folder
  4. Grants temporary public sharing access (required for Signwell file import)
  5. Creates Signwell document with embedded signature fields and signing URL
  6. Emails client with personalized signing link
  7. Revokes public sharing access for security and updates Data Tables with Signwell details
### Phase 3: Signature & Delivery
  1. Gmail monitors for Signwell completion notification
  2. Extracts signed document download link from notification email
  3. Downloads fully executed PDF from Signwell
  4. Uploads to "Final Versions" folder in Google Drive
  5. Updates Data Tables with completion status and final document URLs
  6. Sends confirmation email to client with signed PDF attached
  7. Deletes document from Signwell to free up storage

  ## Requirements
  - JotForm account (free tier works)
  - Gmail account with OAuth2 access
  - Google Drive account (OAuth2)
  - Google Docs account (OAuth2) with a draft Agreement template
  - Signwell account with API key
  - n8n Data Tables (built-in, no external service needed)
  - Google Drive folders: "Services Agreements - Drafts" and "Services Agreements - Final Versions"

  ## How to set up
  1. **Add credentials**: JotForm API, Gmail OAuth2, Google Drive OAuth2, Google Docs OAuth2, Signwell API key
  2. **Create JotForm**: Build form with fields: Company Name, Company Address (address field), Full Name (name field), Your Position/Job    
   Title, Email
  3. In "JotForm Trigger" node: select your form
  4. **Create Google Doc template**: Add variables `{{clientCompanyName}}`, `{{clientFullName}}`, `{{clientNamePosition}}`,
  `{{clientCompanyAddress}}`, `{{agreementDate1}}`, `{{agreementDate2}}`
  5. In "Copy and Rename File" node: select your template document and update folder ID to your "Drafts" folder
  6. **Create Data Table**: Name it "Services Agreements" with columns: documentFileName, clientEmail, clientFullName,
  clientNamePosition, clientCompanyName, clientCompanyAddress, documentUrl, approvalStatus, sentDocumentPdfUrl, sentDate, signwellUrl,       
  signwellDocID, docSigned, finalExecutedDocGDrive, finalExecutedDocSignwellUrl
  7. In "Insert Row" and all "Get/Update Row" nodes: select your Data Table
  8. **Create Gmail labels**: "_AGREEMENTS" with 2 nested (sublabels) Agreement-Approvals" and "Agreement-Completed" for filtering
  9. In "Check for Email Approval" node: select your approval label and update internal email address
  10. In "Check Email for Completed Notification" node: select your completed label
  11. In "Create Document in Signwell" node: update API key and adjust signature field coordinates for your document
  12. **Set Signwell to live mode**: Change `"test_mode": true` to `"test_mode": false` when ready for production
  13. Activate workflow

  ## Customizing this workflow
  - **Change template variables**: Edit "Update New File" node to add/remove fields (e.g., pricing, terms, scope of work)
  - **Modify approval email**: Edit "Share Email Draft" node to change recipient, subject line, or message format
  - **Adjust Signwell fields**: Edit "Create Document in Signwell" node to change signature/date field positions (x, y coordinates) to match your agreement template, and add any other fields you'd like
  - **Add approval deadline**: Add Wait node with timeout after "Share Email Draft" to auto-remind for pending approvals
  - **Multi-signer support**: Modify "Create Document in Signwell" recipients array to add multiple signers (e.g., both parties)
  - **Change storage folders**: Update folder IDs in "Upload PDF File" and "Upload Completed Doc" nodes
  - **Add Slack notifications**: Add Slack nodes after key milestones (draft created, approved, signed)
  - **Custom client messaging**: Edit "Send Prepared Agreement to Client" and "Send Client Completed Agreement PDF" nodes for personalized communication
  - **Add reminder logic**: Insert Wait + Send Email nodes between signing and completion to remind client if not signed within X days
## Quick Troubleshooting
  * **JotForm not triggering**: Verify webhook is active in JotForm settings and form ID matches "JotForm Trigger" node
  * **Template variables not replacing**: Check variable names in template doc exactly match `{{variableName}}` format (case-sensitive)      
  * **Wrong internal email for approval**: Update email address in "Share Email Draft" node to your own email
  * **Approval email not detected**: Confirm Gmail label "Agreement-Approvals" exists and reply contains exact word "Approved"
  * **Signwell document creation fails**: Verify PDF has public sharing enabled before API call AND Signwell API key is valid in "Create Document in Signwell" node
  * **Signature fields in wrong position**: Adjust x/y coordinates in "Create Document in Signwell" node (test in Signwell UI first to find correct pixel positions)
  * **Completed document not downloading**: Check Signwell completion email format - Code node extracts link via regex pattern
  * **Data Tables errors**: Ensure documentFileName exactly matches between "Insert Row" and "Get/Update Row" operations
  * **Client emails not sending**: Re-authorize Gmail OAuth2 credentials and verify sender name/address in Gmail nodes
  * **Drive folder not found**: Update folder IDs in "Copy and Rename File", "Upload PDF File", and "Upload Completed Doc" nodes to your own folder IDs
  * **Signwell deletion fails**: Verify signwellDocID was correctly stored in Data Tables before deletion (check "Update Row - Additional Doc Details" output)
  * **401/403 API errors**: Re-authorize all OAuth2 credentials (Gmail, Google Drive, Google Docs)
  * **Test mode documents**: Change `"test_mode": true` to `"test_mode": false` in "Create Document in Signwell" node for production signatures
## Sample Outputs
- Agreement Drafts and Final folders/files in Google Drive

![](https://i.postimg.cc/Jz6kpcxG/Screenshot-2025-10-20-115200.png)

![](https://i.postimg.cc/T3D6sTJ6/Screenshot-2025-10-20-115457.png)

### File References
- [Agreement Template (sample)](https://docs.google.com/document/d/1Nz2sAkDiIxMylzec7vNqOwjP2RRIeV8VOip4UWh2JD8/edit?usp=sharing)
- [Final Agreement Signed (sample)](https://drive.google.com/file/d/1zV4iQ1SDiofNQ9fNXWSABa7-ki0Txhvz/view?usp=sharing)

## 🔗 Nodes Used

HTTP Request, Google Drive, Jotform Trigger, Gmail, Google Docs, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
