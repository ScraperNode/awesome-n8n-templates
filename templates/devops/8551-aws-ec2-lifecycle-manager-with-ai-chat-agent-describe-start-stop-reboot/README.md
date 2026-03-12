# ⚙️ AWS EC2 lifecycle manager with AI chat agent (describe, start, stop, reboot)

> ⚡ **317 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# EC2 Lifecycle Manager with AI Chat Agent (Describe, Start, Stop, Reboot, Terminate)
### Watch the demo video below:
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/managed-aws-resources-with-ai-agent-no-coding.jpg)](https://youtu.be/C1s0AM1_ho0)
## Who’s it for
This workflow is designed for **DevOps engineers** and **cloud administrators** who want to manage AWS EC2 instances directly from chat platforms (Slack, Teams, Telegram, etc.) using natural language.  
It helps engineers quickly check EC2 instance status, start/stop servers, reboot instances, or terminate unused machines — without logging into the AWS console.

## How it works / What it does
1. A chat message (command) from the engineer triggers the workflow.
2. The **EC2 Manager AI Agent** interprets the request using the AI chat model and memory.
3. The agent decides which AWS EC2 action to perform:
   - `DescribeInstances` → List or check status of EC2 instances.
   - `StartInstances` → Boot up stopped instances.
   - `StopInstances` → Gracefully shut down running instances.
   - `RebootInstances` → Restart instances without stopping them.
   - `TerminateInstances` → Permanently delete instances.
4. The selected tool (API call) is executed via an HTTP Request to the AWS EC2 endpoint.
5. The agent replies back in chat with the result (confirmation, instance status, errors, etc.).

## How to set up
1. **Add Chat Trigger**  
   - Connect your chatbot platform (Slack/Telegram/Teams) to n8n.  
   - Configure the “When chat message received” node.

2. **Configure OpenAI Chat Model**  
   - Select a supported LLM (GPT-4, GPT-4.1, GPT-5, etc.).  
   - Add system and user prompts to define behavior (EC2 assistant role).

3. **Add Memory**  
   - Use `Simple Memory` to keep track of context (e.g., instance IDs, region, last action).

4. **Connect EC2 API Tools**  
   - Create HTTP Request nodes for:
     - Describe Instances  
     - Start Instance  
     - Stop Instance  
     - Reboot Instance  
     - Terminate Instance  
   - Use AWS credentials with Signature V4 authentication.  
   - API endpoint: `https://ec2.{region}.amazonaws.com/`  

5. **Link Tools to Agent**  
   - Attach all EC2 tools to the EC2 Manager AI Agent node.  
   - Ensure the agent can choose which tool to call based on user input.

## Requirements
- **n8n instance** (self-hosted or cloud).  
- **Chat platform integration** (Slack, Teams, or Telegram).  
- **OpenAI (or other LLM) credentials**.  
- **AWS IAM user with EC2 permissions**:  
  - `ec2:DescribeInstances`  
  - `ec2:StartInstances`  
  - `ec2:StopInstances`  
  - `ec2:RebootInstances`  
  - `ec2:TerminateInstances`  
- **AWS region configured** for API calls.  

## How to customize the workflow
- **Add safety checks**: Require explicit confirmation before running `Stop` or `Terminate`.  
- **Region flexibility**: Add support for multi-region management by letting the user specify the region in chat.  
- **Tag-based filters**: Extend `DescribeInstances` to return only instances matching specific tags (e.g., `env=dev`).  
- **Cost-saving automation**: Add scheduled rules to automatically stop instances outside working hours.  
- **Enhanced chatbot UX**: Format responses into tables or rich messages in Slack/Teams.  
- **Audit logging**: Store each action (who/what/when) into a database or Google Sheets for compliance.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
