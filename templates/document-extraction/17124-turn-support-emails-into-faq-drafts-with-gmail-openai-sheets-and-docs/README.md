# 🔬 Turn support emails into FAQ drafts with Gmail, OpenAI, Sheets and Docs

> ⚡ **39 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for new support-style emails, uses OpenAI to extract a reusable FAQ question and safe draft answer, logs results to Google Sheets, and then creates a Google Docs draft and/or Gmail review drafts for a human reviewer.

## How it works
1. Polls Gmail every 5 minutes for unread emails matching the configured support-related search query.
2. Cleans the email content by stripping quoted replies, signatures, and HTML to produce a concise plain-text body.
3. Sends the cleaned email and product context to OpenAI to extract a structured FAQ candidate (question, draft answer, category, score, sensitivity flag, tags, and recommended action).
4. Calculates a routing status based on the FAQ score threshold and sensitivity/recommended action, and prepares draft text for a Google Doc and reviewer email.
5. Appends every processed email and extracted fields to a Google Sheets tab for tracking and reporting.
6. If the candidate is strong, creates a Google Docs FAQ draft, inserts the draft content, and creates a Gmail draft notification to the reviewer with the document link.
7. If the candidate needs manual handling, creates a Gmail draft to the reviewer with the review notes and suggested customer reply, otherwise it takes no further action beyond logging.

## Setup
1. Connect credentials for Gmail, OpenAI, Google Sheets, and Google Docs in n8n.
2. Create or choose a Google Sheet and ensure the target tab (for example, "FAQCandidates") exists with columns matching the fields being appended.
3. In the configuration values, set your product/service name, Google Sheet ID and tab name, Google Docs folder ID, reviewer email address, FAQ score threshold, and the OpenAI model to use.
4. Adjust the Gmail trigger search query and polling interval to match your support inbox and filtering needs.

## Additional info
# Turn customer support emails into FAQ drafts with Gmail, OpenAI, Sheets and Docs

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/FAQ-drafts-from-support-emails-Gmail-OpenAI-Sheets-Docs-n8n-course-39c3d6550fd981619a2bcb10d0d85c15)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Gmail, Google Docs, Gmail Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
