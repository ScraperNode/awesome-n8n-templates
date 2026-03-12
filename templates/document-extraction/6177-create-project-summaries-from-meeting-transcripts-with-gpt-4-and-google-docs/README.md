# 🔬 Create project summaries from meeting transcripts with GPT-4 and Google Docs

> ⚡ **703 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### 🧾 Generate Project Summary from meeting transcript

#### **Who’s it for** 🤝
- Project managers looking to automate client meeting summaries  
- Client success teams needing structured deliverables from transcripts  
- Agencies and consultants who want consistent, repeatable documentation  

#### **How it works / What it does** ⚙️
1. **Trigger**: Manual or webhook trigger kicks off the workflow.  
2. **Get meeting transcript**: Reads the raw transcript from a specified Google Docs file.  
3. **Generate summary**: Sends transcript + instructions to OpenAI (gpt-4.1-mini) to produce a structured project summary.  
4. **Convert to HTML**: Transforms the LLM-generated Markdown into styled HTML.  
5. **Prepare request**: Wraps HTML and metadata into a multipart request body.  
6. **Create Google Doc**: Uploads the new “Project Summary” document into your Drive folder.  

#### **How to set up** 🛠️
1. **Credentials**  
   - Google Docs & Drive OAuth2 credentials  
   - OpenAI API key (gpt-4.1-mini)  
2. **Nodes configuration**  
   - **Manual Trigger** / webhook node  
   - **Google Docs** “Get meeting transcript” node: set `documentURL`  
   - **AI Chat Model** node: select `gpt-4.1-mini`  
   - **Markdown** node: enable tables & emoji  
   - **Google Drive** “CreateGoogleDoc” node: set target folder ID  
3. **Paste in your IDs**  
   - Update `documentURL` to your transcript doc  
   - Update `google_drive_folder_id` in the Set node  
4. **Execute**  
   - Click “Execute Workflow” or call via webhook  

#### **Requirements** 📋
- n8n  
- Google OAuth2 scopes for Docs & Drive  
- OpenAI account with GPT-4.1-mini access  
- A Google Drive folder to store summaries  

#### **How to customize** ✨
- **Output format**: Edit the Markdown prompt in the ChainLlm node to adjust headings or tone  
- **Timeline section**: Extend LLM prompt template with your own phase table  
- **Styling**: Tweak inline CSS in the Code node (`Prepare_Request`) for fonts or margins  
- **Trigger**: Swap Manual Trigger for HTTP/Webhook trigger to integrate with other tools  
- **Language model**: Upgrade to a different model by changing `model.value` in the AI node

## 🔗 Nodes Used

HTTP Request, Google Docs, Markdown, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
