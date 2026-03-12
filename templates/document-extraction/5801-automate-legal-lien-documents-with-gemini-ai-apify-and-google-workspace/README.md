# 🔬 Automate legal lien documents with Gemini AI, Apify, and Google Workspace

> ⚡ **650 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Automate Legal Document Generation with n8n, Apify, Google Drive, and AI

This tutorial details an end-to-end automation solution for streamlining the lien filing process for Homeowners Associations (HOAs) using an n8n workflow. It significantly reduces manual effort and potential errors for legal professionals by automating document retrieval, information extraction, and document generation.

#### Who's it for

This template is ideal for legal professionals, law firms, and property management companies that frequently handle lien filings for Homeowners Associations. If you're looking to reduce manual document processing time, minimize errors, and improve efficiency in your legal operations, this workflow is for you.

#### The Problem

Legal professionals often allocate a significant portion of their time—up to 40%—to manual document processing tasks. The traditional process for filing a lien is particularly time-consuming (e.g., 15 minutes per case) and error-prone, involving steps like manual searching, downloading, extracting, and populating legal documents.

#### The Automation Solution Overview

This automation leverages an n8n workflow in conjunction with external services like Playwright (via Apify), Google Drive, Google Sheets, Gmail, and the Gemini API. The primary objective is to automate the legal document generation process—from initial data submission to final document generation and notification.

#### Requirements

Before importing and running the n8n workflow, you need the following:

* **n8n Instance:** A running n8n instance (self-hosted or cloud).
* **Google Account:** With access to Google Sheets, Google Drive, and Gmail.
* **Google Sheets:**
    * An **Input Sheet** to receive form responses (e.g., "Legal Automation Input Form (Responses)").
    * An **Output/Review Sheet** for extracted data and approval (e.g., "Automation Output data Sheet") with specific columns like "Timestamp", "Legal Description", "Association Name", "Debt", "Parcel", "Owner", "Doc link", "Approval", and "Created".
* **Google Drive:**
    * A main folder for n8n outputs (e.g., "N8N Folder").
    * A Google Docs **Lien Template** with placeholders (e.g., `{{ASSOCIATION}}`, `{{DEBT}}`, `{{PROPERTY}}`, `{{MONTH}}`, `{{YEAR}}`, `{{DAY}}`, `{{PARCEL}}`, `{{OWNER}}`).
* **Google Gemini API Key:** For text and image processing.
* **Apify Account & Playwright Actor:** An Apify account with access to a Playwright actor capable of scraping property information from your target county's website.

#### Setup Steps

1.  **n8n Credentials:**
    * Add Google Sheets, Google Drive, and Gmail credentials in your n8n instance.
    * Add an `HTTP Query Auth` credential for your Gemini API key (named "Query Auth account" in the template).
    * Ensure your Apify API token is configured within the `Apify Playwright script to find property info` node.
2.  **Google Sheets Configuration:**
    * Link the `Google Sheets Trigger` node to your **Input Sheet**.
    * Link the `Google Sheets` node (for appending data) and the `Intermediate data received` trigger to your **Output/Review Sheet**.
3.  **Google Drive Configuration:**
    * Update the `Create folder to output` node with the ID of your "N8N Folder".
    * Update the `Make Copy of Template` node with the ID of your Google Docs Lien Template.
4.  **Email Addresses:**
    * Update the recipient email addresses in the `Approve Through Email` and `Notify complete` nodes to your desired notification email.

#### Detailed Tutorial Steps and n8n Workflow Breakdown Summary

This n8n workflow, "Legal Document Generator E2E", automates the process of generating legal lien documents, from initial data input to final document creation and notification.

1.  **Initiate Workflow:** The workflow starts with a `Google Sheets Trigger` node, which listens for new lien requests submitted via a form that populates a Google Sheet.
2.  **Gather Property Data:** An `Apify Playwright script to find property info` node fetches property details from county websites, and a `Get file for property` node downloads associated legal documents.
3.  **Process and Store Document:** The downloaded document is transformed to base64 using `Transform to base64` and then uploaded to Google Drive via `Upload legal doc` for storage and further processing.
4.  **Extract Information with AI:** `Call Gemini API for legal desc` and `Property metadata` nodes leverage the Gemini API to extract the precise legal description, parcel number, and owner's name from the document. This extracted data is then structured by the `Property Information Extractor`.
5.  **Review and Approve:** The extracted information is appended to an intermediate Google Sheet by the first `Google Sheets` node, and an email is sent via `Approve Through Email` to the user for review and approval.
6.  **Generate Documents on Approval:** A second `Intermediate data received` `Google Sheets Trigger` node monitors the approval status in the sheet. Once "Approved", an `If` node allows the workflow to proceed.
7.  **Create and Populate Documents:** A new client-specific folder is created in Google Drive using `Create folder to output`. A blank lien template is copied (`Make Copy of Template`), and its custom variables are populated with the extracted data using `Change Custom Variables`.
8.  **Finalize and Store Output:** The populated document is converted to PDF (`Generate PDF`), and both the new PDF (`Add PDF To Drive`) and the original source document (`Move file in Google Drive`) are saved to the client's new folder.
9.  **Update Records and Notify:** The `Update Creation` `Google Sheets` node marks the document as "Created" in the tracking sheet and updates the document link. Finally, `Notify complete` sends a notification email about the completion.

#### How to Customize the Workflow

* **Adjust Input Form Fields:** Modify the column names in your initial Google Sheet and update the expressions in the `Google Sheets Trigger` and `Apify Playwright script to find property info` nodes to match your form.
* **Change County Website/Scraper:** If you need to fetch data from a different county or property database, you will need to modify the `Apify Playwright script to find property info` node to call a different Apify actor or configure a new HTTP Request node to interact with your chosen data source.
* **Customize Document Template:** Update the placeholders in your Google Docs Lien Template to match your specific document needs. Ensure corresponding `replaceAll` actions are updated in the `Change Custom Variables` node.
* **Modify AI Prompts:** Refine the prompts within the `Call Gemini API for legal desc` and `Property metadata` nodes to improve the accuracy of information extraction based on your document types.
* **Notification Preferences:** Adjust the `sendTo` email addresses and `subject`/`message` content in the `Approve Through Email` and `Notify complete` nodes.

#### Benefits of this Automation

This automation offers significant advantages for legal professionals:

* **Streamlined Organization:** Ensures all relevant documents—original source files, editable templates, and final PDFs—are systematically organized, tracked, and easily accessible within Google Drive.
* **Time-Saving and Efficiency:** Documents are quickly generated and ready for client sharing, leading to faster turnaround times and improved service delivery.
* **Scalability:** Provides a scalable solution for handling a higher volume of document processing tasks without a proportional increase in manual effort.

---
Learn more about Chill Labs and our services on our website: [Chill Labs](https://www.chillaborate.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Docs, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
