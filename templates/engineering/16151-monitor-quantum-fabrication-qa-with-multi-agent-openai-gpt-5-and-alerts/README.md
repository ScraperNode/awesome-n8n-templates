# ⚒️ Monitor quantum fabrication QA with multi-agent OpenAI GPT-5 and alerts

> ⚡ **38 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow runs every 30 minutes and uses OpenAI (GPT-5-mini) to analyze quantum fabrication operations across device performance, process optimization, defect detection, supply chain, and maintenance. It synthesizes the results into a structured QA report, saves it to an n8n Data Table, and sends a critical alert via HTTP when needed.

## How it works
1. Runs every 30 minutes on a schedule.
2. Uses OpenAI to analyze current quantum device measurements for coherence (T1/T2), gate fidelity, reliability trends, and anomalies, and outputs a structured assessment.
3. Uses OpenAI to evaluate fabrication parameters, propose yield and quality optimizations (including parameter updates), and outputs structured recommendations.
4. Uses OpenAI to detect and classify potential device/fabrication defects from measurement data and outputs structured corrective actions.
5. Uses OpenAI to review supply chain inventory and supplier signals for risks and alerts, and separately assesses predictive maintenance needs based on device and fabrication health indicators.
6. Merges all five agent outputs, synthesizes them into a single executive QA report with consolidated metrics and prioritized actions, and parses the report into a structured JSON format.
7. Saves the QA report to an n8n Data Table and sends an HTTP POST alert to your notification endpoint if critical issues exist or the device status is degraded; otherwise it logs a normal-operation status.

## Setup
1. Add an OpenAI API credential and select the desired model for all agent and reporting steps.
2. Configure the external “tool” integrations used by the agents (Fetch Device Measurements, Fetch Fabrication Parameters, Update Fabrication Parameters, Fetch Supply Chain Data, and Trigger Maintenance Alert) so they return real data in your environment.
3. Replace the placeholder URL in the alert HTTP request and add the required HTTP Header Auth credentials for your alerting system (for example Slack, PagerDuty, or an email API).
4. Select or create an n8n Data Table and set its Data Table ID in the “Save QA Report” step so reports are persisted.
5. Adjust the schedule interval if you want monitoring to run more or less frequently.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
