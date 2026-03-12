# 🔬 Translate and localize multilingual content with DeepL and GPT-4o-mini

> ⚡ **110 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Translate and localize content using DeepL and GPT-4o-mini

Managing high-quality translations across multiple languages often requires more than just machine translation; it requires cultural context and quality assurance. This workflow automates the entire pipeline, from initial translation to AI-driven quality scoring and cultural localization.

## Who is this for?
- **Content Teams:** To automate the first draft and review process for blog posts or documentation.
- **Marketing Agencies:** To localize campaign copy for international markets quickly.
- **Product Managers:** To manage UI/UX copy across different regions with consistent glossary support.

## How it works
1. **Content Intake:** A Webhook receives the source text and a list of target languages.
2. **Language Detection & Validation:** The workflow identifies the source language and validates the requested target codes.
3. **Parallel Processing:** Using the **Split Out** node, the workflow processes each target language simultaneously.
4. **DeepL Translation:** High-quality neural machine translation is performed for each language.
5. **AI Quality Review:** **GPT-4o-mini** acts as a professional linguist, scoring the translation on accuracy, fluency, and style, and flagging any issues.
6. **Cultural Localization:** A specialized node applies region-specific formatting for dates and currencies.
7. **Aggregation & Reporting:** All results are unified, logged to **Google Sheets**, emailed via **Gmail**, and returned as a JSON response to the initial requester.

## How to set up
1. **Credentials:** Connect your DeepL API, OpenAI, Google Sheets, and Gmail accounts.
2. **Google Sheets:** Create a sheet with headers: `Job ID`, `Source Text`, `Languages`, `Avg Quality`, and `Completed`. Paste the Sheet ID into the Google Sheets node.
3. **Webhook:** Use the production URL in your CMS or app to trigger the workflow with a POST request.

## Requirements
- **DeepL API Key** (Free or Pro)
- **OpenAI API Key** (for GPT-4o-mini)
- **Google Account** (for Sheets and Gmail)

## How to customize
- **Adjust AI Rubric:** Modify the "AI Quality Review" prompt to focus on specific brand voice guidelines or technical terminology.
- **Glossary Support:** Update the DeepL node to include specific Glossary IDs for industry-specific jargon.
- **Localization Rules:** Add more regions or specific formatting rules (like measurement conversions) in the "Apply Localization" Code node.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, DeepL, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
