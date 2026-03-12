# 🎬 Generate AI images via Telegram with WaveSpeed, credit system, PIX and S3

> ⚡ **65 views** · 🎬 [Content Creation & Video](../)

## Description

# 🤖 Generate images via Telegram using an AI bot with a credit system and S3 storage

A complete, production-ready Telegram bot for AI-powered image generation and editing, featuring a built-in credit system, payment integration, and cloud storage.

---

## ✨ Features

### 🎨 AI Image Generation
- **Text-to-Image**: Generate stunning images from text prompts using the **Nano Banana Pro Ultra** model via WaveSpeed API
- **Image-to-Image Editing**: Edit existing images by sending a photo with a caption describing the desired changes
- **Multiple Resolutions**: Support for both **4K** and **8K** output quality
- **Flexible Aspect Ratios**: Choose from 10 different aspect ratios (1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9)

### 💳 Credit Management System
- **Per-generation billing**: Different costs for 4K vs 8K resolution
- **Balance tracking**: Real-time credit balance displayed to users
- **Initial credits**: New users receive starter credits automatically
- **Insufficient balance handling**: Graceful messages when credits run out

Here's the adjusted payment section:

---

### 💰 Payment Integration (Mercado Pago PIX)

&gt; **About PIX**: PIX is Brazil's instant payment system, launched by the Central Bank of Brazil in 2020. It allows instant money transfers 24/7, 365 days a year, using QR codes or copy-paste codes. It has become the most popular payment method in Brazil due to its speed and zero fees for individuals.

This workflow includes a fully integrated PIX payment flow as a reference implementation. You can adapt it to your local payment provider.

**Features:**
- **Multiple deposit options**: Pre-configured credit packages (R$ 3, R$ 6, R$ 10)
- **QR Code generation**: Automatic PIX QR code sent directly to users via Telegram
- **Copy-paste code**: PIX code provided for manual payment
- **Webhook confirmation**: Real-time payment status updates via Mercado Pago webhooks
- **Auto credit top-up**: Credits added automatically upon payment approval
- **Payment status handling**: Supports approved, pending, and rejected states

&gt; 💡 **Tip**: To adapt this for other regions, replace the Mercado Pago nodes with your preferred payment gateway (Stripe, PayPal, etc.) while keeping the same credit update logic.

---

### ⚙️ User Configuration
- **Resolution settings**: Users can set their preferred default resolution
- **Aspect ratio preferences**: Save preferred aspect ratio for future generations
- **Custom default prompts**: Set a default prompt that's automatically appended to all generations
- **Persistent settings**: All preferences stored in n8n Data Tables

### 📦 Cloud Storage (S3/MinIO)
- **Automatic upload**: Generated images are automatically uploaded to S3-compatible storage
- **Persistent URLs**: Images remain accessible via permanent links
- **Edit from storage**: Reference previously uploaded images for editing

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Bot Platform | Telegram Bot API |
| AI Generation | WaveSpeed API (Nano Banana Pro) |
| Storage | S3-compatible (MinIO/AWS S3) |
| Database | n8n Data Tables |
| Payments | Mercado Pago PIX |
| Automation | n8n |

---

## 📋 Prerequisites

Before using this workflow, you'll need:

1. **Telegram Bot Token** - Create a bot via [@BotFather](https://t.me/botfather)
2. **WaveSpeed API Key** - Sign up at [WaveSpeed](https://wavespeed.ai)
3. **S3-compatible Storage** - MinIO, AWS S3, or any S3-compatible service
4. **Mercado Pago Account** (optional) - For payment integration
5. **n8n Data Table** - Create a table with the required schema

---

## 📊 Data Table Schema

Create a Data Table with the following columns:

| Column | Type | Description |
|--------|------|-------------|
| `chat_id` | String | Telegram chat ID (primary key) |
| `username` | String | Telegram username |
| `status` | String | Current user state in the flow |
| `credits` | String | User's credit balance |
| `resolution` | String | Preferred resolution (4k/8k) |
| `aspect_ratio` | String | Preferred aspect ratio |
| `user_default_prompt` | String | Custom default prompt |
| `number_images` | Number | Total images generated |
| `number_videos` | Number | Total videos generated |
| `demo_sended` | Boolean | Welcome demo sent flag |

---

## ⚡ Quick Setup

1. **Import the workflow** into your n8n instance
2. **Configure the Global Environment node** with your settings:
   - `botName`: Your bot's display name
   - `botToken`: Your Telegram bot token
   - `dataTableId`: Your n8n Data Table ID
   - `bucketName`: Your S3 bucket name
   - `initialCredits`: Credits given to new users
   - `generateImageCost4k`: Cost per 4K image
   - `generateImageCost8k`: Cost per 8K image
3. **Set up credentials**:
   - Telegram API credentials
   - WaveSpeed API credentials
   - S3 credentials
   - Mercado Pago credentials (if using payments)
4. **Activate the workflow**

---

## 🎮 Bot Commands

| Command | Description |
|---------|-------------|
| `/start` | Initialize bot and receive welcome message |
| `menu` | Return to main menu |
| `config` | Open settings menu |
| *Any text* | Generate image from prompt (when in generation mode) |
| *Photo + caption* | Edit the photo based on the caption |

---

## 🔄 Workflow Flow

```
User Message → Telegram Trigger → Route by Status
                                        ↓
                    ┌───────────────────┼───────────────────┐
                    ↓                   ↓                   ↓
              New User            Generate Image       Edit Image
                    ↓                   ↓                   ↓
             Welcome Flow        Check Credits        Check Credits
                    ↓                   ↓                   ↓
            Create User         Submit to WaveSpeed    Upload to S3
                    ↓                   ↓                   ↓
             Show Menu           Poll for Result      Submit Edit
                                        ↓                   ↓
                                 Download Image      Poll for Result
                                        ↓                   ↓
                                 Send to User ←←←←←←←←←←←←←┘
```

---


## 📝 Notes

- The workflow uses polling to check generation status - WaveSpeed processes may take up to 1 minute
- Credits are deducted when the task is submitted and refunded if generation fails
- All user states are managed through the Data Table for persistence across restarts

---

## 📄 License

Free to use and modify. Attribution appreciated but not required.

---

## 🔗 Nodes Used

Edit Image, HTTP Request, Webhook, Telegram, Telegram Trigger, S3

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
