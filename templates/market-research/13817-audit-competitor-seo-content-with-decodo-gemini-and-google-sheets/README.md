# 📊 Audit competitor SEO content with Decodo, Gemini, and Google Sheets

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

## Description

## **Never guess your SEO strategy again.**

This advanced workflow automates the most time-consuming part of SEO: auditing competitor articles and identifying exactly where your brand can outshine them. It extracts deep content from top-ranking URLs, compares it against your specific brand identity, and generates a ready-to-use "Action Plan" for your content team.

The workflow uses **Decodo** for high-fidelity scraping, **Gemini 2.5 Flash** for strategic gap analysis, and **Google Sheets** as a dynamic "Brand Brain" and reporting dashboard.

---

## **✨ Key Features**

* **Brand-Centric Auditing:** Unlike generic SEO tools, this engine uses a live Google Sheet containing your **Brand Identity** to find "Content Gaps" specific to your unique value proposition.
* **Automated SERP Itemization:** Converts a simple list of keywords into a filtered list of top-performing competitor URLs.
* **Deep Markdown Extraction:** Uses [Decodo](https://visit.decodo.com/X4YBmy) Universal to bypass bot-blockers and extract clean Markdown content, preserving headers and structure for high-fidelity AI analysis.
* **Structured Action Plans:** Outputs machine-readable JSON containing the competitor's H1, their "Winning Factor," and a 1-sentence "Checkmate" instruction for your writers.

---

## **⚙️ How it Works**

1. **Data Foundation:** The workflow triggers (Manual or Scheduled) and pulls your **Global Config** (e.g., result limits) and **Brand Identity** from a dedicated Google Sheet.
2. **Market Discovery:** It retrieves your target keywords and uses the **Decodo Google Search** node to identify the top competitors. A Code Node then "itemizes" these results into individual URLs.
3. **Intelligence Harvesting:** **Decodo Universal** scrapes each URL, and an **HTML 5** node extracts the body content into Markdown format to minimize token noise for the AI.
4. **Strategic Audit:** The **AI Content Auditor** (powered by Gemini) receives the competitor’s text and your Brand Identity. It identifies what the competitor missed that your brand excels at.
5. **Reporting Deck:** The final **Strategy Master Writer** node appends the analysis—including the "Content Gap" and "Action Plan"—into a master Google Sheet for your marketing team.

---

### **📥 Component Installation**

This workflow relies on the **[Decodo](https://visit.decodo.com/X4YBmy)** node for search and scraping precision.

1. **Install Node:** Click the **+** button in n8n, search for "Decodo," and add it to your canvas.
2. **Credentials:** Use your Decodo API key. (Tip: Use a residential proxy setting for difficult sites like Reddit or Stripe).
3. **Gemini:** Ensure you have the **Google Gemini Chat Model** node connected to the AI Agent.

🎁 Get a free Web Scraping API subscription here 👉🏻 [https://visit.decodo.com/X4YBmy](https://visit.decodo.com/X4YBmy)

---

### **🛠️ Setup Instructions**

#### **1. Google Sheets Configuration**

Create a spreadsheet with the following three tabs:

* **`Target Keywords`**: One column named `Target Keyword`.
* **`Brand Identity`**: One cell containing your brand mission, USPs, and target audience.
* **`Competitor Audit Feed`**: Headers for `Keyword`, `URL`, `Rank`, `Winning Factor`, `Content Gap`, and `Action Plan`.

Clone the spreadsheet **[here](https://docs.google.com/spreadsheets/d/1FRRxOZeNt7rEi-87Nlm_wKSP4Ue2FnMSeIKBNm6Onao/edit?gid=0#gid=0)**.
#### **2. Global Configuration**

In the **Config (Set)** node, define your `serp_results_amount` (e.g., `10`). This controls how many competitors are analyzed per keyword.

---

## **➕ How to Adapt the Template**

* **Competitor Exclusion:** Add a **Filter** node after "Market Discovery" to automatically skip domains like `amazon.com` or `reddit.com` if they aren't relevant to your niche.
* **Slack Alerts:** Connect a **Slack** node after the AI analysis to notify your content manager immediately when a high-impact "Action Plan" is generated for a priority keyword.
* **Multi-Model Verification:** Swap Gemini with **Claude 3.5 Sonnet** or **GPT-4o** in the Strategic Audit section to compare different AI perspectives on the same competitor content.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
