# 🔬 Automate Your RFP Process with OpenAI Assistants

> ⚡ **11,172 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

This n8n workflow demonstrates how to automate oftern time-consuming form filling tasks in the early stages of the tendering process; the Request for Proposal document or "RFP".

It does this by utilising a company's knowledgebase to generating question-and-answer pairs using Large Language Models.

## How it works
* A buyer's RFP is submitted to the workflow as a digital document that can be parsed.
* Our first AI agent scans and extracts all questions from the document into list form.
* The supplier sets up an [OpenAI assistant](https://platform.openai.com/docs/assistants/overview) prior loaded with company brand, marketing and technical documents.
* The workflow loops through each of the buyer's questions and poses these to the OpenAI assistant.
* The assistant's answers are captured until all questions are satisified and are then exported into a new document for review.
* A sales team member is then able to use this document to respond quickly to the RFP before their competitors.

## Example Webhook Request

```
curl --location 'https://&lt;n8n_webhook_url&gt;' \
--form 'id="RFP001"' \
--form 'title="BlueChip Travel and StarBus Web Services"' \
--form 'reply_to="jim@example.com"' \
--form 'data=@"k9pnbALxX/RFP Questionnaire.pdf"'
```

## Requirements
* An OpenAI account to use AI services.

## Customising the workflow

OpenAI assistants is only one approach to hosting a company knowledgebase for AI to use. Exploring different solutions such as building your own RAG-powered database can sometimes yield better results in terms of control of how the data is managed and cost.

## 🔗 Nodes Used

Slack, Webhook, Gmail, Google Docs, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
