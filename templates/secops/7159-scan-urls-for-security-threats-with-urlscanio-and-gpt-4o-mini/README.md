# 🔒 Scan URLs for security threats with urlscan.io and GPT-4o mini

> ⚡ **1,228 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How it works
• **Webhook → urlscan.io → GPT-4o mini → Gmail**  
• Payload example: `{ "url": "https://example.com" }`  
• urlscan.io returns a **Scan ID** and raw JSON.  
• AI node classifies the scan as *malicious / suspicious / benign*, assigns a **1-10 risk score**, and writes a two-sentence summary.  
• Gmail sends an alert that includes the URL, Scan ID, AI verdict, screenshot link, and full report link.

---

## Set-up steps  (~5 min)
• Create three credentials in n8n  
  1. **urlscan.io** API key  
  2. **OpenAI** API key (GPT-4o mini access)  
  3. **Gmail** OAuth (or SMTP)  
• Replace those fields in the nodes, or reference env vars like `{{ $env.OPENAI_API_KEY }}`.  
• Switch the Webhook to **Production** → copy the live URL.  
• Test with:  
  ```bash
  curl -X POST &lt;your-webhook-url&gt; \
       -H "Content-Type: application/json" \
       -d '{ "url": "https://example.com" }'

## 🔗 Nodes Used

Webhook, Gmail, urlscan.io, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
