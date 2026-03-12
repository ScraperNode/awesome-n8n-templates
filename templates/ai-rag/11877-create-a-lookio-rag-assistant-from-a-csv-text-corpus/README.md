# 🔍 Create a Lookio RAG assistant from a CSV text corpus

> ⚡ **55 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

This advanced template automates the creation of a **[Lookio](https://www.lookio.app)** Assistant populated with a specific corpus of text. Instead of uploading files one by one, you can simply upload a CSV containing multiple text resources. The workflow iterates through the rows, converts them to text files, uploads them to Lookio, and finally creates a new Assistant with strict access limited to these specific resources.

## Who is this for?

* **Knowledge Managers** who want to spin up specific "Topic Bots" (e.g., an "RFP Bot" or "HR Policy Bot") based on a spreadsheet of Q&As or articles.
* **Product Teams** looking to bulk-import release notes or documentation to test RAG (Retrieval-Augmented Generation) responses.
* **Automation Builders** who need a reference implementation for looping through CSV rows, converting text strings to binary files, and aggregating IDs for a final API call.

## What is the RAG platform Lookio for knowledge retrieval?

**Lookio** is an API-first platform that solves the complexity of building **RAG (Retrieval-Augmented Generation)** systems. While tools like NotebookLM are great for individuals, Lookio is built for business automation.

It handles the difficult backend work—file parsing, chunking, vector storage, and semantic retrieval—so you can focus on the workflow.

* **API-First:** Unlike consumer AI tools, Lookio allows you to integrate your knowledge base directly into n8n, Slack, or internal apps.
* **No "DIY" Headache:** You don't need to manage a vector database or write chunking algorithms.
* **Free to Start:** You can sign up without a credit card and get 100 free credits to test this workflow immediately.

## What problem does this workflow solve?

* **Bulk Ingestion:** Converts a CSV export (with columns for Title and Content) into individual text resources in Lookio.
* **Automated Provisioning:** Eliminates the manual work of creating an Assistant and selecting resources one by one.
* **Dynamic Configuration:** Allows the user to define the Assistant's specific name, context (system prompt), and output guidelines directly via the upload form.

## How it works

1. **Form Trigger:** The user uploads a CSV and specifies the Assistant details (Name, Context, Guidelines) and maps the CSV column names.
2. **Parsing:** The workflow converts the CSV to JSON and uses the **Convert to File** node to transform the raw text content of each row into a binary `.txt` file.
3. **Loop & Upload:** It loops through the items, uploading them via the Lookio **Add Resource** API (`/webhook/add-resource`), and collects the returned `Resource ID`s.
4. **Creation:** Once all files are processed, it aggregates the IDs and calls the **Create Assistant** API (`/webhook/create-assistant`), setting the `resources_access_type` to "Limited selection" so the bot relies only on the uploaded data.
5. **Completion:** Returns the new Assistant ID and a success message to the user.

## CSV File Requirements

Your CSV file should look like this (headers can be named anything, as you will map them in the form):

| Title | Content |
| --- | --- |
| How to reset password | Go to settings, click security, and press reset... |
| Vacation Policy | Employees are entitled to 20 days of PTO... |

## How to set up

1. **Lookio Credentials:** Get your **API Key** and **Workspace ID** from your [Lookio API Settings](https://www.lookio.app) (Free to sign up).
2. **Configure HTTP Nodes:**
* Open the **Import resource to Lookio** node: Update headers (`api_key`) and body (`workspace_id`).
* Open the **Create Lookio assistant** node: Update headers (`api_key`) and body (`workspace_id`).


3. **Form Configuration (Optional):** The form is pre-configured to ask for column mapping, but you can hardcode these in the "Convert to txt" node if you always use the same CSV structure.
4. **Activate & Share:** Activate the workflow and use the **Production URL** from the Form Trigger to let your team bulk-create assistants.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
