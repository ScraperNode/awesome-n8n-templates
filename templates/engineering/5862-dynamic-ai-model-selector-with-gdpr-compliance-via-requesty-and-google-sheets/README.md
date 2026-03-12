# ⚒️ Dynamic AI model selector with GDPR compliance via Requesty and Google Sheets

> ⚡ **1,078 views** · ⚒️ [Engineering](../)

## Description

## Overview
This comprehensive n8n workflow provides a sophisticated solution for dynamically selecting and using AI models while maintaining GDPR compliance. It leverages Requesty's European-based AI routing service to ensure data privacy and automatically updates available model options based on real-time API availability.

## Choose Your Integration Approach

Before diving into the setup, it's crucial to understand that this workflow offers **two completely independent AI integration approaches**:

### Approach 1: Dynamic HTTP Request Workflow (Advanced)
**Complete infrastructure with dynamic model selection**

**What it includes:**
- Automatic model discovery from Requesty's API
- Dynamic dropdown updates in web forms
- Model selection persistence in Google Sheets
- Complex workflow orchestration with multiple phases
- Full control over API parameters and response handling

**Best for:**
- Teams needing multiple AI models for different tasks
- Organizations requiring model usage auditing
- Users who want maximum flexibility and control
- Advanced n8n users comfortable with complex workflows

**Setup complexity:** High (requires multiple components and configurations)

### Approach 2: Standalone AI Agent (Simple)
**Plug-and-play solution without complexity**

**What it includes:**
- Direct use of n8n's native OpenAI Chat Model node
- Simple configuration: just set base URL to `https://router.requesty.ai/v1`
- Immediate GDPR compliance through European infrastructure
- No model discovery or selection infrastructure needed

**Best for:**
- Users wanting quick GDPR-compliant AI integration
- Single-model use cases
- Simple chat interfaces
- Users preferring minimal configuration

**Setup complexity:** Low (5-minute setup)

---

## Quick Start: Approach 2 (Simple AI Agent)

If you want to get started quickly with GDPR-compliant AI, follow these steps:

### Step 1: Register with Requesty
1. Visit [https://www.requesty.ai](https://app.requesty.ai/join?ref=8da5ba3a)
2. Complete the registration process
3. Choose **"OpenAI-compatible"** integration
4. Note your API endpoint: `https://router.requesty.ai/v1`
5. Create an API key (name it "n8n Integration")

### Step 2: Configure n8n
1. Add a new OpenAI credential in n8n
2. Set the base URL to: `https://router.requesty.ai/v1`
3. Enter your Requesty API key
4. Add an OpenAI Chat Model node to your workflow
5. Select your Requesty credential

### Step 3: Test
Your AI agent is now ready and GDPR-compliant! All requests will be routed through Requesty's European infrastructure.

---

## Advanced Setup: Approach 1 (Dynamic HTTP Workflow)

For users who need dynamic model selection and advanced features, follow this comprehensive setup:

### Prerequisites
- n8n instance (self-hosted or cloud)
- Requesty API credentials
- Google Sheets integration
- Basic understanding of n8n workflows

### Phase 1: Requesty Account Setup

#### 1.1 Registration Process
1. Navigate to [https://www.requesty.ai](https://www.requesty.ai)
2. Sign up with your email address
3. Complete the welcome process

#### 1.2 Integration Configuration
1. **Choose Integration Type**: Select **"OpenAI-compatible"**
2. **Note API Endpoint**: `https://router.requesty.ai/v1`
3. **Create API Key**:
   - Provide a descriptive name (e.g., "n8n Dynamic Workflow")
   - Click "Create API Key"
   - **Important**: Save this key securely - you'll need it for n8n configuration

### Phase 2: Google Sheets Preparation

#### 2.1 Create Storage Sheet
1. Create a new Google Sheet named "AI Model Selections"
2. Add the following column:
   - A1: "Selected Model"
3. Note the Google Sheet ID from the URL

#### 2.2 Configure Google Sheets API
1. Enable Google Sheets API in Google Cloud Console
2. Create service account credentials
3. Share your sheet with the service account email
4. Download the credentials JSON file

### Phase 3: n8n Workflow Configuration

#### 3.1 Import Workflow
1. Download the workflow JSON file
2. Import into your n8n instance
3. Review all nodes and connections

#### 3.2 Configure Credentials

**Requesty API Credentials:**
1. Go to n8n Credentials section
2. Create new HTTP Request credential
3. Set authentication type to "Header Auth"
4. Header name: "Authorization"
5. Header value: "Bearer YOUR_REQUESTY_API_KEY"

**Google Sheets Credentials:**
1. Create new Google Sheets credential
2. Upload your service account JSON file
3. Test the connection

**Google Sheets Nodes:**
- Update sheet ID in all Google Sheets nodes
- Verify column mappings match your sheet structure

### Phase 4: Troubleshooting Guide

#### Common Issues and Solutions

**Models Not Loading:**
- Verify Requesty API credentials
- Check network connectivity and API endpoint URL

**Selection Not Persisting:**
- Verify Google Sheets credentials and write permissions
- Check sheet ID configuration

**Chat Not Responding:**
- Verify selected model availability
- Check API request formatting and response processing

#### Debug Procedures
1. Enable debug mode and detailed logging
2. Check node outputs and data flow
3. Validate API calls with external tools
4. Review n8n execution logs


## Conclusion

The choice between approaches depends on your specific requirements:
- **Simple AI Agent**: Perfect for straightforward AI integration with minimal setup
- **Dynamic HTTP Workflow**: Ideal for complex requirements with multiple models and advanced features

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
