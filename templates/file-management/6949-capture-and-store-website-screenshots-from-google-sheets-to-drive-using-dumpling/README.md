# 📁 Capture and store website screenshots from Google Sheets to Drive using Dumpling AI

> ⚡ **343 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📄 What this workflow does

This workflow captures a full-page screenshot of any website added to a Google Sheet and automatically uploads the screenshot to a designated Google Drive folder. It uses Dumpling AI’s screenshot API to generate the image and manages file storage through Google Drive.

---

## 👤 Who is this for

This is ideal for:
- Marketers and outreach teams capturing snapshots of client or lead websites
- Lead generation specialists tracking landing page visuals
- Researchers or analysts who need to archive website visuals from URLs
- Anyone looking to automate website screenshot collection at scale

---

## ✅ Requirements

- A **Google Sheet** with a column labeled `Website` where URLs will be added
- **Dumpling AI** API access for screenshot capture
- A connected **Google Drive** account with an accessible folder to store screenshots

---

## ⚙️ How to set up

1. Replace the Google Sheet and folder IDs in the workflow with your own.
2. Connect your Dumpling AI and Google credentials in n8n.
3. Make sure your sheet contains a `Website` column with valid URLs.
4. Activate the workflow to begin watching for new entries.

---

## 🔁 How it works (Workflow Steps)

1. **Watch New Row in Google Sheets**: Triggers when a new row is added to the sheet.
2. **Request Screenshot from Dumpling AI**: Sends the website URL to Dumpling AI and gets a screenshot URL.
3. **Download Screenshot**: Fetches the image file from the returned URL.
4. **Upload Screenshot to Google Drive**: Uploads the file to a selected folder in Google Drive.

---

## 🛠️ Customization Ideas

- Add timestamped filenames using the current date or domain name
- Append the Google Drive URL back to the same row in the sheet for easy access
- Extend the workflow to send Slack or email notifications when screenshots are saved
- Add filters to validate URLs before sending them to Dumpling AI

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
