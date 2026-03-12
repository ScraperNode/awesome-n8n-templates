# ⚒️ Learn JavaScript data processing with code node: filtering, analysis & export examples

> ⚡ **1,105 views** · ⚒️ [Engineering](../)

## Description

## Overview
A comprehensive educational workflow that demonstrates practical JavaScript usage in n8n's Code node through real-world business scenarios. Perfect for learning data manipulation, transformation, and automation patterns that you can immediately apply to client projects.
What This Template Teaches:

Data Filtering & Transformation - Filter employees by age, calculate bonuses, format contact information
Statistical Analysis - Generate team statistics, averages, role distributions, and KPIs
Multi-Format Export - Create CSV files, email lists, and API-ready payloads from raw data
n8n Best Practices - Proper JSON handling, return formats, and data flow patterns

## How It Works:

Manual Trigger starts the workflow with sample employee data
Set Sample Data provides realistic business data (employees with roles, salaries, ages)
Three Code Node Examples process the same data differently:

Filter & Transform: Creates adult employee list with calculated bonuses
Calculate Stats: Generates comprehensive team analytics and reports
Format for Export: Prepares data for external systems (APIs, emails, CSV)



**Key Learning Points**:

Access input data using items[0].json.propertyName
Return proper n8n format with [{ json: data }] structure
Use JSON.parse() for string-to-object conversion
Apply JavaScript array methods (filter, map, reduce) for data processing
Handle multiple output scenarios and data aggregation

**Perfect For**:

n8n beginners learning Code node fundamentals
Developers transitioning to n8n automation
Client demos showing data processing capabilities
Team training and onboarding sessions
Foundation for building custom business automation workflows

**Business Use Cases**:
Transform this template for lead qualification, customer segmentation, report generation, data enrichment, and API integrations. Each Code node pattern can be adapted for different industries and automation needs.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
