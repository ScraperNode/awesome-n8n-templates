# ⚙️ Analyze logs and correlate incidents with OpenAI and Slack

> ⚡ **146 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview

This workflow implements an **AI-powered incident investigation and root cause analysis system** that automatically analyzes operational signals when a system incident occurs.

When an incident is triggered via webhook, the workflow gathers operational context including **application logs, system metrics, recent deployments, and feature flag changes**. These signals are processed to detect error patterns, cluster similar failures, and correlate them with recent system changes.

The workflow uses vector embeddings to group similar log messages, allowing it to detect dominant failure patterns across services. It then aligns these failures with contextual events such as deployments, configuration changes, or traffic spikes to identify potential causal relationships.

An AI agent analyzes all available evidence and generates **structured root cause hypotheses**, including confidence scores, supporting evidence, and recommended remediation actions.

Finally, the workflow posts a detailed incident report directly to Slack, enabling engineering teams to quickly understand the issue and respond faster.

This architecture helps teams **reduce mean time to resolution (MTTR)** by automating the early stages of incident investigation.

---

## How It Works

### 1. Incident Trigger

The workflow begins when an incident alert is received through a webhook endpoint.  
The webhook payload may include information such as:

- incident ID
- severity level
- timestamp
- affected service

This event starts the automated investigation process.

---

### 2. Workflow Configuration

A configuration node defines the operational parameters used throughout the workflow, including:

- Logs API endpoint
- Metrics API endpoint
- Deployments API endpoint
- Feature flags API endpoint
- Time window for analysis
- Slack channel for incident notifications

This allows the workflow to be easily adapted to different observability stacks.

---

### 3. Incident Context Collection

The workflow collects system context from multiple sources:

- application logs
- infrastructure or service metrics
- recent deployments
- active feature flags

Gathering this information provides the signals required to understand what happened before and during the incident.

---

### 4. Log Normalization and Denoising

Raw logs are processed to remove low-value entries such as debug or informational messages.

The workflow extracts structured error information including:

- timestamps
- log severity
- services involved
- request or session IDs
- error messages and stack traces

This step ensures that only relevant failure signals are analyzed.

---

### 5. Failure Pattern Clustering

Error messages are converted into embeddings using OpenAI.

The workflow stores these embeddings in an in-memory vector store to group similar log messages together.  
This clustering step identifies dominant failure patterns that may appear across multiple sessions or services.

---

### 6. Failure Pattern Analysis

Clustered log data is analyzed to detect recurring error types and dominant failure clusters.

The workflow calculates statistics such as:

- total error volume
- most common error types
- error distribution across clusters
- dominant failure patterns

These insights help highlight the primary issues affecting the system.

---

### 7. Event Correlation Analysis

Failure patterns are then aligned with contextual events such as:

- deployments
- configuration changes
- traffic spikes

The workflow calculates correlation scores based on temporal proximity and assigns likelihood scores to potential causes.

This allows the system to identify events that may have triggered the incident.

---

### 8. AI Root Cause Analysis

An AI agent analyzes the collected signals and generates structured root cause hypotheses.

The agent considers:

- error clusters
- deployment timing
- configuration changes
- traffic patterns
- system metrics

The output includes:

- multiple root cause hypotheses
- confidence scores
- supporting evidence
- recommended remediation actions

---

### 9. Incident Ticket Creation

The final analysis is formatted into a structured incident report and posted to Slack.

The Slack message contains:

- incident metadata
- root cause hypotheses
- confidence scores
- evidence
- recommended actions
- affected services

This enables engineers to quickly review the investigation results and take action.

---

## Setup Instructions

### 1. Configure Observability APIs

Update the **Workflow Configuration** node with API endpoints for:

- Logs API
- Metrics API
- Deployments API
- Feature Flags API

These APIs should return JSON responses containing recent operational data.

---

### 2. Configure OpenAI Credentials

Add OpenAI credentials for:

- OpenAI Embeddings
- OpenAI Chat Model

These are used for log clustering and root cause analysis.

---

### 3. Configure Slack Integration

Add Slack credentials and specify the Slack channel ID in the configuration node.

Incident reports will be posted automatically to this channel.

---

### 4. Configure the Incident Trigger

Deploy the webhook endpoint generated by the **Incident Trigger** node.

Your monitoring or alerting system (PagerDuty, Grafana, Datadog, etc.) can call this webhook when incidents occur.

---

### 5. Activate the Workflow

Once configured, activate the workflow in n8n.

When incidents are triggered, the workflow will automatically run the investigation pipeline and generate a Slack incident report.

---

## Use Cases

### Automated Incident Investigation

Automatically analyze operational signals when alerts are triggered to identify possible causes.

---

### AI-Assisted Site Reliability Engineering

Provide engineers with AI-generated root cause hypotheses and investigation insights.

---

### Deployment Impact Detection

Detect whether a recent deployment or configuration change caused a system failure.

---

### Observability Signal Correlation

Combine logs, metrics, and system events to produce a unified incident analysis.

---

### Faster Incident Response

Reduce mean time to resolution (MTTR) by automating the early stages of incident debugging.

---

## Requirements

- n8n with LangChain nodes enabled
- OpenAI API credentials
- Slack credentials
- APIs for retrieving:
  - system logs
  - service metrics
  - deployment history
  - feature flag status

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
