# 🔬 Convert markdown into branded PDFs with a table of contents using PDFMint

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow turns any Markdown — an AI agent's answer, release notes, a knowledge-base page, a report written in an editor — into a finished, branded PDF and returns it in the same HTTP request. It numbers the headings, builds a table of contents from those same numbers, adds a cover block with a word count and reading time, and applies your brand's header, page numbers and accent colour.

## How it works
1. A webhook receives a POST with `markdown`, `title` and an optional `author`. Anything that can send an HTTP request can use it, including an AI agent that has just written the Markdown.
2. One Set node holds every setting: brand name, accent colour, page format, whether a table of contents is added, and an optional watermark such as `DRAFT`.
3. An empty payload is refused with a readable 422 before anything is rendered, so a broken request never becomes a one-line PDF.
4. PDFMint's `usage` operation, which costs no credits, reports how many are left; running out is answered with an explanation instead of a failed render.
5. A Code node does all the work in one place: it numbers every `##` and `###` heading, builds the contents list from exactly those numbers so the two cannot drift apart, leaves headings inside fenced code blocks alone, counts the words, estimates the reading time and assembles the cover. It also derives the running header and the stylesheet from your accent colour.
6. PDFMint renders the assembled Markdown with that header, page numbers and styling.
7. The caller always gets an answer: the PDF on success, or a status and a reason on failure — 422 for a bad request, 500 when the render itself fails.

## Setup
1. Install the verified community node `n8n-nodes-pdfmint`. It is available on n8n Cloud and self-hosted n8n; Cloud owners and admins can add it from **More from the community** in the nodes panel.
2. Add a PDFMint credential with your API key.
3. Open **Set your document branding** and put in your own brand name, accent colour and page format. No other node needs editing.

## Try it before you connect anything
The webhook ships with pinned sample data: a three-section runbook containing a table, a blockquote and a fenced shell script whose `#` comment must not be mistaken for a heading. Open the workflow and run it — the contents list comes out numbered 1. to 3.1, the code comment stays a comment, and the PDF is two A4 pages.

## How to customise it
- Swap **Return the PDF** for Gmail, Google Drive or S3 if you would rather deliver the file than answer with it.
- Set `draftWatermark` to `DRAFT` while a document is unfinished, and empty it for the final version.
- Replace the webhook with a Schedule Trigger to turn a nightly report into a PDF.

*Disclosure: I build PDFMint, and I wrote this template.*

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
