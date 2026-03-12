# ⚙️ Daily GitHub release notification by email

> ⚡ **2,027 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Automating daily notifications of the latest releases from a GitHub repository. This template is ideal for developers and project managers looking to stay up-to-date with software updates.

**How it Works:**

- Daily Trigger: The workflow initiates daily using the Schedule Trigger node.
- Fetch Repository Data: The HTTP Request node retrieves the latest release details from the specified GitHub repository.
- Check if new: The IF node check if the release was done in the last 24 hours.
- Split Content: The Split Out node processes the JSON response to extract and structure relevant data.
- Convert Markdown: The Markdown node converts release notes from Markdown format to HTML, making them ready to use in emails.
- Send a notification by email

**Key Features:**

- Simple to customize by modifying the GitHub URL.
- Automatically processes and formats release notes for better readability.
- Modular design, allowing integration with other workflows like Gmail or Slack notifications.

**Setup Steps:**

- Modify Repository URL: Update the Sticky Note node with the URL of the repository you want to monitor.
- Modify SMTP details: Update the Send Email node with your SMTP details.

## 🔗 Nodes Used

Send Email, HTTP Request, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
