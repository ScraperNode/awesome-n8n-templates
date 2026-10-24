# 💬 Optimize Cold Email Copy with Claude, Instantly, and Google Sheets

> ⚡ **146 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Optimize Cold Email Copy with Claude, Instantly, and Google Sheets

Inspired by [Karpathy's Autoresearch](https://github.com/karpathy/autoresearch), this workflow treats your cold email campaigns as continuous experiments. Instead of writing copy once and hoping for the best, it runs an automated optimization loop that evolves your emails based on real performance data.

### How it works
1. Runs on a schedule (every 6 hours)
2. Pulls live campaign stats (open rate, reply rate) from Instantly
3. Reads the current champion and challenger variants from Google Sheets
4. Reads the full experiment history (last 10 rounds)
5. Checks if both variants have enough data (200+ sends each)
6. If below threshold, exits and waits for the next run
7. If above threshold, feeds everything to Claude: both variants, metrics, experiment history, and the cold email program rules
8. Claude declares a winner, explains why, and generates a new challenger with a specific hypothesis
9. Safety check: if reply rate drops below the floor threshold, pauses and sends a Telegram alert instead of continuing
10. Logs the full experiment (variants, metrics, winner, reasoning, change type) to Google Sheets
11. Promotes winner, deploys new challenger to Instantly

### What makes it different
- **Learns across rounds, not just the current test.** Claude sees the last 10 experiments and identifies patterns over time.
- **Program doc driven.** Brand voice, hard rules, and constraints live in a Google Sheet, not hardcoded in prompts. Update the rules without touching the workflow.
- **Structured change tracking.** Every experiment logs what specifically changed (subject, CTA, tone, length, opener style) so you can filter by change type.
- **Safety floor.** If reply rate drops below your minimum, the system pauses and alerts you instead of running bad copy.

### What you need
- Instantly account with active campaign
- Claude API key (Anthropic)
- Google Sheets (two tabs: Active, Experiments + one tab: Program)
- Telegram bot (for safety alerts)
- Enough send volume for meaningful data (200+ sends per variant)

### Google Sheets setup
**Active tab** (A:F): Variant | Subject Line | Email Body | Sends | Open Rate | Reply Rate

**Experiments tab** (A:M): Experiment ID | Date | Champion Copy | Challenger Copy | Champion Subject | Challenger Subject | Champion Sends | Challenger Sends | Champion Reply Rate | Challenger Reply Rate | Winner | Change Type | Reasoning

**Program tab** (A:B): Rule Name | Rule Content (brand voice, constraints, off-limits topics, max word count, required variables, etc.)

### Environment variables
- OPTIMIZER_SHEET_ID
- REMOVEFAST_CAMPAIGN_ID
- INSTANTLY_API_KEY
- ANTHROPIC_API_KEY
- TELEGRAM_BOT_TOKEN
- TELEGRAM_CHAT_ID
- REPLY_RATE_FLOOR (default: 1.0)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
