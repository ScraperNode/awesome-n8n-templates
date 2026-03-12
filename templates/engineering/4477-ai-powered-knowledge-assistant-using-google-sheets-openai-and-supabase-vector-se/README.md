# ⚒️ AI-powered knowledge assistant using Google Sheets, OpenAI, and Supabase Vector Search

> ⚡ **817 views** · ⚒️ [Engineering](../)

## Description

# AI-Powered GitHub Commit Reviewer

## Overview

**Workflow Name**: AI-Powered GitHub Commit Reviewer  
**Author**: Akhil  
**Purpose**: This n8n workflow triggers on a GitHub push event, fetches commit diffs, formats them into HTML, runs an AI-powered code review using Groq LLM, and sends a detailed review via email.

---

## How It Works (Step-by-Step)

### 1. **GitHub Trigger**
- **Node Type**: `n8n-nodes-base.githubTrigger`
- **Purpose**: Initiates the workflow on GitHub push events.
- **Repo**: [akhilv77/relevance](https://github.com/akhilv77/relevance)
- **Output**: JSON with commit and repo details.

### 2. **Parser**
- **Node Type**: `n8n-nodes-base.set`
- **Purpose**: Extracts key info (repo ID, name, commit SHA, file changes).

### 3. **HTTP Request**
- **Node Type**: `n8n-nodes-base.httpRequest`
- **Purpose**: Fetches commit diff details using GitHub API.
- **Auth**: GitHub OAuth2 API.

### 4. **Code (HTML Formatter)**
- **Node Type**: `n8n-nodes-base.code`
- **Purpose**: Formats commit info and diffs into styled HTML.
- **Output**: HTML report of commit details.

### 5. **Groq Chat Model**
- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatGroq`
- **Purpose**: Provides the AI model (llama-3.1-8b-instant).

### 6. **Simple Memory**
- **Node Type**: `@n8n/n8n-nodes-langchain.memoryBufferWindow`
- **Purpose**: Maintains memory context for AI agent.

### 7. **AI Agent**
- **Node Type**: `@n8n/n8n-nodes-langchain.agent`
- **Purpose**: Executes AI-based code review.
- **Prompt**: Reviews for bugs, style, grammar, and security. Outputs styled HTML.

### 8. **Output Parser**
- **Node Type**: `n8n-nodes-base.code`
- **Purpose**: Combines commit HTML with AI review into one HTML block.

### 9. **Gmail**
- **Node Type**: `n8n-nodes-base.gmail`
- **Purpose**: Sends review report via email.
- **Recipient**: akhilgadiraju@gmail.com

### 10. **End Workflow**
- **Node Type**: `n8n-nodes-base.noOp`
- **Purpose**: Marks the end.

---

## Customization Tips

- **GitHub Trigger**: Change repo/owner or trigger events.
- **HTTP Request**: Modify endpoint to get specific data.
- **AI Agent**: Update the prompt to focus on different review aspects.
- **Groq Model**: Swap for other supported LLMs if needed.
- **Memory**: Use dynamic session key for per-commit reviews.
- **Email**: Change recipient or email styling.

---

## Error Handling

Use Error Trigger nodes to handle failures in:
- GitHub API requests
- LLM generation
- Email delivery

---

## Use Cases

- Instant AI-powered feedback on code pushes.
- Pre-human review suggestions.
- Security and standards enforcement.
- Developer onboarding assistance.

---

## Required Credentials

| Credential | Used By | Notes |
|-----------|---------|-------|
| GitHub API (ID `PSygiwMjdjFDImYb`) | GitHub Trigger | PAT with `repo` and `admin:repo_hook` |
| GitHub OAuth2 API | HTTP Request | OAuth2 token with `repo` scope |
| Groq - Akhil (ID `HJl5cdJzjhf727zW`) | Groq Chat Model | API Key from GroqCloud |
| Gmail OAuth2 - Akhil (ID `wqFUFuFpF5eRAp4E`) | Gmail | Gmail OAuth2 for sending email |

---

## Final Note

**Made with ❤️ using n8n by Akhil.**

## 🔗 Nodes Used

Github Trigger, HTTP Request, Gmail, AI Agent, Simple Memory, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
