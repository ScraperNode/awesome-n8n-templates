# 🎬 Generate & edit images with Gemini AI: storage & email delivery pipeline

> ⚡ **79 views** · 🎬 [Content Creation & Video](../)

## Description

## AI Image Generator with Nano Banana: Automated Creation and Delivery

**For content creators, agencies, and SaaS developers** who need automated AI image generation and editing with professional delivery workflows.

## Overview

This template demonstrates intelligent workflow routing based on user input type, leveraging Google's Gemini 2.5 Flash image model for both generative and editing tasks. The workflow includes complete file handling, cloud storage integration, and professional email notification with shareable download links.

## Architecture & Key Features

**Intelligent Input Detection**
- Conditional logic automatically detects presence of uploaded image files
- Routes requests to appropriate processing branch (text-only vs. image+text)
- Single webhook endpoint serves both use cases without manual intervention

**Dual Processing Modes**
- **Text-to-Image Generation (Prompt Only):** User submits natural language description and the system generates new images from scratch using Gemini 2.5 Flash
- **Image-to-Image Editing (Prompt + Image):** User uploads reference image with text instructions for AI-powered editing while maintaining image context

**Complete File Management Pipeline**
- Extracts and validates uploaded image data
- Converts AI-generated base64 responses to binary files
- Uploads to organized Google Drive folder structure
- Generates public sharing links with reader permissions
- Implements proper file naming conventions with timestamps

**Professional Email Delivery System**
- Responsive HTML email template with gradient styling
- Dynamic content injection (user names, download links)
- 7-day expiration warnings for urgency
- Built-in social sharing CTAs (Twitter, LinkedIn, WhatsApp)
- Referral program messaging for viral growth
- Mobile-optimized design

**Production-Ready Features**
- API key authentication on webhook endpoint
- Proper error handling throughout pipeline
- Structured response format for webhook consumers
- Success confirmations before file operations

## Technical Implementation

**Nodes Used**
- Webhook (with file upload support)
- If (conditional routing)
- Extract from File (base64 conversion)
- Code (image formatting for AI)
- HTTP Request (OpenRouter API calls)
- Edit Fields (data transformation)
- Convert to File (binary operations)
- Google Drive (upload & share operations)
- Email Send (HTML delivery)
- Respond to Webhook

**External Dependencies**
- OpenRouter API (Gemini 2.5 Flash image model)
- Google Drive API credentials
- SMTP server or email service

## Workflow Logic Flow

- **Input Reception:** Webhook receives form data with optional image file
- **Route Detection:** Conditional checks for presence of binary image data
- **Processing Branch A (With Image):** Extract base64 from uploaded file, format as data URL for AI model, send prompt + image to Gemini
- **Processing Branch B (Text Only):** Send text prompt directly to Gemini and generate image from description
- **Universal Pipeline (Both Routes):** Parse AI response, extract base64 image, convert to binary file format, upload to Google Drive with dynamic naming, generate shareable public link, send formatted email with download link, return success response to webhook caller

## Use Cases

- **SaaS Image Tools:** Backend API for image generation/editing services
- **Content Automation:** Automated image creation for marketing campaigns
- **Client Delivery Systems:** White-label image processing for agencies
- **E-commerce:** Product image variations and mockups
- **Social Media Tools:** Automated visual content generation
- **Design Services:** Rapid prototyping and concept visualization

## Customization Options

**AI Model Flexibility**
- Swap Gemini for other vision-capable models
- Adjust model parameters for different output styles
- Implement multiple model options with user selection

**Storage Alternatives**
- Replace Google Drive with S3, Dropbox, or other cloud storage
- Implement local storage for self-hosted deployments
- Add CDN integration for faster delivery

**Email Template**
- Fully customizable HTML design
- Add brand colors and logos
- Modify social sharing options
- Customize referral program messaging

**Business Logic**
- Add usage tracking and analytics
- Implement credit/subscription systems
- Add watermarking for free tier users
- Queue management for high-volume processing

## Security Considerations

- Webhook protected with API key authentication
- File type validation on uploads
- Proper permissions on Google Drive shares
- Email validation before sending

## Setup Requirements

- OpenRouter account with Gemini 2.5 Flash access
- Google Cloud project with Drive API enabled
- Email sending credentials (SMTP or service)
- n8n instance with webhook support
- Public domain for webhook endpoint (production use)

## Need Help?

- **LinkedIn:** [Gerald Akhidenor](https://www.linkedin.com/in/gerald-akhidenor-1ab1a45/)
- **Work with me:** [dominixai.com](https://dominixai.com/)
- **My websites:** [jobmonkey.dev](https://jobmonkey.dev) and [mediacraftai.com](https://mediacraftai.com)
- **Email:** denorgerald@gmail.com

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Google Drive, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
