# 🎬 Generate professional product advertisements with Nano Banana Pro via Telegram

> ⚡ **899 views** · 🎬 [Content Creation & Video](../)

## Description

# Nano Banana Pro AI Product Advertisement Generator via Telegram

## Who's It For

- E-commerce businesses needing quick product ads
- Social media marketers without design resources
- Small business owners creating promotional content
- Product photographers seeking automated enhancements

## What It Does

Transforms basic product photos into professional advertisements using AI. Users send a product image with caption text via Telegram, and receive commercial-grade ads with studio lighting, premium backgrounds, and typography overlays.

## How It Works

- User sends product photo with caption to Telegram bot
- Image converted to base64 for AI processing
- Google Gemini analyzes image and extracts marketing text from caption
- AI generates detailed design enhancement instructions (400+ words)
- Nano Banana Pro creates 1-2 professional advertisement versions
- Enhanced images automatically sent back to user

## Requirements

- Telegram Bot API credentials (via BotFather)
- Google Gemini API key with nano-banana-pro-preview access
- n8n instance (self-hosted or cloud)

## Setup Instructions

### Create Telegram Bot
- Message BotFather on Telegram
- Send `/newbot` command and follow prompts
- Copy the API token

### Configure n8n Credentials
- Add Telegram Bot API token
- Add Google Gemini API key
- Import workflow JSON
- Update credential references
- Activate workflow

### Test the Workflow
Send image with caption format: `"Product Name | Tagline | Call to Action"`

Example: `"Premium Sneakers | Mountain Edition | Shop Now"`

## Key Features

- Original product remains 100% unchanged
- Text extracted only from user's caption (no AI-generated taglines)
- Professional design enhancements applied
- Studio-quality lighting and color grading
- Luxury background selection based on product category
- Typography overlays using caption text
- 30-60 second processing time
- Returns 1-2 advertisement variants

## Node Breakdown

**Telegram Trigger** - Listens for messages with images

**Download Image File** - Retrieves image from Telegram servers

**Image to Base64** - Converts image for AI processing

**AI Design Analysis** - Gemini extracts caption text and generates design blueprint covering composition, lighting, backgrounds, color grading, effects, and typography

**Combine Image & Analysis** - Merges image data with design instructions

**Prepare API Payload** - Structures data for Nano Banana Pro API

**Generate Enhanced Image** - Creates professional ad using AI

**Convert Base64 to Image** - Converts first generated ad to file

**Convert Base64 to Image1** - Converts second ad variant (if available)

**Send Image** - Returns enhanced ads to user via Telegram

## Customization Options

### Adjust Design Style
Modify AI Design Analysis prompt to change lighting intensity, background preferences, color grading, or typography styles

### Change Caption Parsing
Update extraction rules for different text elements or multi-language support

### Add Output Formats
Request different aspect ratios (16:9 social media, 4:5 Instagram, 9:16 Stories)

### Error Handling
Add fallback nodes to handle image generation failures

### Usage Analytics
Insert database node to track requests and caption data

## Caption Examples

`"NIKE AIR MAX | Run Beyond Limits | Shop Now"`

`"Himalayan Coffee Beans - Fresh from the Mountains - Order Today"`

`"Luxury Smartwatch | Track Your Success | Available Now"`

## Important Notes

- Product never altered, only enhanced visually
- Empty captions result in ads without text overlays
- Best with clear photos on simple backgrounds
- Monitor API quotas to avoid rate limits
- Processing time varies by API response speed

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Convert to File, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
