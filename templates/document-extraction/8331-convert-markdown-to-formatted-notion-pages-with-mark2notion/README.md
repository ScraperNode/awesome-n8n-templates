# 🔬 Convert markdown to formatted Notion pages with Mark2Notion

> ⚡ **358 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Transform markdown text into beautifully formatted Notion pages using the Mark2Notion API. This workflow handles all the complexity of Notion's block structure, including tables, nested lists, code blocks, and special formatting.

## What this template does
This workflow takes any markdown-formatted text and automatically converts it into properly structured Notion blocks, then appends it to your specified Notion page. It handles all of Notion's API limitations automatically, including:
- Chunking content over 100 blocks
- Splitting text over 2000 characters
- Rate limiting and retry logic
- Complex table structures
- Nested lists, including 3+ level of nesting

## Use Cases
- **AI Content Publishing**: Send ChatGPT, Claude, or other LLM outputs directly to your Notion documentation
- **Form to Documentation**: Convert form submissions into formatted project pages
- **GitHub to Notion**: Sync issues, PRs, or README files to your team wiki
- **Meeting Notes Automation**: Transform transcripts into structured meeting notes
- **Report Generation**: Create beautiful reports from data sources

## How to use this template
1. **Get your Mark2Notion API key** at [https://mark2notion.com](https://mark2notion.com) (free tier includes 100 requests/month)
2. **Create a Notion integration** at https://notion.so/my-integrations and copy the token
3. **Add connection to the integration** on your Notion page
4. **Copy your page ID** from the Notion page URL
5. **Configure the HTTP Request node** with your credentials. Use "x-api-key" header name for Mark2Notion Header Auth.
6. **Test with sample markdown** to see the result

## More Information

- Full API documentation: [https://docs.mark2notion.com](https://docs.mark2notion.com)
- Quickstart guide: [https://mark2notion.com/guides/quickstart](https://mark2notion.com/guides/quickstart)
- Feedback and support: [https://github.com/elitemaks/mark2notion-api](https://github.com/elitemaks/mark2notion-api)

## 🔗 Nodes Used

HTTP Request, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
