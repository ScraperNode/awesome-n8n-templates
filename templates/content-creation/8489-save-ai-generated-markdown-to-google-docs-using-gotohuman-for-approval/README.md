# 🎬 Save AI-generated markdown to Google Docs using gotoHuman for approval

> ⚡ **380 views** · 🎬 [Content Creation & Video](../)

## Description

![n8n flow screenshot.JPG](fileId:2615)	
Collaborate with an AI Agent on a joint document, e.g. for creating your content marketing strategy, a sales plan, project status updates, or market analysis.
The AI Agent generates markdown text that you can review and edit it in **gotoHuman**, and only then is the existing Google Doc updated.  
In this example we use AI to update our company's content strategy for the next quarter.

## How It Works
1. The AI Agent has access to other documents that provide enough context to write the content strategy. We ask it to generate the text in markdown format.
2. To ensure our strategy document is not changed without our approval, we request a human review using **gotoHuman**. There the markdown content can be edited and properly previewed.
3. Our workflow resumes once the review is completed. We check if the content was approved and then write the (potentially edited) markdown to our Google Docs file via the Google Drive node.

![mdreview.JPG](fileId:2614)

## How to set up

1. **Most importantly, install the verified gotoHuman node before importing this template!**
(Just add the node to a blank canvas before importing. Works with n8n cloud and self-hosted)
2. Set up your credentials for gotoHuman, OpenAI, and Google Docs/Drive
3. In gotoHuman, select and create the pre-built review template "Strategy agent" or import the ID: `F4sbcPEpyhNKBKbG9C1d`
4. Select this template in the gotoHuman node

## Requirements

You need accounts for
- gotoHuman (human supervision)
- OpenAI (Doc writing)
- Google Docs/Drive

## How to customize

- Let the workflow run on a schedule, or create and connect a [manual trigger in gotoHuman](https://docs.gotohuman.com/manual-triggers) that lets you capture additional human input to feed your agent
- Provide the agent with more context to write the content strategy
- Use the gotoHuman response (or a Google Drive file change trigger) to run additional AI agents that can execute on the new strategy

## 🔗 Nodes Used

Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
