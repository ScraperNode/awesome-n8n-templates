# ⚙️ Create Kubernetes resources from Slack with Anthropic Claude and safety guardrails

> ⚡ **18 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow listens for Kubernetes create requests in Slack (or runs manually), uses Anthropic Claude to generate a Kubernetes manifest, validates it against deterministic safety guardrails, requests human approval in Slack, then applies the manifest via the Kubernetes API and verifies rollout health with automatic rollback on failure.

## How it works
1. Triggers from a Slack app mention or a manual run and captures a plain-English description of the Kubernetes resource to create.
2. Uses Anthropic Claude to generate a Kubernetes resource manifest as structured JSON plus a short explanation.
3. Parses the model output and deterministically validates the manifest against guardrails (allowed namespaces, required CPU/memory requests and limits, and blocked privileged/hostNetwork/hostPath usage).
4. If validation fails, posts the specific violations back to Slack and stops.
5. If validation passes, posts the manifest and explanation to Slack and waits for a human approve/reject decision.
6. On approval, sends the manifest to the Kubernetes API to create the resource, waits briefly, then fetches status and evaluates readiness/availability.
7. If the rollout is healthy, posts a success confirmation to Slack; if not, deletes the created resource via the Kubernetes API and alerts Slack about the rollback.

## Setup
1. Create and connect credentials for Anthropic (Claude), Slack (bot/token with permission to post messages and receive app mentions), and an HTTP Header Auth credential that sends your Kubernetes API bearer token.
2. Update the configuration values in the workflow for your Kubernetes API base URL, allowed namespaces, Slack target channel, and rollout grace/timeout values.
3. Configure your Slack app to enable app mentions in the target channel and ensure the workflow’s Slack Trigger is subscribed to the correct channel.

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, Anthropic Chat Model, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
