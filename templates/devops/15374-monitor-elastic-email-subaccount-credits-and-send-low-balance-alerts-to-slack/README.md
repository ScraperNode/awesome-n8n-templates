# ⚙️ Monitor Elastic Email subaccount credits and send low-balance alerts to Slack

> ⚡ **10 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## What Is This?

This workflow monitors your [Elastic Email](https://elasticemail.com/) subaccounts daily and sends a Slack alert whenever an account's email credit balance drops below a configurable threshold. It's a simple but essential guard against unexpected sending failures caused by depleted credits.

## Who Is It For?

Any team or agency managing multiple Elastic Email subaccounts — marketing departments, email service providers, or developers running automated email campaigns — who want proactive warnings before credits run out.

## How Does It Work?

The workflow runs once a day on a schedule. It calls the Elastic Email REST API to retrieve all subaccount data, then filters out any accounts with a credit balance below the minimum you define in the **Config** node. If any low-credit accounts are found, a Slack message with all accounts their email address and current credit balance will be sent. API errors are caught separately and also reported to Slack.

## How To Set It Up?

**Prerequisites:**

- An Elastic Email account with API access
- A Slack workspace with bot permissions

**Step 1: Set the credit threshold**

In the **Config** node, set **Minimum amount of Email Credits** to the value below which you want to be notified (default: 100).

**Step 2: Configure Elastic Email credentials**

In the **Load EE Subaccounts** HTTP Request node, create a new Custom Auth credential with the following JSON:

```json
{
  "headers": {
    "X-ElasticEmail-ApiKey": "&lt;Your EE Auth Token&gt;"
  }
}
```

You can generate an API token directly in your [Elastic Email account settings](https://app.elasticemail.com/marketing/settings/new/manage-api).

**Step 3: Configure Slack credentials**

Connect your Slack workspace using OAuth2 in both Slack nodes, and update the channel ID to your desired notification channel.

---

Need help? Reach out at [developers@sailingbyte.com](mailto:developers@sailingbyte.com) or visit [sailingbyte.com](https://sailingbyte.com/).

Happy hacking!

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
