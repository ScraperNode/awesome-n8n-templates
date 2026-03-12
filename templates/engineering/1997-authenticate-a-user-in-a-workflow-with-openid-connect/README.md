# ⚒️ Authenticate a user in a workflow with OpenID Connect

> ⚡ **8,201 views** · ⚒️ [Engineering](../)

## Description

# Intro

This workflow needs a user to authenticate by using an openid connect provider in order to call the webhook.

If the user is not authenticated, it starts a login process by using an Authorization Code with PKCE [https://datatracker.ietf.org/doc/html/rfc7636](https://datatracker.ietf.org/doc/html/rfc7636), a standard way to authenticate users with openid connect.

Then, after the user logs in, the webhook is refreshed and gets the user's token from a cookie. With this token, all details about the user are requested through the userinfo endpoint on the identity provider.

# How to set up with Keycloak

[Keycloak](https://www.keycloak.org) Keycloak is an open source identity and access management solution.

Feel free to get a demo realm at [https://please-open.it](https://please-open.it) or get your own Keycloak server up and running.

After creating a realm, go to "Realm Settings" and click on "OpenID Endpoint Configuration" 

![image.png](fileId:718)

Retrieve authorization_endpoint, token_endpoint and userinfo_endpoint values. Set those variables in the "Set variables" node.

In Keycloak, create a new client (name it as you want)

![image.png](fileId:715)

Disable the client authentication, check only "standard flow" : 

![image.png](fileId:717)

At the third step, put the webhook url in "valid redirect URIs", fill "Web origins" with a "+".

![image.png](fileId:716)

You're done, open the webhook and it asks you to authenticate.

# Usage

## User informations

The userinfo node returns this structure about the user has logged in : 

```json
[
  {
    "sub":"73a6543f-f420-4fa6-9811-209e903c348b",
    "email_verified":true,
    "preferred_username": "mathieu.passenaud@please-open.it",
    "email": "mathieu.passenaud@please-open.it"
  }
]
```

I can use those infos in my workflow for custom operations.

## APIs calls

the "code" node returns me a cookie named "n8n-custom-auth" which is the access_token returned by the identity provider. This access_token can be used to call APIs connected to this identity provider (for example, we call userinfo API with this token).

Example : asks a user to log in with his Google account then call an API (Gmail, drive...) with his own token.

# How it works

We published a blog post about this flow, how it works and how you can use it : 
[https://blog.please-open.it/n8n-openid-client/](https://blog.please-open.it/n8n-openid-client/)

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
