# 🎬 Create viral Instagram reel scenarios from ideas with GPT-4o and Telegram

> ⚡ **13,187 views** · 🎬 [Content Creation & Video](../)

## Description

Transform your creative sparks into professional Instagram Reel scripts instantly! This AI-powered workflow takes your raw ideas (text or voice messages) via Telegram and generates complete, viral-ready Reel scenarios with hooks, scripts, captions, and visual concepts.

## Who is this template for?

This template is perfect for:
- Content creators looking to streamline their Reel production process
- Social media managers who need to generate multiple Reel concepts quickly
- Marketing professionals seeking data-driven, psychology-based content strategies
- Influencers and entrepreneurs who want to maintain consistent, engaging content
- Small business owners looking to create viral marketing content without hiring expensive copywriters
- Anyone who struggles with writer's block or wants to improve their Instagram engagement

## What this template does

This comprehensive workflow provides a complete Reel creation assistant that:

**🎯 Accepts Multiple Input Types:**
- Text messages with your Reel ideas
- Voice notes that get automatically transcribed
- Processes ideas in real-time through Telegram

**🧠 AI-Powered Content Generation:**
- Creates 3 attention-grabbing hook variants designed to stop the scroll
- Generates a complete 30-60 second script with Hook, Subtitle, Body, and Call-to-Action
- Writes engaging captions that complement (not repeat) your video content
- Provides specific visual concepts with cinematic direction for filming

**📊 Smart Features:**
- Memory system that remembers your conversation context for personalized suggestions
- Optional Google Sheets integration to automatically log and organize all your Reel ideas
- Error handling for seamless user experience
- Instant delivery of results back to your Telegram chat

**🎨 Professional Quality Output:**
- Scripts based on proven marketing psychology from industry legends
- Hooks designed using viral content strategies
- Visual concepts that are specific and actionable (not generic "film yourself" advice)
- Captions optimized for engagement and shareability

## Sample Results

**Input (Idea):** How I Saved 10 Hours a Week with Blog Automation?  

**Output:** 
💡 Hook (variants):
1. "Blogging doesn't have to be a time-suck. Here's my secret…"
2. "Is blogging eating up your spare time? Let's fix that!"
3. "Unlock 10 hours a week AND keep your blog thriving!"

🎬 Script:
-  Hook: "Blogging doesn't have to be a time-suck. Here's my secret…"
-  Subtitle: "Maximize your time with blog automation hacks!"
-  Body: "Picture this: writing, editing, posting, and promoting your blog without breaking a sweat. I was buried under endless tasks until I discovered blog automation. Scheduling posts, auto-publishing, automating social shares—it's a game-changer. 10 hours a week, back in my pocket! More time for creativity or even a break. Imagine what automation could do for your content game."
-  CTA: "Which blog task do you wish was automated? Drop a comment!"

📝 Reel Caption:
Blog automation isn't just convenience—it's freedom. What will you create with your extra time?

📸 Visual Idea:
Open with a whirlwind of papers and sticky notes symbolizing chaos. Transition to a person seamlessly typing on a laptop, where blog posts are auto-scheduled. Quick cuts show blog shares and responses happening automatically. Conclude with a serene scene: the person outdoors, notebook in hand, jotting ideas peacefully on a sunny day.

## Setup Instructions

**Prerequisites:**
- Telegram account
- OpenAI API account with GPT-4 access
- Google account (optional, for logging ideas)

**Step 1: Create Your Telegram Bot**
1. Open Telegram and search for @BotFather
2. Send /newbot and follow the instructions to create your bot
3. Save the Bot Token you receive - you'll need this for n8n
4. Send /setprivacy to @BotFather, select your bot, and choose "Disable" to allow the bot to read all messages

**Step 2: Get Your OpenAI API Key**
1. Visit OpenAI's API platform
2. Create an account or log in
3. Navigate to API Keys section
4. Create a new API key and save it securely
5. Ensure you have access to GPT-4 models (required for optimal results)

**Step 3: Configure the Workflow**
1. Import this template into your n8n instance
2. Set up Telegram credentials:
   - Add your Bot Token to all Telegram nodes
   - Test the connection
3. Configure OpenAI credentials:
   - Add your API key to the "OpenAI Chat Model" and "Transcribes audio" nodes
   - Verify GPT-4o model access
4. Optional - Google Sheets setup:
   - Create a new Google Sheet with columns: Status, Date, Description, Script
   - Connect your Google account to the "Google Sheets" node
   - Select your spreadsheet and sheet

**Step 4: Activate and Test**
1. Click "Activate" in the top-right corner of your workflow
2. Open Telegram and find your bot
3. Send a test message like "Create a Reel about morning routines"
4. Verify you receive a complete Reel scenario response

**Step 5: Start Creating!**
- Send text ideas directly to your bot
- Record voice notes with your concepts
- Receive professional Reel scenarios within seconds
- Use the optional Google Sheets integration to build your content library

**Pro Tips:**
- Be specific with your ideas for better results
- The AI remembers your conversation context, so you can refine ideas iteratively
- Voice messages work great for capturing spontaneous ideas on-the-go
- Review the generated visual concepts - they're designed to be immediately actionable

**Troubleshooting:**
- Ensure your OpenAI account has sufficient credits
- Verify your Telegram bot privacy settings allow message reading
- Check that all credentials are properly configured and tested
- For Google Sheets issues, confirm the sheet structure matches the expected columns

This template transforms the tedious process of content creation into an instant, AI-powered system that delivers professional-quality Reel scenarios whenever inspiration strikes!

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
