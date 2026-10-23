# 📊 Generate competitive product roadmap reports with Gemini 2.5 Flash, Olostep and Google Drive

> ⚡ **33 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Competitive Roadmap & Trend Arbitrage: Data-Driven Product Strategy

Stop guessing what to build next. The **Competitive Roadmap & Trend Arbitrage** workflow acts as your automated R&D department. It compares your current product capabilities against real-time market data, competitor launches, and macro industry trends to identify "White Space" opportunities—high-value features that neither you nor your competitors have solved yet.

By leveraging **Gemini 2.5 Flash** and **Olostep**, it transforms raw research into a structured "Strategic Intelligence Report" complete with actionable roadmap recommendations.

---

### Who’s it for?
*   **Product Managers & CPOs:** Align your product roadmap with actual market shifts and competitor movements.
*   **SaaS Founders:** Identify the "Catch-Up" plays needed to stay relevant and the "Leapfrog" features needed to dominate.
*   **Product Marketers:** Gain a brutally honest assessment of how your product stacks up against industry macro-trends.
*   **Strategy Consultants:** Deliver high-level, data-backed strategic reports to clients in minutes.

### How it works / What it does
1.  **Trigger:** Submit your **Industry**, **Top Competitor**, and **Current Feature List** via an n8n Form.
2.  **Market Research:** **Olostep** scrapes the web for the latest industry trends, recent competitor feature launches, and customer pain point forums.
3.  **Gap Analysis:** Gemini identifies specific capabilities you lack compared to leaders and ranks them by urgency.
4.  **Trend Mapping:** The AI assesses if your product is "Aligned," "Lagging," or "At Risk" regarding top macro industry trends.
5.  **Strategic Recommendations:** The workflow generates three specific plays:
    *   **The Catch-Up:** Crucial features needed for parity.
    *   **The Trend Pivot:** Existing feature modifications for better market alignment.
    *   **The Leapfrog:** Innovative solutions for identified "White Space" opportunities.
6.  **Reporting:** All insights are compiled into a professional Markdown document, converted to a Google Doc, and sent to your email.

### How to set up
1.  **Credentials:** Connect your API keys for **Google Gemini (PaLM)**, **Olostep**, and **Google Drive**.
2.  **Form Trigger:** Activate the workflow to get your internal submission link.
3.  **Email Configuration:** Ensure your email is updated in the "Share link & email" node to receive the final strategy reports.

### Requirements
*   **Google Gemini API:** For senior-level strategic analysis and product roadmapping.
*   **Olostep API:** To conduct deep competitive research and trend discovery.
*   **Google Drive (OAuth2):** For automated report storage and permission sharing.

### How to customize the workflow
*   **Competitive Depth:** Duplicate the **Research** node to scrape data for multiple competitors simultaneously for a broader market view.
*   **Custom Frameworks:** Adjust the **Analyze and compare** prompt to use specific frameworks like SWOT, Blue Ocean Strategy, or Jobs-to-be-Done (JTBD).
*   **Automated Backlog:** Connect this workflow to **Jira**, **Linear**, or **Productboard** to automatically push "Catch-Up" or "Leapfrog" features into your engineering backlog.

## 🔗 Nodes Used

HTTP Request, Google Drive, Markdown, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
