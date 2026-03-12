# 📊 Weekly Google Analytics report with GPT-4o analysis & email delivery

> ⚡ **357 views** · 📊 [Market Research & Insights](../)

## Description

## Overview

The workflow automatically gathers **weekly user and page view metrics**. It then **uses AI to analyze, compare, and compile a summary report**. Finally, it **sends the report** to the manager's email.

## How it works

### Get Data from GA
Automatically **retrieve data from Google Analytics (GA) for the two most recent weeks**.
**Compare the data and calculate the variances** between the two weeks.

### Generate Report
Automatically **analyze the data and generate reports using Artificial Intelligence (AI)**.
**Generate charts** to visualize the data.
**Export the report to PDF**.

### Send Report
**Send the report via email to the manager.**

## Set up steps

### Google cloud account
Create the [credentials](https://console.cloud.google.com/apis/credentials) and replace them in the workflow.
Please [enable](https://console.cloud.google.com/apis/dashboard) the following APIs:
- Gmail API
- Google Analytics Admin API
- Google Analytics Data API

### HTML to PDF account
You need to install node HTML to PDF.
Get [API key](https://pdfmunk.com/) and replace in the workflow.

## 🔗 Nodes Used

Gmail, Google Analytics, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
