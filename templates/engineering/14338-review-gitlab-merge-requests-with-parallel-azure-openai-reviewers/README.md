# ⚒️ Review GitLab merge requests with parallel Azure OpenAI reviewers

> ⚡ **64 views** · ⚒️ [Engineering](../)

## Description

## Who this template is for

This template is for teams that use GitLab merge requests and want a practical AI-assisted review workflow in n8n. It is useful for engineering teams that want faster first-pass reviews, consistent review comments, and a simple way to separate likely bugs, security risks, and maintainability issues before a human reviewer takes over.

## How it works

This workflow starts when a user posts a trigger comment in a GitLab merge request discussion. It loads the merge request changes, splits the diff into one item per changed file, and skips files that are not suitable for inline review.

Each file is then reviewed in parallel by three AI reviewers focused on bugs, security, and maintainability. Their findings are merged and sent to a verifier step, which removes weak or duplicate findings and normalizes severity and confidence.

Only findings that pass the configured confidence threshold are posted. If a valid GitLab diff position can be resolved, the workflow creates an inline review comment. Otherwise, it falls back to a reply comment in the trigger discussion. A summary reply is also posted to mark the review as completed.

## Set up

Setup usually takes around 10 to 20 minutes.

You will need:
- a GitLab access token with permission to read merge requests and post discussions
- one or more AI model credentials for the reviewer and verifier steps
- your GitLab base URL and preferred trigger comment
- a minimum confidence threshold for posting findings

Most detailed setup guidance is included directly in the sticky notes inside the workflow.

## Requirements

- GitLab project with merge request discussions enabled
- n8n credentials for GitLab API access
- AI chat model credentials for the reviewer and verifier nodes

## How to customize the workflow

You can change the trigger comment, GitLab base URL, and minimum confidence threshold in the configuration section.

You can also customize:
- which findings are posted by adjusting the confidence threshold
- reviewer prompts for bug, security, and maintainability analysis
- the final verifier behavior for severity, confidence, and duplicate handling
- the fallback behavior for findings that cannot be mapped to a valid inline diff position

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Structured Output Parser, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
