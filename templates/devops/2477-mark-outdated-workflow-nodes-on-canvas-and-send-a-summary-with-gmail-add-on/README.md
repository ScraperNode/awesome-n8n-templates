# ⚙️ Mark outdated workflow nodes on canvas and send a summary with Gmail (add-on)

> ⚡ **2,260 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This is an **add-on** for the template [Check if workflows contain build-in nodes that are not of the latest version](https://n8n.io/workflows/2301-check-if-workflows-contain-build-in-nodes-that-are-not-of-the-latest-version/)

## Purpose

This workflow highlights outdated nodes within all workflows of a single n8n instance and places an updated preconfigured node right next to it, so it can be swapped easily.

![Image](https://i.imgur.com/yRI0adF.png)

## How it works

- The parent workflow checks the entire n8n instance for outdated nodes within all workflows and passes a list of those alongside some metadata to this workflow
- This workflow then processes that data and updates the affected workflows
- Outdated nodes are renamed by prepending an emoji (default: ⚠️) - this is also used for future checks to prevent from double-processing
- The latest version of each outdated node is added to the workflow canvas (not wired up) behind the old one, slightly shifted in position
- An Email is sent with a list of modified workflows

In the settings it is possible to define:

- which symbol/emoji should be prepended to outdated notes
- whether to include only major node updates or all of them
- whether to add the new nodes to the canvas or not

## Setup

- Clone this template to your n8n instance
- Update the Settings node by setting at least the base URL of your n8n instance
- Set a recipient in the Gmail node
- Clone the [parent template](https://n8n.io/workflows/2301-check-if-workflows-contain-build-in-nodes-that-are-not-of-the-latest-version/) to your n8n instance and configure it as described in it’s description
- Add an “Execute Workflow” node to the end of the parent workflow and configure it, so it calls this workflow

## How to use

Execute the parent workflow and check your Email Inbox.

All linked workflows should contain one or more updated nodes with an emoji prepended to their names.

## Disclaimer

- Beware, that major updates can cause migrations of nodes to fail, since their structure can differ. So always compare the old nodes with the newly created, if all parameters still meet the requirements.

- Be careful when executing this workflow on a production environment, since it directly modifies your workflows. It is advisable to run this on your testing environment and migrate successfully tested workflows to your production environment using git or manually.

## 🔗 Nodes Used

Gmail, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
