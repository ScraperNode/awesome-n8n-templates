# ⚒️ Transform GitHub repos into evidence-based architecture blueprints with Claude

> ⚡ **54 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Requirements:** GitHub API token (`repo` scope), Anthropic API key (Claude Sonnet 4.5), Slack Bot Token *(optional)*

This workflow analyzes any public GitHub repository and generates an evidence-based architecture blueprint — with Mermaid.js diagrams, technical stack analysis, and risk assessment — then pushes it as `README_ARCH.md` directly to the repo.

**What makes it different:** A strict anti-hallucination prompt ensures Claude only describes technologies that actually exist in the code. No Dockerfile? Docker is never mentioned. No `.tf` files? Terraform doesn't appear. Every claim traces back to real file evidence.

## How it works

1. A GitHub URL is submitted via the **web form** or **webhook API**
2. The workflow fetches repo metadata, the full file tree, and contents of key files (package.json, requirements.txt, Dockerfiles, entry points, etc.)
3. **Claude Sonnet 4.5** (temperature 0.1) analyzes only the evidence — strict rules prevent inventing technologies not found in the code
4. A Markdown blueprint with architecture diagrams and risk analysis is assembled, auto-fixed, and pushed to the repo's default branch
5. A Slack notification is sent and the form user receives a styled success page

## Example output

The generated `README_ARCH.md` includes:

- **Project Purpose** — What the project does, based on code evidence
- **Technical Stack** — Languages, frameworks, and dependencies from actual dependency files
- **Architecture Blueprint** — Mermaid.js flowchart with dark-theme styling, grouped by layer
- **Request Flow** — Sequence diagram showing a typical path through the system
- **Evidence-Based Risks** — Three risks traceable to specific files or patterns

## Use cases

- **Open-source maintainers** — Auto-generate architecture docs for contributors
- **Engineering teams** — Quick onboarding docs for new team members
- **Code reviewers** — Understand unfamiliar repositories at a glance
- **Technical due diligence** — Rapid architecture assessment of vendor codebases
- **Portfolio projects** — Add professional documentation to showcase repos

## Setup

See the **Setup & Overview** sticky note in the workflow for step-by-step credential configuration.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Basic LLM Chain, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
