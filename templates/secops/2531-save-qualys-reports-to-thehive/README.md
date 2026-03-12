# 🔒 Save Qualys reports to TheHive

> ⚡ **1,182 views** · 🔒 [SecOps & Security Automation](../)

## Description

![n8n](https://uploads.n8n.io/templates/n8n.png)

# Automate Report Generation with n8n & Qualys

## Introducing the Save Qualys Reports to TheHive Workflow—a robust solution designed to automate the retrieval and storage of Qualys reports in TheHive.

This workflow fetches reports from Qualys, filters out already processed reports, and creates cases in TheHive for the new reports. It runs every hour to ensure continuous monitoring and up-to-date vulnerability management, making it ideal for Security Operations Centers (SOCs).

**How It Works:**

- **Set Global Variables:** Initializes necessary global variables like `base_url` and `newtimestamp`. This step ensures that the workflow operates with the correct configuration and up-to-date timestamps. Ensure to change the `Global Variables` to match your environment. 
  
- **Fetch Reports from Qualys:** Sends a GET request to the Qualys API to retrieve finished reports. Automating this step ensures timely updates and consistent data retrieval.
  
- **Convert XML to JSON:** Converts the XML response to JSON format for easier data manipulation. This transformation simplifies further processing and integration into TheHive.
  
- **Filter Reports:** Checks if the reports have already been processed using their creation timestamps. This filtering ensures that only new reports are handled, avoiding duplicates.
  
- **Process Each Report:** Loops through the list of new reports, ensuring each is processed individually. This step-by-step handling prevents issues related to bulk processing and improves reliability.
  
- **Create Case in TheHive:** Generates a new case in TheHive for each report, serving as a container for the report data. Automating case creation improves efficiency and ensures that all relevant data is captured.
  
- **Download and Attach Report:** Downloads the report from Qualys and attaches it to the respective case in TheHive. This automation ensures that all data is properly archived and easily accessible for review.


**Get Started:**

- Ensure your [Qualys](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-creds-base.qualysApi) and [TheHive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehiveproject/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.theHiveProject) integrations are properly set up.
- Customize the workflow to fit your specific vulnerability management needs.


**Need Help?**

- Join the discussion on our Forum or check out resources on Discord!


Deploy this workflow to streamline your vulnerability management process, improve response times, and enhance the efficiency of your security operations.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, n8n, Schedule Trigger, Filter, TheHive 5

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
