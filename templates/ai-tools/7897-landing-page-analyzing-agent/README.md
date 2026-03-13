# 🎯 Landing page analyzing agent

> ⚡ **862 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Use Cases**
Analyze e-commerce product pages for conversion optimization, audit SaaS landing pages for signup improvements, or evaluate marketing campaign pages for better lead generation.

**Good to know**
* At time of writing, Google Gemini API calls have usage costs. See Google AI Pricing for current rates.
* The workflow analyzes publicly accessible pages only - pages behind login walls or with restricted access won't work.
* Analysis quality depends on page content structure - heavily image-based pages may receive limited text-based recommendations.

**How it works**
* User submits a landing page URL through the form trigger interface.
* The HTTP Request node fetches the complete HTML content from the target landing page.
* Content is converted from HTML to markdown format for cleaner AI processing and better text extraction.
* Google Gemini 2.5 Flash analyzes the page using expert CRO knowledge and 2024 conversion best practices.
* The AI generates specific, actionable recommendations based on actual page content rather than generic advice.
* Information Extractor processes the analysis into 5 prioritized improvement tips with relevant visual indicators.
* Results are delivered through a completion form showing concrete steps to improve conversion rates.

**How to use**
* The form trigger is configured for direct URL submission but can be replaced with webhook triggers for integration into existing websites or apps.
* Multiple pages can be analyzed sequentially, though each requires a separate workflow execution.
* Recommendations focus on high-impact changes that don't require heavy development work.

**Requirements**
* Google Gemini (PaLM) API account for AI-powered analysis
* Publicly accessible landing pages for analysis
* N8N instance with proper webhook configuration

**Customizing this workflow**
* CRO analysis can be tailored for specific industries by modifying the AI system prompt - try focusing on e-commerce checkout flows, SaaS trial conversions, or local business lead capture forms.
* Add competitive analysis by incorporating multiple URL inputs and comparative recommendations.

## 🔗 Nodes Used

HTTP Request, Markdown, AI Agent, n8n Form Trigger, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
