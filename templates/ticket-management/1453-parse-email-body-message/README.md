# 🎫 Parse email body message

> ⚡ **7,242 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Who we are

We are **Aprende n8n**, the first n8n Spanish course for all n8n lovers.
If you want to learn more, you can find out more at [Aprende n8n](https://aprenden8n.com).

# Task goal

This task allows extracting data from any email body with a NoCode snippet.

# An small explanation

You receive an email when a user submits a form from your website.

All those emails usually have the same structure as the next one:
```
Name: Miquel
Email: miquel@aprenden8n.com
Subject: Welcome aboard
Message: Hi Miquel!

Thank you for your signup!
```


This task allows to parse any email body and assign all values to the defined labels, getting an output like this:
```
{
"Name": "Miquel",
"Email": "miquel@aprenden8n.com",
"Subject": "Welcome aboard",
"Message" "Hi Miquel! Thank you for your signup!"
}
```

# After importing it

When you import the import, you get the next task in your n8n:
![aprenden8n.com_email_parser_task.jpeg](fileId:613)

We recommend importing this workflow into your current task and adapting it.
You define a couple of variables in the "Set values" SET:
- body: the email body you want to parse. You can add this as an expression from previous variables.
- labels: the keywords you want to detect and parse. Labels are case insensitive.

We define the next values:

Body
```
Name: Miquel
Email: miquel@aprenden8n.com
Subject: Welcome aboard
Message: Hi Miquel!

Thank you for your signup!
```
Labels
```
Name,Email,Subject,Message
```

A screenshot of the Set output is the next one
![aprenden8n.com_email_parser_set.jpeg](fileId:611)

If we check the "Function item" Node, we get the next content after executing the task:
![aprenden8n.com_email_parser_output.jpeg](fileId:612)


# Capabilities

The task has the next features:
- You can detect as many labels as you want.
- Label detection is case insensitive.
- You can use the snippet as an independent workflow to call it generically, adding the Function item to the workflow and passing body and labels as paremeters.

# Limitations

This task has limitations:
- The parser only accepts the multiline values at the end of the email. 


# Help and comments

If you have any doubt about this snippet, please, contact us at miquel@aprenden8n.com.

You can contact us at [Aprende n8n](https://aprenden8n.com) or in the [Spanish n8n community](https://t.me/comunidadn8n)

## 🔗 Nodes Used

Function Item, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
