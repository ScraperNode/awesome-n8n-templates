# 🔒 Triage AWS security misconfigurations with GPT-4.1 Mini and send alerts to Gmail

> ⚡ **368 views** · 🔒 [SecOps & Security Automation](../)

## Description

## What this workflow does

Automatically triages risky AWS misconfigurations and alerts your team.

**Pipeline:** Security Hub or AWS Config -&gt; EventBridge rules -&gt; SNS (HTTP) -&gt; n8n Webhook -&gt; Normalize -&gt; AI Prioritizer -&gt; Airtable (log) -&gt; Gmail (email)

-   Normalizes incoming findings (S3 / Security Groups / IAM / RDS) into a consistent JSON.
    
-   Uses an LLM to assign a priority (**P0–P3**) with rationale and remediation steps.
    
-   Upserts the finding into Airtable (avoids duplicates).
    
-   Emails a compact incident summary to your inbox. This can be swapped for Microsoft Teams or Slack, etc.
    

**Category:** Security / Cloud / Alerting  
**Time to set up:** ~10–15 minutes  
**Difficulty:** Beginner–Intermediate  
**Cost:** Mostly free (n8n CE + AWS SNS/EventBridge; OpenAI + Airtable/Gmail as used)

----------

## What you’ll need

-   An n8n instance reachable over **HTTP**.
    
-   AWS account (one region) with permissions to create **SNS topics** and **EventBridge rules**.
    
-   **Security Hub** enabled (or AWS Config rules that emit compliance events).
    
-   n8n credentials: **OpenAI**, **Airtable**, **Gmail**.
    

----------

## Nodes used

-   **Webhook** (POST `/aws-misconfig`)
    
-   **Code:** SNS Handler (token check, confirm/unwrap)
    
-   **IF:** route `mode === "confirm"` vs notification
    
-   **HTTP Request:** SNS `SubscriptionConfirmation` (GET)
    
-   **Code:** Normalize Finding
    
-   **Message a model:** AI Prioritizer (JSON out)
    
-   **Airtable:** Create/Upsert
    
-   **Gmail:** Send message
    
-   **Edit Fields:** final JSON response
    

----------

## Setup steps

1.  **Import and activate** the workflow in n8n.
    
    -   Webhook Respond: **When Last Node Finishes -&gt; First Entry JSON**.
        
    -   Append a shared secret to the URL, e.g. `?token=MY_SUPER_TOKEN`, and keep the check in the SNS Handler code node.
        
2.  **Create an SNS topic** (e.g., `misconfig-events`) in the same region as your EventBridge rules.
    
3.  **Create EventBridge rules** targeting the SNS topic:
    
    -   **Rule A (Security Hub):** `source = aws.securityhub`, `detail-type = Security Hub Findings - Imported`
        
    -   **Rule B (AWS Config):** `source = aws.config`, `detail-type = Config Rules Compliance Change`
        
4.  **Create an SNS subscription** with **Protocol = HTTP** and **Endpoint = your production webhook URL**:  
    `http://YOUR_HOST:5678/webhook/aws-misconfig?token=MY_SUPER_TOKEN`  
    (The workflow auto-confirms the subscription on first POST.)
    
5.  Configure **Airtable** (Upsert on **Finding ID**) and **Gmail** recipients.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
