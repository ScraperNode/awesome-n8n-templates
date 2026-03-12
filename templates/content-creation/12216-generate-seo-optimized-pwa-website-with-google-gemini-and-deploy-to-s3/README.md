# 🎬 Generate SEO-optimized PWA website with Google Gemini and deploy to S3

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate SEO-Optimized PWA Website with AI and Deploy to S3

## Who's it for

This workflow is designed for agencies, freelancers, and businesses who want to generate **production-ready static websites** with built-in SEO optimization and PWA (Progressive Web App) capabilities — all without manual coding.

It is best suited for users who need landing pages, portfolios, event pages, or client microsites that are **mobile-friendly, SEO-optimized, and installable as apps** on any device.

## What it does

This workflow collects website requirements via an n8n form, uses **Google Gemini AI** to generate a complete HTML page with SEO metadata and PWA components (service worker, manifest, offline support), assembles all files, uploads them to AWS S3, and sends the published URL via email.

Unlike basic AI website generators, this workflow produces **three separate AI-generated outputs** that are assembled into a complete, deployable package:

- ✅ SEO-optimized meta tags, Open Graph, and structured data (Schema.org)
- ✅ PWA manifest + service worker for offline support and "Add to Home Screen"
- ✅ Responsive, single-page website with embedded CSS and JavaScript
- ✅ All files deployed as a cohesive package to S3

## How it works

1. **Website Request Form** — User fills out requirements (name, purpose, colors, content, keywords).
2. **Process Form Data** — Workflow structures the input for AI processing.
3. **Generate SEO Metadata** (Gemini AI) — Creates meta tags, Open Graph tags, Twitter cards, and JSON-LD structured data based on the site's purpose and keywords.
4. **Generate Website HTML** (Gemini AI) — Produces a complete, responsive HTML/CSS/JS page incorporating the SEO metadata.
5. **Generate PWA Components** — Creates `manifest.json` and `service-worker.js` for offline capability and app-like behavior.
6. **Assemble All Files** — Merges HTML, manifest, and service worker into a deployment-ready package.
7. **Convert to Binary** — Prepares all files for S3 upload.
8. **Upload to S3** — Deploys all files (`index.html`, `manifest.json`, `sw.js`) with proper content types.
9. **Build Response** — Constructs the live URL and deployment summary.
10. **Send Confirmation Email** — Delivers the live URL, SEO report, and PWA installation instructions to the user.

## Requirements

To use this workflow, you will need:

- A **Google Gemini API key** (Gemini 1.5 Flash or Pro recommended)
- An **AWS account** with S3 access
- An S3 bucket configured for **static website hosting**
- A **Gmail account** for sending confirmation emails (or replace with another email service)

## AWS Setup Guide

### Step 1: Create an IAM User for n8n

1. Go to AWS Console → IAM → Users → Create user
2. User name: `n8n-s3-uploader`
3. Attach the following custom policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3WebsiteUpload",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    }
  ]
}
```

4. Create access key → Select "Application running outside AWS"
5. Save the Access Key ID and Secret Access Key for n8n credential setup

### Step 2: Create an S3 Bucket

1. Go to AWS Console → S3 → Create bucket
2. Bucket name: Choose a globally unique name (e.g., `my-ai-websites-12345`)
3. Region: Select your preferred region
4. **Object Ownership**: Select "ACLs enabled" → "Bucket owner preferred"
5. **Block Public Access**: Uncheck "Block all public access" and acknowledge the warning
6. Create bucket

### Step 3: Enable Static Website Hosting

1. Go to your bucket → Properties tab
2. Scroll to "Static website hosting" → Edit
3. Enable static website hosting
4. Index document: `index.html`
5. Error document: `index.html` (for PWA routing)
6. Save changes
7. Note the bucket website endpoint URL (e.g., `http://YOUR_BUCKET_NAME.s3-website-REGION.amazonaws.com`)

### Step 4: Add Bucket Policy for Public Access

1. Go to your bucket → Permissions tab
2. Scroll to "Bucket policy" → Edit
3. Paste the following policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

4. Replace `YOUR_BUCKET_NAME` with your actual bucket name
5. Save changes

### Step 5: Configure n8n Credentials

1. In n8n, go to Credentials → Add credential → AWS
2. Enter the Access Key ID and Secret Access Key from Step 1
3. Set the region to match your S3 bucket region
4. Save the credential

## Important limitations

- Generated websites are single-page only (no multi-page navigation).
- The AI may occasionally produce varying results depending on prompt complexity.
- S3 bucket must have public access enabled for the websites to be viewable.
- PWA "Add to Home Screen" requires HTTPS — use CloudFront for production deployments.
- No custom domain support out of the box (requires additional CloudFront/Route53 setup).
- Service worker caching is basic (cache-first strategy); for advanced caching, customize the generated `sw.js`.
- AWS charges may apply based on S3 storage and data transfer usage.

## How to set up

1. Complete the AWS Setup Guide above.
2. Add your **Google Gemini API credential** in n8n.
3. Add your **AWS credential** in n8n (from Step 5 above).
4. Update the S3 bucket name in the "Upload to S3" node.
5. Update the bucket URL in the "Build Response" node.
6. Configure Gmail OAuth2 credential (or replace with your email service).
7. Activate the workflow and share the form URL.

## How to customize

- **AI Model**: Swap Google Gemini for OpenAI, Anthropic, or any LLM supported by n8n.
- **Form fields**: Add fields for target audience, language preference, or industry-specific requirements.
- **SEO depth**: Extend the SEO prompt to generate sitemaps, robots.txt, or additional structured data types.
- **PWA features**: Customize the service worker for push notifications, background sync, or advanced caching strategies.
- **Notifications**: Replace Gmail with Slack, Discord, or webhook notifications.
- **Storage**: Add a database node to track generated websites with analytics.
- **Domain**: Integrate with CloudFront + Route53 for custom domains with HTTPS.
- **Error handling**: Add error handling nodes and retry logic for production use.

## What makes this different

Most AI website generators create a basic HTML file. This workflow goes further:

| Feature | Basic Generator | This Workflow |
|---------|----------------|---------------|
| HTML/CSS/JS | ✅ | ✅ |
| SEO Meta Tags | ❌ | ✅ (AI-generated) |
| Open Graph / Twitter Cards | ❌ | ✅ |
| Schema.org Structured Data | ❌ | ✅ (JSON-LD) |
| PWA Support | ❌ | ✅ (manifest + service worker) |
| Offline Capability | ❌ | ✅ |
| "Add to Home Screen" | ❌ | ✅ |
| Multiple AI Calls | 1 | 2 (specialized prompts) |
| Deployment Files | 1 (index.html) | 3+ (html + manifest + sw.js) |

## Security Considerations

- The generated websites are publicly accessible. Do not use this for sensitive content.
- Consider adding authentication if you want to restrict who can generate websites.
- Review AWS costs regularly to avoid unexpected charges.
- For production use, set up CloudFront with HTTPS (required for full PWA functionality).
- Service workers require HTTPS in production; localhost is exempt for testing.

---

**Note:**
This workflow was built using Google Gemini AI and AWS S3 static website hosting.
For production deployments, we recommend adding CloudFront for HTTPS, custom domains, and global CDN distribution.

## 🔗 Nodes Used

Convert to/from binary data, AWS S3, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
