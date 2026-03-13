# 🎣 Scrape business leads from Google Maps and extract decision-maker info with Olostep

> ⚡ **681 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Olostep Google Maps Lead Generation Automation  

This n8n template automates lead generation by scraping Google Maps using the Olostep API.  
It extracts **business names, locations, websites, phone numbers, and decision-maker names** (CEO, Founder, etc.) directly from the business website — and saves everything into a Google Sheet.

## Who’s it for  
- Marketers and agencies doing local business outreach.  
- SaaS founders looking for prospects.  
- Freelancers and growth hackers scraping Google Maps leads.  
- Anyone who wants automated business research without manual data entry.

## How it works / What it does  
1. **Form Trigger:**  
   - User submits a form with: **City** + **Business Type** (e.g., "Dentist in Miami").

2. **Google Maps Scraping:**  
   - The workflow sends the query to the Olostep scraping API.  
   - Extracts:  
     - Business name  
     - Location  
     - Website  
     - Phone number  

3. **Clean the Data:**  
   - Parsed JSON is split into items.  
   - A Remove Duplicates node ensures only unique leads continue.

4. **Loop Through Each Business:**  
   - For every business, the workflow triggers a second Olostep scrape — this time on the **business’s website**.  
   - It extracts:  
     - First name of decision-maker  
     - Last name of decision-maker  
     - (Optional) general contact email found on the website

5. **Store the Lead:**  
   - The final combined lead is appended to a Google Sheet with these fields:  
     - Business Name  
     - Location  
     - Website  
     - Phone Number  
     - Decision-Maker Name  
     - Contact Email (if found)  

6. **Loop & Wait:**  
   - A wait step ensures you stay within rate limits while scraping multiple websites.

This produces a clean, enriched list of leads ready for outreach or CRM import.

## How to set up  
1. Import the template into your n8n workspace.  
2. Add your **Olostep API key**.  
3. Connect **Google Sheets** for output storage.  
4. Publish your form to collect search requests.  
5. Run the workflow — leads will appear automatically in your sheet.

## Requirements  
- Olostep API key.  
- Google Sheets account.  
- n8n account or self-hosted instance.

## How to customize the workflow  
- Add CRM destinations (HubSpot, Airtable, Notion).  
- Expand LLM-extraction to capture: social links, descriptions, ratings, etc.  
- Add validation rules before saving a lead.  
- Enable notification steps (Telegram, Slack) when batches finish.  
- Add additional enrichment steps (e.g., scrape About pages, contact pages, multiple URLs).

---

👉 This workflow gives you a complete lead generation system from Google Maps + business website analysis — with no manual scraping needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
