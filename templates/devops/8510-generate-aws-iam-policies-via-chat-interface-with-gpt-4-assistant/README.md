# ⚙️ Generate AWS IAM policies via chat interface with GPT-4 assistant

> ⚡ **124 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Chat-Based AWS IAM Policy Generator with OpenAI Agent
&gt; Chat-driven workflow that lets IT and DevOps teams generate custom AWS IAM policies via AI, automatically apply them to AWS, and send an email notification with policy details.
## 👤 Who’s it for
This workflow is designed for:
- **Cloud Engineers / DevOps** who need to quickly generate and apply **custom IAM policies** in AWS.  
- **IT Support / Security teams** who want to create IAM policies through a **chat-based interface** without manually writing JSON.  
- Teams that want **automatic notifications** (via email) once new policies are created.  

## ⚙️ How it works / What it does
1. **Trigger** → Workflow starts when a **chat message is received**.  
2. **IAM Policy Creator Agent** → Uses OpenAI to:
   - Interpret user requirements (e.g., service, actions, region).  
   - Generate a valid **IAM policy JSON** following AWS best practices.  
3. **IAM Policy HTTP Request** → Sends the generated policy to **AWS IAM CreatePolicy API**.  
4. **Email Notification** → Once AWS responds with a `CreatePolicyResponse`, an email is sent with policy details (name, ARN, ID, timestamps, etc.) using n8n mapping.  

Result: The user can **chat with the AI agent**, create a policy, and receive an **email confirmation** with full details.  

## 🛠 How to set up
1. **Chat Trigger Node**  
   - Configure the `When chat message received` node to connect your preferred chat channel (Slack, MS Teams, Telegram, etc.).  

2. **IAM Policy Creator Agent**  
   - Add **OpenAI Chat Model** as the LLM.  
   - Use a **system prompt** that enforces AWS IAM JSON best practices (least privilege, correct JSON structure).  
   - Connect **Memory** (Simple Memory) and **Structured Output Parser** to ensure consistent JSON output.  

3. **IAM Policy HTTP Request**  
   - Set method: `POST`  
   - URL: `https://iam.amazonaws.com/`  
   - Add authentication using **AWS Signature v4** (Access Key + Secret Key).  
   - Body:  
     - `Action=CreatePolicy`  
     - `PolicyName={{ $json.CreatePolicyResponse.CreatePolicyResult.Policy.PolicyName }}`  
     - `PolicyDocument={{ $json.policyDocument }}`  
     - `Version=2010-05-08`  

4. **Email for tracking**  

## 📋 Requirements
- n8n instance (self-hosted or cloud).  
- AWS IAM user/role with permission to `iam:CreatePolicy`.  
- AWS Access Key + Secret Key (for SigV4 signing in HTTP request).  
- OpenAI API key (for the Chat Model).  
- Email server credentials (SMTP or provider integration).  

## 🎨 How to customize the workflow
- **Restrict services/actions** → Adjust the IAM Policy Creator Agent system prompt to limit what services/policies can be generated.  
- **Notification channels** → Replace the email node with Slack, MS Teams, or PagerDuty to alert other teams.  
- **Tagging policies** → Modify the HTTP request to include `Tags` when creating policies in AWS.  
- **Human-readable timestamps** → Add a Function or Set node to convert `CreateDate` and `UpdateDate` from Unix epoch to ISO datetime before sending emails.  
- **Approval step** → Insert a manual approval node before sending the policy to AWS for compliance workflows.

## 🔗 Nodes Used

Send Email, HTTP Request, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
