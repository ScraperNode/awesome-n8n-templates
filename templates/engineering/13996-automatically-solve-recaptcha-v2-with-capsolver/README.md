# ⚒️ Automatically solve reCAPTCHA v2 with CapSolver

> ⚡ **86 views** · ⚒️ [Engineering](../)

## Description

## **reCAPTCHA v2 Solver (CapSolver + n8n)**

### **How it works**

• Receives reCAPTCHA v2 solving requests via webhook
• Sends tasks to CapSolver and returns solved tokens in real time
• Runs a scheduled check to validate solving performance
• Submits tokens to target endpoint and verifies success/failure
• Supports manual trigger for quick testing and debugging

---

### **Set up steps**

• Add your CapSolver API key to all CapSolver nodes
• Configure the webhook endpoint for incoming requests
• Adjust target website URL and site key if needed
• Review or modify the hourly schedule trigger
• Run a quick manual test to confirm everything works

⏱️ Setup time: ~5–10 minutes

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
