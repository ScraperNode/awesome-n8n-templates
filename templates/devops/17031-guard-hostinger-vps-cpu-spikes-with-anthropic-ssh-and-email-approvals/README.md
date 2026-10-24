# ⚙️ Guard Hostinger VPS CPU spikes with Anthropic, SSH, and email approvals

> ⚡ **26 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow monitors a Hostinger VPS every 15 minutes for CPU spikes, correlates them with traffic anomalies, and either auto-activates a lockdown firewall or emails a process report with AI analysis and an email-reply approval path to snapshot and kill high-CPU processes.

## How it works
1. Runs every 15 minutes and loads the VPS ID, SSH host, alert email, and CPU/traffic thresholds.
2. Fetches the last two hours of CPU and network traffic metrics from the Hostinger API and determines whether the latest CPU usage exceeds the configured threshold and whether traffic is anomalous.
3. When a CPU spike is detected, connects over SSH to run `ps aux --sort=-%cpu`, formats the top processes, and flags PIDs exceeding the kill CPU threshold.
4. Sends the raw process list to Anthropic (Claude) to generate a short diagnosis and recommendation.
5. If the spike appears traffic-driven, lists/creates a Hostinger “lockdown” firewall that only allows the configured ports, activates it on the VPS, and emails a lockdown alert.
6. If the spike is not traffic-driven, writes a pending-approval case entry to `/var/log/n8n-cpu-guard.log` over SSH and emails a report with the case ID, process table, AI analysis, and instructions to reply with “KILL” to approve termination.
7. In parallel, an IMAP trigger watches for reply emails containing the case ID in the subject and “KILL” in the body, then reads the case from the SSH log, creates a Hostinger VPS snapshot, waits briefly, terminates the flagged PIDs via SSH, logs the action, and emails confirmation.

## Setup
1. Self-host n8n and install the community node `n8n-nodes-hostinger-api`, then add Hostinger API credentials.
2. Add SSH credentials for the VPS user that can run `ps` and `kill`, and ensure it can append to `/var/log/n8n-cpu-guard.log`.
3. Configure email access by adding IMAP credentials for reading replies and SMTP (Email Send) credentials for sending alerts.
4. Add Anthropic credentials and select the Claude model in the AI analysis step.
5. Update the config values (VPS ID, SSH host, notification email, CPU/traffic thresholds, allowed ports, and lockdown firewall name) before activating the workflow.

## Requirements
- Self-hosted n8n
- Hostinger VPS + API Key
- SSH Access
- IMAP+SMTP mailbox
- LLM API Key

## Customization
- Tune cpuThreshold, trafficMultiplier, killCpuThreshold, and allowedPorts in the Config node
- Change 15-minute schedule
- Adjust the snapshot wait
- Swap the "Analyze CPU Spike with AI" node for any LLM you prefer (OpenAI, Google Gemini, a local Ollama model, etc.)

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, SSH, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
