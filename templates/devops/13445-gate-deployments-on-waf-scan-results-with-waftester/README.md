# ⚙️ Gate deployments on WAF scan results with WAFtester

> ⚡ **3 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## What it does

A CI/CD quality gate that blocks deployments when WAF protection is insufficient. Your pipeline sends a webhook with the target URL, the workflow runs [WAFtester](https://waftester.com) scans, and returns a pass/fail HTTP response the pipeline can gate on.

## About WAFtester

[WAFtester](https://waftester.com) is an open-source CLI for testing Web Application Firewalls. It ships 27 MCP tools, 2,800+ attack payloads across 18 categories (SQLi, XSS, SSRF, SSTI, command injection, XXE, and more), detection signatures for 26 WAF vendors and 9 CDNs, and enterprise-grade assessment with F1/MCC scoring and letter grades (A+ through F).

- GitHub: [github.com/waftester/waftester](https://github.com/waftester/waftester)
- Docs: [Installation](https://github.com/waftester/waftester/blob/main/docs/INSTALLATION.md) | [Examples](https://github.com/waftester/waftester/blob/main/docs/EXAMPLES.md) | [Commands](https://github.com/waftester/waftester/blob/main/docs/COMMANDS.md)

## Who it's for

- **DevOps teams** enforcing security gates in CI/CD
- **Platform engineers** automating deployment approvals
- **Security teams** requiring pre-deploy WAF validation

## How it works

The workflow has seven nodes:

1. **Webhook** — Receives a POST with `{"target": "https://staging.example.com", "categories": ["sqli", "xss"]}`
2. **Detect WAF** — Calls WAFtester's `detect_waf` tool to fingerprint the WAF vendor
3. **Start Scan** — Launches an async `scan` task with the requested attack categories
4. **Wait** — Pauses to let the scan run
5. **Poll Results** — Calls `get_task_status` to retrieve completed results
6. **Evaluate** — Compares the detection rate against `WAF_PASS_THRESHOLD`
7. **Respond** — Returns HTTP 200 (pass, deploy allowed) or HTTP 422 (fail, deploy blocked) with bypass details

### CI/CD integration example

```bash
# In your pipeline
RESPONSE=$(curl -s -w "%{http_code}" -o body.json \
  -X POST https://your-n8n/webhook/waf-gate \
  -H "Content-Type: application/json" \
  -d '{"target": "https://staging.example.com", "categories": ["sqli", "xss"]}')
if [ "$RESPONSE" != "200" ]; then echo "WAF gate failed"; exit 1; fi

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
