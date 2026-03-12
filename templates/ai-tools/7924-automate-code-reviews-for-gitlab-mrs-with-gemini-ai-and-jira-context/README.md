# 🎯 Automate code reviews for GitLab MRs with Gemini AI and JIRA context

> ⚡ **1,196 views** · 🎯 [AI Summarization & Classification](../)

## Description

### What it does

Automates code review by listening for a comment trigger on GitLab merge requests, summarising the diff, and using an LLM to post constructive, line‑specific feedback. If a JIRA ticket ID is found in the MR description, the ticket’s summary is used to inform the AI review.

### Use cases

- Quickly obtain high‑quality feedback on MRs without waiting for peers.
- Highlight logic, security or performance issues that might slip through cursory reviews.
- Incorporate project context by pulling in related JIRA ticket summaries.

### Good to know

- Triggered by commenting `ai-review` on a merge request.
- The LLM returns only high‑value findings; if nothing critical is detected, the workflow posts an “all clear” message.
- You can swap out the LLM (Gemini, OpenAI, etc.) or adjust the prompt to fit your team’s guidelines.
- AI usage may incur costs or be geo‑restricted depending on your provider n8n.io.

### How it works
- **Webhook listener:** A Webhook node captures GitLab note events and filters for the trigger phrase.

- **Fetch & parse:** The workflow retrieves MR details and diffs, splitting each change into “original” and “new” code blocks.

- **Optional JIRA context:** If your MR description includes a JIRA key (e.g., PROJ-123), the workflow fetches the ticket (and parent ticket for subtasks) and composes a brief context summary.

- **LLM review:** The parsed diff and optional context are sent to an LLM with instructions to identify logic, security or performance issues and suggest improvements.

- **Post results:** Inline comments are posted back to the MR at the appropriate file/line positions; if no issues are found, a single “all clear” note is posted.

### How to use

- Import the template JSON and open the Webhook node. Replace the `REPLACE_WITH_UNIQUE_PATH` placeholder with your desired path and configure a GitLab project webhook to send MR comments to that URL.
- Select your LLM credentials in the Gemini (or other LLM) node, and optionally add JIRA credentials in the JIRA nodes.
- Activate the workflow and comment `ai-review` on any merge request to test it.
- For each review, the workflow posts status updates (“AI review initiated…”) and final comments.

### Requirements

- A GitLab project with a generate Personal Access Token (PAT) stored as an environment variable (`GITLAB_TOKEN`).
- LLM credentials (e.g., Google Gemini) and optional JIRA credentials.

### Customising this workflow

- Change the trigger phrase in the Trigger Phrase Filter node.
- Modify the LLM prompt to focus on different aspects (e.g., style, documentation).
- Filter out certain file types or directories before sending diffs to the LLM.
- Integrate other services (Slack, email) to notify teams when reviews are complete.

## 🔗 Nodes Used

HTTP Request, Webhook, Jira Software, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
