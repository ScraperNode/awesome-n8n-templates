# 🔬 Turn form submissions into branded PDF reports with PDFMint

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Turn form submissions into branded PDF reports

An n8n Form takes a field report and PDFMint hands back a finished, branded PDF —
no headless browser to run and no template editor to log into.

**What it does**
The form collects a title, an author, an optional site and the findings. The
workflow refuses an incomplete submission before it spends anything, checks the
PDFMint account still has documents left this month, assembles the Markdown
(title block, a word-count and reading-time line, findings, an optional
recommendation and your footer), renders it, and shows the result. If PDFMint
cannot be reached, the person who filled the form is told why instead of
staring at a blank page.

**Set up**
1. Add a PDFMint credential — the free plan is 10 documents a month and needs no card.
2. Open **Set report branding** and put in your own company, accent colour and footer.
3. Activate, then open the production form URL.

**Requirements**
- A PDFMint API key from pdf.mintapis.com.
- This template uses a community node, so it runs on **self-hosted n8n only**.

**Disclosure**
I build and run PDFMint. This is a self-submission, not a third-party recommendation.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
