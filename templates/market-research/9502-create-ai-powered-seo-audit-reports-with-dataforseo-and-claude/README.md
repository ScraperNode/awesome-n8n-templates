# 📊 Create AI-powered SEO audit reports with DataForSEO and Claude

> ⚡ **1,014 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Automated SEO Intelligence Platform with DataForSEO and Claude

Transform any company website into a detailed SEO audit report in minutes! This workflow combines real-time web scraping, comprehensive SEO data analysis, and advanced AI reasoning to deliver client-ready reports automatically.

Perfect for digital agencies scaling their audit services, freelance SEO consultants automating research, or SaaS teams analyzing competitor strategies before sales calls.

## The Process

**Discovery Phase:** Input a company name and website URL to kick things off. The system begins with website content extraction.

**Intelligence Gathering:** A dedicated scraper sub-workflow extracts all website content and converts it to structured markdown. 

**Strategic Analysis:** LLMs process the scraped content to understand the business model, target market, and competitive positioning. They generate business research insights and product strategy recommendations tailored to that specific company. Once this analysis completes, DataForSEO API then pulls technical metrics, backlink profiles, keyword rankings, and site health indicators.

**Report Assembly:** All findings flow into a master report generator that structures the data into sections covering technical SEO, content strategy, competitive landscape, and actionable next steps. Custom branded cover and closing pages are added.

**Delivery:** The HTML report converts to PDF format and emails directly to your recipient - no manual intervention needed.

## Setup Steps

1. Add API credentials: OpenRouter (for AI), DataForSEO (for scraping/SEO data), and PDFco (for PDF generation)
2. Configure email sending through your preferred service (Gmail, SendGrid, etc.)
3. Optional: Upload custom first/last page PDFs for white-label branding
4. Test with your own website first to see the magic happen!

## Customize It

**Adjust analysis depth:** Modify the AI prompts to focus on specific SEO aspects (local SEO, e-commerce, B2B SaaS, etc.)

**Change report style:** Edit the HTML template in the Sample_Code node for different formatting

**Add integrations:** Connect to your CRM to automatically trigger reports when leads enter your pipeline

**Scale it up:** Process multiple URLs in batch by feeding a Google Sheet of prospects

## What You'll Need

- OpenRouter account (Claude Opus 4.1 recommended for best insights)
- DataForSEO subscription (handles both scraping and SEO metrics)
- PDFco account (converts your reports to professional PDFs)
- Email service credentials configured in n8n

### Need Help?

Connect with me on [LinkedIn](https://www.linkedin.com/in/harsh-agrawal-490138256/) if you have any doubt

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, Gmail, Markdown, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
