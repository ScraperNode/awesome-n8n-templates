# ⚡ Daily habit RPG: Gamified Gmail reminders with quest system and progress tracking

> ⚡ **365 views** · ⚡ [Personal Productivity](../)

## Description

Who's it for
This template is perfect for anyone struggling with habit consistency who wants a fun, engaging way to maintain daily routines. It's ideal for productivity enthusiasts, fitness beginners, remote workers, students, or anyone who loves gamification and RPG elements. If you've ever wished your daily tasks felt more like an adventure game, this workflow is for you.
How it works
The workflow runs automatically every morning at your chosen time (default: 6 AM) and transforms your daily habits into an RPG adventure:
1. Daily Trigger - Scheduled to run every morning
2. Player Stats Generation - Creates random level, XP, and streak data (in production, connect to a database)
3. Quest Generation - Assigns daily "quests" based on the day of week (weekday routines, weekend specials, Monday goals)
4. Quote Fetching - Gets a motivational quote from a free API
5. Achievement Processing - Checks for milestone achievements (7-day streak, 30-day streak, level 10)
6. Email Creation - Builds a beautiful HTML email with game-like design
7. Email Delivery - Sends the quest email via Gmail
8. Stats Logging - Records execution statistics
The system includes different habit sets for weekdays and weekends, random bonus quests, a rank system (D to SSS), achievement unlocks, and progress tracking with visual elements like progress bars.
Setup steps
Setup takes approximately 5 minutes:
1. Import the workflow into your n8n instance
2. Connect Gmail - Click "Create New" in the Gmail node credentials and authenticate via OAuth2
3. Update recipient email - Change "your-email@gmail.com" to your actual email in the "Send Quest Email" node
4. Customize habits (optional) - Edit the quest arrays in the "Generate Daily Quests" node
5. Test the workflow - Click "Execute Workflow" to send a test email
6. Activate - Toggle the workflow to "Active" when ready for daily automation
Requirements
* Gmail account with OAuth2 authentication
* n8n instance (cloud or self-hosted)
* No external API keys required (uses free Quotable API)
* No database required (uses random data for demonstration)
How to customize the workflow
Modify Daily Habits
Edit the questDatabase object in the "Generate Daily Quests" node:
* Add your own habits with custom names
* Adjust XP and coin rewards
* Change difficulty levels (Easy, Medium, Hard, Epic, Bonus)
* Set different quests for weekdays vs weekends
Visual Customization
In the "Create Email Template" node:
* Modify color schemes in the CSS
* Adjust font sizes and layouts
* Change emoji icons for quests
* Update achievement thresholds
Timing and Schedule
In the "Daily Morning Trigger" node:
* Change the trigger hour (default: 6 AM)
* Adjust timezone if needed
* Set different schedules for weekdays/weekends
Motivational Content
* Update daily motivation messages for each day of the week
* Customize achievement names and descriptions
* Modify rank titles and progression
* Add your own fallback quotes
This workflow brings the addictive nature of RPG games to your daily habits, making routine tasks feel like an epic adventure. Perfect for anyone who wants to level up their life, one quest at a time!

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
