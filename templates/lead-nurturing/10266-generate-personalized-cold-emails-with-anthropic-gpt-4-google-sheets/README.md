# 💬 Generate personalized cold emails with Anthropic, GPT-4 & Google Sheets

> ⚡ **779 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Your Cold Email is Now Researched.** This pipeline finds specific bottlenecks on prospect websites and instantly crafts an irresistible pitch

---

### 🎯 Problem Statement


Traditional high-volume cold email outreach is stuck on generic personalization (e.g., "Love your website!"). Sales teams, especially those selling high-value **AI Receptionists**, struggle to efficiently find the one **Unique Operational Hook** (like manual scheduling dependency or high call volume) needed to make the pitch relevant. This forces reliance on expensive, slow manual research, leading to low reply rates and inefficient spending on bulk outreach tools.

---

###  ✨ Solution

This workflow deploys a resilient **Dual-AI Personalization Pipeline** that runs on a batch basis. It uses the **Filter (Qualified Leads)** node as a cost-saving **Quality Gate** to prevent processing bad leads. It executes a **Targeted Deep Dive** on successful leads, using **GPT-4** for analytical insight extraction and **Claude Sonnet** for coherent, human-like copy generation. The entire process outputs campaign-ready data directly to **Google Sheets** and sends a critical QA Draft via **Gmail**.

---

### ⚙️ How It Works (Multi-Step Execution)

#### 1\. Ingestion and Cost Control (The Quality Gate)

*   **Trigger and Ingestion:** The workflow starts via a **Manual Trigger**, pulling leads directly from **Get All Leads (Google Sheets)**.
    
*   **Cost Filtering:** The **Filter (Qualified Leads)** node removes leads that lack a working email or website URL.
    
*   **Execution Isolation:** The **Loop Over Leads** node initiates individual processing. The **Capture Lead Data (Set)** node immediately captures and locks down the original lead context for stability throughout the loop.
    
*   **Hybrid Scraping:** The **Scrape Site (HTTP Request)** and **Extract Text & Links (HTML)** nodes execute the **Hybrid Scraping** strategy, simultaneously capturing **website text** and **external links**.
    
*   **Data Shaping & Status:** The **Filter Social & Status (Code)** node is the control center. It filters links, bundles the context, and critically, assigns a **status** of 'Success' or 'Scrape Fail'.
    
*   **Cost Control Branch:** The **If (IF node)** checks this status. Items with 'Scrape Fail' bypass all AI steps (saving **100% of AI token costs**) and jump directly to **Log Final Result**. Successful items proceed to the AI core.
    

#### 2\. Dual-AI Coherence & Dispatch (The Executive Output)

*   **Analytical Synthesis:** The **Summarize Website (OpenAI)** node uses **GPT-4** to synthesize the full context and extract the **Unique Operational Hook** (e.g., manual booking overhead).
    
*   **Coherent Copy Generation:** The **Generate Subject & Body (Anthropic)** node uses the **Claude Sonnet** model to generate the subject and the multi-line body, guaranteeing **coherence** by creating both simultaneously in a single JSON output.
    
*   **Final Parsing:** The **Parse AI Output (Code)** node reliably strips markdown wrappers and extracts the clean **subject** and **body** strings.
    
*   **Final Delivery:** The data is logged via **Log Final Result (Google Sheets)**, and the completed email is sent to the user via **Create a draft (Gmail)** for final **Quality Assurance** before sending.
    
---

### 🛠️ Setup Steps


Before running the workflow, ensure these credentials and data structures are correctly configured:

#### Credentials

*   **Anthropic:** Configure credentials for the Language Model (Claude Sonnet).
    
*   **OpenAI:** Configure credentials for the Analytical Model (GPT-4/GPT-4o).
    
*   **Google Services:** Set up OAuth2 credentials for **Google Sheets** (Input/Output) and **Gmail** (Draft QA and Completion Alert).
    

#### Configuration

*   **Google Sheet Setup:** Your input sheet must include the columns **email**, **website\_url**, and an empty **Icebreaker** column for initial filtering.
    
*   **HTTP URL:** Verify that the **Scrape Site** node's URL parameter is set to pull the website URL from the stabilized data structure: ={{ $json.website\_url }}.
    
*   **AI Prompts:** Ensure the Anthropic prompt contains your current Irresistible Sales Offer and the required nested JSON output structure.
    
---

### ✅ Benefits

*   **Coherence Guarantee:** A single **Anthropic** node generates both the subject and body, guaranteeing the message is perfectly aligned and hits the same unique insight.
    
*   **Maximum Cost Control:** The **IF node** prevents spending tokens on bad or broken websites, making the campaign highly **budget-efficient**.
    
*   **Deep Personalization:** Combines **website text** and **social media links**, creating an icebreaker that implies thorough, manual research.
    
*   **High Reliability:** Uses robust **Code nodes** for data structuring and parsing, ensuring the workflow runs consistently under real-world conditions without crashing.
    
*   **Zero-Risk QA:** The final **Gmail (Create a draft)** step ensures human review of the generated copy before any cold emails are sent out.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, OpenAI, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
