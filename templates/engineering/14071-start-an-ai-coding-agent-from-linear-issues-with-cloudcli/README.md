# ⚒️ Start an AI coding agent from Linear issues with CloudCLI

> ⚡ **314 views** · ⚒️ [Engineering](../)

## Description

Turn new Linear issues into automated AI coding sessions. When an issue is created, this workflow runs an AI coding agent (Claude Code, Cursor CLI, Gemini or Codex) on the task inside a CloudCLI cloud dev environment and posts the results back to Linear with a link to the live session so you can continue your work.

## How it works

1. A Linear trigger fires on issue events and filters for newly created issues only.
2. The issue title and description are composed into a prompt for the AI coding agent.
3. CloudCLI runs the agent inside an isolated cloud container.
4. The agent's output, VS Code and Cursor deep links, and an SSH resume command are posted back to Linear as a comment.

Reviewers can open the environment in their preferred IDE or SSH in and run `claude -r` to resume the session from terminal.

## Set up steps

1. Install the **CloudCLI** verified community node from the n8n nodes panel.
2. Connect your Linear and CloudCLI API credentials.
3. Select your target environment in the "Get Environment Details" node.
4. Customize the prompt template in "Compose Agent Prompt" to match your codebase.

## How to customize

- Adjust the Linear Trigger's team filter or add an IF node to filter by label (e.g. `auto-code`).
- Enable "Create Pull Request" in the agent's options to auto-open a PR.
- Add a Slack node to notify your team when the agent completes.
- Replace the Linear trigger with Jira, GitHub Issues, or Asana.

## 🔗 Nodes Used

Linear Trigger, Linear

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
