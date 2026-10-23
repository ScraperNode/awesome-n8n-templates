# 👥 Detect payroll discrepancies with Google Sheets, Slack and Gmail

> ⚡ **36 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow runs monthly to compare current vs. previous payroll data in Google Sheets, detect pay anomalies, alert Finance in Slack, email HR via Gmail, and log discrepancies back to a Google Sheets audit tab.

## How it works
1. Runs on a monthly schedule (cron: 0 9 25 * *) to start a pre-payroll review.
2. Reads the current pay run and the previous pay run from two Google Sheets tabs.
3. Compares both periods per employee to flag duplicates, unmatched employees, pay without hours, and large net pay swings based on percentage thresholds.
4. If no anomalies are found, posts an all-clear message to a Slack channel.
5. For each flagged anomaly, classifies severity and posts an immediate Slack “payroll hold” alert for Critical items.
6. Appends each flagged anomaly to an AnomalyLog tab in Google Sheets and emails HR a per-employee review message via Gmail.
7. Aggregates all flagged items into a run-level digest and posts the summary and recommendation to Slack for Finance.

## Setup
1. Add Google Sheets credentials and set your spreadsheet ID, ensuring it contains the CurrentPayRun, PreviousPayRun, and AnomalyLog tabs.
2. Ensure your payroll sheets include the expected columns (employee_id, name, net_pay, hours, status, and email) so the discrepancy checks work correctly.
3. Add Slack credentials and replace the Slack channel ID(s) used for critical holds, digests, and all-clear messages.
4. Add Gmail credentials and set the HR recipient email address for anomaly review notifications.
5. Adjust the schedule cron expression and the discrepancy thresholds in the detection code (for example, 15%, 40%, and 80%) to match your payroll policies.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
