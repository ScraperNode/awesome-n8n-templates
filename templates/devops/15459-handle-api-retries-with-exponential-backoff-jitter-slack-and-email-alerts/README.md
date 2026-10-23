# ⚙️ Handle API retries with exponential backoff, jitter, Slack and email alerts

> ⚡ **52 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Reusable Retry Handler with Exponential Backoff, Jitter, Slack/Email Alerts, and Manual Suspend

## How it works

This workflow is a reusable retry and resilience pattern for n8n.

It can be called from any workflow using the Execute Workflow node. It runs a transient operation, classifies the result, retries retryable failures using exponential backoff with jitter, and stops retrying after a configurable maximum number of attempts.

At a high level, it:

• Accepts a generic operation input from another workflow
• Runs an HTTP/API operation that can be replaced with any app node
• Retries only transient failures such as 408, 409, 425, 429, 500, 502, 503, and 504
• Avoids retrying common permanent errors such as 400, 401, 403, 404, and 422
• Calculates exponential backoff delay with random jitter to reduce retry storms
• Sends a Slack message when all retries are completed
• Sends an email notification when all retries are completed
• Suspends the workflow at a Wait node for manual review
• Optionally continues to Stop and Error so your global Error Workflow can capture the final failure

This template is useful for production workflows that call third-party APIs, SaaS apps, databases, or internal services that may fail temporarily.

## Set up steps

Setup should take around 10–15 minutes.

• Import the workflow JSON into n8n
• Configure Slack credentials in the Slack alert node
• Configure SMTP credentials in the email alert node
• Replace the demo HTTP Request node with your real API/app operation if needed
• Set your default max attempts, base delay, max delay, jitter percentage, Slack channel, and email recipient
• Call this workflow from other workflows using Execute Workflow
• Use n8n credentials or environment variables for secrets; do not hardcode API keys

This template implements a generic retry wrapper for n8n workflows:

- Exponential backoff
- Random jitter
- Max attempts
- Retryable/non-retryable classification
- Slack alert when retries are exhausted
- Email alert when retries are exhausted
- Suspend/wait for manual review after retries are exhausted
- Optional final Stop and Error so a global Error Workflow can capture the failed execution

## Default retry policy

Retryable by default: 408, 409, 425, 429, 500, 502, 503, 504.

Not retried by default: 400, 401, 403, 404, 422.

## Backoff formula

```text
waitSeconds = min(maxDelaySeconds, baseDelaySeconds * 2^(attempt - 1))
finalWait = waitSeconds +/- random(jitterPercent)
```

## How to use

1. Import the template into n8n.
2. Configure Slack credentials in the Slack node.
3. Configure SMTP credentials in the Email node.
4. Replace the demo HTTP Request node with your real operation, or pass HTTP inputs into the template.
5. From another workflow, call this workflow using Execute Workflow.

## Example input

```json
{
  "operationName": "Create customer in CRM",
  "url": "https://api.example.com/customers",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer {{$env.API_TOKEN}}"
  },
  "body": {
    "name": "Acme"
  },
  "maxAttempts": 5,
  "baseDelaySeconds": 30,
  "maxDelaySeconds": 900,
  "jitterPercent": 25,
  "notifyEmail": "ops@example.com",
  "slackChannel": "#automation-alerts"
}
```

## Suspended workflow behavior

After all retries are completed, the workflow sends Slack and email notifications, then pauses at a Wait node. This keeps the failed execution suspended for manual review. After review, resume the workflow using the Wait node resume URL. It then reaches Stop and Error, allowing your global error workflow to capture the final failure.

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
