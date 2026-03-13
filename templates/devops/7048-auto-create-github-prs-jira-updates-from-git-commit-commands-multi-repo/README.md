# ⚙️ Auto-create GitHub PRs & JIRA updates from git commit commands (multi-repo)

> ⚡ **398 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

# This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for scaling your DevOps practices across multiple repositories.

Are you tired of the repetitive dance between git push, creating a pull request in GitHub, updating the corresponding task in JIRA, and then manually notifying your team in Slack, or Notion? 

This template puts your entire post-commit workflow on autopilot, creating a seamless and intelligent bridge between your code and your project management.

By embedding specific keywords and a JIRA issue ID into your git commit commands, this workflow automatically creates a Pull Request in the correct GitHub repository and updates the corresponding JIRA ticket. This creates a complete, centralized system that keeps all your projects synchronized, providing a massive efficiency boost for teams managing a diverse portfolio of codebases.

## Who This Template Is For?

This template is a must-have for any organization looking to streamline its software development lifecycle (SDLC). It’s perfect for:

- Development Teams: Eliminate tedious, manual tasks and enforce a consistent workflow, allowing developers to stay focused on coding.
- DevOps Engineers: A ready-to-deploy solution that integrates key developer tools without weeks of custom scripting.
- Engineering Managers & Team Leads: Gain real-time visibility into development progress and ensure processes are followed without constant check-ins.
- Project Managers: Get accurate, automatic updates in JIRA the moment development work is completed, improving project tracking and forecasting.


## Step-by-Step Setup Instructions

Follow these steps carefully to configure the workflow for your environment.

**1. Connect Your Tools (Credentials)**
- GitHub: Create credentials with repo scope to allow PR creation.
- JIRA: Create an API token and connect your JIRA Cloud or Server instance.
- Slack: Connect your Slack workspace using OAuth2.
- Notion: Connect your Notion integration token.

**2. Configure the GitHub Webhook (For Each Repository)**

This workflow is triggered by a GitHub webhook. You must add it to every repository you want to automate.
- First, Save and Activate the n8n workflow to ensure the webhook URL is live.
- In the n8n workflow, copy the Production URL from the Webhook node.
- Go to your GitHub repository and navigate to Settings &gt; Webhooks &gt; Add webhook.
- In the Payload URL field, paste the n8n webhook URL.
- Change the Content type to application/json.
- Under "Which events would you like to trigger this webhook?", select "Just the push event."
- Click "Add webhook." Repeat this for all relevant repositories.

**3. Configure the JIRA Nodes (Crucial Step)**

Your JIRA project has unique IDs for its statuses. You must update the workflow to match yours.

- Find the two JIRA nodes named "Update task status after PR" and "Update the task status without PR."
- In each node, go to the Status ID field.
- Click the dropdown and select the status that corresponds to "Done" or "Development Done" in your specific JIRA project workflow. The list is fetched directly from your connected JIRA instance.

**4. Configure Notification Nodes**

Tell the workflow where to send updates.

- For Slack: Open the two nodes named "Send message in slack..." and select your desired channel from the Channel ID dropdown.
- For Notion: Open the two nodes named "Append a block in notion..." and paste the URL of the target Notion page or database into the Block ID field.

**5. Final Activation**

Once all configurations are complete, ensure the workflow is Saved and the toggle switch is set to Active. You are now ready to automate!



## Customization Guidance

This template is a powerful foundation. Here’s how you can adapt it to your team's specific needs.

**1. Changing the PR Title or Body:**

- Go to the "Request to create PR" (HTTP Request) node.
- In the JSON Body field, you can edit the title and body expressions. For example, you could add the committer's name ({{$('Webhook').item.json.body.pusher.name }}) or a link back to the JIRA task.

**2. Adapting to a Fixed Branching Strategy:**

- If your team always creates pull requests against a single branch (e.g., develop), you can simplify the workflow.
- In the "Request to create PR" node, change the base value in the JSON body from {{...}} to your static branch name: "base": "develop".
- You can then remove the base branch logic from the "Commit Message Breakdown" (Code) node.

**3. Modifying Notification Messages:**
- The text sent to Slack and Notion is fully customizable.
- Open any of the Slack or Notion nodes and edit the text fields. You can include any data from previous nodes, such as the PR URL ({{ $('Request to create PR').item.json.body.html_url }}) or the repository name.

**4. Adjusting the Commit Regex for Different Conventions:**

- This is an advanced customization. If your team uses a different commit format (e.g., (DEV-123) instead of DEV-123), you can edit the regular expression in the "Commit Message Breakdown" (Code) node. Be sure to test your changes carefully. 

**5. Adding/Removing Notification Channels:**

- Don't use Notion? Simply delete the two Notion nodes.
- Want to send an email instead? Add a Gmail or SMTP node in parallel with a Slack node and configure it with the same data.


## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Jira Software, Notion, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
