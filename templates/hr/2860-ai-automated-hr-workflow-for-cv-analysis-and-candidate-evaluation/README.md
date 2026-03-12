# 👥 AI automated HR workflow for CV analysis and candidate evaluation

> ⚡ **65,297 views** · 👥 [HR & Recruitment](../)

## Description

### How it Works

This workflow automates the process of handling job applications by extracting relevant information from submitted CVs, analyzing the candidate's qualifications against a predefined profile, and storing the results in a Google Sheet. Here’s how it operates:

1. **Data Collection and Extraction**: 
   - The workflow begins with a form submission (`On form submission` node), which triggers the extraction of data from the uploaded CV file using the `Extract from File` node.
   - Two `informationExtractor` nodes (`Qualifications` and `Personal Data`) are used to parse specific details such as educational background, work history, skills, city, birthdate, and telephone number from the text content of the CV.

2. **Processing and Evaluation**:
   - A `Merge` node combines the extracted personal and qualification data into a single output.
   - This merged data is then passed through a `Summarization Chain` that generates a concise summary of the candidate’s profile.
   - An `HR Expert` chain evaluates the candidate against a desired profile (`Profile Wanted`), assigning a score and providing considerations for hiring.
   - Finally, all collected and processed data including the evaluation results are appended to a Google Sheets document via the `Google Sheets` node for further review or reporting purposes [[9]].

### Set Up Steps

To replicate this workflow within your own n8n environment, follow these steps:

1. **Configuration**:
   - Begin by setting up an n8n instance if you haven't already; you can sign up directly on their website or self-host the application.
   - Import the provided JSON configuration into your n8n workspace. Ensure that all necessary credentials (e.g., Google Drive, Google Sheets, OpenAI API keys) are correctly configured under the Credentials section since some nodes require external service integrations like Google APIs and OpenAI for language processing tasks.

2. **Customization**:
   - Adjust the parameters of each node according to your specific requirements. For example, modify the fields in the `formTrigger` node to match what kind of information you wish to collect from applicants.
   - Customize the prompts given to AI models in nodes like `Qualifications`, `Summarization Chain`, and `HR Expert` so they align with the type of analyses you want performed on the candidates' profiles.
   - Update the destination settings in the `Google Sheets` node to point towards your own spreadsheet where you would like the final outputs recorded.

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Google Drive, Summarization Chain, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
