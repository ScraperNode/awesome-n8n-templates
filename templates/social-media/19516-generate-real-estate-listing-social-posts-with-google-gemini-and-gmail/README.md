# 📱 Generate real estate listing social posts with Google Gemini and Gmail

> ⚡ **23 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Turn every new listing into four ready-to-post social media captions in 30 seconds. Fill in a Google Form with your listing details, and Gemini AI generates platform-specific posts for Instagram, Facebook, LinkedIn, and X — each tailored to your target buyer — delivered to your inbox instantly.

## How it works
1. Agent fills in a Google Form with the listing details,i.e., address, price, bedrooms, bathrooms, property type, key features, target buyer, and anything else to highlight.
2. Gemini AI generates four platform-specific posts in one call — an Instagram caption with 20–25 hashtags, a Facebook post with an engagement question, a LinkedIn professional market commentary, and a punchy X post under 240 characters.
3. Each post is calibrated to the target buyer profile — investor posts are data-driven and ROI-focused, family posts are warm and neighbourhood-focused, luxury posts are sophisticated and understated, first-time buyer posts are encouraging and accessible.
4. All four posts plus a suggested image caption arrive in one formatted email within 30 seconds — copy-paste ready, no editing required.
5. Every post set logs permanently to Google Sheets — building an archive of all listing content the agent has ever generated.
6. Optionally posts directly to the agent's Facebook Page and Instagram Business account via Meta Graph API — enable in the Configuration node when Meta credentials are ready.

## Setup
1. Connect credentials for Google Sheets Trigger/Google Sheets, Gmail OAuth2, and a Google Gemini (PaLM) API key.
2. Configure the Google Sheets Trigger to point to the spreadsheet and sheet that receive your Google Form responses (or copy the webhook URL into your source system if using the webhook).
3. Set default AGENT_NAME and AGENT_EMAIL in the configuration values and ensure your form/webhook payload provides matching listing fields.
4. Google Form setup: Create a Google Form with these fields in order: Your Name, Agent Email, Property Address, Listing Price, Bedrooms, Bathrooms, Property Type (multiple choice: House / Apartment / Condo / Townhouse / Villa / Land), Key Features (long answer), Target Buyer (multiple choice: First-time buyer / Family / Investor / Upsizer / Downsizer / Luxury buyer), Anything else to highlight (optional long answer), Property Image URL for Instagram direct posting (optional short answer). Link the form to a Google Sheet response tab and connect the Google Sheets Trigger node to that sheet.
5. Google Sheets post archive: Create the Social Post History sheet and link its ID to the Log to Post History node. Required columns: Date, Agent Name, Address, Price, Bedrooms, Bathrooms, Property Type, Target Buyer, Instagram Post, Instagram Hashtags, Facebook Post, Facebook Hashtags, LinkedIn Post, LinkedIn Hashtags, X Post, X Hashtags, Suggested Caption, Facebook Posted, Instagram Posted.
6. Optional direct posting setup: To enable Facebook and Instagram direct posting — get your Meta Page Access Token from developers.facebook.com/tools/explorer using your Meta Developer app, add a Facebook Graph API credential in n8n, and fill in FACEBOOK_PAGE_ID, META_ACCESS_TOKEN, and INSTAGRAM_ACCOUNT_ID in the Configuration node. Set POST_TO_FACEBOOK and POST_TO_INSTAGRAM to true. For a permanent token that does not expire use a System User token from Meta Business Settings.

## Customization
- Edit the Gemini system prompt to adjust the tone, length, or style of any platform's post.
- Add a fifth platform by extending the Gemini prompt with new platform requirements and mapping the new field in the Parse AI Output Code node.
- Translate all posts to another language by adding a language instruction at the top of the Gemini system prompt — for example "Write all posts in Spanish."
- Add more target buyer profiles by extending the TONE BY TARGET BUYER section in the Gemini prompt.
- Change the trigger from Google Form to a webhook to connect to any CRM, listing platform, or MLS feed that can send a POST request.

## Additional info
X post character limit: The Parse AI Output Code node automatically validates the X post character count and trims to 240 characters if Gemini exceeds the limit. A character count is logged alongside the post in case manual review is needed.

Instagram direct posting requires an image URL: The Instagram API requires a publicly accessible property image URL to create a post. If no image URL is provided in the form, the Instagram container creation step is skipped, and only the caption is delivered via email. Use a property portal URL, your website, or a cloud storage link for the image.

Meta Page Access Token expiry: Tokens generated via the Graph API Explorer expire in 1–2 hours. For production use, generate a permanent System User token via Meta Business Settings → System Users → assign your Page → generate token with pages_manage_posts scope.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Facebook Graph API, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
