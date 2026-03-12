# 🤖 AI-powered mock job interview with voice, assessment & Gmail reporting

> ⚡ **119 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# AI Mock Interview System - Complete n8n Template

## Overview

This n8n workflow template creates a comprehensive AI-powered mock interview system that conducts voice-based interviews, provides real-time transcription, and generates detailed performance assessments. The system uses OpenAI's GPT-4o Realtime API for natural conversations and automated scoring across five professional criteria.

## What This Template Does

### Core Functionality
- **Voice-Enabled Interviews**: Real-time AI conversations using OpenAI's Realtime API
- **Resume-Aware Questioning**: Tailored questions based on uploaded resume content
- **Automatic Timing**: 15-minute sessions with automatic conclusion
- **Live Transcription**: Real-time conversation display during interviews
- **Comprehensive Assessment**: 5-criteria scoring system with STAR method evaluation
- **Automated Reporting**: HTML report generation and email delivery

### Workflow Components
1. **Interview Setup Form**: Collects job role, email, and resume information
2. **Interview Engine**: Manages real-time AI conversation flow
3. **Assessment Generator**: Analyzes performance and creates detailed reports
4. **Email Delivery**: Sends professional assessment reports automatically

## Prerequisites

### Required Services and Accounts
- **n8n Instance**: Cloud or self-hosted version
- **OpenAI API**: Account with GPT-4o Realtime API access
- **OpenRouter Account**: For cost-effective assessment analysis (free tier available)
- **Gmail Account**: For automated email delivery
- **Google Cloud Console**: For Gmail API credentials

### Estimated API Costs
- OpenAI API: ~$0.15-0.75 per 15-minute interview
- OpenRouter: ~$0.001-0.01 per assessment report
- Total operational cost: Under $1 per session

## Step-by-Step Setup Instructions

### 1. Import the Workflow

1. Download the workflow JSON file
2. In your n8n instance, click **"Import from file"**
3. Select the downloaded file and import
4. Verify all nodes are properly connected

### 2. Configure OpenAI API Integration

#### Get Your API Key
1. Visit [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Create a new secret key named "Mock Interview System"
3. Copy the key (format: `sk-proj-...`)
4. Ensure billing is enabled on your OpenAI account

#### Configure in Workflow
**Method 1: Direct Configuration**
1. Locate the **HTTP Request** node for OpenAI
2. In Headers section, find Authorization parameter
3. Replace placeholder with: `Bearer YOUR_API_KEY`

**Method 2: Using n8n Credentials (Recommended)**
1. Go to **Settings** → **Credentials** in n8n
2. Add new **OpenAI** credential
3. Enter your API key and save as "OpenAI Mock Interview"
4. Reference this credential in the HTTP Request node

### 3. Set Up OpenRouter for Assessments

1. Sign up at [openrouter.ai](https://openrouter.ai)
2. Generate an API key from the dashboard
3. In the workflow, find the **OpenRouter Chat Model** node
4. Add your OpenRouter credentials
5. Verify model is set to `deepseek/deepseek-r1:free` for cost efficiency

### 4. Configure Gmail Integration

#### Enable Gmail API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable the Gmail API for your project
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs (n8n will provide these)

#### Configure in n8n
1. Navigate to **Settings** → **Credentials**
2. Add new **Gmail OAuth2** credential
3. Enter Client ID and Client Secret from Google Cloud
4. Complete OAuth authorization flow
5. Test the connection

#### Update Email Node
1. Find the **"Send interview assessment report"** node
2. Select your Gmail credentials
3. Customize the email template as needed
4. Test email delivery functionality

### 5. Update Webhook URLs

The template contains placeholder URLs that must be updated for your instance.

#### Find Your n8n Base URL
- **n8n Cloud**: `https://[your-subdomain].app.n8n.cloud`
- **Self-hosted**: Your custom domain

#### Update HTML Forms
1. **Interview Setup Form Node**:
   - Find: `action="https://n8n.dominixai.com/webhook/start-interview"`
   - Replace with: `action="https://YOUR_N8N_URL/webhook/start-interview"`

2. **Interview Interface Node**:
   - Find: `https://n8n.dominixai.com/webhook/generate-report`
   - Replace with: `https://YOUR_N8N_URL/webhook/generate-report`

#### Get Webhook URLs
1. Click each Webhook trigger node
2. Copy the Production URL
3. Use these URLs in your HTML form actions

## Testing the System

### Component Testing
1. **API Connection Test**: Execute the OpenAI HTTP Request node to verify connectivity
2. **Email Test**: Send a test assessment report to your email
3. **Assessment Generation**: Test the OpenRouter node with sample transcript data

### Full System Test
1. Activate the workflow
2. Navigate to the interview setup webhook URL
3. Fill the form with test data:
   - Job Role: "Software Developer"
   - Your email address  
   - Sample resume content
4. Complete the interview process
5. Verify assessment email delivery

## Customization Guide

### Interview Duration
Modify the timer in the Interview Interface HTML:
```javascript
const interviewDuration = 15; // Change to desired minutes
```

### Assessment Criteria
Edit the prompt in the "Interview Assessor" node to:
- Modify scoring weights
- Add industry-specific criteria
- Customize feedback categories

### Question Customization
Update the conversation prompt to:
- Add role-specific questions
- Include company culture queries
- Incorporate technical assessments

### Branding and Styling
- Update CSS styling in HTML nodes
- Add company logos and colors
- Customize email templates
- Modify form layouts and designs

### Advanced Customizations
- Add multiple interview rounds
- Implement difficulty progression
- Include video recording capabilities
- Add candidate scoring comparison

## Workflow Architecture

### Node Structure
- **Webhook Triggers**: Handle form submissions and interview completion
- **HTTP Request Nodes**: Interface with OpenAI Realtime API
- **Code Nodes**: Process resume data and generate interview questions
- **HTML Nodes**: Serve interview forms and interfaces
- **OpenRouter Node**: Generate performance assessments
- **Gmail Node**: Deliver assessment reports

### Data Flow
1. User submits setup form → Resume processing
2. Interview initialization → OpenAI session creation
3. Real-time conversation → Transcript generation
4. Interview completion → Assessment analysis
5. Report generation → Email delivery

## Security and Privacy

### Data Handling
- No permanent storage of personal information
- Real-time processing with automatic cleanup
- GDPR-compliant data handling practices
- Secure API credential management

### Security Best Practices
- Use n8n credential system for API keys
- Enable HTTPS for all webhook endpoints
- Implement rate limiting on public endpoints
- Regular security updates and monitoring

## Troubleshooting

### Common Issues

**OpenAI API Errors**
- Verify API key format and permissions
- Check billing status on OpenAI account
- Ensure Realtime API access is enabled

**Email Delivery Problems**
- Confirm Gmail OAuth setup
- Check spam folders for test emails
- Verify Gmail API quotas and limits

**Webhook Connection Issues**
- Ensure workflow is activated
- Verify URL formatting (no trailing slashes)
- Test webhook endpoints individually

**Interview Interface Problems**
- Check browser microphone permissions
- Test on different browsers
- Verify JavaScript console for errors

### Debug Steps
1. Enable workflow execution logging
2. Test individual nodes in isolation
3. Check API response status codes
4. Verify credential configurations
5. Monitor workflow execution logs

## Performance Optimization

### API Efficiency
- Implement request caching where appropriate
- Set up retry logic for failed API calls
- Monitor API usage and costs
- Configure timeout settings

### Scalability Considerations
- Set up load balancing for high traffic
- Implement queue management for concurrent interviews
- Monitor system resources and performance
- Plan for API rate limit management

## Use Cases and Applications

### Educational Institutions
- Student career preparation
- Mock interview practice sessions
- Interview skill development programs
- Career counseling support

### Corporate Training
- Employee interview training
- Hiring manager preparation
- Internal promotion assessments
- Skills evaluation programs

### Career Coaching
- Individual coaching sessions
- Group interview workshops
- Resume and interview alignment
- Confidence building exercises

### HR and Recruitment
- Candidate pre-screening
- Interview process standardization
- Hiring bias reduction
- Recruitment efficiency improvement

## Conclusion

This AI Mock Interview System template provides a complete solution for automated interview practice and assessment. With proper setup and customization, it can serve various educational, corporate, and professional development needs while maintaining cost efficiency and user privacy.

The modular design allows for extensive customization while the automated assessment system provides consistent, objective feedback to help candidates improve their interview performance.

If you would rather avoid setup hassles, you can check [HERE](https://jobmonkey.dev/mock-interview/)

**Turn Interview Anxiety Into Interview Success**

## 🔗 Nodes Used

Webhook, Gmail, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
