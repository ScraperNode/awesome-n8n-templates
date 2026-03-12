# 🔧 Daily MLB pitcher vs. batter matchup analysis with Google Sheets and Telegram

> ⚡ **326 views** · 🔧 [Miscellaneous](../)

## Description

**MLB "Hits" Workflow — Overview**
• Pulls today's MLB schedule incl. probablePitcher + lineups (statsapi.mlb.com)
• Batches season stats for all involved players
• Builds pitcher vs. batter matchup rows


**Setup Steps:**
1) Google Sheets OAuth2 → point to your Google Sheet → Tab name
2) Create Telegram Bot cred + chatId
3) Optional: tweak ERA/OPS thresholds or Top N in nodes 6 or 8.

**Optional Setup:**
- Conditional Formatting in the Sheet for ColorScale on best stat in the column, as well as Lefty vs Right highlighting.

- ![Screenshot 20250711 at 9.54.30 AM.png](fileId:2018)
- **COMING SOON! Results Tracker tab and Apps Scripts and formulas.**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
