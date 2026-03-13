# 🔒 Run weekly WAF security audits with WAFtester and Slack alerts

> ⚡ **46 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What it does

Automated weekly WAF security assessments with Slack reporting. Detects your WAF vendor, runs a security assessment, grades your protection, and alerts your team when the grade drops below threshold.

## About WAFtester

[WAFtester](https://waftester.com) is an open-source CLI for testing Web Application Firewalls. It ships 27 MCP tools, 2,800+ attack payloads across 18 categories (SQLi, XSS, SSRF, SSTI, command injection, XXE, and more), detection signatures for 26 WAF vendors and 9 CDNs, and enterprise-grade assessment with F1/MCC scoring and letter grades (A+ through F).

- GitHub: [github.com/waftester/waftester](https://github.com/waftester/waftester)
- Docs: [Installation](https://github.com/waftester/waftester/blob/main/docs/INSTALLATION.md) | [Examples](https://github.com/waftester/waftester/blob/main/docs/EXAMPLES.md) | [Commands](https://github.com/waftester/waftester/blob/main/docs/COMMANDS.md)

## Who it's for

- Security teams needing continuous WAF monitoring
- DevOps engineers tracking WAF configuration drift
- Compliance teams requiring regular security assessments

## How it works

The workflow has seven nodes:

1. **Weekly Schedule** — Triggers every Monday at 3 AM (configurable)
2. **Detect WAF** — Calls WAFtester's `detect_waf` tool to fingerprint the WAF vendor and CDN
3. **Start Assessment** — Launches an async `assess` task testing SQLi, XSS, traversal, cmdi, and SSRF
4. **Wait** — Pauses to let the assessment run
5. **Poll Results** — Calls `get_task_status` to retrieve completed results
6. **Check Results** — Routes based on the WAF grade (pass if "A" or better, fail otherwise)
7. **Slack (Pass/Fail)** — Posts a summary to your Slack channel with grade, detection rate, and bypass count

## How to set up

1. **Start WAFtester MCP server:**
   `docker run -p 8080:8080 ghcr.io/waftester/waftester:latest mcp --http :8080`
2. **Set environment variables:** `WAF_TARGET_URL` (required), `WAFTESTER_MCP_URL`, `SLACK_CHANNEL`
3. **Add Slack OAuth2 credentials** and select them in both Slack nodes
4. **Activate** the workflow

Alternatively, use the included `docker-compose.yml` to run both n8n and WAFtester together.

## Requirements

| Requirement | Details |
|---|---|
| WAFtester MCP server | Docker image (`ghcr.io/waftester/waftester:latest`) or [binary install](https://github.com/waftester/waftester/blob/main/docs/INSTALLATION.md) |
| Slack | Workspace with OAuth2 bot credentials |
| Authorization | Only test targets you have explicit written permission to test |

## How to customize

- Adjust schedule in the Weekly Schedule node
- Change grade threshold in the Check Results node
- Add attack categories in Start Assessment's `categories` array
- Swap Slack for email, Teams, or any n8n notification node

## Links

- [WAFtester website](https://waftester.com)
- [GitHub repository](https://github.com/waftester/waftester)
- [Installation guide](https://github.com/waftester/waftester/blob/main/docs/INSTALLATION.md)
- [Full examples](https://github.com/waftester/waftester/blob/main/docs/EXAMPLES.md)
- [Docker Hub](https://hub.docker.com/r/waftester/waftester)

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
