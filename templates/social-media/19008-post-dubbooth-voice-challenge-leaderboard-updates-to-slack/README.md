# 📱 Post DubBooth voice challenge leaderboard updates to Slack

> ⚡ **21 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs daily (or on demand) to fetch the public leaderboard for a [Choicer Voicer Free](https://dubbooth.com/ "Choicer Voicer Free") voice-dubbing challenge on DubBooth and post a formatted top-scores update to a chosen Slack channel.

## How it works
1. Runs every 24 hours on a schedule trigger or starts manually for testing.
2. Sets the DubBooth challenge ID, the target Slack channel ID, and how many leaderboard rows to include.
3. Calls the DubBooth public challenge API to retrieve challenge status, counts, and the top leaderboard entries.
4. Formats the results into a Slack-ready message with the score to beat, status, participation stats, top ranks, and a link to the challenge.
5. Posts the formatted leaderboard update to the specified Slack channel.

## Setup
1. Create or choose a public DubBooth challenge and copy the challenge ID from the URL into the workflow configuration.
2. Add Slack OAuth2 credentials in n8n with permission to post messages and select a Slack channel ID to post into.
3. Update the configuration values for `challengeId`, `slackChannelId`, and optionally `maxRows`, then run the manual test and activate the schedule.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
