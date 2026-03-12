# ⚒️ Generate AI prompts with Google Gemini and store them in Airtable

> ⚡ **2,974 views** · ⚒️ [Engineering](../)

## Description

This workflow is designed to generate prompts for AI agents and store them in Airtable. 


It starts by receiving a chat message, processes it to create a structured prompt, categorizes the prompt, and finally stores it in Airtable.

## 2. Setup Instructions

### Prerequisites
- **AI model eg Gemini, openAI etc**
- **Airtable base and table or other storage tool**

### Step-by-Step Guide

1. **Clone the Workflow**
- Copy the provided workflow JSON and import it into your n8n instance.

2. **Configure Credentials**
- Set up the Google Gemini(PaLM) API account credentials.
- Set up the Airtable Personal Access Token account credentials.

3. **Map Airtable Base and Table**
- Create a copy of the [Prompt Library](https://airtable.com/app994hU3fOw0ssrx/shrRxcst3vzWMKFcR) in Airtable.
- Map the Airtable base and table in the Airtable node.

4. **Customize Prompt Template**
- Edit the 'Create prompt' node to customize the prompt template as needed.

### Configuration Options
- **Prompt Template:** Customize the prompt template in the 'Create prompt' node to fit your specific use case.
- **Airtable Mapping:** Ensure the Airtable base and table are correctly mapped in the Airtable node.

## 4. Running and Troubleshooting

### Running the Workflow
1. **Trigger the Workflow:** Send a chat message to trigger the workflow.
2. **Monitor Execution:** Use the n8n interface to monitor the workflow execution.
3. **Check Completion:** Verify that the prompt is stored in Airtable and check the chat interface for the result.

### Troubleshooting Tips
- **API Issues:** Ensure that the APIs and Airtable credentials are correctly configured.
- **Data Mapping:** Verify that the Airtable base and table are correctly mapped.
- **Prompt Template:** Check the prompt template for any errors or inconsistencies.

3. Use Case Examples

This workflow is particularly useful in scenarios where you want to automate the generation and management of AI agent prompts. 

Here are some examples:

**Rapid Prototyping of AI Agents:** 

Quickly generate and test different prompts for AI agents in various applications.

* **Content Creation:** Generate prompts for AI models that create blog posts, articles, or social media content.
* **Customer Service Automation:** Develop prompts for AI-powered chatbots to handle customer inquiries and support requests.
* **Educational Tools:** Create prompts for AI tutors or learning assistants.

**Industries/Professionals:**

* **Software Development:** Developers building AI-powered applications.
* **Marketing:** Marketers automating content creation and social media management.
* **Customer Service:** Customer service managers implementing AI-driven chatbots.

* **Education:** Educators creating AI-based learning tools.

**Practical Value:**

* **Time Savings:** Automates the prompt generation process, saving significant time and effort.

* **Improved Prompt Quality:** Leverages Google Gemini and structured prompt engineering principles to generate more effective prompts.

* **Centralized Prompt Management:** Stores prompts in Airtable for easy access, organization, and reuse.

## 4. Running and Troubleshooting

* **Running the Workflow:**
1. Activate the workflow in n8n.
2. Send a chat message to the webhook URL configured in the "When chat message received" node.
3. Monitor the workflow execution in the n8n editor.
* **Monitoring Execution:**
* Check the execution log in n8n to see the data flowing through each node and identify any errors.

* **Checking for Successful Completion:**
* Verify that a new record is created in your Airtable base with the generated prompt, name, and category.

* Confirm that the "Return results" node sends back confirmation of the prompt in the chat interface.

* **Troubleshooting Tips:**
* **Error:** `400: Bad Request` in the Google Gemini nodes:

* **Cause:** Invalid API key or insufficient permissions.
* **Solution:** Double-check your Google Gemini API key and ensure that the API is enabled for your project.
* **Error:** Airtable node fails to create a record:
* **Cause:** Invalid Airtable credentials, incorrect Base ID or Table ID, or mismatched column names.
* **Solution:** Verify your Airtable API key, Base ID, Table ID, and column names. Ensure that the data types in n8n match the data types in your Airtable columns.

Follow me on [Linkedin](https://www.linkedin.com/in/zacharia-kimotho/) for more

## 🔗 Nodes Used

Airtable, Basic LLM Chain, Auto-fixing Output Parser, Structured Output Parser, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
