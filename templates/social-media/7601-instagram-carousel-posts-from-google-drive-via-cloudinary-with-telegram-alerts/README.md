# 📱 Instagram carousel posts from Google Drive via Cloudinary with Telegram alerts

> ⚡ **1,203 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Overview**

This n8n workflow automates the creation and publishing of Instagram carousel posts by downloading images from Google Drive, uploading them to Cloudinary for hosting, and publishing them as a coordinated carousel post via Facebook Graph API.

### This workflow is perfect for social media managers and content creators who need to publish coordinated multi-image posts from cloud-stored assets with minimal manual intervention.

## Key Features

#### Multi-Image Processing: 
Handles multiple images for carousel posts automatically
#### Cloud Image Hosting: 
Uses Cloudinary for reliable image hosting and delivery
#### Instagram API Integration: 
Creates and publishes carousel posts via Facebook Graph API
#### Google Drive Integration: 
Downloads images directly from Google Drive links
#### Telegram Notifications: 
Sends success notifications after post publication
#### Error Handling: 
Continues workflow execution even if individual images fail
Technical Workflow

#### Data Preparation: 
Structures input data with image links and post content
#### Batch Processing: 
Loops through multiple image URLs from Google Drive
#### Image Download: 
Downloads each image from Google Drive
#### Cloud Upload: 
Uploads images to Cloudinary for public hosting
#### Media Creation: 
Creates Instagram media objects for each image
#### ID Collection: 
Collects all media IDs for carousel creation
#### Carousel Assembly: 
Creates carousel post with all images and caption
#### Publication: 
Publishes the complete carousel to Instagram
Notification: Sends Telegram confirmation message

## Prerequisites

Facebook Graph API credentials with Instagram Business permissions
Google Drive API access for image downloads
Cloudinary Account for image hosting
Instagram Business Account connected to Facebook
Telegram Bot for notifications

## Input Data Structure
The workflow expects data with these fields:

#### instagram_content: 
Caption text for the post
#### Instagram Account ID: 
Target Instagram business account
#### pose_X_drive_fotolink: 
Google Drive links for carousel images
#### Image metadata for processing

## Configuration Options
#### Wait Times: 
20s between carousel creation and 15s before publishing for API rate limits
#### Image Processing: 
Automatic upload to Cloudinary with preset configurations
#### Error Handling: 
Individual image failures won't stop the entire carousel creation
Batch Processing: Processes all images simultaneously for efficiency

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
