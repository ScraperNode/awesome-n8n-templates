# 📊 AI-Powered Product Research & Price Comparison with Google Search and OpenAI

> ⚡ **2,027 views** · 📊 [Market Research & Insights](../)

## Description

**How it works
**
This intelligent workflow acts as your personal shopping assistant, helping you quickly research products and find potential purchasing options based on your detailed descriptions. It automatically:

- Takes your natural language product description (e.g., "a durable, lightweight hiking backpack for multi-day trips with good ventilation").

- Uses AI to generate optimized search queries to find relevant products online.

- Executes these searches across Google's index.

- Analyzes the top search results (titles and snippets) using AI to identify common product types, features, and potential retailers.

- Compiles a concise summary report with key insights and direct links to relevant product pages.

- Delivers the full report to your inbox, guiding you to the next steps for purchasing.

Save time on product research and get smarter recommendations for your next purchase!

**Set up steps**

Setting up this workflow is more advanced than previous ones due to integrating with a specialized search API, typically taking around 30-60 minutes. You'll need to:

- Set up a Google Custom Search Engine (CSE): This involves creating a CSE in your Google Cloud Platform and obtaining an API Key and Search Engine ID. Detailed instructions are provided within the workflow.

- Obtain API keys for your preferred AI service (e.g., OpenAI, Google AI).

- Connect your preferred email service (e.g., Gmail) to receive the report.

- Provide a clear and detailed description of the product you're looking for.

All detailed setup instructions and specific configuration guidance, including the CSE setup, are provided within the workflow itself using sticky notes.

## 🔗 Nodes Used

Function, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
