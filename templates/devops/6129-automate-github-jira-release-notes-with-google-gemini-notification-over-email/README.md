# ⚙️ Automate GitHub, JIRA release notes with Google Gemini & notification over email

> ⚡ **1,299 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# This n8n template from [Intuz](https://www.intuz.com/get-started) provides a complete and automated solution for creating and distributing sophisticated release notes. 

It connects to GitHub and JIRA to gather data from recent commits and completed tickets, using specific keywords or labels to identify key features for inclusion. 

This information is then processed by Google Gemini to automatically generate well-written, human-like release notes, which are then distributed via email to stakeholders, creating a complete, end-to-end communication pipeline for every new software release.

This template is perfect for development teams looking to streamline their release process, ensure consistent communication, and eliminate the manual effort of writing release notes.


## How to use

**1. Set up Credentials:**

- GitHub
- JIRA (Software Cloud API)
- Google Gemini (or another PaLM/LLM provider)
- Your SMTP email server.

**2. Configure the GitHub Trigger:**

- Select the Github Trigger node.
- In the Repository Owner field, enter your GitHub username or organization name.
- In the Repository Name field, select the repository you want to monitor.

**3. Verify the JIRA Integration:**

- **Important:** This workflow assumes your commit messages contain a JIRA key (e.g., "PROJ-123: Fix login bug").
- Select the first Code node. It uses a regular expression ([A-Z]+-\\d+)/i to find JIRA keys. Adjust this expression if your team uses a different format.
- Select the Get an issue node and ensure your JIRA credentials are correctly configured.

**4. Customize the AI Prompt:**

- Select the Basic LLM Chain node. You can edit the prompt to change the tone, style, or structure of the generated HTML release note to match your company's standards.


**5. Configure Email Notifications:**

- Select the Send email node.
- Update the To Email field with the recipient's email address (e.g., a team distribution list or a stakeholder's email).
- Customize the From Email and Subject line as needed.

**6. Activate Workflow:**

- Save your changes and activate the workflow. Now, every push to your configured repository will trigger the automated generation and sending of release notes.


### Required Tools

- GitHub: To trigger the workflow on code pushes.
- JIRA: To fetch details about the tasks and bugs included in the release.
- Google Gemini: To intelligently generate the release note content. (You can swap this for another LLM supported by n8n).
- SMTP Provider: To send the final release note via email.


## Connect with us

- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Send Email, Github Trigger, Jira Software, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
