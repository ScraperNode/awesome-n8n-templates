# 📈 Automated daily stock market report with Bright Data, GPT-4.1, Airtable/Gmail

> ⚡ **1,783 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# 📘 Workflow Documentation – Stock Market Daily Digest

![automatisationrapportboursierquotidienbaptistefort.png](fileId:2661)

## 👋 Introduction
Wake up to a clean, analyst-style stock digest in your inbox—top gainers/losers, a readable performance table, 3–5 insights, and upcoming events—**no spreadsheets, no manual scraping, no copy-paste**.  
This article explains, step by step, how to build a robust, daily, end-to-end automation that collects market data (Bright Data), waits until scraping is done, aggregates results, asks an AI model (OpenAI) to draft a **styled HTML email**, logs everything to Airtable, and finally sends the report via Gmail.

You’ll find a friendly but technical tour of **every single node**, so you can rebuild or adapt the same pipeline with confidence.

---

## 🎯 Who is this workflow for?
- **Investors & traders** who want a quick, readable daily summary.  
- **Finance/Product teams** building data-driven alerts/digests.  
- **Consultants & agencies** sending recurring client updates.  
- **Automation builders** prototyping finance ops quickly.

---

## 🧰 Tools you’ll need
- **Bright Data** — dataset triggers & snapshots for reliable web data.  
- ** OpenAI (GPT)** — to generate a professional HTML digest.  
- **Airtable** — store daily rows for history, filters, dashboards.  

### Example Airtable Table: `Daily Stocks`

| Ticker | Company                  | Price   | Change % | Sentiment | Date                |
|--------|--------------------------|---------|----------|-----------|---------------------|
| AAPL   | Apple Inc.               | 225.80  | +1.4%    | 🟢 Positive | 2025-09-18 09:00    |
| MSFT   | Microsoft Corporation    | 415.20  | -0.7%    | 🔴 Negative | 2025-09-18 09:00    |
| NVDA   | NVIDIA Corporation       | 124.55  | +2.1%    | 🟢 Positive | 2025-09-18 09:00    |
| TSLA   | Tesla Inc.               | 260.00  | -3.0%    | 🔴 Negative | 2025-09-18 09:00    |
| META   | Meta Platforms Inc.      | 310.45  | +0.5%    | 🟡 Neutral  | 2025-09-18 09:00    |



- **Gmail** — deliver the final HTML email to stakeholders.  
- **n8n** — the automation engine that orchestrates every step.

&gt; Keep API keys in n8n **Credentials** (never hard-code secrets).

---

## 🗺️ Architecture at a glance
1. **Schedule** fires daily  
2. **Seed list** of tickers  
3. **Split** into one item per stock  
4. **Prepare keyword** for scraping  
5. **Launch Bright Data** job  
6. **Poll progress** with a **wait-loop**  
7. **Fetch snapshot data**  
8. **Aggregate** for the AI  
9. **Generate HTML summary** (GPT)  
10. **Save rows to Airtable**  
11. **Send email via Gmail**

---

# ⚙️ Step-by-step — Every node explained

## ⏰ Daily Run Trigger (Schedule Trigger)


![baptistefortautomatisationscrapingboursierbrightdata.png](fileId:2658)

### Purpose
Start the automation at a precise time each day so nobody needs to push a button.

### Parameters (English)
- **Trigger Type**: `Time Interval` or `Cron`  
- **Every X**: `1 Day` (or your preferred cadence)  
- **Timezone**: `UTC` (or your own)  
- **Start Time**: optional (e.g., `09:00`)

---

## 📝 Set Stock List (Set Node – SAMPLE DATA)

### Purpose
Define the universe of stocks to monitor. This acts as the **seed data** for scraping.

### Parameters
- **Values to Set**: `Fixed JSON (array of objects)`  
- **Keep Only Set**: `true`  
- **Fields per item**: `ticker`, `name`, `market_cap` (you may add `sector`, `isin`, etc.)

---

## 🔀 Split Stocks (Split Out)

### Purpose
Turn the array into **individual items** so each ticker is processed independently (scraping, polling, results).

### Parameters
- **Operation**: `Split Out Items`  
- **Field to Split**: the array defined in the previous Set node

---

## 🏷 Prepare Stock Keyword (Set Node)

### Purpose
Create a `keyword` field (typically equal to `ticker`) for Bright Data discovery.

### Parameters
- **Values to Set**: `Add Field`  
- **Field Name**: `keyword`  
- **Value**: use an expression referencing the current item’s ticker (e.g., `` {{ $json.ticker }} ``)

---

## 🕸 Bright Data Scraper (HTTP Request)

### Purpose
Trigger the Bright Data dataset to start collecting information for the `keyword`. Returns a `snapshot_id` to poll later.

### Parameters
- **Method**: `POST`  
- **Endpoint**: `https://api.brightdata.com/datasets/v1/trigger`  
- **Authentication**: `Authorization: Bearer &lt;token&gt;` (header)  
- **Body Fields**:  
  - `dataset_id`: your Bright Data dataset ID  
  - `discover_by`: usually `keyword`  
  - `keyword`: the value prepared above

&gt; Add a retry/backoff policy on 429/5xx in node options.

---

## 🔄 Check Scraper Progress (HTTP Request)

![baptistefortautomatisationdigestboursier.png](fileId:2660)

### Purpose
Poll Bright Data to see whether the snapshot is `running` or `ready`.

### Parameters
- **Method**: `GET`  
- **Endpoint**: `https://api.brightdata.com/datasets/v1/snapshots/{snapshot_id}`  
- **Authentication**: `Authorization: Bearer &lt;token&gt;`  
- **Expected Output**: a `status` field (`running`, `ready`)

---

## ⏳ Wait for Data (Wait Node)

### Purpose
Pause between progress checks to avoid rate limits and give Bright Data time to finish.

### Parameters
- **Mode**: `Wait a fixed amount of time`  
- **Time**: e.g., `30 seconds` (tune to your dataset size)

---

## 🔀 Scraper Status Switch (Switch Node)

### Purpose
Route logic based on the polled `status`.

### Parameters
- **Value to Check**: `status`  
- **Rules**:  
  - Equals `running` → go to **Wait for Data** (then re-check)  
  - Equals `ready` → proceed to **Fetch Scraper Results**

&gt; Loop pattern: **Check → Wait → Check**, until `ready`.

---

## 📥 Fetch Scraper Results (HTTP Request)

### Purpose
Download the completed snapshot data once Bright Data marks it `ready`.

### Parameters
- **Method**: `GET`  
- **Endpoint**: `https://api.brightdata.com/datasets/v1/snapshots/{snapshot_id}/data`  
- **Authentication**: `Authorization: Bearer &lt;token&gt;`  
- **Query**: `format=json`  
- **Output**: array of rows per ticker (price, change %, any fields your dataset yields)

&gt; Normalize fields with a **Set/Code** node if needed.

---

## 📊 Aggregate Stock Data (Aggregate Node)

### Purpose
Combine all individual items into **one consolidated object** so the AI can analyze the entire market snapshot.

### Parameters
- **Mode**: `Aggregate` (merge to a single item)  
- **Fields to Include**: `ticker`, `name`, `price`, `change`, `sentiment` (plus any extra fields captured)  
- **Output**: one JSON item containing an array/map of the day’s stocks

---

## 🤖 Generate Daily Summary (AI Node – OpenAI)

### Purpose
Ask the model to convert raw data into a **styled HTML email**: headline, top movers, table, insights, and (optional) upcoming events.

### Parameters
- **Model**: gpt-4.1 
- **Input**: the aggregated JSON from the previous node  
- **Prompt guidelines**:  
  - Output **HTML only** with inline styles (email-safe)  
  - Include a **table** (Ticker, Company, % Change with ↑/↓ & color, Market Cap, Sentiment icon)  
  - Highlight **top 2 gainers & 2 losers** with short reasoning if present  
  - Provide **3–5 insights** (sector rotation, volatility, outliers)  
  - Add **upcoming events** when available (earnings, launches, macro)  
  - Footer: “Generated automatically by your AI-powered stock monitor”  
- **Output field**: confirm the exact property that contains the HTML (e.g., `output`, `message`, `text`)

---

## 🗂 Save to Airtable (Airtable – Create Record)

### Purpose
Log each item (or the roll-up) to Airtable for history, filtering, and dashboards.

### Parameters
- **Operation**: `Create Record`  
- **Base ID**: from your Airtable URL  
- **Table**: e.g., `Daily Stocks`  
- **Field Mapping**:  
  - `Ticker` ← `` {{ $json.ticker }} ``  
  - `Company` ← `` {{ $json.name }} ``  
  - `Price` ← `` {{ $json.price }} ``  
  - `Change %` ← `` {{ $json.change }} ``  
  - `Sentiment` ← `` {{ $json.sentiment }} ``  
  - `Date` ← `` {{ $now.toISO() }} ``

&gt; Use a Single-Select for `Sentiment` (🟢 / 🟡 / 🔴) to build clean Airtable views.

---

## 📧 Send Report via Gmail (Gmail Node)

![automatisationenvoiemailrapportboursierbaptistefort.png](fileId:2659)

### Purpose
Deliver the AI-generated HTML digest to your recipients.

### Parameters
- **Operation**: `Send Email`  
- **Send To**: one or more recipients (e.g., `investor@domain.com`)  
- **Subject**: `Daily Stock Market Digest – {{ $now.format("yyyy-MM-dd") }}`  
- **Message (HTML)**: reference the AI node’s HTML property (e.g., `` {{ $('Generate Daily Summary').first().json.output }} ``)  
- **Options**: set **Append Attribution** to `false` (keep the email clean)

&gt; Test in Gmail, Outlook, and mobile to validate inline CSS.

---

# 🧪 Error handling & reliability tips
- **Backoff on Bright Data** — If scraping many tickers, increase **Wait** or batch requests.  
- **Guard against empty results** — If a snapshot returns 0 rows, branch to a fallback email (“No data today”).  
- **AI guardrails** — Enforce “HTML-only” and skip missing sections gracefully.  
- **Airtable normalization** — Strip `%`, cast numbers to float before insert.  
- **Observability** — Add a final Slack/Email **On Fail** node with run ID and error message.

---

# 🧩 Customization ideas
- **Sector deep-dives**: add sector fields and a second AI paragraph on sector rotation.  
- **CSV attachment**: generate & attach a CSV for power users.  
- **Multiple lists**: run parallel branches for Tech, Healthcare, or regions.  
- **Other asset classes**: Crypto, ETFs, Indices, FX.  
- **Audience targeting**: different “To” lists and slightly different prompts per audience.

---

# ✅ Why this workflow is powerful
- **Hands-off** — the report simply shows up every day.  
- **Analyst-grade** — clean HTML, top movers, tidy table, actionable insights.  
- **Auditable** — rows archived in Airtable for history and dashboards.  
- **Composable** — swap scrapers, LLMs, storage, or email service.  
- **Scalable** — start with 10 tickers, grow to many lists using the same loop.

For advanced no-code & AI projects, see [0vni – Agence automatisation](https://www.0vni.fr/).

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
