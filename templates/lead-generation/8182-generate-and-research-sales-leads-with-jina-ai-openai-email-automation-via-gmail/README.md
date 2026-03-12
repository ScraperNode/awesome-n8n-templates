# 🎣 Generate and research sales leads with Jina AI & OpenAI email automation via Gmail

> ⚡ **59 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### Who’s it for
Generate personalized sales leads, ready-to-send, HTML-formatted emails, and send them automatically. This workflow is ideal for sales professionals, marketers, and business development teams aiming to scale their outreach. By automating the tedious tasks of research and email drafting, you can focus on building relationships and closing deals.


### How it works
This workflow automates the process of finding sales leads and drafting personalized emails.
- It starts by pulling a list of unprocessed companies from an **Airtable** base.
- For each company, it uses **Jina DeepSearch** to find key decision-makers, their roles, and email addresses.
- An **AI agent** then analyzes the research to identify the best contact and creates a custom, professional cold email.
- The email's content and subject are evaluated by a second **AI agent**, which assigns a score from 0-100.
- If the email scores below 80, it's sent to an **Email Re-writer agent** for improvement before being evaluated again.
- Finally, the workflow formats the polished email into an **HTML draft** in **Gmail** and updates the Airtable record with the lead information and the outcome.

---

### How to set up
1.  **Airtable**: Create your Airtable credentials [here](https://docs.n8n.io/integrations/builtin/credentials/airtable/).
Set up an Airtable base with a table that includes the following columns: `Company_name`, `Company_website`, `Company_e-mail`, `processed`, `lead_name`, `lead_email`, `email_subject`, `email_text`, `email_summary`, `create_date` and a `task_result` column.
2.  **Jina AI**: Get an API key from Jina AI and add it to the `Jina_API_Key` node. You can find more information [here](https://jina.ai/).
3.  **Gmail**: Connect your Gmail account using the Gmail node to allow the workflow to create email drafts. You can find the documentation for the Gmail node [here](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/).
4.  **OpenAI**: This workflow uses the OpenAI nodes (`gpt-5-mini` model) for the AI agents. You will need to provide your OpenAI API credentials. You can find the API documentation [here](https://platform.openai.com/docs/).
5.  **Business Info**: Fill in your company's information in the `Business_Info` node, including your business name, description, key benefits, website URL, target audience, and the desired email language.

---

### Requirements
* An **n8n account**
* **Airtable API Key** and a base with lead data.
* **Jina AI API Key** for the deep search functionality.
* **OpenAI API Key** to power the AI agents.
* A **Gmail account** connected to n8n.

---

### How to customize the workflow
* **Changing the Score Threshold**: The `If` node is set to a threshold of 80. You can change this to a higher or lower number to control which emails are re-written.
* **Database Integration**: Instead of Airtable, you can use a different database like Google Sheets or a CRM by swapping out the Airtable nodes for the corresponding integration nodes.
* **Email Sending**: The workflow currently creates drafts in Gmail. You can easily modify the Gmail node to send the emails directly instead of creating drafts, but be cautious with this approach to avoid sending unwanted emails.

---

### Need a Professional and Personalized automation
[Contact me](mailto:devquick@outlook.com)

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
