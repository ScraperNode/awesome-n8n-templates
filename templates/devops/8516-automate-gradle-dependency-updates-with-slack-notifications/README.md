# ⚙️ Automate Gradle dependency updates with Slack notifications

> ⚡ **13 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Gradle Project Dependency & Version Update - Smart Tracker

This workflow automatically checks your project’s libraries for updates. It identifies outdated dependencies, flags major version changes, and compares current and latest versions. Libraries that are already up-to-date are skipped, while outdated ones are automatically updated in build.gradle. Slack notifications inform your team which dependencies were updated or already current, keeping your project dependencies safe and up-to-date without manual effort.

### Quick Start – Implementation Steps

1.  Connect an SSH account with access to your project folder.
2.  Configure Slack credentials and select the channel for notifications.
3.  Adjust the schedule trigger (e.g., every 30 days at 10:30 AM).
4.  Activate the workflow — automatic dependency tracking and alerts start running.
    
## What It Does

This workflow automates dependency management for your project. It runs a Gradle command to list outdated libraries, parses the output to identify all available updates, and marks major version changes (like 1.x → 2.x) as critical. Libraries already at the latest version are ignored, while outdated libraries can automatically update the build.gradle file. Slack messages notify your team of both updated dependencies and those already up-to-date. This reduces manual tracking and ensures your project stays current and secure.

## Who’s It For
This workflow is ideal for:
- Development teams managing Android projects.
- DevOps engineers maintaining dependency health.
- Project managers tracking library updates.
- Companies wanting automated dependency monitoring and alerts.
- Teams using Slack for internal notifications

## Requirements to Use This Workflow
To fully use this workflow, you need:
- An **n8n instance** (self-hosted or cloud).
- SSH access to your Android project folder.
- A **Slack workspace** with API access.
- Gradle installed in your project environment.
- Basic understanding of Gradle dependencies and JSON outputs.

## How It Works

- **Run Gradle Dependency Check** – Executes a Gradle command to list outdated libraries.
- **Extract Dependency Updates** – Parses the output and collects each library’s name, current version, and latest version.
- **Mark Major Updates** – Flags libraries with major version changes as critical.
- **Check Same Version** – Compares current and latest versions and keeps the “major” flag.
- **Conditional Routing** – Libraries already up-to-date are skipped; outdated ones proceed.
- **Update build.gradle** – Critical updates can automatically modify your project’s Gradle file.
- **Slack Notifications** – Sends messages about updated dependencies and ones already up-to-date.

## **Setup Steps**
- Import the workflow JSON file into n8n.
- Configure your credentials:
	- SSH account for project access
	- Slack API access and channel selection
- Adjust the schedule trigger for your desired update frequency.
- Verify paths in SSH commands (cwd) match your project directory.
- Activate the workflow.

## How To Customize Nodes

### **Change Update Rules**
- Modify the “Mark Major Updates” node if you want different criteria for critical updates.
- Adjust the “Check Same Version” node to include minor or patch updates if needed.

### **Customize Slack Messages**
- Update the text in Slack nodes to include additional info like release notes.
- Send notifications to different channels based on project or team.

### **Customize Gradle Update Command**
- Modify the sed command in the SSH node if your build.gradle structure differs.
- Add backup or logging steps before automatic updates.

## Add-Ons (Optional Enhancements)
You can extend this workflow with:
- Email notifications for critical updates.
- Logging updates to Google Sheets or Airtable.
- Automated pull requests for dependency updates.
- Multi-project support by running checks in multiple directories.

## Use Case Examples
- **Keep Android libraries up-to-date** – Automatically detect and apply updates.
- **Track major version upgrades** – Flag potentially breaking changes before updating.
- **Team notifications via Slack** – Keep developers informed about dependency health.
- **Reduce manual dependency tracking** – Save time and avoid human error.

## Troubleshooting Guide
| Issue                     | Possible Cause                               | Solution                                                             |
|---------------------------|-----------------------------------------------|----------------------------------------------------------------------|
| Slack message not sent    | Wrong API credentials or channel ID           | Check Slack credentials and channel configuration                    |
| Gradle command fails      | Incorrect project path or invalid Gradle setup| Verify SSH cwd path and ensure Gradle is installed/configured        |
| Dependencies not updating | Incorrect `sed` command for `build.gradle`    | Adjust the command or use a backup/preview approach                  |
| Workflow not triggering   | Schedule trigger misconfigured                | Review and correct n8n schedule settings                             |

## Need Help?

If you need assistance setting up, troubleshooting or customizing this workflow, the n8n team at WeblineIndia can help. We can automate more processes, integrate external systems or create custom workflow solutions tailored to your projects.

## 🔗 Nodes Used

Slack, SSH, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
