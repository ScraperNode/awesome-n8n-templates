# 🔒 Web security scanner for OWASP compliance with Markdown reports

> ⚡ **1,340 views** · 🔒 [SecOps & Security Automation](../)

## Description

**How the n8n OWASP Scanner Works & How to Set It Up**

**How It Works (Simple Flow):**
- **1. Input**: Enter target URL + endpoint (e.g., `https://example.com`, `/login`)
- **2. Scan**: This workflow executes 5 parallel HTTP tests (Headers, Cookies, CORS, HTTPS, Methods)
- **3. Analyze**: Pure JS logic checks OWASP ASVS (Application Security Verification Standard) rules (no external tools)
- **4. Merge**: Combines all findings into one Markdown report
- **5. Output**: Auto-generates + downloads `scan-2025-11-16_210900.md`** (example filename)
- **6. Email:** (Optional) Forward the report to an email address using Gmail.

---

**Setup in 3 Steps (2 Minutes)**

1. **Import Workflow**
   - Copy the full JSON (from "Export Final Workflow")
   - In n8n → **Workflows** → **Import from JSON** → Paste → Import

2. **(Optional) Connect your Gmail credentials**
   - In the last node to auto-email the report

3. **Click Execute the workflow** 
   - Enter a URL in the new window, then click 'submit'.

*You can alternatively download or receive the Markdown report directly from the Markdown to File node* 

---
  
*(Supports any HTTP/HTTPS endpoint. Works in n8n Cloud or self-hosted.)*

## 🔗 Nodes Used

HTTP Request, Gmail, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
