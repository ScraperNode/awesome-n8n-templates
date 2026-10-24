# 📊 Generate competitor SEO topical maps with Gemini 2.5 Flash, Olostep and Google Sheets

> ⚡ **82 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## AI SEO Content Strategy: Competitor Topical Map Generator

Crush your competition's SEO strategy by visualizing their entire content architecture in seconds. The **AI SEO Content Strategy: Competitor Topical Map Generator** workflow automates the "topical mapping" process—a task that usually takes SEO specialists hours of manual scraping and categorization. 

By analyzing a competitor's blog URL, it uses **Gemini 2.5 Flash** and **Olostep** to reverse-engineer their content hubs, identify weak points in their coverage, and provide you with a ready-to-execute "spoke-and-hub" content plan to overtake them in search rankings.

---

### Who’s it for?
*   **SEO Specialists:** Perform deep competitive analysis without manual spreadsheet work.
*   **Content Strategists:** Identify "Content Gaps" where competitors are under-investing.
*   **Niche Site Owners:** Build topical authority quickly by mapping out the most successful hubs in your industry.
*   **Digital Agencies:** Provide instant, high-value content audits for prospective clients.

### How it works / What it does
1.  **Trigger:** Provide a competitor's blog URL through an n8n Form.
2.  **Scrape:** The **Olostep** node extracts all published article titles from the site.
3.  **Pillar Analysis:** Gemini analyzes the raw titles and clusters them into 8-12 high-level "Pillar Topics" (content hubs).
4.  **Strategic Gap Discovery:** A specialized "Strategy Director" node identifies the two thinnest content clusters that are critical for enterprise growth.
5.  **Execution Plan:** For each identified gap, the AI suggests a definitive pillar guide title and multiple "spoke" article ideas to fill the void.
6.  **Data Logging:** The entire map—including pillars, competitor article counts, and your new suggested content plan—is saved to a **Google Sheet** for easy tracking.

### How to set up
1.  **Credentials:** Connect your **Google Gemini (PaLM)**, **Olostep**, and **Google Sheets** credentials.
2.  **Google Sheet Setup:** Prepare a spreadsheet with headers for `pillars`, `articleTitles`, `lowest Article Count Piller`, `count`, `gap_summary`, `pillar_article_suggestion`, and `spoke_articles_suggested`.
3.  **Form Trigger:** Activate the workflow to get your public submission link.

### Requirements
*   **Google Gemini API:** For advanced semantic clustering and strategic content ideation.
*   **Olostep API:** To handle high-volume scraping of blog indices and article lists.
*   **Google Sheets (OAuth2):** To store the final topical map and strategy report.

### How to customize the workflow
*   **Scale the Analysis:** Modify the **Strategy Director** prompt to identify more than two gaps if you are planning a long-term content roadmap.
*   **Target Different Sites:** While optimized for blogs, you can adjust the **Olostep** task to scrape product categories or documentation hubs.
*   **Project Management Integration:** Replace the Google Sheets node with **ClickUp**, **Notion**, or **Trello** to automatically turn the AI's content suggestions into actionable tasks for your writing team.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
