# 📊 Track website SEO metrics with Moz API and Google Sheets integration

> ⚡ **575 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

### Automated DA PA Checker Workflow for SEO Analysis
### Description
This n8n workflow collects a website URL via form submission, retrieves SEO metrics like Domain Authority (DA) and Page Authority (PA) using the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker), and stores the results in Google Sheets for easy tracking and analysis.

---

### Node-by-Node Explanation 

1. **On form submission** – Captures the website input from the user to pass to the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker).  
2. **DA PA API Request** – Sends the website to the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker) via RapidAPI to fetch DA, PA, spam score, DR, and organic traffic.  
3. **If** – Checks if the API request to the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker) returned a successful response.  
4. **Clean Output** – Extracts only the useful data from the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker) response for saving.  
5. **Google Sheets** – Appends the cleaned SEO metrics to a Google Sheet for record-keeping.

---

## Use Cases
- **SEO Analysis** – Quickly evaluate a website’s DA/PA metrics for optimization strategies.  
- **Competitor Research** – Compare domain authority and organic traffic with competitors.  
- **Link Building** – Identify high-authority domains for guest posting and backlinks.  
- **Domain Purchase Decisions** – Check metrics before buying expired or auctioned domains.

---

## Benefits
- **Automated Workflow** – From input to Google Sheets without manual intervention.  
- **Accurate Metrics** – Uses the trusted [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker) for DA, PA, spam score, DR, and traffic.  
- **Instant Insights** – Get SEO scores in seconds for faster decision-making.  
- **Easy Integration** – Seamless connection between RapidAPI and Google Sheets for data storage.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
