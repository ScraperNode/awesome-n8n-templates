# 📊 Evaluate organizational data maturity and email HTML reports with Postgres

> ⚡ **10 views** · 📊 [Market Research & Insights](../)

## Description

## **Overview**

This workflow automates data maturity evaluation to measure how well an organization uses data to create value by capturing assessment data through forms or APIs, processing and scoring responses using n8n logic and transformation nodes, and evaluating six critical data maturity domains. It generates a structured maturity report with clear, actionable feedback and visualized HTML/CSS results that stakeholders can use to prioritize improvements.

## **Why this matters**

Organizations that measure data maturity can:

- Identify gaps between current practice and business goals.
- Prioritize investments where they deliver the most value.
- Track progress over time with repeatable metrics.
- Improve compliance, trust, and decision-making quality.

## **What to measure**

The assessment covers six core dimensions:

**Data_Strategy_Governance**
Alignment of data strategy with business goals, governance frameworks, roles, and policies.

**Data_Quality_Integrity**
Accuracy, completeness, validation, and reliability of data used for reporting and analytics.

**Data_Driven_Decision_Intelligence**
Adoption of analytics, reporting, and decision-support processes (including predictive capabilities).

**Data_Management_Operations**
Operational practices for storage, pipeline reliability, integration, and automation.

**Data_Ethics_Privacy**
Policies and controls for privacy, ethical use, consent, and regulatory compliance.

**AI_Maturity_Assessment**
Maturity of AI adoption: use cases, model governance, monitoring, and operationalization.


## **Methodology**

25 targeted questions designed to cover all six dimensions.
Questions are distributed so each dimension is assessed by multiple items (some sections receive 4–5 questions each), ensuring balanced coverage and statistical reliability.

Scoring and levels: Each answer contributes to a numeric score; aggregated scores produce per-dimension averages and an overall maturity level (e.g., Needs Improvement / Good / Excellent).

## **Deliverables**

Per-dimension assessments with clear descriptions and colour-coded styling.

Overall maturity score and recommended next steps.

An HTML email-friendly report that merges template and assessment data for stakeholder distribution.

## 🔗 Nodes Used

Send Email, Postgres, Webhook, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
