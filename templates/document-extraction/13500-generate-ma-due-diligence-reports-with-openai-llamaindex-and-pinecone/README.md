# 🔬 Generate M&A due diligence reports with Decodo, OpenAI and Pinecone

> ⚡ **143 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Half a day of deal reading, compressed into minutes. This [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow turns unstructured pitch decks and investment memos into polished Due Diligence PDF reports. Documents get parsed, claims get verified against live web data, and an AI Agent writes the analysis.

*Last updated: September 2026.*

## The Problem It Solves

Reviewing a single deal, reading the deck, cross-checking claims online, formatting the summary, easily takes half a day. Multiply that by 10–20 inbound deals per week, and your team is buried in low-leverage work before any real analysis begins.

This workflow compresses that cycle into a single automated pipeline.

## How It Works

1. **Upload:** Send a PDF, DOCX, or PPTX to the webhook endpoint.
2. **Parse:** LlamaParse extracts clean Markdown from complex layouts, preserving tables and financial data.
3. **Enrich:** The workflow identifies the target company, then pulls supplementary data from the open web (corporate pages, risk signals) using Decodo's search and scraping APIs to verify and contextualize claims made in the source documents.
4. **Analyze:** An AI Agent runs six targeted retrieval queries against the combined dataset: revenue history, key risks, business model, competitive landscape, management profile, and deal terms.
5. **Deliver:** Results render into a branded HTML template, convert to PDF via Puppeteer, upload to Cloudflare R2, and return a download link.

Each deal gets a unique namespace in Pinecone, so documents are isolated and repeat uploads skip redundant parsing.

## What You Need

| Service | Role |
| --- | --- |
| [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) | Workflow orchestration |
| [LlamaIndex Cloud](https://cloud.llamaindex.ai/) | Document parsing (LlamaParse) |
| [Pinecone](https://www.pinecone.io/) | Vector storage & retrieval |
| [OpenAI API](https://openai.com/) | Embeddings (text-embedding-3-small) & LLM analysis (GPT-5.4) |
| [Decodo API](https://visit.decodo.com/1G9ox6) | Web search & page scraping |
| [Cloudflare R2](https://developers.cloudflare.com/r2/) | Report file storage (S3-compatible) |

## Quick Start

1. Import the workflow JSON into your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance.
2. Add credentials for OpenAI, Pinecone, LlamaIndex (Header Auth), Decodo, and Cloudflare R2 (S3-compatible).
3. Update the R2 base URL in the "Build Public Report URL" node.
4. Fire a test POST with a sample deck to the webhook.

## Customization Ideas

- Swap the HTML template to match your firm's branding and report structure.
- Extend the AI Agent prompt to cover additional dimensions like ESG scoring or technical debt.
- Route the finished PDF to Slack, email, or your CRM instead of (or alongside) R2.

## Troubleshooting

| Symptom | Likely Fix |
| --- | --- |
| Parsing times out | Increase the Wait node duration; check file size against LlamaParse limits |
| Thin or generic analysis | Verify the source PDF is text-based, not a scanned image, enable OCR if needed |
| Broken PDF layout | Simplify CSS in the HTML render node; older Puppeteer builds handle basic layouts better |

---

### Quick Answers
**What documents can it read?**  
PDF, DOCX, and PPTX sent to the webhook endpoint.  
**How is each deal kept separate?**  
A unique Pinecone namespace per deal isolates documents and skips re-parsing on repeat uploads.  
**Where does the report go?**  
Cloudflare R2, with a download link returned instantly.  

**Made by:** [khmuhtadin](https://khmuhtadin.com)
**Category:** Business Intelligence | **Tags:** AI, RAG, Due Diligence, Decodo

[Portfolio](https://khmuhtadin.com) • [Store](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Webhook, S3, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
