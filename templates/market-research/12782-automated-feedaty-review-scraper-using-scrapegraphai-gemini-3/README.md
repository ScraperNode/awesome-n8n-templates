# 📊 Automated Feedaty Review Scraper 📈 using ScrapegraphAI & Gemini 3

> ⚡ **384 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This workflow automates the entire process of collecting, analyzing, and reporting **customer reviews from Feedaty** (similar to Trustpilot) using [ScrapeGraphAI](https://dashboard.scrapegraphai.com/?via=n3witalia), transforming raw user feedback into a structured, management-ready **reputation report in PDF** using new **Gemini 3** model  and [ConvertAPI](https://convertapi.com?ref=n3witalia) & Upload to Google Drive.


---

### Key Advantages

#### ✅ End-to-End Automation

From data collection to final PDF delivery, the entire reputation analysis process is fully automated, eliminating manual scraping, copy-paste work, and reporting overhead.

#### ✅ AI-Driven, Management-Ready Insights

The workflow does not just summarize reviews it **interprets them strategically**, producing insights that are immediately useful for:

* Management
* Marketing
* Customer Support
* Operations
* Product & UX teams

#### ✅ Structured & Consistent Reporting

Every execution produces reports with the **same structure, metrics, and logic**, making it ideal for:

* Periodic reputation monitoring
* Trend analysis over time
* Internal performance reviews

#### ✅ Scalable & Configurable

* Easily adaptable to any Feedaty company profile
* Page limits and review volume can be adjusted without changing logic
* Can be scheduled or extended to multiple brands

#### ✅ Data Quality & Compliance

* No personal data exposure
* Explicit handling of missing or ambiguous information
* No assumptions or hallucinated insights
* Fully transparent and audit-friendly output

#### ✅ Seamless Stakeholder Distribution

Automatic upload to Google Drive ensures reports are **centralized, shareable, and accessible**, with no additional manual steps.

---

### Ideal Use Cases

* Brand & reputation monitoring
* Customer experience audits
* Quarterly or monthly executive reports
* Pre-sales or investor documentation
* Customer support performance evaluation


---

### How it works
This workflow automates the entire process of collecting, analyzing, and reporting customer feedback from Feedaty. 

It starts by scraping live reviews from a specified company's Feedaty page using ScrapeGraphAI, extracting review details like date, rating, and text. Each review is then individually analyzed for sentiment (Positive, Neutral, or Negative) using an AI model.

All processed reviews are aggregated and passed to a specialized AI agent that performs a comprehensive company-level reputation analysis, generating a structured management report. 

Finally, the report is converted into an HTML/PDF format and uploaded to a designated Google Drive folder, creating a fully automated pipeline from data collection to actionable insights delivery.

---

### Set up steps
1. **Configure Parameters:** Set the Feedaty company identifier (e.g., `maxisport`) and the maximum number of review pages to scrape in the "Set Parameters" node.
2. **API Credentials:** Ensure the following credentials are configured in n8n:
   - [ScrapeGraphAI API](https://dashboard.scrapegraphai.com/?via=n3witalia) (for web scraping)
   - Google Gemini API (for AI sentiment analysis and report generation)
   - Google Drive OAuth2 (for file upload)
   - [ConvertAPI](https://convertapi.com?ref=n3witalia) (for HTML to PDF conversion)
3. **Customize Output:** Optionally adjust the "Limit reviews" node to control the number of reviews processed and modify the AI agent's system prompt in "Company Reputation Management" to tailor the report format.
4. **Destination Folder:** Verify the Google Drive folder ID in the "Upload file" node points to the correct destination for the generated reports.
5. **Execution:** Trigger the workflow manually via the "When clicking ‘Test workflow’" node to run the complete scraping, analysis, and reporting pipeline.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Basic LLM Chain, Convert to File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
