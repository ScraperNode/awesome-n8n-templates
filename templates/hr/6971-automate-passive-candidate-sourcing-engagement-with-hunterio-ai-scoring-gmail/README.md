# 👥 Automate passive candidate sourcing & engagement with Hunter.io, AI scoring & Gmail

> ⚡ **113 views** · 👥 [HR & Recruitment](../)

## Description

### How It Works: The AI Recruiter Engine

This workflow is a powerful, two-phase system designed to automate the entire passive candidate sourcing and engagement cycle.

---

#### **Phase 1: Sourcing & Enrichment**
This phase is triggered manually and focuses on finding, analyzing, and scoring potential candidates.
1.  **Manual Trigger:** You start the workflow manually by providing a `jobTitle` and `keywords`.
2.  **Code (Generate Search Query):** This node uses your input to create a sophisticated search query for an external sourcing platform.
3.  **HTTP Request (Hunter.io/Clearbit):** The workflow queries a third-party API to find public email addresses for the target companies or candidates.
4.  **Code (Filter Candidates):** This node filters the raw data, keeping only candidates who match your basic criteria.
5.  **Airtable/Google Sheets (Log Candidates):** All potential candidates are logged into your centralized database to serve as your simple ATS.
6.  **Code (AI Analysis & Score):** This node prepares a prompt with the candidate's profile data and sends it to a generative AI model (via an `HTTP Request`). It then calculates a final score based on the AI's analysis and other criteria.
7.  **If (Is Score &gt; 75?):** This node checks if the candidate’s score meets your threshold. If so, they are passed to the next phase; otherwise, they are filtered out.

#### **Phase 2: Automated Outreach & Nurturing**
This phase handles the multi-step, personalized email communication with high-scoring candidates.
1.  **Gmail (Send Initial Email):** The workflow sends a personalized first email using dynamic data from the candidate's profile.
2.  **Airtable/Google Sheets (Update Status):** The candidate's status is updated to `Contacted` in your database.
3.  **Wait:** The workflow pauses for a set period (e.g., 3 days) to allow time for a response.
4.  **If (No Reply?):** This node checks the candidate's status in your database. If they haven't replied, the workflow proceeds to the next email.
5.  **Gmail (Send Follow-up):** A follow-up email is sent to the candidate. This sequence repeats with a final nurture email to close the loop.

---

### How to Set Up

1.  **Prepare Your Credentials & Database:**
    * **Database:** Create a database in **Airtable** or **Google Sheets** with columns for `Name`, `Email`, `Score`, `Status`, and any other data you want to track.
    * **Email:** Set up a **Gmail** or other email service credential in n8n.
    * **Sourcing API:** Obtain an API key for a sourcing service like Hunter.io to find public email addresses.

2.  **Import the Workflow:**
    * Import the JSON code for the **AI Recruiter Engine** into your n8n instance.

3.  **Configure the Nodes:**
    * **Manual Trigger:** When running the workflow, manually input the `jobTitle` and `keywords` you are sourcing for.
    * **HTTP Request:** Update the `URL` with your sourcing API key.
    * **Code Nodes:** Review and adjust the JavaScript in the `Code` nodes to match your specific job criteria and data structure.
    * **Airtable/Google Sheets:** Connect to your database, select the correct table, and ensure the column names in the node settings match your database.
    * **Gmail:** Select your email credential and customize the content of the outreach emails in each `Gmail` node.
    * **If:** Adjust the `finalScore` threshold in the `If` node to your desired value.

4.  **Test and Activate:**
    * Run the workflow once manually to ensure all nodes are configured correctly and data flows as expected.
    * Once you are confident, the workflow is ready to be run for your sourcing campaigns.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
