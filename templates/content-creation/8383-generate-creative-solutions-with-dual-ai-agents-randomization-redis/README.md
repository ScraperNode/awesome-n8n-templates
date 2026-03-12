# 🎬 Generate creative solutions with dual AI agents, randomization & Redis

> ⚡ **304 views** · 🎬 [Content Creation & Video](../)

## Description

---

## 🧠 AI Brainstorm Generator - Break Through Creative Blocks Instantly

Transform any problem into innovative solutions using AI-powered brainstorming that combines mathematical randomness with intelligent synthesis.

### What This Workflow Does
This workflow generates creative, actionable solutions to any problem by combining:
- **Mersenne Twister algorithm** for high-entropy random seed generation
- **AI-driven random word generation** to create unexpected semantic triggers  
- **Dual AI agents** that brainstorm and refine ideas into polished solutions

Simply input your challenge via the chat interface, and within 2 minutes receive a professionally refined solution that combines the best elements from 5+ innovative ideas.

### Key Features
✨ **Consistent Creativity** - Works regardless of your mental state or time of day  
🎲 **True Randomness** - MT19937 algorithm ensures no pattern repetition  
🤖 **Multi-Model Support** - Works with OpenAI GPT-4 or Google Gemini  
⚡ **Fast Results** - Complete solutions in under 2 minutes  
🔄 **Self-Cleaning** - Redis data expires automatically after use  

### Use Cases
- Product ideation and feature development
- Marketing campaign concepts  
- Problem-solving for technical challenges
- Business strategy innovation
- Creative writing prompts
- Workshop facilitation

### Requirements
- Redis database (local or cloud)
- OpenAI API key (GPT-4) OR Google Gemini API key
- n8n instance (self-hosted or cloud)

### How It Works
1. User inputs problem via chat trigger
2. Mersenne Twister generates high-entropy random numbers
3. AI generates 36+ random words as creative triggers
4. Brainstorming Agent creates 5 innovative solutions
5. Critic Agent synthesizes the best elements into one refined solution

Perfect for teams facing innovation challenges, solo entrepreneurs seeking fresh perspectives, or anyone who needs to break through creative blocks reliably.

**Setup Time:** ~10 minutes  
**Difficulty:** Intermediate  
**Support:** Full documentation included via sticky notes

---

## 🔗 Nodes Used

Redis, AI Agent, OpenAI Chat Model, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
