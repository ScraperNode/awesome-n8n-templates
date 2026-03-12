# 👥 Score job applications and write AI feedback with OpenAI and Notion

> ⚡ **45 views** · 👥 [HR & Recruitment](../)

## Description

# Screen resumes & save candidate scores to Notion with OpenAI

This template helps you automate the initial screening of job candidates by analyzing resumes against your specific job descriptions using AI.

### 📺 How It Works

The workflow automatically monitors a **Notion** database for new job applications. When a new candidate is added:

1. It checks if the candidate has already been processed to avoid duplicates.
2. It downloads the resume file (supporting both **PDF** and **DOCX** formats).
3. It extracts the raw text and sends it to **OpenAI** along with the specific job description and requirements.
4. The AI acts as a "Senior Technical Recruiter," scoring the candidate on skills, experience, and stability.
5. Finally, it updates the **Notion** entry with a fit score (0-100), a one-line summary, detected skills, and a detailed analysis.

### 📄 Notion Database Structure

You will need two databases in Notion: **Jobs** (containing descriptions/requirements) and **Candidates** (containing resume files).

* **Candidates DB Fields:** `AI Comments` (Text), `Resume Score` (Text), `Top Skills Detected` (Text), `Feedback` (Select), `One Line Summary` (Text), `Resume File` (Files & Media).
* **Jobs DB Fields:** `Job Description` (Text), `Requirements` (Text).

### 👤 Who’s it for

This workflow is for **recruiters, HR managers, founders**, and **hiring teams** who want to reduce the time spent on manual resume screening.

Whether you are handling high-volume applications or looking for specific niche skills, this tool ensures every resume gets a consistent, unbiased first-pass review.

### 🔧 How to set up

1. **Create** the required databases in Notion (as described above).
2. **Import** the `.json` workflow into your n8n instance.
3. **Set up credentials** for Notion and OpenAI.
4. **Link** those credentials in the workflow nodes.
5. **Update Database IDs:** Open the "Fetch Job Description" and "On New Candidate" nodes and select your specific Notion databases.
6. **Run a test** with a sample candidate and validate the output in Notion.

### 📋 Requirements

* An n8n instance (Cloud or Self-hosted)
* A Notion account
* OpenAI API Key (GPT-4o or GPT-4 Turbo recommended for best reasoning)

### 🧩 How to customize the workflow

The system is fully modular. You can:

* **Adjust the Persona:** In the `Analyze Candidate` agent nodes, edit the system prompt to change the "Recruiter" persona (e.g., make it stricter or focus on soft skills).
* **Change Scoring:** Modify the scoring matrix in the prompt to weight "Education" or "Experience" differently.
* **Filter Logic:** Add a node to automatically disqualify candidates below a certain score (e.g., &lt; 50) and move them to a "Rejected" status in Notion.
* **Multi-language:** Update the prompt to translate summaries into your local language if the resume is in English.

## 🔗 Nodes Used

HTTP Request, Notion, Notion Trigger, AI Agent, OpenAI Chat Model, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
