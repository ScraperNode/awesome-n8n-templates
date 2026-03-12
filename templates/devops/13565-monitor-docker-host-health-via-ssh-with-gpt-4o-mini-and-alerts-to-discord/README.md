# ⚙️ Monitor Docker host health via SSH with GPT-4o-mini and alerts to Discord

> ⚡ **21 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## This n8n template builds an automated health monitoring dashboard for your homelab Docker host.

**It SSHs into your server, collects 30+ system and container metrics, analyzes trends with AI, and delivers a structured multi-embed dashboard to Discord -- plus real-time critical alerts when things go wrong.**

Stop SSHing into your server every morning to check if everything's still running. AI reads your metrics and tells you exactly what needs attention, with copy-paste fix commands.

**Good to know**

- Estimated cost is ~$0.003 per daily run using GPT-4o-mini. Compatible with Claude or any OpenAI-compatible LLM -- swap the model sub-node to switch providers. See the setup notes inside the workflow for Claude configuration.
- Uses Google Sheets for 7-day metric history and trend analysis. A one-click setup trigger auto-creates a formatted tracking spreadsheet with frozen headers and conditional formatting.
- The critical alert path runs every 5 minutes with a lightweight check (configurable). The daily digest runs once in the morning. Both schedules are adjustable.

## How it works

- Daily schedule trigger SSHs into your Docker host and collects system metrics (real CPU % from /proc/stat, memory, all filesystems, swap, network I/O, top processes, zombie processes, failed services) and Docker metrics (container status, CPU, memory, restarts, health checks, disk usage, dangling images) in ~2 seconds
- A 100-point health score is calculated from weighted metrics across CPU, memory, disk, swap, containers, and system health
- 7 days of historical data is loaded from Google Sheets for trend comparison
- AI analyzes current vs. historical metrics and returns structured JSON with severity-tagged findings, CLI fix commands, trend analysis, and a top recommendation
- A 4-embed Discord dashboard is delivered: status header with inline metrics, actionable findings, Docker ecosystem overview with trends, and a footer with timing and API cost
- Today's metrics are stored in Google Sheets for future trend tracking
- A separate lightweight path runs every 5 minutes checking critical thresholds (disk &gt; 90%, memory &gt; 95%, inodes &gt; 90%, containers down) and fires immediate alerts

## How to use

- Click "Test workflow" on the first-time setup trigger to auto-create your Google Sheets tracking dashboard
- Copy the Sheet ID into the configuration node, add your Discord webhook URL, wire your SSH and OpenAI credentials, and activate
- Full setup guides linked inside the workflow for SSH keys, API keys, and Discord webhooks

## Requirements

- SSH access to a Linux Docker host (key-based authentication) ([ssh key setup](https://www.nxsi.io/guides/ssh-key-setup)) 
- OpenAI API key or Anthropic API key ([OpenAI setup guide](https://nxsi.io/guides/openai-api-setup) | [Claude setup guide](https://nxsi.io/guides/claude-api-setup))
- Google Sheets OAuth2 credential ([n8n docs](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/))
- Discord webhook URL ([setup guide](https://nxsi.io/guides/discord-webhook))

## Customizing this workflow

- Adjust alert thresholds in the configuration node (disk warning/critical, memory warning/critical, inode critical, restart threshold)
- Change the daily digest and critical alert schedules in the trigger nodes
- Swap OpenAI for Claude or Ollama by replacing the LLM sub-node
- Replace Discord with Slack, Telegram, or ntfy by modifying the webhook payload format
- Add additional SSH metrics by editing the collection commands

## 🔗 Nodes Used

Google Sheets, HTTP Request, SSH, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
