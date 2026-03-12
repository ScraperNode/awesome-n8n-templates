# 🔬 Create multi-sheet Excel workbooks by merging datasets with Google Drive & Sheets

> ⚡ **663 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Create multi-sheet Excel workbooks in n8n to automate reporting using Google Drive + Google Sheets

Build an automated Excel file with **multiple tabs** directly in n8n. Two Code nodes generate datasets, each is converted into its own Excel **worksheet**, then combined into a single `.xlsx` and (optionally) appended to a Google Sheet for sharing—eliminating manual copy-paste and speeding up reporting.

## Who’s it for
- Teams that publish recurring reports as Excel with **multiple tabs**
- Ops/Marketing/Data folks who want a **no-code/low-code** way to package JSON into Excel
- n8n beginners learning the **Code → Convert to File → Merge** pattern

## How it works
1. **Manual Trigger** starts the run.  
2. **Code** nodes emit JSON rows for each table (e.g., People, Locations).  
3. **Convert to File** nodes turn each JSON list into an Excel binary, assigning **Sheet1/Sheet2** (or your names).  
4. **Merge** combines both binaries into a single Excel workbook with **multiple tabs**.  
5. **Google Sheets (optional)** appends the JSON rows to a live spreadsheet for collaboration.

## Setup (only 2 connections)

### 1️⃣ Connect Google Sheets (OAuth2)
1. In **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Sign in with your Google account and grant access  
3. **Copy the example sheet referenced in the Google Sheets node** (open the node and duplicate the linked sheet), or select your own  
4. In the workflow’s **Google Sheets** node, select your **Spreadsheet** and **Worksheet**

https://docs.google.com/spreadsheets/d/1G6FSm3VdMZt6VubM6g8j0mFw59iEw9npJE0upxj3Y6k/edit?gid=1978181834#gid=1978181834


### 2️⃣ Connect Google Drive (OAuth2)
1. In **n8n → Credentials → New → Google Drive (OAuth2)**  
2. Sign in with the Google account that will store your Excel outputs and **allow access**  
3. In your Drive-related nodes (if used), point to the **folder** where you want the `.xlsx` saved or retrieved

## Customize the workflow
- Replace the sample arrays in the **Code** nodes with your data (APIs, DBs, CSVs, etc.)  
- Rename **sheetName** in each **Convert to File** node to match your desired tab names  
- Keep the **Merge** node in **Combine All** mode to produce a single workbook  
- In **Google Sheets**, switch to **Manual mapping** for strict column order (optional)

## Best practices (per template guidelines)
- **Rename nodes** to clear, action-oriented names (e.g., “Build People Sheet”, “Build Locations Sheet”)  
- Add a **yellow Sticky Note** at the top with this description so users see setup in-workflow  
- **Do not hardcode credentials** inside HTTP nodes; always use n8n Credentials  
- Remove personal IDs/links before publishing

## Sticky Note (copy-paste)
&gt; **Multi-Tab Excel Builder (Google Drive + Google Sheets)**  
&gt; This workflow generates two datasets (Code → JSON), converts each to an Excel sheet, merges them into a **single workbook with multiple tabs**, and optionally appends rows to Google Sheets.  
&gt;  
&gt; **Setup (2 connections):**  
&gt; 1) **Google Sheets (OAuth2):** Create credentials → duplicate/select your target spreadsheet → set Spreadsheet + Worksheet in the node.  
&gt; 2) **Google Drive (OAuth2):** Create credentials → choose the folder for storing/retrieving the `.xlsx`.  
&gt;  
&gt; **Customize:** Edit the Code nodes’ arrays, rename tab names in Convert to File, and adjust the Sheets node mapping as needed.

## Troubleshooting
- **Missing columns / wrong order:** Use **Manual mapping** in the Google Sheets node  
- **Binary not found:** Ensure each **Convert to File** node’s `binaryPropertyName` matches what **Merge** expects  
- **Permissions errors:** Re-authorize Google credentials; confirm you have edit access to the target Sheet/Drive folder

## 📬 Contact  
Need help customizing this (e.g., filtering by campaign, sending reports by email, or formatting your PDF)?  

- 📧 **rbreen@ynteractive.com**  
- 🔗 **https://www.linkedin.com/in/robert-breen-29429625/**  
- 🌐 **https://ynteractive.com**

## 🔗 Nodes Used

Google Sheets, Google Drive, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
