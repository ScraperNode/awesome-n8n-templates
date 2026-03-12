# ⚙️ Build, test and deploy AI projects with Windsurf CI/CD and Vercel

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This is a conceptual / starter workflow that triggers on git events (or schedule), runs Windsurf-powered build & test steps (via API or CLI wrapper), builds Docker if needed, pushes to registry, deploys to a target platform (e.g. Vercel / Render example), and notifies.

### What’s the Goal?
Provide a no/low-code CI/CD pipeline for AI projects using Windsurf’s AI coding & deployment capabilities inside n8n — no external GitHub Actions / Jenkins needed.

### Why Does It Matter?
AI projects evolve rapidly → manual deploy is slow & error-prone. Windsurf + n8n keeps model code, keys & inference private while automating quality gates & deployments.

### How It Works
1. Git webhook / schedule starts flow
2. Clone latest code
3. Trigger Windsurf build + test (lint, unit tests, model eval)
4. If tests pass → build Docker image
5. Push image to registry
6. Deploy to target (Vercel / Render / Railway / Fly.io / K8s)
7. Notify success / failure

### Configuration Requirements
- Git provider webhook / token
- Windsurf API key or self-hosted runner access
- Docker registry credentials
- Deployment target token (Vercel / Render / etc.)
- Notification (Slack / Email)

### Setup Guide
1. Import workflow
2. Connect credentials (Git, Windsurf, Docker, Deploy target, Slack)
3. Configure Set node: repo URL, branch, Windsurf profile, deploy target
4. Test manually first
5. Activate webhook → push code to trigger
6. Monitor & tune failure branches

### Contact / support: 
https://www.oneclickitsolution.com/contact-us/

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
