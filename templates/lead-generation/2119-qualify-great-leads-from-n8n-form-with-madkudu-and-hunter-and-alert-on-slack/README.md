# 🎣 Qualify great leads from n8n Form with MadKudu and Hunter and alert on Slack

> ⚡ **918 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Use case
If you have a form where potential leads reach out, then you probably want to analyze those leads and send a notification if certain requirements are met, e.g. employee number is high enough. MadKudu is built exactly to solve this problem. We use it along with Hunter to alert on Slack for high quality leads.

![Screenshot 20240222 at 16.35.53.png](fileId:739)

## How to setup
1. Add you **MadKudu**, **Hunter**, and **Slack** credentials 
2. Set the Slack channel
3. Click the Test Workflow button, enter your email and check the Slack channel
4. Activate the workflow and use the form trigger production URL to collect your leads in a smart way 

## How to adjust this template
You may want to raise or lower the threshold for your leads, as you see fit.

## 🔗 Nodes Used

HTTP Request, Slack, Hunter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
