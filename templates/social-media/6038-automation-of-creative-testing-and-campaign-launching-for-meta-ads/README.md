# 📱 Automation of creative testing and campaign launching for Meta ads

> ⚡ **3,334 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow is a comprehensive solution for digital marketers, performance agencies, and e-commerce brands looking to scale their creative testing process on Meta Ads efficiently. It eliminates the tedious manual work of uploading assets, creating campaigns, and setting up ads one by one.

#### **Use Case**
Manually launching weekly creative tests is time-consuming and prone to errors. This workflow solves that problem by creating a fully automated pipeline: from a creative asset in a folder to a complete, ready-to-launch (but paused) ad structure in your Meta Ads account. It's perfect for teams that want to:
*   Save hours of manual work every week.
*   Systematically test a high volume of creatives.
*   Maintain a structured and consistent campaign naming convention.
*   Keep a detailed log of all created assets for data-driven performance analysis.

#### **How it Works**

The workflow is structured into four logical blocks:

**1. Configuration & Scheduling:**
*   The workflow runs on a weekly schedule.
*   A central **"Configuration" Set node** at the beginning holds all key variables (Ad Account ID, Page ID, Pixel ID, making it incredibly easy to adapt the template for different projects.

**2. Creative Ingestion & Processing:**
*   It scans a specific Google Drive folder for new image and video files.
*   Using an **IF node**, it branches the logic based on the file type.
*   Each file is uploaded to the Meta Ads library, and a corresponding **Ad Creative** is built with a pre-defined destination URL.

**3. Campaign & Ad Set Assembly:**
*   The workflow creates a single new **Campaign** with an `OUTCOME_SALES` objective.
*   It then creates a single **Ad Set** optimized for `OFFSITE_CONVERSIONS` (e.g., "Add to Cart"), using the Pixel ID from the configuration.
*   A **Merge node** intelligently combines the single Ad Set ID with every creative processed in the previous block, preparing the data for the final step.

**4. Ad Creation & Data Logging:**
*   The workflow iterates through the prepared data, creating a unique **Ad** for each creative.
*   Upon the successful creation of each ad, a new row is appended to a Google Sheet, logging all relevant IDs (`CampaignID`, `AdSetID`, `AdID`, `CreativeID`) and metadata for a complete audit trail.

---

### **Setup Instructions**

To use this template, you need to configure a few key nodes.

**1. Credentials:**
*   Connect your **Meta Ads** account.
*   Connect your **Google** account (for both Drive and Sheets).

**2. The `⚙️ Configuration` Node (Set node):**
This is the most important step. Open the first `Set` node and fill in your specific values:
*   `adAccountId`: Your Meta Ad Account ID.
*   `pageId`: The ID of the Facebook Page you're advertising for.
*   `pixelId`: Your Meta Pixel ID for conversion tracking.

**3. Google Sheets Node (`Save Full Report to Sheet`):**
*   Select your spreadsheet and the specific sheet where you want to save the reports.
*   Make sure your sheet has columns with the following headers: `CampaignID`, `AdSetID`, `AdID`, `CreativeID`, `FileName`, `MimeType`, `Timestamp`.

**4. Check URLs and IDs in HTTP Request Nodes:**
*   The template is configured to use the variables from the `⚙️ Configuration` node. Double-check that the URLs in the `Create Campaign`, `Create Ad Set`, and `Create ... Creative` nodes correctly reference these variables (e.g., `.../act_{{ $('⚙️ Configuration Meta Ads').item.json.adAccountId }}/campaigns`).
*   Verify the `link` in the `Create Video Creative` and `Create Image Creative` nodes points to your desired landing page.

**5. Activate the Workflow:**
*   Set your desired schedule in the `Schedule Trigger` node.
*   Save and activate the workflow.

---

### **Further Ideas & Customization**

This workflow is a powerful foundation. You can easily extend it to:
*   **Create a second workflow** that runs a week later, reads the Google Sheet, and pulls performance data for all the ads created.
*   **A/B test ad copy** by adding different text variations from a spreadsheet.
*   **Add a Slack or Email notification** at the end to confirm that the weekly campaign launch was successful.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
