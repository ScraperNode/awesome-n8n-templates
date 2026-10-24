# 📱 Share new WordPress posts on LinkedIn, X and Facebook via webhook

> ⚡ **5 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Every time a post goes live on your WordPress site, this workflow shares it on LinkedIn, X and a Facebook Page. WordPress calls the workflow once per post, so there is no schedule to tune and no table of already-posted IDs to keep.

## How it works
1. **New Post Webhook** receives `{"post_id": 123}` from WordPress. Header Auth keeps the endpoint private.
2. **Settings** holds your site URL.
3. **Get Post** reads `/wp-json/wp/v2/posts/123?_embed=wp:featuredmedia` on your site. Published posts are public, so no WordPress credentials are needed.
4. **Post Fields** is a short Code node that turns the REST response into `title`, `summary`, `url` and `image_url`: it strips the HTML from the excerpt, decodes entities and takes the featured image if there is one.
5. **Get Featured Image** downloads the post's featured image and **Has Featured Image** checks that there was one.
6. **Publish on LinkedIn** shares the image with the title, the summary and the permalink in the text. A post without a featured image goes to **Publish Link on LinkedIn** instead, which shares it as a link card. **Publish on X** posts the title and the link, **Publish on Facebook** posts the title, the summary and the link to your Page, and both show the image from your page's Open Graph tags, which any SEO plugin adds. On a site without those tags the X and Facebook posts appear as plain text. Each publish node continues if another one fails, so a LinkedIn outage does not stop the X and Facebook posts.

## Setup
1. Open **Settings** and enter your site URL.
2. Open **New Post Webhook**, add a Header Auth credential (for example `X-Webhook-Token`) and copy the production URL.
3. Create an app in the [X developer console](https://console.x.com), enable User authentication settings (Read and write, Web App) and connect the OAuth 2.0 Client ID and Secret as an X OAuth2 credential on **Publish on X**. X has had no free tier since February 2026: load credits under Billing first, or the node answers 402 Payment required. A post with a link costs $0.20, so a weekly article is about $10 a year.
4. Create a LinkedIn app with the `w_member_social` scope ([LinkedIn Posts API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api)) and connect it on **Publish on LinkedIn** and **Publish Link on LinkedIn**. The app needs two products: Share on LinkedIn and Sign In with LinkedIn using OpenID Connect. In the n8n credential, turn off Legacy and Organization Support before you connect, or LinkedIn rejects the scopes they add. Then pick your profile under **Person** on both LinkedIn nodes. To post as a company page, switch both nodes to Organization, keep Organization Support on and get the Community Management API approved for your app.
5. Get a Page access token from your Meta app ([access tokens](https://developers.facebook.com/docs/facebook-login/guides/access-tokens#portabletokens)), connect it on **Publish on Facebook** and replace `YOUR_PAGE_ID` with your Page ID. It must be the Page token, not your user token: with a user token the node fails with a plain "Forbidden". If `me/accounts` comes back empty for a Page owned by a business portfolio, read the token from the Page itself with `GET /{page-id}?fields=access_token`.
6. In WordPress, send `{"post_id": 123}` to the webhook URL when a post is first published. The free Webhook Actions plugin does it without code: new webhook on `publish_post`, map `args.1.ID` to `post_id`, attach the header credential, and add the condition `args.2 not equals publish` so editing a live post does not share it again. Or import the [ready-made build](https://wpwebhooks.org/automations/new-wordpress-post-to-linkedin-x-and-facebook/) with exactly this setup. A short PHP snippet that does the same is under Additional info.
7. Activate the workflow and publish a test post.

## Requirements
- A public WordPress site (the REST API is read anonymously)
- X OAuth2, LinkedIn OAuth2 and Facebook Graph API credentials in n8n
- X API credits (pay-per-use, see step 3)

## Customization
- Add a model node (OpenAI, Gemini) between **Post Fields** and the publish nodes to write a caption per network from `title` and `summary`.
- Add Mastodon, Bluesky or Slack as another branch after **Post Fields**; the four fields are already there.
- To always share a link card on LinkedIn instead of the image, connect **Post Fields** straight to **Publish Link on LinkedIn** and delete the image branch.
- If your site blocks anonymous REST access, give **Get Post** a WordPress application-password credential.

## Additional info
**Who is this for.** Anyone who publishes on WordPress and wants each new article shared on the three networks without a per-network WordPress plugin. It also fits agencies that run n8n for several client sites: the only per-site value is the URL in the Settings node.

**WordPress side without a plugin.** Put this in `functions.php` or a custom plugin. Replace the URL and the token with yours (the token must match the Header Auth credential in n8n):

```php
add_action( 'publish_post', function ( $post_id, $post, $old_status ) {
    if ( 'publish' === $old_status ) {
        return; // editing an already published post must not share it again
    }
    $payload            = [];
    $payload['post_id'] = $post_id;

    $args                               = [];
    $args['headers']['Content-Type']    = 'application/json';
    $args['headers']['X-Webhook-Token'] = 'YOUR-TOKEN';
    $args['body']                       = wp_json_encode( $payload );
    $args['blocking']                   = false; // do not make the editor wait for n8n
    wp_remote_post( 'https://YOUR-N8N/webhook/wordpress-post-published', $args );
}, 10, 3 );
```

## 🔗 Nodes Used

HTTP Request, Webhook, Facebook Graph API, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
