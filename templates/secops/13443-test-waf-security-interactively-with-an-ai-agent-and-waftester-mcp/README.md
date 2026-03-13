# 🔒 Test WAF security interactively with an AI agent and WAFtester MCP

> ⚡ **20 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What it does

A conversational AI agent that connects to [WAFtester](https://waftester.com) via MCP (Model Context Protocol) for interactive Web Application Firewall security testing. Type natural language requests — the agent picks the right tools, runs the tests, and explains the results.

## About WAFtester

[WAFtester](https://waftester.com) is an open-source CLI for testing Web Application Firewalls. It ships 27 MCP tools, 2,800+ attack payloads across 18 categories (SQLi, XSS, SSRF, SSTI, command injection, XXE, and more), detection signatures for 26 WAF vendors and 9 CDNs, and enterprise-grade assessment with F1/MCC scoring and letter grades (A+ through F).

- GitHub: [github.com/waftester/waftester](https://github.com/waftester/waftester)
- Docs: [Installation](https://github.com/waftester/waftester/blob/main/docs/INSTALLATION.md) | [Examples](https://github.com/waftester/waftester/blob/main/docs/EXAMPLES.md) | [Commands](https://github.com/waftester/waftester/blob/main/docs/COMMANDS.md)

## Who it's for

- **Security engineers** running ad-hoc WAF assessments
- **Penetration testers** who want AI-assisted reconnaissance and bypass discovery
- **DevSecOps teams** validating WAF coverage before and after deployments
- **API security teams** testing OpenAPI/Swagger specs against WAF rules

## How it works

The workflow has four nodes:

1. **Chat Trigger** — Opens an n8n chat interface where you type requests in plain English
2. **AI Agent** — Receives your message, reasons about which tools to call, and orchestrates the testing workflow
3. **OpenAI Chat Model** — Provides the LLM reasoning layer (GPT-4o recommended; swappable for Anthropic, Ollama, etc.)
4. **WAFtester MCP** — Connects to the WAFtester server via SSE and exposes all 27 tools to the agent

The agent follows a standard WAF testing workflow:

1. **detect_waf** — Fingerprint the WAF vendor and CDN protecting the target
2. **discover** — Map the attack surface (endpoints, parameters, technologies) from robots.txt, sitemaps, JavaScript, and Wayback Machine
3. **learn** — Generate a prioritized test plan based on discovery results
4. **scan** — Fire 2,800+ attack payloads and measure detection vs. bypass rates
5. **bypass** — Systematic mutation matrix testing to find WAF evasion techniques
6. **assess** — Generate a formal security grade with F1, precision, MCC, and false positive rate

Long-running operations (scan, assess, bypass, discover, discover_bypasses, event_crawl, scan_spec) run asynchronously — the agent polls for results automatically.

## Key capabilities

| Capability | Details |
|---|---|
| WAF detection | Fingerprint 26 WAF vendors and 9 CDNs from response headers, cookies, and error pages |
| Payload scanning | 2,800+ payloads across 18 attack categories |
| Bypass discovery | Mutation matrix with 40+ tamper techniques to find WAF evasions |
| Enterprise assessment | F1 score, precision, MCC, false positive rate, and A+ through F grading |
| API spec testing | Validate, plan, and scan OpenAPI/Swagger/Postman specs |
| Headless crawling | Click-driven DOM crawling via headless browser for JS-rendered endpoints |
| Knowledge resources | 12 built-in resources covering WAF signatures, evasion techniques, OWASP mappings, and config defaults |

## Example prompts

- "What WAF is protecting https://example.com?"
- "Scan https://example.com for SQLi and XSS"
- "Find WAF bypasses for https://example.com"
- "Run a full security assessment of https://example.com"
- "Validate my API spec at https://example.com/openapi.json"
- "Discover the attack surface of https://example.com"

## How to set up

1. **Start WAFtester MCP server:**
   `docker run -p 8080:8080 ghcr.io/waftester/waftester:latest mcp --http :8080`
2. **Add OpenAI credentials** in n8n: Settings → Credentials → New → OpenAI API
3. **Select the credential** in the OpenAI Chat Model node
4. **Activate** the workflow and open the chat interface

Alternatively, use the included `docker-compose.yml` to run both n8n and WAFtester together with `docker compose up -d`.

## Requirements

| Requirement | Details |
|---|---|
| WAFtester MCP server | Docker image (`ghcr.io/waftester/waftester:latest`) or [binary install](https://github.com/waftester/waftester/blob/main/docs/INSTALLATION.md) for macOS, Linux, Windows |
| LLM API key | OpenAI (default), or swap the model node for Anthropic, Ollama, Azure OpenAI, or any LangChain-compatible provider |
| Authorization | Only test targets you have explicit written permission to test |

## Links

- [WAFtester website](https://waftester.com)
- [GitHub repository](https://github.com/waftester/waftester)
- [Installation guide](https://github.com/waftester/waftester/blob/main/docs/INSTALLATION.md)
- [Full examples](https://github.com/waftester/waftester/blob/main/docs/EXAMPLES.md)
- [Docker Hub](https://hub.docker.com/r/waftester/waftester)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
