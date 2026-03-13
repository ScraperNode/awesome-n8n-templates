# ⚙️ Decodo SaaS pricing intelligence workflow (B2B pricing radar)

> ⚡ **129 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# SaaS Pricing Brief Generator (Decodo → LLM → Google Docs → PDF → Slack)
## 🚀 Try Decodo — Web Scraping & Data API (Coupon: **TRUNG**)
![Decodo Logo](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/decodo-logo-black.jpg)
**Decodo** is a powerful public data access platform offering managed web scraping APIs and proxy infrastructure to collect structured web data at scale. It handles proxies, anti-bot protection, JavaScript rendering, retries, and global IP rotation—so you can focus on data, not scraping complexity.
**Why Decodo**
- Managed **Web Scraping API** with anti-bot bypass & high success rates  
- Works with JS-heavy sites; outputs JSON/HTML/CSV  
- Easy integration (Python, Node.js, cURL) for eCommerce, SERP, social & general web data
**🎟️ Special Discount**
Use coupon **`TRUNG`** to get the **Advanced Scraping API** plan — ~**23,000 requests for ~$5**.

## Who this workflow is for
This workflow is designed for **Presales, Product Managers, Business Analysts, and Sales teams** who need to:
- Monitor competitor or SaaS pricing pages
- Convert unstructured pricing content into a structured, comparable format
- Quickly generate and share an internal **pricing brief** without manual copy/paste

It is especially useful during **launches, pricing updates, or quarterly reviews**.

## What this workflow does
At a high level, the workflow automates the full pricing intelligence pipeline:
1. Scrapes a live SaaS pricing page using a real browser environment
2. Cleans and normalizes the HTML for reliable parsing
3. Uses an LLM agent to extract pricing plans into structured JSON
4. Builds an executive-ready SaaS pricing brief
5. Publishes the brief as a Google Doc and PDF
6. Shares the final PDF directly to Slack

The output is a consistent, repeatable pricing brief ready for internal distribution.

## How it works
1. **Manual Trigger**  
   The workflow is manually triggered to ensure intentional execution (ideal for known pricing updates).

2. **Configure Target Pricing Page**  
   Input the competitor pricing URL, device type, and report metadata.

3. **Decodo Pricing Scraper**  
   Renders the full pricing page using JS and device emulation so tier cards, modals, and dynamic content are captured correctly.

4. **HTML Normalization**  
   Custom code removes scripts, styles, and noise, leaving clean, readable text for the LLM.

5. **Plan Extraction Agent (LLM)**  
   The agent translates messy pricing text into a structured JSON schema including:
   - Plan name
   - Price and billing period
   - Key features
   - CTA / positioning notes

6. **Build SaaS Pricing Brief**  
   Transforms structured JSON into an executive-ready markdown brief with:
   - Plan comparison table
   - Key differentiators
   - Observations and suggested next actions

7. **Publish Assets**  
   Creates a Google Doc in a predefined Drive folder and converts it to PDF for sharing.

8. **Share in Slack**  
   Uploads the PDF directly to a Slack channel (e.g. `#pricing-intel`) for instant visibility.

## Requirements
- Decodo node configured with a valid plan
- OpenAI / LLM credentials for the Plan Extraction Agent
- Google Drive API access
- Slack workspace and upload permissions

## Notes & best practices
- Manual trigger avoids unnecessary scraping and rate-limit issues
- Device emulation ensures accurate pricing capture
- Structured JSON output enables future extensions (trend tracking, diffing, dashboards)
- The workflow is modular and easy to adapt for other competitor intelligence use cases

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
