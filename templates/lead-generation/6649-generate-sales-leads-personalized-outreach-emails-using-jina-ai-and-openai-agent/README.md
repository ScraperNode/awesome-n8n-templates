# 🎣 Generate sales leads & personalized outreach emails using Jina AI and OpenAI agents

> ⚡ **1,385 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow uses AI agents to enrich company data from Airtable. It performs deep research to find the best decision-maker, then drafts and evaluates a personalized outreach email, and finally updates the original Airtable record with the new lead information and email content.

### 👥 Who is it for?
This workflow is ideal for sales teams, marketers, and business development professionals looking to automate their lead generation and initial outreach process, saving time and increasing personalization at scale.

### ⚙️ How it works
This workflow initiates by fetching unprocessed company records from a specified Airtable base. For each company, it performs a "deep research" using Jina AI to identify key decision-makers based on the company's name and website.

Next, a series of AI agents process the information:
1.  **Lead Analyzer:** A "Lead Generation Specialist" agent analyzes the research results to select the most suitable contact person.
2.  **Email Content Creator:** A "Content Creator Specialist" agent uses the lead's information and your business details to draft a personalized marketing email and subject line.
3.  **Evaluator:** An "Expert Email Marketing Evaluator" agent reviews the generated email for quality, tone, and effectiveness, providing a score and feedback.

Finally, the workflow updates the original record in Airtable with the identified lead's name, email, the generated email content, and the evaluation summary, marking the record as processed.

### 🛠️ How to set up
1.  **Airtable Setup:**
    * Create an Airtable base with a table containing the following fields:
      * **Company_name**: A text field for the name of the lead's company (Required).
      * **Company_website**: A URL field for the company's official website (Required).
      * **Company_email**: An email field for a general contact email for the company (Required).
      * **Address**: A text field for the physical address of the company (Optional).
      * **Company_phone**: A phone number field for a general phone number for the company (Optional).
      * **processed**: A single select field to track the status. It needs the options `no` and `yes`. The workflow only processes records set to `no` (Required).
      * **lead_name**: A text field that the workflow will populate with the name of the identified lead (Output).
      * **lead_email**: An email field that the workflow will populate with the identified lead's email (Output).
      * **email_subject**: A text field for the generated email subject line (Output).
      * **email_text**: A long text field for the generated, personalized email body (Output).
      * **email_summary**: A long text field for the AI's evaluation and summary of the created email (Output).
      * **create_date**: A date and time field to log when the record was processed (Output).
      * **task_result**: A text field for a summary of the final task result, like "Email wrote" (Output).

    * Create your Airtable Credentials [Airtable Documentation](https://docs.n8n.io/integrations/builtin/credentials/airtable/)
    * Connect your Airtable credentials to the 'Get input records' and 'Update record' nodes and select your Base and Table in both nodes.
    * Fill the Airtable Table with the Companies details you want to generate Leads. The requited columns are (Company_Name, Company_website and Company_email). Also, make sure the column processed is set to "no".
2.  **Business Information:**
    * In the **Business_Info** node, fill in the values with your company's details, key benefits, target audience, and landing page URL.
3.  **API Keys:**
    * **Jina AI:** Get your API key from [Jina AI](https://jina.ai/) and insert it into the **Jina_API_Key** node.
    * **OpenAI:** Add your OpenAI credentials to the 'OpenAI o3-mini', 'OpenAI - 4o-mini', and 'OpenAI - 4o-mini - low' nodes.

### ✅ Requirements
* An [Airtable](https://airtable.com/) account.
* A [Jina AI](https://jina.ai/) account and API key.
* An [OpenAI](https://openai.com/) account and API key.

### 🎨 How to customize the workflow
* **Change the data source:** Replace the Airtable 'Get input records' node with another database or CRM node like Google Sheets, HubSpot, or Salesforce to pull your company list from a different source.
* **Adjust AI models:** Experiment with different OpenAI models in the LangChain nodes ('OpenAI o3-mini', 'OpenAI - 4o-mini') to balance cost, speed, and performance.
* **Refine the AI prompts:** Modify the system messages and prompts within the 'Lead Analyzer', 'Email Content Creator', and 'Evaluator' agent nodes to better align their outputs with your specific tone of voice, goals, and evaluation criteria.
* **Automate sending:** Extend the workflow by adding an email node (e.g., Gmail, Outlook) after the 'Update record' node to automatically send the generated emails.

## 🔗 Nodes Used

Airtable, HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
