# ⚙️ Auto-retry engine: error recovery workflow

> ⚡ **1,859 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Workflow Documentation: Auto-Retry Engine – Error Recovery Workflow  

## Detailed Description  

The **Auto-Retry Engine: Error Recovery Workflow** is designed to automate the process of identifying and retrying failed executions in **n8n** workflows. By leveraging scheduled triggers, API integrations, and conditional logic, this workflow ensures that any failed executions are automatically retried on an **hourly basis**. This reduces manual intervention, improves system reliability, and ensures smoother workflow operations.  

## Who is this for?  

This workflow is ideal for:  

- **Automation Engineers**: Managing and maintaining workflows with minimal manual intervention.  
- **DevOps Teams**: Ensuring high availability and reliability of automated processes.  
- **IT Administrators**: Reducing downtime and improving system performance by automating error recovery.  

## What problem does this workflow solve?  

- **Manual Error Handling**: Eliminates the need for manual monitoring and retrying of failed executions.  
- **Improved Reliability**: Automatically retries failed executions, reducing downtime and improving workflow success rates.  
- **Time Efficiency**: Saves time by automating repetitive error recovery tasks, allowing teams to focus on higher-priority work.  

## What this workflow does  

This workflow automates the following steps:  

1. **Scheduled Monitoring**: Checks for failed executions hourly using a schedule trigger.  
2. **Error Filtering**: Identifies executions that have failed and filters out those that have already been successfully retried.  
3. **Authentication**: Logs into the n8n instance using API credentials to retrieve session details.  
4. **Automatic Retry**: Retries the failed executions using the n8n API.  
5. **Batch Processing**: Processes multiple failed executions in batches to avoid overloading the system.  

## Setup  

### Prerequisites  

To use this workflow, you’ll need:  

- **n8n Account**: To create and run the workflow.  
- **n8n API Credentials**: For logging into the n8n instance and retrying executions.  
- **HTTP Request Node**: Configured to interact with the n8n API.  
- **Schedule Trigger**: Set to run the workflow hourly.  

### Setup Process  

1. **Configure Schedule Trigger**  
   - Set the trigger to run hourly to check for failed executions.  

2. **Set Login Credentials**  
   - Add your n8n instance URL, username, and password in the Set Node.  

3. **Integrate n8n API**  
   - Use the HTTP Request node to log into the n8n instance and retrieve session details.  

4. **Retry Failed Executions**  
   - Configure the HTTP Request node to retry failed executions using the session details.  

5. **Batch Processing**  
   - Use the Split in Batches node to process multiple failed executions in batches.  

## How to customize this workflow  

Tailor the workflow to fit your specific needs:  

- **Adjust Schedule Frequency**  
  - Modify the schedule trigger to run at different intervals (e.g., every 30 minutes).  

- **Add Notifications**  
  - Integrate email or Slack notifications to alert teams about failed retries.  

- **Refine Error Filtering**  
  - Customize the filtering logic to exclude specific types of failed executions.  

- **Scale Batch Size**  
  - Adjust the batch size in the Split in Batches node to optimize performance.  

## Conclusion  

The **Auto-Retry Engine: Error Recovery Workflow** is a powerful tool for automating error recovery in **n8n** workflows. By reducing manual intervention and ensuring failed executions are retried automatically, this workflow enhances **system reliability** and **operational efficiency**. Whether you're managing a few workflows or a complex automation ecosystem, this workflow ensures your processes run **smoothly** and **consistently**.

## 🔗 Nodes Used

HTTP Request, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
