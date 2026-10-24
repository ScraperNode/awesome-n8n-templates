# ⚡ Get chess.com game reviews by email using Google Gemini or other LLMs

> ⚡ **253 views** · ⚡ [Personal Productivity](../)

## Description

Improve your chess automatically — get a personalized AI coaching report delivered.
This workflow connects to the free Chess.com public API, fetches your most recent game, and sends it to an AI language model that acts as your personal chess coach. Within minutes, you receive a structured HTML email covering everything from critical turning points to a personalized training plan.

🔧 How It Works

Trigger — Runs on a daily schedule or manually on demand
Config Node — Set your Chess.com username and email address (one-time setup)
Fetch Games — Pulls your current month's games from Chess.com's public API (no API key required)
Sort & Enrich — Identifies your color, result (Win/Loss/Draw), opponent details, ratings, and ECO opening code
AI Analysis — Sends the full PGN and game context to your chosen LLM with a structured coaching prompt
Email Report — Delivers a clean HTML coaching report directly to your inbox via Gmail


📊 What's in the Coaching Report

Game Summary — Opening, middlegame, and endgame narrative
Critical Moments — 3–5 turning points with explanations of what happened and what should have been played
Mistake Categories — Tactical oversights, positional errors, opening issues, endgame technique, time management
What Went Well — Genuine strengths recognized and reinforced
Five Key Lessons — Specific, memorable takeaways tied to your actual game
Training Plan — Targeted drills and study resources based on your weaknesses
Closing Motivation — Encouraging next step to keep you improving


⚙️ Setup (Under 5 Minutes)

Import the workflow into n8n
Open the Config node and enter your Chess.com username and target email address
Connect your Gmail OAuth2 credential
Connect your preferred LLM credential (Google Gemini is pre-wired; swap for OpenAI or Claude if preferred)
Activate the workflow — done!


🤖 Supported AI Models
The quality of the results depends on the model you choose. You can start with the free Gemini models and compare the output with your expected results.

The LLM node is plug-and-play, allowing you to switch between different models with a single click.

Google Gemini 2.5 Flash (pre-configured)
OpenAI GPT-4o — Best overall chess analysis quality
Anthropic Claude Sonnet — Excellent at explanations and coaching tone
Mistral / Llama — Self-hosted options for privacy-conscious users


💡 Stronger models produce better analysis. GPT-4o or Claude Sonnet are recommended for players rated 1000+.


📬 Extend the Workflow
After the email step, you can easily add nodes to also send the report via:

Telegram — instant mobile notifications
Slack — post to a personal or team channel
Notion — build a game review database
Google Drive — archive reports as files
Discord — share with your chess study group


✅ Requirements

n8n (self-hosted or cloud)
A Chess.com account with at least one game this month
Gmail OAuth2 credential
Any supported LLM API credential (Google Gemini, OpenAI, Anthropic, etc.)

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
