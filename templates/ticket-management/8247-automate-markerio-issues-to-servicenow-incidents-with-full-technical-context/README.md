# 🎫 Automate Marker.io issues to ServiceNow incidents with full technical context

> ⚡ **198 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Marker.io to ServiceNow Integration
**Automatically create ServiceNow incidents with full technical context when bugs are reported through Marker.io**

## 🎯 What this template does
This workflow creates a seamless bridge between Marker.io and ServiceNow, your IT service management platform. Every issue submitted through Marker.io's widget automatically becomes a trackable incident in ServiceNow, complete with technical details and visual context. This ensures your IT team can track, prioritize, and resolve bugs efficiently within their existing ITSM workflow.

When a bug is reported, the workflow:
- Captures the complete Marker.io webhook payload
- Formats all technical details and metadata
- Creates a new incident in ServiceNow with the reporter information
- Includes comprehensive technical context and Marker.io links
- Preserves screenshots, browser info, and custom data

## ✨ Benefits
- **Automated ticket creation** - No manual data entry required
- **Complete context** - All bug details transfer automatically
- **Faster triage** - IT teams see issues immediately in ServiceNow
- **Better tracking** - Leverage ServiceNow's incident management capabilities
- **Rich debugging info** - Browser, OS, and screenshot details preserved

## 💡 Use Cases
- **IT Service Desks**: Streamline bug reporting from end users
- **Development Teams**: Track production issues with full technical context
- **QA Teams**: Convert test findings directly into trackable incidents
- **Support Teams**: Escalate customer-reported bugs to IT with complete details

## 🔧 How it works
1. **N8N Webhook receives** Marker.io bug report data
2. **JavaScript node formats** and extracts relevant information
3. **ServiceNow node creates** incident with formatted details
4. **Incident includes** title, description, reporter info, and technical metadata
5. **Links preserved** to both public and private Marker.io views

The result is a fully documented ServiceNow incident that your IT team can immediately action, with all the context needed to reproduce and resolve the issue.

## 📋 Prerequisites
- **Marker.io account** with webhook capabilities
- **ServiceNow instance** with API access enabled
- **ServiceNow credentials** (username/password or OAuth)
- **Appropriate ServiceNow permissions** to create incidents

## 🚀 Setup Instructions
1. **Import this workflow** into your n8n instance
2. **Configure the Webhook**:
   - Copy the production webhook URL after saving
   - Add to Marker.io: Workspace Settings → Webhooks → Create webhook
   - Select "Issue Created" as the trigger event
3. **Set up ServiceNow credentials**:
   - In n8n, create new ServiceNow credentials
   - Enter your ServiceNow instance URL
   - Add username and password for a service account
   - Test the connection
4. **Customize field mappings** (optional):
   - Modify the JavaScript code to map additional fields
   - Adjust priority mappings to match your ServiceNow setup
   - Add custom field mappings as needed
5. **Test the integration**:
   - Create a test issue in Marker.io
   - Verify the incident appears in ServiceNow
   - Check that all data transfers correctly

## 📊 Data Captured
### ServiceNow Incident includes:
- **Short Description**: Issue title from Marker.io
- **Description** containing:
  - 🐛 Issue title and ID
  - 📊 Priority level and issue type
  - 📅 Due date (if set)
  - 📝 Full issue description
  - 🖥️ Browser version and details
  - 💻 Operating system information
  - 🌐 Website URL where issue occurred
  - 🔗 Direct links to Marker.io issue (public and private)
  - 📦 Any custom data fields
  - 📷 Screenshot URL with proper formatting

## 🔄 Workflow Components
- **Webhook Node**: Receives Marker.io POST requests
- **Code Node**: Processes and formats the data using JavaScript
- **ServiceNow Node**: Creates the incident using ServiceNow API

[→ Read more about Marker.io webhook events](https://help.marker.io/en/articles/3738778-webhook-notifications)

## 🚨 Troubleshooting

**Webhook not triggering:**
- Verify webhook URL is correctly copied from n8n to Marker.io
- Check that "Issue Created" event is selected in Marker.io webhook settings
- Ensure webhook is set to "Active" status in Marker.io
- Test with Marker.io's webhook tester feature
- Check n8n workflow is active and not in testing mode

**ServiceNow incident not created:**
- Verify ServiceNow credentials are correct and have not expired
- Check that the service account has permissions to create incidents
- Ensure ServiceNow instance URL is correct (include https://)
- Test ServiceNow connection directly in n8n credentials settings
- Check ServiceNow API rate limits haven't been exceeded

**Missing or incorrect data:**
- Screenshot URL broken: The workflow already handles URL formatting, but verify Marker.io is generating screenshots
- Custom data missing: Ensure custom fields exist in Marker.io before sending
- Due date formatting issues: Check your ServiceNow date format requirements

**JavaScript errors in Format node:**
- Check webhook payload structure hasn't changed in Marker.io updates
- Verify all field paths match current Marker.io webhook schema
- Use n8n's data pinning to debug with actual webhook data
- Check for undefined values when optional fields are missing

**Connection issues:**
- ServiceNow timeout: Increase timeout in node settings if needed
- SSL/Certificate errors: Check ServiceNow instance SSL configuration
- Network restrictions: Ensure n8n can reach your ServiceNow instance
- Authentication failures: Regenerate ServiceNow credentials if needed

**Testing tips:**
- Use n8n's "Execute Workflow" with pinned test data
- Enable webhook test mode in Marker.io for safe testing
- Check ServiceNow incident logs for detailed error messages
- Monitor n8n execution logs for specific failure points

## 🔗 Nodes Used

Webhook, ServiceNow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
