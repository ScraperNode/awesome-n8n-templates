# 📊 Track Google rankings daily with Decodo and Google Sheets

> ⚡ **94 views** · 📊 [Market Research & Insights](../)

## Description

Automatically monitor your keyword positions on Google every day. This workflow uses Decodo to pull live search results and logs them straight into Google Sheets, no manual checking needed.

## Why This Workflow?

**Save Time:** No more spending an hour every morning checking rankings by hand. Everything runs on autopilot.  
**Save Money:** Skip expensive SEO tools that charge per keyword for basic rank tracking.  
**Accurate Data:** Every result — including meta descriptions and URLs — gets recorded without copy-paste mistakes.  
**Easy to Scale:** Want to add more keywords, switch countries, or change devices? Just tweak one config node.

## Who Is This For?

- **SEO Specialists:** Keep tabs on daily keyword movements for clients or internal projects.
- **Content Marketers:** See how your latest content stacks up against competitors for target keywords.
- **Digital Agencies:** Deliver automated ranking reports to clients without touching a spreadsheet manually.

## How It Works

1. **Scheduled Start:** The workflow kicks off every morning at 9:00 AM using the Schedule Trigger.
2. **Set Parameters:** Keyword, country code (e.g., "id"), language ("en"), and device type are defined upfront.
3. **Fetch Results:** The Decodo node runs a live Google search based on your settings.
4. **Filter & Validate:** The workflow strips out ads, maps, and snippets — keeping only organic results with valid URLs.
5. **Store Rankings:** Top results (e.g., Top 5) get appended to a "SERP_Results" tab in Google Sheets.
6. **Log Issues:** If something goes wrong (API timeout, empty results), errors are recorded in a separate "SERP_Errors" tab.

## What You Need

| Requirement | Purpose |
|-------------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Platform to run the workflow |
| [Decodo API](https://decodo.io) | Pulls live Google Search data |
| Google Sheets | Stores ranking data and error logs |

## Setup Steps

1. Import the JSON file into your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin).
2. **Add your credentials:**
   - **Decodo API:** Sign up at Decodo, grab your API key, and paste it into the Decodo Search node.
   - **Google Sheets:** Connect your Google account via OAuth2. Make sure your spreadsheet has two tabs: `SERP_Results` and `SERP_Errors`.
3. **Select your spreadsheet:** In the **Write SERP Results** and **Write SERP Errors** nodes, pick the spreadsheet you prepared.
4. **Adjust your settings:** Open the **Set Search Input** node to change the keyword, country code, and how many results to track (`top_n`).
5. **Run a test:** Click "Test Workflow" and confirm the data shows up in your Google Sheet.

### How the Logic Works

The workflow uses a **Split Out + Extract Organic** approach. Even when Google returns mixed results like ads, map packs, or featured snippets, this setup specifically targets organic blue links. The "Valid Row" check keeps your spreadsheet clean by only saving results that fall within your Top N threshold.

## Customization

**Quick Changes:**
- **Run Frequency:** Switch the Schedule Trigger to hourly, weekly, or whatever fits your needs.
- **Rank Depth:** Change the `top_n` value in the input node to track the Top 10, 20, or 50.

**Going Further:**
- **Slack Alerts:** Add a Slack node to notify your team when a keyword drops out of the Top 3.
- **Multiple Keywords:** Swap the "Set" node with a Google Sheet "Read" node to loop through hundreds of keywords at once.

## Real-World Examples

### Competitor Tracking for E-commerce
**Problem:** A retail brand needs to know who's ranking for "best running shoes" every day.  
**Solution:** This workflow checks the Top 5 results each morning, making it easy to spot when a competitor's blog post overtakes their product page.  
**Outcome:** The marketing team catches ranking drops within 24 hours and updates content right away.

### Local SEO Monitoring
**Problem:** A service business wants to track rankings specifically in Indonesia ("id") using English ("en") search settings.  
**Solution:** By setting the `country` and `language` parameters in the Set node, the workflow captures localized search data accurately.  
**Outcome:** The business gets a clear view of their local visibility without needing a VPN.

---

**Created by:** [Khairul Muhtadin](https://khmuhtadin.com)  
**Category:** Marketing | **Tags:** SEO, SERP, Google Sheets, Decodo  
**Need custom workflows?** [Contact us](https://khmuhtadin.com/contact)

**Connect with the creator:**  
[Portfolio](https://khmuhtadin.com) • [Store](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
