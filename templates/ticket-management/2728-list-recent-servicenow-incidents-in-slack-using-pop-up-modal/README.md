# 🎫 List recent ServiceNow incidents in Slack using pop up modal

> ⚡ **1,484 views** · 🎫 [Ticket Management & Triage](../)

## Description

#### **Who is this for?**  
This workflow is designed for IT teams, service desk personnel, and incident management professionals who need a streamlined way to monitor and report on recent ServiceNow incidents directly within Slack.  

#### **What problem is this workflow solving? / Use Case**  
Manually monitoring incidents in ServiceNow can be time-consuming, and keeping teams updated about new or specific incidents often involves additional manual effort. This workflow automates the process of querying recent incidents from ServiceNow based on user-defined parameters and delivering formatted results directly to Slack. It ensures faster response times and improved incident visibility.  

#### **What this workflow does**  
This workflow integrates Slack and ServiceNow to provide an automated system for retrieving and presenting incident details.  
1. **Slack User Interaction**: Users initiate the workflow via a Slack modal form, selecting incident parameters like priority and state.  
2. **ServiceNow Query**: The workflow queries ServiceNow for incidents matching the selected criteria.  
3. **Results Delivery**: Incident results are sent back to Slack as a message formatted using Block Kit. If no results are found, the workflow notifies the user with a detailed message, either in a Slack channel or via direct message.  
4. **Error Handling**: If no channel is selected or any issues arise, the workflow ensures graceful fallback with appropriate notifications.  

#### **Setup Instructions**  
1. **Slack Setup**:  
   - Integrate Slack with n8n using a Slack app.  
   - Configure the modal form to accept parameters like priority and state.  
   - [Check out this video for setting up a modal slack app on YouTube.](https://youtu.be/z4JuK4qPJ1E) 
2. **ServiceNow Integration**:  
   - Use ServiceNow credentials to connect with n8n.  
   - Ensure appropriate permissions for querying incidents.  
3. **n8n Workflow Configuration**:  
   - Import this workflow into n8n.  
   - Verify all node configurations, particularly those for ServiceNow API queries and Slack outputs.  
   - Set up webhook URLs for Slack event handling.  
4. **Testing**:  
   - Trigger the workflow from Slack to test modal inputs and incident queries.  
   - Confirm the output is correctly formatted and delivered to the intended Slack channel or user.  

#### **How to Customize this Workflow to Your Needs**  
- Modify the ServiceNow query logic to include additional filters or fields.  
- Adjust the Slack Block Kit formatting to match your organization’s preferred notification style.  
- Use conditional logic to add more advanced handling for specific priorities or states.  
- Expand the workflow to include escalation steps, such as notifying a specific team or creating follow-up tasks.  

#### **Workflow Highlights**  
- **Slack Modal Form**: Allows users to specify search criteria for incidents interactively.  
- **Dynamic Results Delivery**: Automatically sends results to a Slack channel or direct message based on user input.  
- **Error Handling**: Provides fallback notifications when no incidents are found or user inputs are incomplete.  
- **Customizable Integration**: Easily adaptable to fit different organizational needs, including advanced filtering and formatting options.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, ServiceNow, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
