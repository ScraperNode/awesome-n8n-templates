# 🎬 Generate and quality control images with DALL-E 2 and human review loop

> ⚡ **818 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow automates the process of generating AI images using OpenAI's DALL-E 2 model with built-in human review and quality control. The workflow creates an image based on a predefined prompt, sends it for human review, and if the image is rejected, automatically generates a new version with an improved prompt. This is perfect for content creators, marketers, or anyone who needs high-quality AI-generated images with human oversight to ensure they meet specific standards.

### Key Features:
- Automated image generation using DALL-E 2
- Human-in-the-loop review process
- Automatic regeneration if images are rejected
- Customizable prompts and review criteria
- Quality assurance workflow

## Step-by-Step Implementation Guide

### Prerequisites
Before setting up this workflow, you'll need:

1. **n8n instance** (cloud or self-hosted)
2. **OpenAI API account** with DALL-E access
3. **GotoHuman account** for review management

### Step 1: Set Up OpenAI API Credentials

1. Go to [OpenAI's website](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Navigate to "API Keys" in your dashboard
4. Click "Create new secret key"
5. Copy the API key and save it securely
6. In n8n, go to **Credentials** → **Add Credential** → **OpenAI API**
7. Paste your API key and save as "OpenAI account"

### Step 2: Set Up GotoHuman Credentials

1. Visit [GotoHuman](https://gotohuman.com/) and create an account
2. Navigate to your API settings/dashboard
3. Generate an API key
4. In n8n, go to **Credentials** → **Add Credential** → **GotoHuman API**
5. Enter your API credentials and save as "gotoHuman account"

### Step 3: Configure the Review Template

1. In your GotoHuman dashboard, create a new review template with ID: `3473LaRDbdf03sd6uzYG`
2. Set up the template with:
   - **Image field**: For displaying the generated image
   - **Prompt field**: For showing the original prompt
   - **Review options**: Approve/Reject buttons
3. Configure reviewers and notification settings

### Step 4: Import and Configure the Workflow

1. Copy the provided workflow JSON
2. In n8n, click **Import from File** or **Import from Clipboard**
3. Paste the workflow JSON
4. The workflow will automatically create the following nodes:

#### Node Configuration Details:

##### Start Workflow (Manual Trigger)
- No configuration needed
- Used to manually start the workflow

##### Set Image Prompt
- **Prompt**: "Make an image of an attractive person standing in new york city"
- **Name**: "woman-nyc"
- *Customize these values for your specific use case*

##### Loop Over Items1 (Split in Batches)
- Processes items in batches
- No additional configuration needed

##### Initial Image Generation (OpenAI)
- **Resource**: Image
- **Model**: DALL-E 2
- **Prompt**: Uses the prompt from "Set Image Prompt"
- **Credentials**: Select your "OpenAI account"

##### Initial Review (GotoHuman)
- **Review Template ID**: 3473LaRDbdf03sd6uzYG
- **Fields**: Maps image URL and prompt to review form
- **Credentials**: Select your "gotoHuman account"

##### If Rejected (Conditional Logic)
- Checks if review response equals "rejected"
- Routes to regeneration if rejected

##### Second Image Generation (OpenAI)
- Same configuration as initial generation
- Uses updated prompt from review feedback

##### Second Review (GotoHuman)
- Same configuration as initial review
- Final quality check

### Step 5: Customize for Your Use Case

1. **Update Image Prompts**: Modify the "Set Image Prompt" node with your specific requirements
2. **Adjust Review Criteria**: Update your GotoHuman template with specific quality guidelines
3. **Configure Notifications**: Set up email or Slack notifications in GotoHuman for reviewers

### Step 6: Test the Workflow

1. Click **Execute Workflow** on the manual trigger
2. Monitor the execution flow
3. Check that images are generated and sent for review
4. Verify the conditional logic works when images are rejected
5. Confirm final approved images are properly handled

### Step 7: Production Deployment

1. Set up proper error handling and logging
2. Configure webhooks if you need external triggers
3. Set up monitoring and alerts for failed executions
4. Document your specific prompt guidelines for reviewers

## Workflow Flow Summary

1. **Start** → Manual trigger initiates the workflow
2. **Set Prompt** → Define the image generation parameters
3. **Generate Image** → DALL-E 2 creates the initial image
4. **Human Review** → GotoHuman presents image for approval
5. **Quality Check** → If rejected, generate new image with improved prompt
6. **Final Review** → Second human review ensures quality standards
7. **Complete** → Approved images are ready for use

## Troubleshooting Tips

- **API Rate Limits**: Ensure your OpenAI account has sufficient credits
- **Review Template Issues**: Verify the template ID matches exactly
- **Image URLs**: Check that image URLs are accessible for review
- **Webhook Failures**: Ensure GotoHuman webhooks are properly configured

---

## Contact Information

**Robert A Ynteractive**

For support, customization, or questions about this workflow:

- 📧 Email: rbreen@ynteractive.com
- 🌐 Website: https://ynteractive.com/
- 💼 LinkedIn: https://www.linkedin.com/in/robert-breen-29429625/

*Need help implementing this workflow or want custom automation solutions? Get in touch for professional n8n consulting and workflow development services.*

## 🔗 Nodes Used

OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
