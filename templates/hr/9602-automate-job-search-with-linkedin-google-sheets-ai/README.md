# 👥 Automate job search with LinkedIn, Google Sheets & AI

> ⚡ **3,394 views** · 👥 [HR & Recruitment](../)

## Description

When I was applying for roles, I learned the hard way that a one-size-fits-all resume never wins. I obsessively tailored my resume for each posting, reflecting the exact scope, impact, and stack the team cared about. That’s when the callbacks really started landing from places like Google, Apple, Amazon, and other big tech teams. Personalization worked because recruiters saw immediate alignment: my bullets mirrored their needs.


![Screenshot 20251013 at 6.56.32 AM.png](fileId:2992)


So I built a small automation that flips the script. Instead of you chasing listings, it collects them for you, scores the fit against your resume, drafts a tailored cover letter, and files everything neatly into a Google Sheet then pings you for the best ones. One daily run. No more “I’ll get to it later.” Just a short list of high-signal roles and a ready-to-edit draft.


But tailoring takes time and the hardest part was upstream: finding roles that truly matched my skills and narrowing to the best-fit few worth customizing for. That’s why I built a lightweight n8n workflow that does the heavy lifting for me: it pulls fresh roles, scores each one against my resume, drafts a role-specific cover letter, and drops everything into a clean Google Sheet. Below is a quick guide to set it up end-to-end so you can spend less time hunting and more time sending targeted, high-quality applications.



Tutorial - 


[Full setup tutorial](https://open.substack.com/pub/jugaldb/p/ultimate-job-search-workflow-with?r=18lxy5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false)

https://open.substack.com/pub/jugaldb/p/ultimate-job-search-workflow-with?r=18lxy5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
