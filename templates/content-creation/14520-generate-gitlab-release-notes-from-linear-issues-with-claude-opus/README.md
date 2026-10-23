# 🎬 Generate GitLab release notes from Linear issues with Claude Opus

> ⚡ **68 views** · 🎬 [Content Creation & Video](../)

## Description

## 📝 Release Note Helper

Triggered by a GitLab MR webhook, this workflow automatically assists your team in writing **customer-facing release notes** by combining Linear issue data with Claude AI.

Apply the `rn-release-n8n` label to any release note MR in your docs repository to trigger it.

## How it works

1. **Version detection** — reads your release RSS feed to find the last published version, then fetches all matching Linear version labels created since then to determine the version range automatically
2. **Issue collection** — queries Linear for all completed issues in that version range that have Zendesk tickets, Slack links, or custom labels (`Customer request`, `Release note public`) attached
3. **Ticket summary** — posts a structured list of all relevant issues to the MR as a comment
4. **AI draft** — sends issue details to Claude, which generates customer-facing changelog entries grouped into `### Enhancements` and `### Fixes`, posted as a second MR comment
5. **Done label** — adds `rn-done` to the MR when complete to prevent re-runs

## Setup

1. Configure a **GitLab webhook** on your docs repo pointing to this workflow's URL (Merge Request events)
2. Create two labels on your GitLab repo: `rn-release-n8n` (to trigger) and `rn-done` (auto-applied on completion)
3. Update the **RSS Read** node URL to your release RSS feed
4. Replace `YOUR_PROJECT_ID` in all GitLab API nodes with your docs project ID
5. Replace `YOUR_WORKSPACE` in the Code nodes with your Linear workspace slug
6. Connect **Linear API**, **GitLab API**, and **Anthropic API** credentials

## Notes

- Versioning assumes a `vX.Y` Linear label convention — adapt the **Format labels** node for your own scheme
- The AI prompt in **Message a model** is ready to use but can be customised to match your tone and changelog format
- Issues are filtered to those with Zendesk, Slack attachments, or your custom labels — adjust in **Set Params**

## 🔗 Nodes Used

HTTP Request, RSS Read, GitLab Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
