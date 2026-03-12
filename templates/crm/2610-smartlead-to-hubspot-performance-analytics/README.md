# 🤝 Smartlead to HubSpot performance analytics

> ⚡ **1,910 views** · 🤝 [CRM & Sales Operations](../)

## Description

*Smartlead to HubSpot Performance Analytics
A streamlined workflow to analyze your Smartlead performance metrics by tracking lifecycle stages in HubSpot and generating automated reports.*

## **Who is this for?**

(Outbound) Automation Agencies, Sales and marketing teams using Smartlead for outreach campaigns who want to track their performance metrics and lead progression in HubSpot.

**What problem does this workflow solve?**

Manual tracking of lead performance across Smartlead and HubSpot is time-consuming and error-prone. This workflow automates performance reporting by connecting your Smartlead data with HubSpot lifecycle stages, providing clear insights into your outreach campaign effectiveness.

**What this workflow does**

Automatically pulls performance data from your Smartlead campaigns
Cross-references contact status with HubSpot lifecycle stages
Generates comprehensive performance reports in Google Sheets
Provides customizable reporting schedules to match your team's needs

## **Setup Requirements**

### **PostgreSQL Database**

Set up your PostgreSQL instance (includes $300 free GCP credits)
Follow our step-by-step setup guide: [Find a step-by-step guide here](https://github.com/wukimidaire/postgres_table_templates)


### **Google Account Integration**

Connect your Google Account to n8n
[Find the guide here](https://docs.n8n.io/integrations/builtin/credentials/google/#compatible-nodes)


### **Smartlead Configuration**

Connect your Smartlead instance:
Detailed connection guide included in workflow



### **How to customize this workflow**

Configure the Trigger node to adjust report frequency
Modify the Google Sheets template to match your specific KPIs
Customize HubSpot lifecycle stage mapping in the Function node
Adjust PostgreSQL queries to track additional metrics

Need assistance or have suggestions? 
lmk [**here**](https://www.linkedin.com/in/victordecoster/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
