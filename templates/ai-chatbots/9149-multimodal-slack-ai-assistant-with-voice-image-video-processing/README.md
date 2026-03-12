# 🤖 Multimodal Slack AI assistant with voice, image & video processing

> ⚡ **673 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# What it's for:
This is a base template for anyone trying to develop a Slack bot AI Agent. This base allows for multiple inputs (Voice, Picture, Video, and Text inputs) to be processed by an AI model of their choosing to a get a User started. From here, the User may connect any tools that they see fit to the AI Agent for their n8n workflows.

#### NOTE: This build is specifically for integrating a Slack bot into a CHAT Channel
If you want to allow the Slack bot to be integrated into the whole workspace, you'll need to adjust some of the nodes and bot parameters

# How it works:
**Input**: Slack message mentioning a bot in a chat channel

**n8n Processing**: Switch node determines the type:
1. Voice Message
2. Picture Message
3. Video Message
4. Text Message

(Currently uses OpenAI and Gemini to analyze Voice/Photo/Video content but feel free to change these nodes with other models)

**AI Agent Proccessing**: LLM of your choosing examines message and based on system prompt, generates an output

**Output**: AI Output is sent back in Slack Message

# How to use:
 ### 1. Create your Slack bot and generate access token
This part will be longest part of the guide but feel free to Youtube search "How to install Slack AI agent" or soemthing similar in case it's hard to follow

- Sign in to the Slack website then go to:
https://api.slack.com/apps/ 
- Click "Create App" (Top Right Corner)
- Choose "From Scratch"
- Enter desired name of App (bot) and desired workspace
- Go to "OAuth and Permissions" tab on the left side of the webpage
- Scroll to "Bot Token Scopes" and Add Permissions:
		- app_metions:read
		- channels:history
		- channels:join
		- channels:read
		- chat:write
		- files:read
		- links:read
		- links:write
(Feel free to add other permissions here. These are just the ones that will be needed for the automation to work)
- Next, go to "Event Subscriptions" and paste your n8n webhook URL (Find webhook URL by clicking on the Slack trigger node and there should be a dropdown for webhook URL at the very top)
- Go back to "OAuth & Permissions" Tab and install your bot to the Slack workspace (should be a green button under the "Bot User OAuth Token" 
(Remember where this token is for later because you'll need it to create the n8n credentials)
- Add the bot to your channel by going to your channel, then type "@[your bot name]"
- Should be a message from Slack to add bot to Channel
- Congrats for following along, you've added the bot to your channel!

 ### 2. Create Credentials in n8n
- Open Slack trigger node
- Click create credential
- Paste access token 
(If you followed the steps above, it'll be under "OAuth & Permissions" -&gt; Copy the "Bot User OAuth Token" and paste it in n8n accesss
- Save

### 3. Add Bot Token to HTTP Request nodes
- Open HTTP Request Nodes (Nodes under the "Downlaod" Note							- Scroll down and paste your Bot Access token under "Header Parameters". Should be a placeholder "[Your bot access token goes here]".
- **NOTE**: Replace everything, including the square brackets
- **Do not** remove "Bearer". Only replace the placeholder. 
Finalized Authorization value should be:
"Bearer + [Your bot access token]"
NOT
"[Your bot access token ONLY]"

### 4. Change ALL Slack nodes to your Slack Workspace and Channel
- Open the nodes, change workspace to your workspace
- Change channel to your channel
- Do this for all nodes

### 5. Create LLM access token
 (Different per LLM but search your LLM + API in google)
- (You will have to create an account with the LLM platform)
- Buy credits to use LLM API
- Generate Access token
- Paste token in LLM node
- Choose your model

# Requirements:
- Slack Bot Access Token
- Google Gemini Access Token (For Picture and Video messages)
- OpenAI Access Token (For Voice messages)
- LLM Access Token (Your preference for the AI Agent)

# Customizing this workflow:
- To personalize the AI Output, adjust the system prompt (give context or directions on the AI's role)
- Add tools to the AI agent to give it more utility besides a personalied LLM (Example: Calendars, Databases, etc).

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, Anthropic Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
