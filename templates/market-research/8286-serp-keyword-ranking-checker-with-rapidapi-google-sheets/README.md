# 📊 SERP keyword ranking checker with RapidAPI & Google Sheets

> ⚡ **356 views** · 📊 [Market Research & Insights](../)

## Description

## 🔍 SERP Keyword Ranking Checker with RapidAPI & Google Sheets

**Automate keyword SERP ranking lookups** and log the data into Google Sheets using this no-code n8n workflow. Perfect for SEO professionals, digital marketers, or anyone tracking keyword visibility across regions.

---

## 🧰 Tools Used

- [**SERP Keyword Ranking Checker API**](https://rapidapi.com/PrineshPatel/api/serp-keyword-ranking-checker) – Fetch real-time keyword SERP data
- **Google Sheets** – Log keyword data for tracking, analysis, or client reporting

---

## 📌 Workflow Overview

1. User submits a **keyword** and **country code** via an n8n form
2. Workflow sends a request to the **SERP Keyword Ranking Checker API**
3. API response is checked:
   - If **valid data is found**, it is logged to Google Sheets
   - If **no results are found**, a fallback message is saved instead
4. Optional delays added to space out operations

---

## ⚙️ Node-by-Node Breakdown

### 1. 🟢 Form Trigger: `On form submission`
- Accepts user input for:
  - `keyword` (e.g. "labubu")
  - `country` (e.g. "us")

### 2. 📦 Set Node: `Global Storage`
- Stores form input into variables (`keyword`, `country`) for use in API requests and logging.

### 3. 🌐 HTTP Request: `SERP Keyword Ranking Checker`
- Sends a `POST` request to the [SERP Keyword Ranking Checker API](https://rapidapi.com/PrineshPatel/api/serp-keyword-ranking-checker) with:
  - `keyword`
  - `country`
- Includes headers:
  ```http
  x-rapidapi-host: serp-keyword-ranking-checker.p.rapidapi.com
  x-rapidapi-key: YOUR_RAPIDAPI_KEY
### 4. ⚖️ If Node: Condition Checking

Checks whether the `serpResults` array returned by the API is non-empty.

- ✅ **True Branch**: Proceeds if valid SERP data is available.
- ❌ **False Branch**: Proceeds if no SERP data is returned (e.g., empty result).

---

### 5. ⏳ Wait Node: 5-Second Delay

Adds a 5-second delay before proceeding to Google Sheets insertion.  
This helps control execution pace and ensures API rate limits or spreadsheet latency is handled smoothly.

- Used on **both True and False branches** for consistency.

---

### 6. 📊 Google Sheets (Success Path)

Appends a new row into the selected Google Sheet with:

- `Keyword` – the submitted keyword
- `Country` – selected country code
- `Json data` – full `serpResults` JSON array returned by the API

💡 Ideal for tracking keyword rankings over time or populating live dashboards.

---

### 7. 📊 Google Sheets (Failure Path)

Appends a fallback message into the Google Sheet when no SERP results are found.

- `Keyword` – the submitted keyword
- `Country` – selected country code
- `Json data` – `"No result found. Please try another keyword..."`

🔍 Helps maintain a log of unsuccessful queries for debugging or auditing.

---
### 💡 Use Cases

- **SEO Audits**  
  Automate keyword performance snapshots across different markets to identify opportunities and gaps.

- **Competitor Analysis**  
  Track keyword rankings of rival brands in real time to stay ahead of competition.

- **Client Reporting**  
  Feed live SERP data into dashboards or reports for transparent, real-time agency deliverables.

- **Content Strategy**  
  Discover which keywords surface top-ranking pages to guide content creation and optimization efforts.
---

### 🔑 How to Obtain Your API Key for SERP Keyword Ranking Checker API

1. **Sign Up or Log In**  
   Visit [RapidAPI](https://rapidapi.com/PrineshPatel/api/serp-keyword-ranking-checker) and create a free account using your email or social login.

2. **Go to the API Page**  
   Navigate to the [SERP Keyword Ranking Checker APi](https://rapidapi.com/PrineshPatel/api/serp-keyword-ranking-checker).

3. **Subscribe to the API**  
   Click **Subscribe to Test**, then choose a pricing plan that fits your needs (Free, Basic, Pro).

4. **Get Your API Key**  
   After subscribing, go to the **Security** tab on the API page to find your **X-RapidAPI-Key**.

5. **Use Your API Key**  
   Add the API key to your HTTP request headers:  
   ```http
   X-RapidAPI-Key: YOUR_API_KEY
---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
