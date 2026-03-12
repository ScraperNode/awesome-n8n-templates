# 💬 Add user authorization layer to your Telegram bot with admin alerts

> ⚡ **918 views** · 💬 [Support Chatbots](../)

## Description

# 🛡️ BotGuard - Telegram Bot Authorization Layer

## What This Workflow Does

Ever noticed how most Telegram bot tutorials assume everyone can just... use your bot? No questions asked, no protection, nothing. That's fine for a simple "Hello World" bot, but the moment you connect AI APIs, paid services, or sensitive operations - you're in trouble. Anyone who discovers your bot can drain your API credits, overload your systems, or access things they shouldn't.

BotGuard fixes this in the simplest way possible: a whitelist. Only User IDs you explicitly allow can interact with your bot. Everyone else gets a polite "access denied" message. Plus, you get instant notifications when someone unauthorized tries to use your bot - complete with their User ID, so you can add them if they're legit.

Think of it as a bouncer for your bot. No fancy authentication flows, no databases, no complexity. Just a clean authorization check that sits between the Telegram trigger and your actual workflow. Your expensive AI calls, paid API requests, and sensitive operations stay protected.

## 🚀 Getting Started in 2 Minutes

### Step 1: Import and Configure
Import this workflow into n8n and connect your Telegram bot credentials. You'll see a clean workflow with sticky notes explaining everything.

### Step 2: Add Your User ID
Don't know your Telegram User ID? No problem. Just message your bot - you'll get denied, but the message will show: `Your User ID: 123456789`. Copy that number.

Open the "BotGuard Authorization" node and add yourself:
```javascript
const AllowedUsers = [
  { userId: 222222222, userName: 'allowed_user_name', subscriptionType: 'admin' },
  { userId: YOUR_USER_ID_HERE, userName: 'your_username', subscriptionType: 'premium' }
];
```

### Step 3: Test It
Save, activate the workflow, and message your bot again. You're in! Try from another account - denied. Check your admin account for the unauthorized access notification.

## 🎨 Making It Yours

### Want to Change the Messages?
All user-facing messages are in the BotGuard Authorization node. Look for these lines:
- `authorizedMessage` - What approved users see (default: "✅ Authorization Successful...")
- `userMessage` - What denied users see (default: "🚫 Access Denied...")
- `adminMessage` - What you receive for each unauthorized attempt

Make them friendlier, add your support contact, suggest a `/request` command - whatever fits your bot's personality.

### Need Subscription Tiers?
The workflow already supports it! Each user has a `subscriptionType` field (basic/premium/admin). Use this in your main workflow to enable/disable features based on their tier. The BotGuard passes all this data forward in the `botGuard` object.

### Want Multiple Admins?
Just add more entries to the `Administrators` array. Every admin receives notifications when unauthorized users attempt access:
```javascript
const Administrators = [
  { userId: 111111111, userName: 'admin_user_name', chatId: 111111111 },
  { userId: 333333333, userName: 'your_cofounder', chatId: 333333333 }
];
```

## 💡 Why This Workflow Exists

I built this after watching someone's OpenAI credits get drained in 3 hours because their bot went viral on a Telegram group. No authorization, no rate limiting, nothing. Just a helpful bot that cost them $200 before they noticed.

Most tutorials skip authorization entirely - it's not sexy, not what people want to learn. But the moment you deploy something real, you need it. Instead of everyone reinventing the wheel with complex databases and auth systems, here's a simple pattern you can copy-paste into any bot workflow.

The multi-admin notification system came from needing to know WHO was trying to access our bots. Sometimes it's legitimate users who found your bot organically. Sometimes it's automated scanners. Either way, if you want to know, now you can.

## 🔧 Real-World Tips

After protecting dozens of production bots:

**Do:**
- Keep the User ID list in code for small teams (5-50 users) - it's simple and works
- Set up admin notifications - you'll catch legitimate users before they give up
- Include the User ID in denial messages - makes it easy for users to request access
- Test with an unauthorized account first - make sure the denial flow is clear

**Don't:**
- Hard-code thousands of users - if you're that big, use a database instead
- Skip the admin notifications - they're your early warning system
- Forget to update the placeholder IDs (111111111, etc.) - those won't work!
- Share your workflow publicly with real User IDs - privacy matters

## 🔗 Nodes Used

Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
