# ⚒️ Query Perplexity AI from your n8n workflows

> ⚡ **24,791 views** · ⚒️ [Engineering](../)

## Description

This workflow illustrates how to use Perplexity AI in your n8n workflow. 

Perplexity is a free AI-powered answer engine that provides accurate, trusted, and real-time answers to any question.

---

### Credentials Setup 

1/ Go to the perplexity dashboard, purchase some credits and create an API Key

[https://www.perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)

2/ In the perplexity Request node, use Generic Credentials, Header Auth. 

For the name, use the value "Authorization"
And for the value "Bearer pplx-e4...59ea" (Your Perplexity Api Key)

---

### AI Model 
**Sonar Pro** is the current top model used by perplexity. 
If you want to use a different one, check this page: 

[https://docs.perplexity.ai/guides/model-cards](https://docs.perplexity.ai/guides/model-cards)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
