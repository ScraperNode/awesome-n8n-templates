# ⚡ Automate personalized assignment reminders for students with Canvas

> ⚡ **244 views** · ⚡ [Personal Productivity](../)

## Description

## Canvas: Send students their pending assignments

### How it works
1. Trigger the workflow and set the Canvas base URL and target course name.
2. Fetch all instructor courses and locate the course ID that matches the name.
3. Retrieve enrolled students and their unsubmitted submissions for the course, handling paginated results.
4. Merge student records with submission data, convert due dates to local time, and build a per-student summary.
5. Send a Canvas conversation to each student with a personalized list of pending assignments and links.

### Setup
- [ ] Connect Canvas API credentials (Bearer and header auth used by the workflow).
- [ ] Enter your Canvas base URL (e.g. https://your_educational_institution.instructure.com).
- [ ] Set the exact course name to check for pending work.
- [ ] Confirm the teacher account can view students and send conversations.
- [ ] Run the workflow manually to verify output and delivery.
- [ ] Edit the message subject or body template if you need different wording.

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
