# 🎣 Automated lead generation from digital footprints with Decodo & Airtable

> ⚡ **100 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

**Stop manually searching Google for sales leads. Start listening to the internet.**

This advanced workflow automatically identifies, qualifies, and enriches high-value leads by searching for their **digital footprints** (i.e., specific technology use or public directories). It uses a robust **Find/Create/Conditional Update** database pattern to prevent duplicates and ensure you only spend credits on enriching incomplete records.

The workflow provides a fully persistent lead record, updating the same Airtable row as new data is found across multiple search steps.

### ✨ Key Features

  * **Persistent Data Integrity:** Uses a dedicated **Loop Over Items** structure to run the Find/Create/Update logic sequentially for every lead, guaranteeing no data is lost or duplicated.
  * **Conditional Enrichment:** A smart gate checks the Airtable record: if the high-value email field is empty, the workflow proceeds to the expensive scraping steps. If it is already complete, it skips the scrape.
  * **Targeted Scraping:** Executes precise **Google Dorks** (via Decodo) to find initial leads and then targets the specific **Contact Us page** for deep email extraction.
  * **Database-as-a-State-Machine:** Airtable acts as the single source of truth, logging the initial lead status and updating the same row across several enrichment phases.
  * **Final Output:** Delivers the fully enriched lead data (Domain, Primary Email, Contact Page URL) to a final notification channel.

-----

### ⚙️ How it Works (The Find/Create/Update Loop)

1.  **Search & Filter:** The workflow is manually triggered and uses the **Config** variables to execute a wide-scope Google Search via **Decodo**. The results are filtered into a clean array of unique domains.
2.  **Loop & Check:** The **Loop Over Items** node starts. Inside, the **Airtable Read** node checks the database for the current lead's domain.
3.  **Create/Update:**
      * If the lead is **NEW**, the workflow creates a record (`Airtable: Create Lead`).
      * If the lead **EXISTS**, the record is updated (`Airtable: Update Lead`).
4.  **Data Merger:** The **Data Merger: ID Finalizer** node consolidates the workflow, ensuring the unique Airtable Record ID is passed to the next step, regardless of whether the lead was created or updated.
5.  **Conditional Enrichment:** The **If: Enrichment Needed?** node checks the existing `Primary Email` status. If it's empty, the item proceeds to the deep scraping pipeline (`Decodo: Email Search` → `Decodo: Scrape Contact Page`).
6.  **Final Update:** The final node updates the Airtable record with the high-quality email address found from the deep scrape.

---

### 📥 Decodo Node Installation

The Decodo node is used three times in this workflow for precision scraping and searching.

1.  **Find the Node:** Click the **+** button in your n8n canvas.
2.  **Search:** Search for the **`Decodo`** node and select it.
3.  **Credentials:** When configuring the first Decodo node, use your API key.

🎁 Get a free Web Scraping API subscription here 👉🏻 [https://visit.decodo.com/X4YBmy](https://visit.decodo.com/X4YBmy)

-----
### 🛠️ Setup Instructions

This template requires specific node configuration and Airtable fields.

1.  **Credentials:** Obtain API keys for **Decodo** (using the coupon above) and **Airtable**.
2.  **Airtable Setup (Schema):** Create an Airtable base with a 'Leads' table. It must include these fields for mapping:
      * `Domain` (Single Line Text - Primary Field)
      * `Primary Email` (Email)
      * `Contact Page URL` (URL)
      * `Source URL` (URL)
      * `Lead Type` (Single Select: *Paid Ad Lead, Organic Lead*)
      * `Status` (Single Select: *New Lead, Updated, Enrichment Complete*)
3.  **Global Configuration:** Open the **`Config: Set Search Params`** node. Customize the following fields:
      * `tech_footprint`: e.g., `"We use Klaviyo"`
      * `target_industry`: e.g., `site:promarketer.ca`

-----

### ➕ How to Adapt the Template

* **Change Database:** Replace the **Airtable** nodes with **Postgres**, **Notion**, or **Google Sheets** for logging, adapting the field mappings.
* **Final Notification:** Add a **Slack** or **Gmail** node to alert the sales team immediately upon successful enrichment.
* **Multi-Step Enrichment:** Integrate a service like Hunter.io or Clearbit to find key employee names and titles before the final database update.
* **Adjust Scoring:** Add an **If Node** after the deep scrape to set a *Lead Score* based on whether a direct email (`sales@`) was found versus a general contact page link.
* **Add AI Lead Scoring:** Integrate a **Gemini** or **OpenAI** node after the deep scraping step to assign an "AI Score" (1-100) based on lead quality (e.g., domain authority, quality of the extracted email), before the final update.

## 🔗 Nodes Used

Airtable

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
