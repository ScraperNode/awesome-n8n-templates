# 📱 Discord setup guidelines 📜 - get all channels & categories of a Discord server

> ⚡ **510 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 🌟 Test Your n8n Discord Connection!
Trying to connect n8n to your Discord server but not sure where to start? 🤔 Setting up a Discord Bot and its credentials can be confusing. This workflow provides the perfect starting point, guiding you through the connection and running a test to fetch all channels from your server, confirming everything works!

---

## 🎯 What This Does
This workflow is a "getting started" template designed to solve one primary problem: creating and verifying your first Discord connection in n8n.

Its main benefit is demystifying the Discord Bot setup process. It proves your connection is successful by connecting to your server and fetching a complete list of all channels and categories. It's the perfect first step for any n8n user, community manager, or developer who wants to build Discord automations but needs a clear, working starting point.

---

## 🔄 How It Works
Manual Trigger: You start the workflow by clicking 'Execute workflow'.

**Set Server ID:** A 'Set' node is pre-configured to hold your specific Discord Server ID.

**Get Channels List:** The Discord node uses your credentials and the Server ID to connect to Discord and retrieve a list of all channels and categories on that server.

**Separate Channels & Categories:** An 'IF' node automatically sorts the list, sending channels down one path and categories down another.

**Process & Merge:** Two 'Set' nodes clean up the data from each path, and a 'Merge' node combines them back into one organized list.

**Next Step!:** The workflow finishes at a 'NoOp' node. You can click the 'Merge' node to see the final output a full list of your server's channels.

## Nodes Used
- When clicking ‘Execute workflow’ (Manual Trigger)
- Set - Server ID (Set)
- Get channels list (Discord)
- Separate Category & Channel (IF)
- Get Channels (Set)
- Get Server's Categories (Set)
- Merge (Merge)
- Next Step ! (NoOp)

---

## Setup Requirements 📜
Credentials: Discord Bot Token (created via the Discord Developer Portal).
**Accounts:** A Discord account.
**Specifics:**
- A Discord Server you own or have admin permissions for.
- Developer Mode enabled in your Discord client (to copy your Server ID).
- A Server ID from your server to test with.
- Estimated Setup Time: &lt; 10 minutes.
### Set up steps
- **Part 1:** Create Your Discord Bot & Get Token
	- **Go to the Discord Developer Portal:** Navigate to discord.com/developers/applications and log in.
	- **Create New Application:** Click the New Application button in the top right. Give it a name (e.g., "n8n Bot") and click Create.
	- **Access Your Bot:** On the left-hand menu, click the Bot tab, then Add Bot.
	- **Get Your Bot Token:** Under the bot's username, find the Token section. Click Reset Token (and confirm) to reveal your bot's token.
	- **Copy the Token:** This is your secret credential. Copy this token and keep it safe.
- **Part 2:** Invite Your Bot to Your Server
Go to URL Generator: Back in the Discord Developer Portal, go to the OAuth2 tab and then URL Generator.
	- **Select Scopes:** In the Scopes box, check the bot checkbox.
	- **Set Permissions:** A new Bot Permissions box will appear. Check the View Channels permission. This is all that's needed for this workflow.
	- **Copy Invite URL:** Scroll down and copy the Generated URL.
	- **Invite Bot:** Paste this URL into a new browser tab. Select the server you want to add the bot to, click Continue, and then Authorize.
- **Part 3:** Add Credentials to n8n
	- **Open Credentials:** In n8n, go to Credentials &gt; Create Credential.
	- **Select Credential Type:** Search for and select Discord Bot API.
	- **Paste Your Token:** Give your credential a 'Name' (e.g., "My Discord Bot"). Paste the Bot Token you copied from Part 1 into the Bot Token field.
	- **Save:** Click Save to store your new credentials.
	- **Link Credential:** Back in the workflow, click the Get channels list node. In the 'Credentials' parameter, select the credential you just created.
- **Part 4:** Configure and Test the Workflow
Enable Developer Mode: In your Discord desktop app, go to User Settings (the gear icon) &gt; App Settings &gt; Advanced and turn on Developer Mode.
	- **Copy Server ID:** Go to your Discord server, right-click on the server icon (on the left), and click Copy Server ID.
	- **Configure n8n Node:** Back in your n8n workflow, click the Set - Server ID node.
	- **Paste Server ID:** In the 'Value' field for server_id, replace the placeholder value with the Server ID you just copied.
	- **Execute Workflow:** Click Execute workflow in the top right corner.

If it succeeds, all nodes will turn green. Click the Merge node and select the 'Output' tab to see a complete JSON list of all channels and categories from your server. Congratulations, you're connected!

## 🔗 Nodes Used

Discord, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
