# 📊 AI-driven competitor & market intelligence with GPT 4 & Apify

> ⚡ **1,424 views** · 📊 [Market Research & Insights](../)

## Description

# Automated AI-Driven Competitor & Market Intelligence System

* **Problem Solved:** Small and Medium-sized IT companies often struggle to stay ahead in a rapidly evolving market. Manually tracking competitor moves, pricing changes, product updates, and emerging market trends is time-consuming, inconsistent, and often too slow for agile sales strategies. This leads to missed sales opportunities, ineffective pitches, and a reactive rather than proactive market approach.

* **Solution Overview:** This n8n workflow automates the continuous collection and AI-powered analysis of competitor data and market trends. By leveraging web scraping, RSS feeds, and advanced AI models, it transforms raw data into actionable insights for your sales and marketing teams. The system generates structured reports, notifies relevant stakeholders, and stores intelligence in your database, empowering your team with real-time, strategic information.

* **For Whom:** This high-value workflow is perfect for:
    * **IT Solution Providers & SaaS Companies:** To maintain a competitive edge and tailor sales pitches based on competitor weaknesses and market opportunities.
    * **Sales & Marketing Leaders:** To gain comprehensive, automated market intelligence without extensive manual research.
    * **Product Development Teams:** To identify market gaps and validate new feature development based on competitive landscapes and customer sentiment.
    * **Business Strategists:** To inform strategic planning with data-driven insights into industry trends and competitive threats.

### How It Works (Scope of the Workflow) ⚙️

This system establishes a powerful, automated pipeline for market and competitor intelligence:

1.  **Scheduled Data Collection:** The workflow runs automatically at predefined intervals (e.g., weekly), initiating data retrieval from various online sources.
2.  **Diverse Information Gathering:** It pulls data from competitor websites (pricing, features, blogs via web scraping services), industry news and blogs (via RSS feeds), and potentially other sources.
3.  **Intelligent Data Preparation:** Collected data is aggregated, cleaned, and pre-processed using custom code to ensure it's in an optimal format for AI analysis, removing noise and extracting relevant text.
4.  **AI-Powered Analysis:** An advanced AI model (like OpenAI's GPT-4o) performs in-depth analysis on the cleaned data. It identifies competitor strengths, weaknesses, new offerings, pricing changes, customer sentiment from reviews, emerging market trends, and suggests specific opportunities and threats for your company.
5.  **Automated Report Generation:** The AI's structured insights are automatically populated into a professional Google Docs report using a predefined template, making the intelligence easily digestible for your team.
6.  **Team Notification:** Stakeholders (sales leads, marketing managers) receive automated notifications via Slack (or email), alerting them to the new report and key insights.
7.  **Strategic Data Storage & Utilization:** All analyzed insights are stored in a central database (e.g., PostgreSQL). This builds a historical record for long-term trend analysis and can optionally trigger sub-workflows to generate personalized sales talking points directly relevant to ongoing deals or specific prospects.

---

### Setup Steps 🛠️ (Building the Workflow)

To implement this sophisticated workflow in your n8n instance, follow these detailed steps:

1.  **Prepare Your Digital Assets & Accounts:**
    * **Google Sheet (Optional, if using for CRM data):** For simpler CRM, create a sheet with `CompetitorName`, `LastAnalyzedDate`, `Strengths`, `Weaknesses`, `Opportunities`, `Threats`, `SalesTalkingPoints`.
    * **API Keys & Credentials:**
        * **OpenAI API Key:** Essential for the AI analysis.
        * **Web Scraping Service API Key:** For services like Apify, Crawlbase, or similar (e.g., Bright Data, ScraperAPI).
        * **Database Access:** Credentials for your PostgreSQL/MySQL database. Ensure you've created necessary tables (`competitor_profiles`, `market_trends`) with appropriate columns.
        * **Google Docs Credential:** To link n8n to your Google Drive for report generation. Create a template Google Doc with placeholders (e.g., `{{competitorName}}`, `{{strengths}}`).
        * **Slack Credential:** For sending team notifications to specific channels.
        * **CRM API Key (Optional):** If directly integrating with HubSpot, Salesforce, or custom CRM via API.

2.  **Identify Data Sources for Intelligence:**
    * Compile a list of **competitor website URLs** you want to monitor (e.g., pricing pages, blog sections, news).
    * Identify relevant **online review platforms** (e.g., G2, Capterra) for competitor products.
    * Gather **RSS Feed URLs** from key industry news sources, tech blogs, and competitor's own blogs.
    * Define **keywords** for general market trends or competitor mentions, if using tools that provide RSS feeds (like Google Alerts).

3.  **Build the n8n Workflow (10 Key Nodes):**
    * Start a new workflow in n8n and add the following nodes, configuring their parameters and connections carefully:

    1.  **Cron (`Scheduled Analysis Trigger`):** Set this to trigger daily or weekly at a specific time (e.g., `Every Week`, `At Hour: 0`, `At Minute: 0`).
    2.  **HTTP Request (`Fetch Competitor Web Data`):** Configure this to call your chosen web scraping service's API. Set `Method` to `POST`, `URL` to the service's API endpoint, and build the `JSON/Raw Body` with the `startUrls` (competitor websites, review sites) for scraping, including your API Key in `Authentication` (e.g., `Header Auth`).
    3.  **RSS Feed (`Fetch News & Blog RSS`):** Add the URLs of competitor blogs and industry news RSS feeds.
    4.  **Merge (`Combine Data Sources`):** Connect inputs from both `Fetch Competitor Web Data` and `Fetch News & Blog RSS`. Use `Merge By Position`.
    5.  **Code (`Pre-process Data for AI`):** Write JavaScript code to iterate through merged items, extract relevant text content, perform basic cleaning (e.g., HTML stripping), and limit text length for AI input. Output should be an array of objects with `content`, `title`, `url`, and `source`.
    6.  **OpenAI (`AI Analysis & Competitor Insights`):** Select your OpenAI credential. Set `Resource` to `Chat Completion` and `Model` to `gpt-4o`. In `Messages`, create a `System` message defining AI's role and a `User` message containing the dynamic prompt (referencing `{{ $json.map(item =&gt; ... ).join('\\n\\n') }}` for `content`, `title`, `url`, `source`) and requesting a structured JSON output for analysis. Set `Output` to `Raw Data`.
    7.  **Google Docs (`Generate Market Intelligence Report`):** Select your Google Docs credential. Set `Operation` to `Create document from template`. Provide your `Template Document ID` and map the `Values` from the parsed AI output (using `JSON.parse($json.choices[0].message.content).PropertyName`) to your template placeholders.
    8.  **Slack (`Sales & Marketing Team Notification`):** Select your Slack credential. Set `Chat ID` to your team's Slack channel ID. Compose the `Text` message, referencing the report link (`{{ $json.documentUrl }}`) and key AI insights (e.g., `{{ JSON.parse($json.choices[0].message.content).Competitor_Name }}`).
    9.  **PostgreSQL (`Store Insights to Database`):** Select your PostgreSQL credential. Set `Operation` to `Execute Query`. Write an `INSERT ... ON CONFLICT DO UPDATE` SQL query to store the AI insights into your `competitor_profiles` or `market_trends` table, mapping values from the parsed AI output.
    10. **OpenAI (`Generate Personalized Sales Talking Points` - Optional Branch):** This node can be part of the main workflow or a separate, manually triggered workflow. Configure it similarly to the main AI node, but with a prompt tailored to generate sales talking points based on a specific sales context and the stored insights.

4.  **Final Testing & Activation:**
    * **Run a Test:** Before going live, manually trigger the workflow from the first node. Carefully review the data at each stage to ensure correct processing and output. Verify that reports are generated, notifications are sent, and data is stored correctly.
    * **Activate Workflow:** Once testing is complete and successful, activate the workflow in n8n.

This system will empower your IT company's sales team with invaluable, data-driven intelligence, enabling them to close more deals and stay ahead in the market.

## 🔗 Nodes Used

HTTP Request, Postgres, RSS Read, Slack, Google Docs, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
