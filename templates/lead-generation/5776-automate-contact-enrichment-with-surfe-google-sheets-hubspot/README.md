# 🎣 Automate contact enrichment with Surfe, Google Sheets & HubSpot

> ⚡ **466 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template enables fully automated lead enrichment using Surfe’s bulk API. Simply drop a Google Spreadsheet into your Google Drive, and n8n will handle everything — from reading the leads, enriching them in batches, filtering valid data, and pushing results to HubSpot.

## 1. ❓ What Problem Does This Solve?

Manually enriching contact lists is tedious, error-prone, and doesn’t scale. Whether you’re importing leads from events, marketing forms, or partners, this workflow ensures each record is enriched and synced to your CRM — hands-free.

---

## 2. 🧰 Prerequisites

To use this template, you’ll need:

- A self-hosted or cloud instance of [n8n](https://n8n.io/)
- A **Surfe API Key**
- A **Google Drive and Sheets** account (with OAuth or service account)
- A **HubSpot account** with access to create/update contacts (via OAuth or Private App Token)
- The workflow JSON file (included with this tutorial)

## 3. 📌 Input File Format

To run the automation, you must upload a Google Spreadsheet to a specific folder in your Drive.

The spreadsheet must contain the following columns:

- `first name` (required)
- `last name` (required)
- Either `company name` or `company domain` (at least one is required)
- `linkedin url` (optional)

🛑 Important: Any row missing first name, last name, and both company name and company domain will be ignored automatically by the workflow.

Each row represents a person to enrich.
We recommend including the `linkedin url` if available, but it's not mandatory.

![Screenshot 20250807 at 11.54.27.png](fileId:1969)

---

## 4. ⚙️ Setup Instructions

### 4.1 🔐 Create Your Credentials in n8n

### 4.1.1 📁 Google Drive

To connect Google Drive and Google Sheets in your workflow, you need to authorize n8n via Google OAuth 2.0 using a **Client ID and Client Secret** from the Google Cloud Console.

---

### 📋 Step 1: Create a Google Cloud Project

1. Visit Google Cloud Console
2. Create a new project or select an existing one
3. Navigate to **APIs & Services → OAuth consent screen**

---

### ⚙️ Step 2: Configure the OAuth Consent Screen

1. Enter the following:
    - App name (e.g. `n8n Integration`)
    - User support email
2. Choose Audience **Type**:
    - `Internal` if you’re using a Google Workspace account
    - `External` if using a personal Gmail account
3. Under Contact information
    - email address
4. Click **Save and Continue**

![Screenshot 20250807 at 11.54.02.png](fileId:1973)

---

### 🔑 Step 3: Create OAuth Client Credentials

1. Go to **APIs & Services → Credentials**
2. Click **+ Create Credentials → OAuth Client ID**
3. Select **Web application** as the application type
4. Name it (e.g. `n8n Google Drive Access`)
5. In **Authorized redirect URIs**, paste this:
    
    ```
    https://oauth.n8n.cloud/oauth2/callback
    ```
    
    *(Or your self-hosted n8n redirect URI)*
    
6. Click **Create**
7. Copy the **Client ID** and **Client Secret**

---

### ✅ Step 4: Finish Setup in n8n

1. In n8n, go to **Credentials → Create New → Google Drive / Google Sheets**
2. Choose **OAuth2**
3. Paste your:
    - Client ID
    - Client Secret
    - Redirect URL (should match Google Console)
4. Click **Sign in with Google**
5. Authorize access and save the credential

![Screenshot 20250807 at 11.43.41.png](fileId:1975)

✅ Your Google Drive is now ready to use in workflows.

---

### 4.1.2 📊 Google Sheets OAuth2 API

1. Go to **n8n → Credentials**
2. Create new credentials:
    - Type: `Google Sheets OAuth2 API`
3. Here a pop-up will open where you can login to your Google account from where you will read the Google Sheets

When it’s done you should see this on n8n

![Screenshot 20250807 at 11.44.35.png](fileId:1970)

---

### 4.1.3 📧 Gmail OAuth2 API

1. Go to **n8n → Credentials**
2. Create new credentials:
    - Type: `Gmail OAuth2 API`
3. A pop-up window will appear where you can log in with your **Google account** that is linked to Gmail
    - Make sure you grant **email send permissions** when prompted

![Screenshot 20250807 at 11.45.06.png](fileId:1968)

---

### 4.1.4 🚀 Surfe API

1. In your [Surfe dashboard](https://www.surfe.com/) → Use Surfe Api → copy your **API key**
2. Go to **n8n → Credentials → Create Credential**
    1. Choose **Credential Type**: `Bearer Auth`
    2. Name it something like `SURFE API Key`
    3. Paste your API key into the `Bearer Token`
    4. Save 

![Screenshot 20250807 at 11.45.58.png](fileId:1971)

---

### 4.1.5 🎯 HubSpot

### 🔓 Private App Token

1. Go to HubSpot → Settings → Integrations → **Private Apps**
    1. Create an app with scopes:
        - `crm.objects.contacts.read`
        - `crm.objects.contacts.write`
        - `crm.schemas.contacts.read`
    2. **Save the App token**
2. Go to **n8n → Credentials → Create Credential → HubSpot App Token**
    1. Paste your App Token

![Screenshot 20250807 at 11.47.05.png](fileId:1977)

![Screenshot 20250807 at 11.47.34.png](fileId:1979)

![Screenshot 20250807 at 11.48.47.png](fileId:1972)

### ✅ You are now all set for the credentials

---

### 4.2 📥 Import and Configure the N8N Workflow

- Import the provided JSON workflow into N8N
    - Create a New Blank Workflow
    - click the `…` on the top left
    - Import from File

![Screenshot 20250807 at 11.49.34.png](fileId:1976)

![Screenshot 20250807 at 11.50.36.png](fileId:1980)

### 4.2.1 🔗 Link Nodes to Your Credentials

In the workflow, link your newly created credentials to each node of this list :

- `Google Drive Node` -&gt; `Credentials to connect with` → `Google Drive Account`
- `Google Sheets` -&gt; `Credentials to connect with` → `Google Sheets Account`
- `Gmail Node Credentials to connect with` → `Gmail account`
- `Hubspot Node` →`Credentials to connect with` → `Gmail account`
- `Surfe HTTP nodes:`
    - Authentication → Generic Credential Type
    - Generic Auth Type → Bearer Auth
    - Bearer Auth → Select the credentials you created before

![Screenshot 20250807 at 11.51.16.png](fileId:1974)


![Surfe HTTP nodes](attachment:03360805-e810-45dc-8f15-3124bcc19889:my_mardownTUTORIAL_3_CSV_Upload__Enrich__Push_to_CRM_or__21ff367b08f280dfbf06ee4ff44747d5image_12.png)

`Surfe HTTP nodes`

`Surfe HTTP nodes`

- HubSpot node → `Credentials to connect with` → select your HubSpot credentials in the list

---

### 4.2.2 🔧 Additional Setup for the Google Drive Trigger Node

![Screenshot 20250807 at 11.52.50.png](fileId:1978)

---

## 5. 🔄 How This N8N Workflow Works

1. A new **Google Sheet** containing a `linkedin_url` column is added to a specific folder in Google Drive
2. n8n detects the new file automatically via the Google Drive Trigger
3. All rows are read and **batched in groups of 500** to comply with Surfe’s API limits
4. Each batch is sent to Surfe’s **Bulk Enrichment API**
5. n8n **polls Surfe** until the enrichment job is complete
6. It extracts the enriched contact data from Surfe’s response
7. Only contacts with **both email and phone number** are kept
8. These validated leads are **pushed to HubSpot**
9. Finally, a **Gmail notification** is sent to confirm the job is complete

---

## 6. 🧩 Use Cases

- **Post-event contact enrichment** – After a trade show, upload a list of LinkedIn profile URLs from badge scans or lead capture forms
- **Outbound LinkedIn campaign follow-ups** – Gather LinkedIn URLs from manual outreach and enrich them into usable CRM leads
- **CRM data enhancement** – Use LinkedIn URLs to fill in missing contact info for existing or imported contacts
- **List building from LinkedIn exports** – Upload a list of LinkedIn profiles (e.g. from Sales Navigator) and turn them into fully enriched contacts in HubSpot

---

## 7. 🛠 Customization Ideas

- 🔁 Add retry logic for failed Surfe enrichment jobs
- 📤 Log enriched contacts into a Google Sheet or Airtable
- 🔍 Add pre-check logic to avoid creating duplicates in HubSpot
- 📊 Extend the flow to generate a basic summary report of enriched vs rejected contacts

---

## 8. ✅ Summary

This workflow turns a basic Google Sheet of LinkedIn URLs into fully enriched, CRM-ready contacts — automatically synced with HubSpot.

Just upload your file.

Let Surfe do the rest.

## 🔗 Nodes Used

Google Sheets, HTTP Request, HubSpot, Gmail, Google Drive Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
