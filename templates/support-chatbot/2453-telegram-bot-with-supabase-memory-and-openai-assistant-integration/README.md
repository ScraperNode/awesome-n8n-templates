# 💬 Telegram bot with Supabase memory and OpenAI assistant integration

> ⚡ **10,353 views** · 💬 [Support Chatbots](../)

## Description

### Video Guide

I prepared a detailed guide that showed the whole process of building an AI bot, from the simplest version to the most complex in a template.

[![Youtube thumb 3.png](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Youtube%20thumb%20(3).png)](https://www.youtube.com/watch?v=QrZxuWgFqBI)

### Who is this for?

This workflow is ideal for developers, chatbot enthusiasts, and businesses looking to build a dynamic Telegram bot with memory capabilities. The bot leverages OpenAI's assistant to interact with users and stores user data in Supabase for personalized conversations.

### What problem does this workflow solve?

Many simple chatbots lack context awareness and user memory. This workflow solves that by integrating Supabase to keep track of user sessions (via ```telegram_id``` and ```openai_thread_id```), allowing the bot to maintain continuity and context in conversations, leading to a more human-like and engaging experience.

### What this workflow does

This Telegram bot template connects with OpenAI to answer user queries while storing and retrieving user information from a Supabase database. The memory component ensures that the bot can reference past interactions, making it suitable for use cases such as customer support, virtual assistants, or any application where context retention is crucial.

1.**Receive New Message:** The bot listens for incoming messages from users in Telegram.
2. **Check User in Database:** The workflow checks if the user is already in the Supabase database using the ```telegram_id```.
3. **Create New User (if necessary):** If the user does not exist, a new record is created in Supabase with the telegram_id and a unique ```openai_thread_id```.
4. **Start or Continue Conversation with OpenAI:** Based on the user’s context, the bot either creates a new thread or continues an existing one using the stored ```openai_thread_id```.
5. **Merge Data:** User-specific data and conversation context are merged.
6. **Send and Receive Messages:** The message is sent to OpenAI, and the response is received and processed.
7. **Reply to User:** The bot sends OpenAI’s response back to the user in Telegram.


### Setup

1. **Create a Telegram Bot** using the [Botfather](https://t.me/botfather) and obtain the bot token.
2. **Set up Supabase:**
	1. Create a new project and generate a ```SUPABASE_URL``` and ```SUPABASE_KEY```.
	2. Create a new table named ```telegram_users``` with the following SQL query:
```
create table
  public.telegram_users (
    id uuid not null default gen_random_uuid (),
    date_created timestamp with time zone not null default (now() at time zone 'utc'::text),
    telegram_id bigint null,
    openai_thread_id text null,
    constraint telegram_users_pkey primary key (id)
  ) tablespace pg_default;
```
3. **OpenAI Setup:**
	1. Create an OpenAI assistant and obtain the ```OPENAI_API_KEY```.
	2. Customize your assistant’s personality or use cases according to your requirements.
4. **Environment Configuration in n8n:**
	1. Configure the Telegram, Supabase, and OpenAI nodes with the appropriate credentials.
	2. Set up triggers for receiving messages and handling conversation logic.
	3. Set up OpenAI assistant ID in "++OPENAI - Run assistant++" node.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
