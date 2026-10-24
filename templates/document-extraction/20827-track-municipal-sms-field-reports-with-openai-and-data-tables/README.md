# 🔬 Track municipal SMS field reports with OpenAI and Data Tables

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Designed for municipal teams, this demonstration records field updates and incidents from SMS-style messages and lets agents check their recent activity.

Inspired by rural African administrations, it can be adapted elsewhere. n8n Data Tables store records, OpenAI interprets reports, and replies are simulated rather than sent as SMS.

## How it works
1. In many municipalities, field reports are shared through phone calls, informal messages, or paper records. This workflow explores a simpler way to collect that information and keep track of activities and incidents.
2. A field officer submits a message using one of four commands: UPDATE to report progress, ALERT to flag an incident, STATUS to consult previous reports, or BRIEF to receive a summary of recent activity.
3. The workflow records the incoming message, checks for duplicates, and matches the sender's phone number against a list of registered agents. This is a basic identification process, not secure authentication.
4. For UPDATE and ALERT messages, OpenAI helps identify useful details such as the activity, location, progress, or severity of an incident. Missing information is not invented. STATUS and BRIEF rely on existing records rather than AI-generated answers.
5. Reports are stored in n8n Data Tables, where they can be consulted later. Incident routing rules can identify relevant municipal departments, while STATUS and BRIEF retrieve information associated with the identified agent.
6. The workflow prepares a response and records the simulated sending result. No real SMS is delivered. The demonstration illustrates how a structured reporting process could support better follow-up and coordination.

## Setup
1. Create the five Data Tables used to organize agents, activity reports, incidents, routing rules, and messages. The installation guide provides the exact structure for each table.
2. Import the workflow into n8n. The template includes both the main reporting process and the SMS response process on one canvas. Copy the Send SMS section into a separate workflow, then connect it to the main workflow as explained in the guide.
3. Connect each workflow node to its corresponding Data Table. Add your own OpenAI credentials so the workflow can interpret UPDATE and ALERT messages.
4. Add a fictional field officer and an example incident routing rule. These sample records allow you to explore the reporting process without using real personal or operational information.
5. Keep the workflows inactive and use the webhook Test URL to try the four commands with fictional data. This is a demonstration, not a production-ready service. Real deployment would require secure authentication, appropriate access controls, privacy safeguards, and an SMS provider.

Complete installation guide: https://github.com/Alassnr10/sms-territorial-operations-hub/blob/main/SETUP.md

## Requirements
- An n8n instance with Data Tables enabled and an OpenAI account for interpreting field reports.

No SMS subscription is needed to explore the demonstration. Sample messages and fictional agent records can be used to understand how the system works.

## Customization
- The workflow can be adapted to reflect different departments, reporting responsibilities, incident categories, and local priorities.

The workflow can be adapted to reflect different departments, reporting responsibilities, incident categories, and local priorities.

The aim is to start with a simple reporting process that fits how local teams actually work.

## 🔗 Nodes Used

Webhook, Execute Sub-workflow, Execute Workflow Trigger, OpenAI Chat Model, Information Extractor, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
