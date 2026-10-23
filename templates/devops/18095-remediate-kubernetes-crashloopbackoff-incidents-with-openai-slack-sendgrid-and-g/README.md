# ⚙️ Remediate Kubernetes CrashLoopBackOff incidents with OpenAI, Slack, SendGrid and Google Sheets

> ⚡ **38 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow detects Kubernetes pods in CrashLoopBackOff via an Alertmanager webhook or a 2-minute poll, fetches failing container logs, uses OpenAI to diagnose the likely root cause and recommended remediation, applies the remediation through the Kubernetes API, and reports the incident to Slack, SendGrid email, and Google Sheets.

## How it works
1. Receives a webhook from Prometheus Alertmanager or runs every 2 minutes to list pods from the Kubernetes API.
2. Filters the pod list to only those with containers waiting in CrashLoopBackOff and exits early with a “no action needed” webhook response when none are found.
3. Retrieves the previous container logs for each crashing pod and packages the log excerpt with pod metadata.
4. Uses OpenAI to classify the root cause, assign a confidence score, and choose a recommended action, escalating automatically when the output is unparseable or below the confidence threshold.
5. Remediates the incident by deleting the pod (restart), patching the deployment scale to increase replicas, patching the deployment template to roll back to an earlier ReplicaSet, or taking no action when escalated.
6. Generates a short incident summary with OpenAI, posts it to Slack, emails it via SendGrid, appends the incident details to a Google Sheets log, and returns the outcome in the webhook response.

## Setup
1. Provide Kubernetes API access by configuring an HTTP Header Auth credential with a service account bearer token, updating YOUR_K8S_API_SERVER and YOUR_NAMESPACE, and granting RBAC permissions to list/get/watch/delete pods and patch deployments (including scale) and list/get ReplicaSets.
2. Add OpenAI API credentials for both OpenAI chat model nodes and confirm the selected model (gpt-4.1-mini) is available in your account.
3. Create a Slack Incoming Webhook and replace YOUR_SLACK_WEBHOOK_URL with your webhook path for the target incident channel.
4. Create a SendGrid API key, set it as an HTTP Header Auth credential, and replace YOUR_VERIFIED_SENDER and YOUR_ONCALL_EMAIL.
5. Add Google Sheets OAuth2 credentials and replace YOUR_SHEET_ID (and ensure the IncidentsLog sheet/tab exists with columns matching the appended values).
6. If using alerts, copy the production webhook URL from n8n and configure Prometheus Alertmanager to POST CrashLoopBackOff notifications to /k8s-crashloop-alert.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
