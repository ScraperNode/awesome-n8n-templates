# 🎬 Generate UGC videos from product images with Gemini and VEO3

> ⚡ **2,003 views** · 🎬 [Content Creation & Video](../)

## Description

# N8N UGC Video Generator - Setup Instructions

## Transform Product Images into Professional UGC Videos with AI

This powerful n8n workflow automatically converts product images into professional User-Generated Content (UGC) videos using cutting-edge AI technologies including Gemini 2.5 Flash, Claude 4 Sonnet, and VEO3 Fast.

## Who's it for

- **Content creators** looking to scale video production
- **E-commerce businesses** needing authentic product videos
- **Marketing agencies** creating UGC campaigns for clients
- **Social media managers** requiring quick video content

## How it works

The workflow operates in 4 distinct phases:

**Phase 0: Setup** - Configure all required API credentials and services
**Phase 1: Image Enhancement** - AI analyzes and optimizes your product image
**Phase 2: Script Generation** - Creates authentic dialogue scripts based on your input
**Phase 3: Video Production** - Generates and merges professional video segments

## Requirements

### Essential Services & APIs
- **Telegram Bot Token** (create via @BotFather)
- **OpenRouter API** with Gemini 2.5 Flash access
- **Anthropic API** for Claude 4 Sonnet
- **KIE.AI Account** with VEO3 Fast access
- **N8N Instance** (cloud or self-hosted)

### Technical Prerequisites
- Basic understanding of n8n workflows
- API key management experience
- Telegram bot creation knowledge

## How to set up

### Step 1: Service Configuration

1. **Create Telegram Bot**
   - Message @BotFather on Telegram
   - Use `/newbot` command and follow instructions
   - Save the bot token for later use

2. **OpenRouter Setup**
   - Sign up at openrouter.ai
   - Purchase credits for Gemini 2.5 Flash access
   - Generate and save API key

3. **Anthropic Configuration**
   - Create account at console.anthropic.com
   - Add credits to your account
   - Generate Claude API key

4. **KIE.AI Access**
   - Register at kie.ai
   - Subscribe to VEO3 Fast plan
   - Obtain bearer token

### Step 2: N8N Credential Setup

Configure these credentials in your n8n instance:

1. **Telegram API Credential**
   - Name: `telegramApi`
   - Bot Token: Your Telegram bot token

2. **OpenRouter API Credential**
   - Name: `openRouterApi`
   - API Key: Your OpenRouter key

3. **Anthropic API Credential**
   - Name: `anthropicApi`
   - API Key: Your Anthropic key

4. **HTTP Bearer Auth Credential**
   - Name: `httpBearerAuth`
   - Token: Your KIE.AI bearer token

### Step 3: Workflow Configuration

1. **Import the Workflow**
   - Copy the provided JSON workflow
   - Import into your n8n instance

2. **Update Telegram Token**
   - Locate the "Edit Fields" node
   - Replace "Your Telegram Token" with your actual bot token

3. **Configure Webhook URLs**
   - Ensure all Telegram nodes have proper webhook configurations
   - Test webhook connectivity

### Step 4: Testing & Validation

1. **Test Individual Nodes**
   - Verify each API connection
   - Check credential configurations
   - Confirm node responses

2. **End-to-End Testing**
   - Send a test image to your Telegram bot
   - Follow the complete workflow process
   - Verify final video output

## How to customize the workflow

### Modify Image Enhancement Prompts
- Edit the HTTP Request node for Gemini
- Adjust the prompt text to match your style preferences
- Test different aspect ratios (current: 1:1 square format)

### Customize Script Generation
- Modify the Basic LLM Chain node prompt
- Adjust video segment duration (current: 7-8 seconds each)
- Change dialogue style and tone requirements

### Video Generation Settings
- Update VEO3 API parameters in HTTP Request1 node
- Modify aspect ratio (current: 16:9)
- Adjust model settings and seeds for consistency

### Output Customization
- Change final video format in MediaFX node
- Modify Telegram message templates
- Add additional processing steps before delivery

## Workflow Operation

### Phase 1: Image Reception and Enhancement
1. User sends product image via Telegram
2. System prompts for enhancement instructions
3. Gemini AI analyzes and optimizes image
4. Enhanced square-format image returned

### Phase 2: Analysis and Script Creation
1. System requests dialogue concept from user
2. AI analyzes image details and environment
3. Claude generates realistic 2-segment script
4. Scripts respect physical constraints of original image

### Phase 3: Video Generation
1. Two separate videos generated using VEO3
2. System monitors generation status
3. Videos merged into single flowing sequence
4. Final video delivered via Telegram

## Troubleshooting

### Common Issues
- **API Rate Limits**: Implement delays between requests
- **Webhook Failures**: Verify URL configurations and SSL certificates
- **Video Generation Timeouts**: Increase wait node duration
- **Credential Errors**: Double-check all API keys and permissions

### Error Handling
The workflow includes automatic error detection:
- Failed video generation triggers error message
- Status checking prevents infinite loops
- Alternative outputs for different scenarios

## Advanced Features

### Batch Processing
- Modify trigger to handle multiple images
- Add queue management for high-volume usage
- Implement user session tracking

### Custom Branding
- Add watermarks or logos to generated videos
- Customize color schemes and styling
- Include brand-specific dialogue templates

### Analytics Integration
- Track usage metrics and success rates
- Monitor API costs and optimization opportunities
- Implement user behavior analytics

## Cost Optimization

### API Usage Management
- Monitor token consumption across services
- Implement caching for repeated requests
- Use lower-cost models for testing phases

### Efficiency Improvements
- Optimize image sizes before processing
- Implement smart retry mechanisms
- Use batch processing where possible

This workflow transforms static product images into engaging, professional UGC videos automatically, saving hours of manual video creation while maintaining high quality output perfect for social media platforms.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
