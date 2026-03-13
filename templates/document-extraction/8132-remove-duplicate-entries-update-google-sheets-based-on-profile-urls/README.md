# 🔬 Remove duplicate entries & update Google Sheets based on profile URLs

> ⚡ **558 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# **Remove Duplicates & Update Google Sheets**
**How it Works**

This workflow helps you keep your Google Sheets clean and up-to-date by automatically removing duplicate entries and re-uploading the cleaned data back to your sheet. It’s especially useful for large lead lists, email databases, or any dataset where duplicate rows can cause confusion and inefficiency.

**The flow:**

- Trigger the workflow manually.

- Fetch all rows from a specific Google Sheet.

- Identify and remove duplicate rows based on the profileUrl field.

- Convert the cleaned dataset into a file.

- Update the original Google Sheet with the new, deduplicated data.

**Setup Steps**

1. Connect your Google Sheets and Google Drive credentials in n8n.

2. Update the workflow with your desired spreadsheet and sheet ID.

3. Run the workflow by clicking “Execute Workflow” whenever you want to clean up your data.

4. The process only takes a few seconds and ensures your sheet stays organized without any manual effort.

**Use Cases**

- CRM lead management (avoiding duplicate prospects).

- Contact lists with scraped or imported data.

- Marketing databases with overlapping submissions.

## 🔗 Nodes Used

Google Sheets, Google Drive, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
