# ⚒️ 🛠️ Auto workflow positioning

> ⚡ **2,726 views** · ⚒️ [Engineering](../)

## Description

## Check Online Version !
[https://n8n-tools.streamlit.app/](https://n8n-tools.streamlit.app/
)
## **Who is it for?**  
This workflow is perfect for n8n users who want to maintain clean and organized workflows without manually repositioning nodes.

Whether you're building complex workflows or sharing them with a team, maintaining visual clarity is essential for efficiency and collaboration.

This template automates the positioning process, saving time and ensuring consistent layout standards.

---

## **How does it work?**  
The template is divided into two parts:  

1. **Positioning Engine:**  
   - A webhook node kicks off the process by receiving a workflow ID.  
   - Using the provided workflow ID, an n8n API node fetches the workflow details.  
   - The fetched workflow is sent to a processing webhook that calculates optimized positions for the nodes.  
   - Finally, an n8n API node updates the workflow with the newly positioned nodes, ensuring a clean and professional layout.  

2. **Reusable Positioning Block:**  
   - This is an HTTP Request node that can be seamlessly integrated into any workflow you create. When triggered, it sends the current workflow for automatic positioning via the first part of this template.  

---

## **How to set it up?**  

1. **Enable n8n API Access:**  
   - Ensure that your n8n instance has API access enabled with the appropriate credentials.  

2. **Input Your n8n API URL and Credentials:**  
   - Open the template, locate the n8n API nodes, and update them with your instance API key.
   - Update the URL of the 'Magic Positioning' Http Request node to point to your n8n instance webhook URL.

3. **Embed the Reusable Block:**  
   - Add the provided HTTP Request node to any of your workflows to instantly connect to the auto-positioning engine.

## 🔗 Nodes Used

HTTP Request, Webhook, n8n, Schedule Trigger, AI Agent, Question and Answer Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
