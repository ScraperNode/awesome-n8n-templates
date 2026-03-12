# ⚙️ Convert GitHub commits into review-ready pull requests with Google Gemini

> ⚡ **23 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Description  
**Categories**  
Developer Automation, AI Agents, GitHub Automation, DevOps Productivity

---

## Build an AI-Driven GitHub Pull Request Automation with n8n + MCP

This workflow creates an AI-powered GitHub automation that turns raw commit history into a clean, professional pull request automatically.

When triggered via MCP or another workflow, it extracts repository details, fetches all commits from a target branch, uses AI to understand the intent behind the changes, and creates a well-structured pull request with a clear title and description.

The result is a reliable, no-manual-work system that standardizes pull requests and reduces review friction across teams.

---

## Benefits

### Consistent Pull Requests  
Every PR follows a clean, readable structure regardless of who triggered it.

### Zero Manual Formatting  
No copy-pasting commit messages or writing descriptions by hand.

### Faster Review Cycles  
Reviewers get clear context upfront, reducing back-and-forth.

### AI-Assisted Context Awareness  
Commit history is summarized intelligently, not blindly concatenated.

### MCP-Ready Automation  
Can be called directly by AI tools like Cursor through MCP.

---

## How It Works

### MCP or Workflow Trigger  
- Triggered via MCP server or another n8n workflow  
- Accepts natural language or structured input  

### Repository Information Extraction  
- AI extracts:
  - Repository owner  
  - Repository name  
  - Source branch  
  - Base branch  

### Commit Retrieval (GitHub API)  
- Fetches all commits for the source branch  
- Collects commit messages as context  

### Commit Summarization (AI)  
- AI analyzes commit history  
- Generates:
  - A concise PR title  
  - A clear bullet-point description  

### Pull Request Creation  
- Creates a GitHub pull request automatically  
- Uses correct base and head branches  
- Inserts AI-generated title and description  

---

## Required Setup

### GitHub  
- Repository access  
- OAuth or personal access token  
- Permission to read commits and create pull requests  

### AI Model  
- Google Gemini or compatible LLM  
- Connected via n8n AI nodes  

### n8n  
- Self-hosted or cloud  
- HTTP access to GitHub APIs  
- MCP Trigger enabled for AI tool access  

---

## Business Use Cases

### Engineering Teams  
- Standardize PR quality across developers  
- Reduce cognitive load on contributors  

### DevOps & Platform Teams  
- Enforce PR hygiene automatically  
- Improve velocity without extra process  

### Founders & Tech Leads  
- Maintain clean repositories without micromanagement  

### Agencies & Consultants  
- Deliver AI-assisted GitHub automation to clients  

---

## Difficulty Level  
Intermediate

---

## Estimated Build Time  
45–75 minutes

---

## Monthly Operating Cost  
- GitHub: Existing plan  
- AI Model: Free tier or usage-based  
- n8n: Self-hosted or cloud  

Typical range: $0–20/month

---

## Why This Workflow Works

- Commits are the most reliable source of change intent  
- AI summarizes meaning, not noise  
- MCP enables direct AI-to-automation execution  
- GitHub remains the single source of truth  

---

## Possible Extensions

- Auto-assign reviewers based on files changed  
- Add PR labels using AI classification  
- Generate changelog entries automatically  
- Post PR summary to Slack or Teams  
- Enforce branch naming or commit standards  

---

## Details

**Nodes used in workflow**
- MCP Trigger  
- AI Agent (Repository Extraction)  
- Structured Output Parser  
- GitHub API (Commits)  
- Summarize  
- AI LLM Chain  
- GitHub API (Create Pull Request)  
- If  
- Edit Fields (Set)  
- Sticky Note

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, Basic LLM Chain, Structured Output Parser, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
