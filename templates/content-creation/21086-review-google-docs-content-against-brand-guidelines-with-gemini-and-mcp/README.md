# 🎬 Review Google Docs content against brand guidelines with Gemini and MCP

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow reviews a Google Docs content brief against a brand kit stored in an n8n Data Table, uses an OpenRouter LLM plus MCP tools to verify documentation references, then appends feedback to the original Doc and emails an HTML report via Gmail.



## How it works
1. Receives a Google Doc URL through an n8n form trigger.
2. Downloads the Google Doc from Google Drive as Markdown and extracts the text content.
3. Loads the visible brand-kit entries from an n8n Data Table and concatenates them into a single reference block.
4. Sends the brief text and brand-kit block to an OpenRouter-powered AI Agent, which uses MCP tools to search n8n Docs and the n8n knowledge sources for verifiable links and claims.
5. Formats the agent’s structured feedback into a Markdown review report.
6. Appends the review text to the original Google Doc using Google Docs.
7. Converts the Markdown report to an HTML file and emails it as an attachment via Gmail.

## Setup
1. Connect Google Drive OAuth2 and Google Docs OAuth2 credentials with access to the Docs you want to review.
2. Connect an OpenRouter API credential and (optionally) adjust the model used by the LLM step.
3. Create and populate an n8n Data Table for your brand kit (columns: Filename, Content, FileID, IsVisible) and select its table ID in the brand-kit load step.
4. Configure the MCP tool endpoints (for example, GitBook docs MCP and Kapa MCP) and add any required MCP OAuth2 credentials.
5. Connect a Gmail credential and set the recipient and attachment mapping so the generated HTML report is sent to the right inbox.

## Requirements
- Google account
- OpenRouter account
- Set up MCP servers for your documentation and blog
- A configured Data Table containing your brand kit

## Customization
- Update the prompt within the AI Agent to reflect your product's content review process.
- Update the [structured outputs JSON schema](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured) (`Prepare structured AI feedback` node) if your review feedback needs different sections.
- Modify the Data Table to include various types of reference materials.
- Customize the Form Trigger, so that users can provide an e-mail address to receive an HTML report

## Additional info
🙏  Big kudos to [Yulia Dmitrievna](https://n8n.io/creators/yulia/), co-builder of this workflow! We've worked with Yulia on n8n blog content for the last three years, and we're always keen to spot inefficiencies and automate the gaps in our processes. This is our first collaboration on an automation together, and we're looking for more places where AI agents can take on part of the work, while keeping a human in the loop where possible.

## 🔗 Nodes Used

Google Drive, Gmail, Google Docs, Markdown, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
