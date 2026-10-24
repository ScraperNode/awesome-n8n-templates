# 🔬 Send a daily Shopify order report with Streamline Connector and Gmail

> ⚡ **35 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Generate and email a daily Shopify order report using Streamline Connector. The workflow retrieves recent orders, filters those from the last 24 hours, formats them into a clean HTML summary, and sends the report to a specified email address. Ideal for daily operational visibility, sales monitoring, and automated reporting without manual exports.


## How it works

1. The workflow runs on a daily schedule or can be triggered manually  
2. Streamline Connector retrieves orders from your Shopify store  
3. Orders from the last 24 hours are filtered from the results  
4. Each order is formatted into an HTML report  
5. The report is sent to the configured Gmail address as a daily summary  


## Set up steps

**Estimated setup time:** ~2 minutes  

1. Create a Streamline Connector credential using your Shop ID  
2. Select the credential in the Streamline Connector node  
3. Create or connect your Gmail credential in the send email node  
4. Change the recipient email address in the Gmail node  
5. Save the workflow and activate it to begin sending daily reports  


## Use cases

1. Receive automated daily sales summaries  
2. Monitor new orders without logging into Shopify  
3. Share order activity with stakeholders via email  
4. Maintain a daily operational snapshot for reporting  
5. Trigger downstream workflows based on daily order volume

## 🔗 Nodes Used

Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
