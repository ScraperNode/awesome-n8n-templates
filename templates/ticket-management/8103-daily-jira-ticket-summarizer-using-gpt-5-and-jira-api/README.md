# 🎫 Daily Jira ticket summarizer using GPT-5 and Jira API

> ⚡ **1,364 views** · 🎫 [Ticket Management & Triage](../)

## Description

## **Who is this for?**

This workflow is perfect for:

* Support teams and customer service departments managing Jira tickets
* Team leads and managers who need daily visibility into ticket resolution progress
* Organizations wanting to automate ticket reporting and communication
* IT departments seeking to streamline support ticket summarization and tracking

## **What problem is this workflow solving?**

Manual ticket review and reporting is time-consuming and often lacks comprehensive analysis. This workflow solves those issues by:

* **Automating daily ticket analysis** by fetching, analyzing, and summarizing all tickets created each day
* **Providing intelligent summaries** using AI to extract key insights from ticket descriptions, comments, and resolutions
* **Streamlining communication** by automatically sending formatted daily reports to stakeholders
* **Saving time** by eliminating manual ticket review and report generation

## What this workflow does

This workflow automatically fetches daily Jira tickets, analyzes them with AI, and sends comprehensive summaries via email to keep your team informed about support activities.

**Step by step:**
1. **Schedule Trigger** runs the workflow automatically at your chosen interval (or manual trigger for testing)
2. **Set Project Key** defines the Jira project to monitor (default: SUP project)
3. **Get All Tickets** from the specified project created today
4. **Split Out** extracts individual ticket data including key, summary, and description
5. **Loop Tickets** processes each ticket individually through batch processing
6. **Get Comments from Ticket** retrieves all comments and conversations for complete context
7. **Merge** combines ticket data with associated comments for comprehensive analysis
8. **Ticket Summarizer (AI Agent)** uses OpenAI GPT-5 to generate professional summaries and proposed solutions
9. **Set Output** structures the AI analysis into standardized JSON format
10. **Aggregate** collects all processed ticket summaries into a single dataset
11. **Format Body** creates a readable email format with direct Jira ticket links
12. **Send Ticket Summaries** delivers the daily report via Gmail

## How to set up

1. **Connect your Jira account** by adding your Jira Software Cloud API credentials to the Jira nodes
2. **Add your OpenAI API key** to the OpenAI Chat Model node for AI-powered ticket analysis
3. **Configure Gmail credentials** for the Send Ticket Summaries node to deliver reports
4. **Update the recipient email** in the "Send Ticket Summaries" node to your desired recipient
5. **Adjust the project key** in the "Set Project Key" node to match your Jira project identifier
6. **Configure the schedule trigger** to run daily at your preferred time for automatic reporting
7. **Customize the JQL query** in Jira nodes to filter tickets based on your specific requirements
8. **Test the workflow** using the manual trigger to ensure proper ticket fetching and AI analysis
9. **Review email formatting** in the "Format Body" node and adjust as needed for your reporting style

## How to customize this workflow to your needs

* **Modify AI prompts**: customize the ticket analysis prompt in the "Ticket Summarizer" node to focus on specific aspects like priority, resolution time, or customer impact
* **Adjust ticket filters**: change the JQL queries to filter by status, priority, assignee, or custom date ranges beyond "today"
* **Add more data points**: include additional ticket fields like priority, status, assignee, or custom fields in the analysis
* **Customize email format**: modify the "Format Body" node to change the report structure, add charts, or include additional formatting
* **Set up different schedules**: create multiple versions for different reporting frequencies (hourly, weekly, monthly)

## Need help customizing?

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

Jira Software, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
