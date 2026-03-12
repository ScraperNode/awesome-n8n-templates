# ⚙️ Generate GitHub release notes with AI comparison

> ⚡ **79 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Generate GitHub Release Notes with AI

Automatically **generate GitHub release notes** using AI. 

This workflow compares your latest two GitHub releases, summarises the changes, and produces a clean, ready-to-paste changelog entry. 

It’s ideal for automating GitHub Releases, versioning workflows, and keeping your documentation or CHANGELOG.md up to date without manual editing.

---

### What this workflow does
- Listens for newly published GitHub Releases.
- Fetches and compares the latest two GitHub release versions.
- Uses an AI Chat Model to summarise changes and generate structured release notes.
- Outputs clean, reusable release note content for GitHub, documentation, or CI/CD pipelines.

---

## How it works
1. GitHub Trigger detects a new published release.
2. Release detail nodes extract the latest tag, body, and repository metadata.
3. Comparison logic fetches the previous release and prepares a diff.
4. Chat Model nodes (via OpenRouter) generate both a summary and a final, formatted release note.

---

## Requirements / Connections
- GitHub OAuth credential configured in n8n.
- OpenRouter API key connected to the Chat Model nodes.

---

## Setup instructions
1. Import the template.
2. Select your GitHub OAuth connection in all GitHub nodes.
3. Add your OpenRouter credential to the Chat Model nodes.
4. **(Optional)** Adjust the AI prompts to customise tone or formatting.

---

## Output
The workflow produces:
- A concise summary of differences between the last two GitHub releases.
- A polished AI-generated GitHub release note ready to publish.

---

## Customisation ideas
- Push generated notes directly into a CHANGELOG.md or documentation repo.
- Send release summaries to Slack or Teams.
- Include commit messages, PR titles, or labels for deeper analysis.

## 🔗 Nodes Used

GitHub, Github Trigger, HTTP Request, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
