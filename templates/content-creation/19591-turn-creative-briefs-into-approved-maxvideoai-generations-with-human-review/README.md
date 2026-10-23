# 🎬 Turn creative briefs into approved MaxVideoAI generations with human review

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow takes a structured creative brief, calls MaxVideoAI’s MCP API to list and recommend models, calculate a project budget, and prepare a generation quote, then waits for explicit human approval before confirming the generation and polling MaxVideoAI until a final result is available.

## How it works
1. Starts manually and normalizes the incoming brief into three JSON objects: recommendationRequest, projectBudgetRequest, and generationRequest.
2. Calls MaxVideoAI MCP to list available models and recommend the best models based on the recommendationRequest.
3. Calls MaxVideoAI MCP to calculate a project budget using the projectBudgetRequest.
4. Calls MaxVideoAI MCP to prepare the generation and return an exact quoteId for approval.
5. Pauses for up to one day and resumes via a POST webhook only if the request body includes approved: true and the matching quoteId.
6. If approved, confirms the generation with MaxVideoAI MCP, then polls MaxVideoAI for job status at intervals until it completes or fails, or stops after the bounded retry limit.
7. When the job reaches a terminal state, requests the final generation presentation from MaxVideoAI MCP, otherwise leaves the accepted job recoverable by its jobId.

## Setup
1. Create and attach a MaxVideoAI MCP OAuth2 credential for https://api.maxvideoai.com/mcp to every MaxVideoAI MCP node in the workflow.
2. Provide valid recommendationRequest, projectBudgetRequest, and generationRequest objects as the input data when running the workflow.
3. After “Prepare Generation” runs, copy the Human Approval resume webhook URL and send a POST with {"approved": true, "quoteId": "..."} to continue, or omit/deny approval to stop generation.

## 🔗 Nodes Used

Rename Keys, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
