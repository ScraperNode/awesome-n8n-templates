# 🔒 Generate website security audit PDFs with ScrapingBee, Claude, Gotenberg and Outlook

> ⚡ **16 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts a website URL via an n8n form, scrapes the page with ScrapingBee, and uses Anthropic Claude to audit HTTP security headers and client-side vulnerabilities. It then generates a branded HTML report, converts it to a PDF with Gotenberg, and emails it via Microsoft Outlook.

## How it works
1. Receives a website URL when a user submits the n8n form.
2. Scrapes the target page with the ScrapingBee API and normalizes the returned HTML and response headers.
3. Uses Anthropic Claude to audit the HTTP response headers for security configuration issues and to analyze the page HTML for client-side security vulnerabilities.
4. Merges and aggregates the audit outputs, then calculates header presence, a header-hygiene grade, and summary metrics for the report.
5. Uses Anthropic Claude to generate platform-specific fix instructions (WordPress, GoDaddy Hosting, Hostinger Hosting, and Squarespace) based on the audit findings.
6. Builds a branded HTML report and email summary, converts the HTML to a PDF via the Gotenberg API, and sends the PDF as an attachment through Microsoft Outlook.

## Setup
1. Add your ScrapingBee API key and ensure the ScrapingBee request settings match your needs (for example, JavaScript rendering and timeouts).
2. Create Anthropic (Claude) credentials and select a model for each Claude/agent step used for header analysis, vulnerability analysis, and remediation guidance.
3. Provide a reachable Gotenberg service URL, configure HTTP Basic Auth credentials if required, and update the PDF output filename/header settings as needed.
4. Connect Microsoft Outlook credentials with permission to send mail, then set the recipient address (and optionally customize the subject and HTML email body).

## Requirements
- Self-hosted n8n (community nodes/LangChain required)
- ScrapingBee API credentials
- Anthropic (Claude) API credentials
- Gotenberg service URL and authentication
- Microsoft Outlook account with OAuth2 access

## Customization
- Add or remove AI audit types in the LangChain agent nodes
- Update branding/visuals in the "Build HTML Report" code node
- Change the output destination by modifying the "Email Report via Outlook" node
- Adjust how headers/content are processed in their respective code nodes
- Replace ScrapingBee with any compatible scraping service in the "Fetch Website Content" node

## Additional info
For support, contact support@ais.email (AI Solutions, Inc.)

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, AI Agent, Anthropic Chat Model, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
