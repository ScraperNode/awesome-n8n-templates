# 📊 Score B2B account hiring signals with OpenAI, JobsPipe MCP, Sheets and Slack

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow opens an n8n chat where an OpenAI-powered agent uses the JobsPipe MCP server to answer questions about who is hiring, returning job-posting-backed results with source links and optional monitoring signals.

## How it works
1. Receives a message in an n8n chat trigger.
2. Applies default search context such as your persona, default country, and the maximum number of jobs to return per search.
3. Uses an OpenAI chat model and the last 10 chat messages as memory to interpret the user’s question.
4. Calls JobsPipe MCP tools (for example, searching postings, fetching full job details, detecting company tech stacks, or creating monitoring signals) to gather live job data.
5. Responds in the chat with results that cite the original job posting URLs and notes when no matches are found.

## Setup
1. Create a free JobsPipe account at jobspipe.dev. In the JobsPipe MCP node, create an MCP OAuth2 credential named "JobsPipe MCP (OAuth)": Server URL https://mcp.jobspipe.dev, Resource https://mcp.jobspipe.dev/mcp, dynamic client registration on, then click Connect and sign in. An API key also works: switch to Header Auth with Authorization: Bearer jp_live_...
2. Add an OpenAI credential named "OpenAI account" (or pick another chat model), then open each node once after importing so n8n attaches the credentials.
3. Update the default persona, country, and `max_jobs_per_search` values to match your use case, then open the chat and start asking hiring-market questions.

## Requirements
- A JobsPipe account (the free tier includes 1,000 credits; each job returned costs 1 credit) and an OpenAI API key

## Customization
- Edit the agent's system prompt or the Set node to focus on a role, region or industry, raise max_jobs_per_search, or swap the chat model

## Additional info
Ask the agent to watch a search and it can create a JobsPipe Signal that alerts you when new matching jobs appear. Docs: https://docs.jobspipe.dev/integrations/n8n

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
