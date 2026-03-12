# ⚙️ Generate Azure VM timeline reports with Google Gemini AI chat assistant

> ⚡ **682 views** · ⚙️ [DevOps & CI/CD](../)

## Description

An AI-powered chat assistant that analyzes Azure virtual machine activity and generates detailed timeline reports showing VM state changes, performance metrics, and operational events over time.

## How It Works

The workflow starts with a chat trigger that accepts user queries about Azure VM analysis. A Google Gemini AI agent processes these requests and uses six specialized tools to gather comprehensive VM data from Azure APIs. The agent queries resource groups, retrieves VM configurations and instance views, pulls performance metrics (CPU, network, disk I/O), and collects activity log events. It then analyzes this data to create timeline reports showing what happened to VMs during specified periods, defaulting to the last 90 days unless the user specifies otherwise.

## Prerequisites

To use this template, you'll need:

- n8n instance (cloud or self-hosted)
- Azure subscription with virtual machines
- Microsoft Azure Monitor OAuth2 API credentials
- Google Gemini API credentials
- Proper Azure permissions to read VM data and activity logs

## Setup Instructions

1. **Import the template into n8n.**
2. **Configure credentials:**  
   - Add Microsoft Azure Monitor OAuth2 API credentials with read permissions for VMs and activity logs
   - Add Google Gemini API credentials
3. **Update workflow parameters:**  
   - Open the "Set Common Variables" node  
   - Replace `&lt;your azure subscription id here&gt;` with your actual Azure subscription ID
4. **Configure triggers:**  
   - The chat trigger will automatically generate a webhook URL for receiving chat messages
   - No additional trigger configuration needed
5. **Test the setup to ensure it works.**

## Security Considerations

Use minimum required Azure permissions (Reader role on subscription or resource groups). Store API credentials securely in n8n credential store. The Azure Monitor API has rate limits, so avoid excessive concurrent requests. Chat sessions use session-based memory that persists during conversations but doesn't retain data between separate chat sessions.

## Extending the Template

You can add more Azure monitoring tools like disk metrics, network security group logs, or Application Insights data. The AI agent can be enhanced with additional tools for Azure cost analysis, security recommendations, or automated remediation actions. You could also integrate with alerting systems or export reports to external storage or reporting platforms.

## 🔗 Nodes Used

AI Agent, Simple Memory, Code Tool, Chat Trigger, Google Gemini Chat Model, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
