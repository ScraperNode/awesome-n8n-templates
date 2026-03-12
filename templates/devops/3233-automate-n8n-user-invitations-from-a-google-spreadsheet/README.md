# ⚙️ Automate n8n user invitations from a Google spreadsheet

> ⚡ **725 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow retrieves all users from n8n, compares them against entries in a Google Sheets spreadsheet, and automatically creates new users when needed.  

Once new users are created, invitation emails are sent automatically.  

You can trigger the workflow manually or set it to run on a schedule to ensure continuous synchronization.  

### Spreadsheet Template  
This workflow is designed to work with a Google Sheets structure inspired by Squarespace's newsletter block connection. You can modify the node settings to adapt to a different column format.  

👉 [Clone the sample sheet here](https://docs.google.com/spreadsheets/d/1wi2Ucb4b35e0-fuf-96sMnyzTft0ADz3MwdE_cG_WnQ/edit?usp=sharing)  

**Suggested columns:**  
- Submitted On  
- Email Address  
- Name  

## Requirements
### Credentials
To use this workflow, you need:

- n8n API Key – to update users from n8n.
- Google Sheets API credentials – Required to get data from a spreadsheet.
### Configure Your n8n Instance  
To make this workflow work with your n8n instance, update the API endpoint:  

🔧 **Edit Global node 👇**  
Change `n8n_url` to match your instance URL:  
[Authentication Guide](https://docs.n8n.io/api/authentication/#call-the-api-using-your-key)  

---

Explore More Templates
👉 [Check out my other n8n templates](https://n8n.io/creators/bangank36/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
