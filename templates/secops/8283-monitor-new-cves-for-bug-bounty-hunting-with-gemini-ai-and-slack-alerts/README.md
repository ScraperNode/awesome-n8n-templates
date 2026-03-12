# 🔒 Monitor new CVEs for bug bounty hunting with Gemini AI and Slack alerts

> ⚡ **995 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How it works
Automatically monitors NIST's CVE database every hour for new vulnerabilities and uses AI to assess their relevance for bug bounty hunting, delivering actionable intelligence directly to Slack.

## Set up steps
- Get Google Gemini API key from AI Studio (free tier available)
- Create Slack bot with chat:write permissions  
- Configure your target Slack channel
- AI filters and scores each CVE for exploitation potential

## What you'll get
Real-time CVE intelligence with:
- Bug bounty relevance scoring (HIGH/MEDIUM/LOW/NONE)
- Actionable testing strategies for each vulnerability
- Slack-formatted reports with CVSS severity scores
- Focus on web-testable vulnerabilities only

Part of "The Warden" project - perfect for security researchers who want AI-filtered, actionable CVE intelligence without the noise.

![image.png](fileId:2313)

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
