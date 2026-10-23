# 🔬 Review Google Drive inbox files with Discord and log decisions in Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Google Drive inbox folder for new files, posts an approval card with buttons to a Discord channel, and moves the file to an approved or rework folder based on the response, while logging each decision to Google Sheets.

## How it works
1. Polls a specified Google Drive folder every 5 minutes and triggers when a new file is created.
2. Loads review settings (Discord server/channel IDs, approved/rejected folder IDs, and logging sheet details) and formats the file metadata into a Discord-ready review card with a preview link.
3. Posts the review card to a Discord channel with Approve and Send back buttons and waits up to the configured decision window for a response.
4. Routes the outcome based on the button response, moving the file in Google Drive to the approved folder or the rejected/rework folder, or leaving it in the inbox if no one responds.
5. Resolves the final status (including move failures) and appends a decision record to a Google Sheets log.
6. Posts a receipt message back to the Discord review channel and continues to the next file.

## Setup
1. Add Google Drive OAuth2 credentials and provide the inbox folder ID plus destination folder IDs for approved and rejected/rework files.
2. Create a Discord application/bot, add Discord bot credentials in n8n, invite the bot to your server, and set the guild ID and review channel ID.
3. Add Google Sheets OAuth2 credentials, create a decision log spreadsheet with the required columns, and set the sheet URL and tab name in the settings.
4. Ensure your n8n instance is reachable via its public webhook URL (and `WEBHOOK_URL` is set correctly) so Discord button interactions can be completed.
5. Review and adjust the decision window (hours) and polling interval to match your operational needs, then test by uploading a file to the inbox.

## Requirements
- A Discord server you can add a bot to with Send Messages on the review channel. No privileged intents, because this never reads message content or the member list.
- Three Google Drive folders: an inbox to watch, an approved destination and a rework destination.
- A Google account with a spreadsheet for the decision log.
- n8n with Discord Bot API, Google Drive and Google Sheets credentials. No paid plan, no AI model, no third-party service.

## Customization
- Set driveId in the settings node to a shared drive ID if your deliverables do not live in My Drive. It ships as My Drive.
- Rename the Approve and Send back button labels freely. The routing keys on the returned boolean, not on the wording.
- Point both destination folders at the same folder if you want a decision log without the filing.
- Extend the review card in the formatting step to carry anything Drive returns, such as the owner or the last editor.

## Additional info
The detail worth knowing before you rely on this is what happens when nobody answers. The routing has three outcomes rather than two: an expired decision window leaves the file in the inbox and logs it as No response, so a Friday evening deliverable is never quietly demoted to the rework folder over the weekend and the log never records a rejection that no human made. The two Drive move nodes are likewise caught per file instead of being left to stop the run, so one file that Drive refuses cannot strand the rest of the batch behind it, and a failed move is logged with the error while the file stays put. Between those two, every row in the decision sheet is either something a person actually decided or an error you can act on, which is what makes the log usable as an audit trail rather than just a record of executions.

## 🔗 Nodes Used

Google Sheets, Google Drive, Discord, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
