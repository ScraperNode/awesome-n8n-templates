# 🎣 Scrape LinkedIn post comments & reactions with Browserflow → export to Google Sheets

> ⚡ **273 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Scrape LinkedIn Post Comments & Reactions → Export to Google Sheets
![Screenshot 20251118 at 09.00.56.png](fileId:3337)
This workflow lets you quickly extract all **comments** and **reactions** from any public LinkedIn post using Browserflow, then automatically saves the results into two separate Google Sheets tabs. Perfect for audience research, content analysis, engagement tracking, or social listening.


## ⚠️ Disclaimer – Community Node Notice
This template uses a verified community node available inside the n8n cloud environment.
To use it, go to “Nodes” → search for:

*Browserflow for Linkedin*

…and click Install.
It’s officially verified and accessible directly from n8n cloud.

In case you wish to run this template locally, you need to go to the settings, click community nodes and search for *n8n-nodes-browserflow*. Then after installing you can start using the actions in this node.

## How it works

• You click **Execute workflow** to manually start the process
• The workflow fetches your Google Sheet to grab all the post urls that have not been scraped yet.
• The Posts tab is updated so it registered which post was scraped.
• Browserflow scrapes the LinkedIn post (comments + reactions) based on the post URL you provide
• The workflow splits the scraped data into two streams:
 — one for **reactions**
 — one for **comments**
• Each item is appended into its matching Google Sheet tab — keeping everything clean and organized


---

## Requirements

* n8n (cloud or self-hosted)
* Browserflow account (free 7-day trial available at [https://browserflow.io](https://browserflow.io))
* Installed community node: **Browserflow for LinkedIn**
* Google account for Sheets access

---

## ⚙️ Setup Instructions

1. **Install the Browserflow Community Node**
    Go to *Nodes* → search **Browserflow for LinkedIn** → Install

2. **Get your Browserflow API Key**
    Available at [https://browserflow.io](https://browserflow.io)

3. **Connect your Browserflow Credential**
    Open any Browserflow node → Add Credential → paste your API key

4. **Prepare Your Sheet**
    Make a copy of the provided **Make a copy** of the [Google Sheets template](template).
    It already includes three tabs: 
**Posts,** **Comments** and **Reactions**

5. **Find some posts you want to scrape**
    Find some posts on LinkedIn, click on the top right corner and `click copy link to post`, then fill the url in the Posts tab of the sheet.

6. **Run the Workflow**
    Click *Execute workflow*, paste your LinkedIn post URL, and let it scrape everything automatically

---

## 🧩 Customization Tips

* Add more columns to the Sheets if you want to store additional metadata
* Combine this workflow with analytics or CRM integrations
* Add filters if you only want certain reaction types or comments containing keywords
* Schedule it with a Cron trigger to monitor post engagement over time
* Use additional Browserflow actions to scrape profiles or send invites

Let me know if you want me to also create the sticky notes, rewrite for posting in the n8n template library, or generate screenshots with annotation!
![Screenshot 20251118 at 09.00.33.png](fileId:3336)

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
