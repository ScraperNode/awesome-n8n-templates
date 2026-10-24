# ⚙️ Predict and prevent service failures with Claude, ClickUp, and WhatsApp alerts

> ⚡ **19 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily to collect incident, deployment, metrics, log-volume, and GitHub code-churn history, builds per-service risk profiles, asks Anthropic Claude to predict which services are most likely to fail next, and creates preventive ClickUp tasks with WhatsApp alerts for high-risk predictions.

## How it works
1. Runs on a daily schedule (or manually) and loads configuration such as service names, API endpoints, and risk thresholds.
2. Fetches historical incident logs, deployment history, APM/metrics trends, error-log volume trends, and GitHub commit activity via HTTP APIs.
3. Builds a risk profile per service from these signals and detects recurring patterns such as weekday clustering and incidents occurring within 48 hours of deployments.
4. Sends the per-service profiles to Anthropic Claude and parses a ranked JSON list of predicted failures with probability, risk level, failure mode, recommended actions, and a predicted window.
5. Routes predictions by risk level to send an urgent WhatsApp alert and create a high-priority ClickUp task for high risk, create a standard ClickUp task for medium risk, or log low-risk predictions without action.
6. Waits for the verification window, rechecks the incident log and ClickUp task status, and sends a WhatsApp confirmation if an incident occurred or a prevention-success summary if no incident occurred and the task was completed.

## Setup
1. Provide HTTP credentials for your incident log API, deployment history API, APM/metrics API, and log aggregator API used by the workflow’s HTTP requests.
2. Add a GitHub API credential (or update the code-churn request and credential) and set the repo owner used in the commit search query.
3. Add an Anthropic (Claude) API key using HTTP header authentication and confirm the model name used in the request.
4. Add a ClickUp API credential and set the target ClickUp list ID for preventive task creation.
5. Add WhatsApp Business Cloud credentials and set the WhatsApp phone number ID and recipient phone number for alerts and summaries.
6. Update the service list, risk thresholds, time windows, and all API URLs in the configuration step before activating the workflow.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
