# 🎣 Auto-collect business leads from Google Maps with APIFY and Gmail

> ⚡ **442 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for?

- Marketers, lead generation agencies, freelancers, consultants, and sales teams who need to collect business leads from Google Maps.
- Small business owners looking to build targeted local business lists.
- Anyone interested in automating web scraping without coding skills.
What problem is this workflow solving?

Manually scraping business data from Google Maps is time-consuming and repetitive. This automation simplifies the process by:
- Collecting business details based on search terms and location.
- Filtering out irrelevant results.
- Delivering qualified leads directly to your inbox.
What this workflow does

This workflow automates Google Maps lead scraping using APIFY and sends the gathered leads via email. The steps include:
- Collecting user input through a simple form (business type, location, recipient email).
- Sending an HTTP request to APIFY to run a Google Maps scraper (actor).
- Filtering results to include only businesses with email addresses.
- Converting results to CSV format.
- Sending an automated email with the leads as a CSV attachment via Gmail.
Setup
1. Create an APIFY Account:
- Sign up at APIFY.COM (https://apify.com/).
- You get $5 in free credits (~1,000 leads).
2. Get Your API Key:
- Copy your API key from APIFY
3. Prepare n8n:
- Create a new workflow.
- Add an HTTP Request node to interact with APIFY.
- Configure authentication with your API key.
4. Customize the Form:
- Build a simple form inside n8n to collect user inputs: Business Type, City, Country, Recipient Email.
5. Filter Results:
- Use IF and Filter nodes to remove entries without email addresses.
6. Convert to CSV:
- Use a "Spreadsheet File" node to generate a CSV from the filtered leads.
7. Send Email:
- Use the Gmail node (or any email node) to send the CSV file to the provided recipient.
How to customize this workflow to your needs

- Change search parameters to target different business niches or locations.
- Add filters to only include businesses with websites.
- Customize the email subject and body.
- Integrate with CRM or marketing platforms for direct lead injection.
- Expand filtering logic for more refined targeting.
Notes

- This template uses APIFY (paid service after free credits).
- You will need an APIFY API key and a Gmail account (or SMTP credentials) to run this automation.
- For self-hosted n8n users: ensure you have internet access and proper credentials set up for external HTTP requests.

Want A Video Tutorial on How To Setup This Automation : 
https://www.youtube.com/watch?v=Kz_Gfx7OH6o

## 🔗 Nodes Used

HTTP Request, Gmail, Filter, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
