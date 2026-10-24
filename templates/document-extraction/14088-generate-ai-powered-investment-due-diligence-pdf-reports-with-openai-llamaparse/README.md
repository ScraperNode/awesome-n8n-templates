# 🔬 Generate AI-powered investment due diligence PDF reports with OpenAI, LlamaParse and Decodo

> ⚡ **173 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Turn pitch decks into investment-grade PDFs. This workflow parses raw investment memorandums and financial decks with LlamaParse, enriches them with real-time web intelligence from Decodo, and has an AI Agent synthesize structured financial analysis, risk assessments, and investment theses into a professional Due Diligence report.

![M&A Decodo Home](https://raw.githubusercontent.com/khmuhtadin/n8n-template/main/M%26A%20Decodo/home.png)

*Last updated: September 2026.*

## Why Use This Workflow?

- **Time Savings:** Initial deal screening and report generation drop from 6–8 hours of manual analysis to under 5 minutes.
- **Accuracy & Depth:** Multi-query RAG cross-references internal deal documents with verified external web evidence.
- **Cost Reduction:** No expensive junior analyst hours for preliminary data gathering and summarization.
- **Scalability:** Multiple deals processed simultaneously with one consistent reporting standard across your pipeline.

## Ideal For

- **Venture Capital & Private Equity:** Rapidly assessing incoming pitch decks and CIMs (Confidential Information Memorandums).
- **M&A Advisory Teams:** Standardized target company profiles and risk summaries, automated.
- **Investment Analysts:** Structured data from unstructured PDFs feeding internal valuation models.

## How It Works

1. **Trigger:** A webhook receives document uploads (PDF, DOCX, PPTX) via a custom portal or API.
2. **Data Collection:** LlamaParse converts complex document layouts into clean Markdown, preserving tables and financial structures.
3. **Processing:** The workflow generates a unique "Deal ID" based on filenames to ensure data isolation and implements a caching layer via Pinecone to avoid redundant parsing.
4. **Intelligence Layer:**
   - **Web Enrichment:** The workflow derives the target company name and uses Decodo to scrape official websites for "About" and "Commercial Risk" data.
   - **Multi-Query RAG:** An OpenAI-powered agent executes six specific retrieval queries (Financials, Risks, Business Model, etc.) to gather evidence from all sources.
5. **Output & Delivery:** Analysis is mapped to a structured template, rendered into a professional HTML report, and converted to a high-quality PDF using Puppeteer.
6. **Storage & Logging:** The final report is uploaded to Cloudflare R2, and a public, secure URL is returned to the user instantly.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
| --- | --- | --- |
| [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin) | Essential | Core automation and workflow orchestration |
| [LlamaIndex Cloud](https://cloud.llamaindex.ai/) | Essential | High-accuracy document parsing (LlamaParse) |
| [Pinecone](https://www.pinecone.io/) | Essential | Vector database for document and web evidence storage |
| [OpenAI API](https://openai.com/) | Essential | LLM for embeddings and expert analysis (Embedding Small & GPT-5.2) |
| [Decodo API](https://visit.decodo.com/1G9ox6) | Essential | Real-time web searching and markdown scraping |
| [R2 Bucket](https://www.cloudflare.com/developer-platform/products/r2/) | Essential | Secure storage for the generated PDF reports |

### Installation Steps

1. Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin).
2. **Configure credentials:**
   - **OpenAI:** Add your API key for embeddings and the Chat Model.
   - **Pinecone:** Enter your API Key and Index name (default: `poc`).
   - **LlamaIndex:** Add your API key under Header Auth (`Authorization: Bearer YOUR_KEY`).
   - **Decodo:** Set up your Decodo API credentials for web search and scraping.
   - **AWS S3:** Configure your bucket name and access keys.
3. **Update environment-specific values:**
   - In the "Build Public Report URL" node, update the `baseUrl` to match your S3 bucket's public endpoint or CDN.
4. **Test execution:**
   - Send a POST request to the webhook URL with a binary file (e.g., a Pitch Deck) to verify the end-to-end generation.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
| --- | --- | --- |
| LlamaParse (HTTP) | Document Conversion | Uses the `/parsing/upload` and `/job/result` endpoints for high-fidelity markdown |
| Pinecone Vector Store | Context Storage | Implements namespace-based isolation using the unique `dealId` |
| Decodo Search/Scrape | Web Intelligence | Dynamically identifies the official domain and extracts corporate metadata |
| AI Agent | Strategic Analysis | Configured with a "Senior Investment Analyst" system prompt and 6-step retrieval logic |
| Puppeteer | PDF Generation | Renders the styled HTML report into a print-ready A4 PDF |

### Workflow Logic

The workflow uses a **Multi-Query Retrieval** strategy. Instead of one generic question, the AI Agent runs six distinct searches against the vector database (Revenue History, Key Risks, etc.). Even a 100-page document cannot hide critical financial tables or risk disclosures buried in the text.

## Customization Options

### Basic Adjustments

- **Report Styling:** Edit the "Render DD Report HTML" node to match your firm's branding (logo, colors, fonts).
- **Analysis Scope:** Modify the AI Agent's prompt to include specific metrics (e.g., "ESG Score" or "Technical Debt Assessment").

### Advanced Enhancements

- **Slack/Email Integration:** Instead of just an S3 link, have [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) send the PDF directly to a `#new-deals` Slack channel.
- **CRM Sync:** Automatically create a new record in HubSpot or Salesforce with the structured JSON output attached.

## Troubleshooting

| Problem | Cause | Solution |
| --- | --- | --- |
| Parsing Timeout | File is too large for synchronous processing | Increase the "Wait" node duration or check LlamaParse job limits |
| Low Analysis Quality | Insufficient context in documents | Ensure documents are text-based PDFs (not scans) or enable OCR in LlamaParse |
| PDF Layout Broken | CSS incompatibility in Puppeteer | Simplify CSS in the HTML node; avoid complex Flexbox/Grid if Puppeteer version is older |

## Use Case Examples

### Scenario 1: Venture Capital Deal Screening

**Challenge:** A VC associate receives 20 pitch decks a day and spends hours manually summarizing company profiles.

**Solution:** This workflow parses the deck and web-scrapes the startup's site to verify claims.

**Result:** The associate receives a 3-page PDF summary for every deck, allowing them to reject or move forward in seconds.

### Scenario 2: Private Equity Due Diligence

**Challenge:** Analyzing a 150-page CIM (Information Memorandum) for specific financial "red flags."

**Solution:** The AI Agent is programmed to specifically hunt for customer concentration and margin fluctuations.

**Result:** Consistent risk identification across all deals, regardless of which analyst is assigned to the project.

---

### Quick Answers
**What documents can it read?**  
PDF, DOCX, and PPTX uploads via webhook, parsed by LlamaParse into clean Markdown.  
**Where does the finished PDF go?**  
Cloudflare R2. You instantly get back a public, secure URL.  
**How is each deal kept separate?**  
A unique Deal ID plus Pinecone namespaces isolate every deal's data.  

**Made by:** [khmuhtadin](https://khmuhtadin.com)
**Category:** Business Intelligence | **Tags:** Decodo, AI, RAG, Due Diligence, LlamaIndex, Pinecone

**Need custom workflows?** [Contact me](https://khmuhtadin.com/contact)

**Connect with the creator:**
[Portfolio](https://khmuhtadin.com) • [Store](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Webhook, S3, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
