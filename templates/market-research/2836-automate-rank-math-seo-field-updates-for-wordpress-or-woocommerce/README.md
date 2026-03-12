# 📊 Automate Rank Math SEO field updates for Wordpress or Woocommerce

> ⚡ **6,376 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automates the process of updating important Rank Math SEO fields (SEO Title, Description, and Canonical URL) directly via n8n. 

By leveraging a custom WordPress plugin that extends the WordPress REST API, this workflow ensures that you can programmatically manage SEO metadata for your posts and WooCommerce products efficiently.

[Bulk version available here.](https://n8n.io/workflows/4646-rank-math-bulk-title-and-description-optimizer-for-wordpress/)


## How it works:
- Sends a POST request to a custom API endpoint exposed by the Rank Math plugin.
- Updates SEO Title, Description, and Canonical URL fields for a specified post or product.

### Setup steps:
- Install and activate the Rank Math API Manager Extended plugin on WordPress.
- Provide the post or product ID you want to update in the workflow.
- Run the workflow to update the metadata automatically.

### Benefits:
- Full automation of SEO optimizations.
- Works for both standard posts and WooCommerce products.
- Simplifies large-scale SEO management tasks.

To understand exactly how to use it in detail, check out my [comprehensive documentation here.](https://medium.com/@rentierdigital/supercharge-the-rank-math-wordpress-api-how-to-automatically-update-rank-math-seo-fields-with-n8n-6f9127ee0340)





## Rank Math API Manager Extended plugin on WordPress

```language
// ATTENTION: Replace the line below with &lt;?php - This is necessary due to display constraints in web interfaces.

&lt;?php
/**
 * Plugin Name: Rank Math API Manager Extended v1.4
 * Description: Manages the update of Rank Math metadata (SEO Title, SEO Description, Canonical URL) via a dedicated REST API endpoint for WordPress posts and WooCommerce products.
 * Version: 1.4
 * Author: Phil - https://inforeole.fr
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

class Rank_Math_API_Manager_Extended {

    public function __construct() {
        add_action('rest_api_init', [$this, 'register_api_routes']);
    }

    /**
     * Registers the REST API route to update Rank Math meta fields.
     */
    public function register_api_routes() {
        register_rest_route( 'rank-math-api/v1', '/update-meta', [
            'methods'             =&gt; 'POST',
            'callback'            =&gt; [$this, 'update_rank_math_meta'],
            'permission_callback' =&gt; [$this, 'check_route_permission'],
            'args'                =&gt; [
                'post_id' =&gt; [
                    'required'          =&gt; true,
                    'validate_callback' =&gt; function( $param ) {
                        $post = get_post( (int) $param );
                        if ( ! $post ) {
                            return false;
                        }
                        $allowed_post_types = class_exists('WooCommerce') ? ['post', 'product'] : ['post'];
                        return in_array($post-&gt;post_type, $allowed_post_types, true);
                    },
                    'sanitize_callback' =&gt; 'absint',
                ],
                'rank_math_title' =&gt; [
                    'type'              =&gt; 'string',
                    'sanitize_callback' =&gt; 'sanitize_text_field',
                ],
                'rank_math_description' =&gt; [
                    'type'              =&gt; 'string',
                    'sanitize_callback' =&gt; 'sanitize_text_field',
                ],
                'rank_math_canonical_url' =&gt; [
                    'type'              =&gt; 'string',
                    'sanitize_callback' =&gt; 'esc_url_raw',
                ],
            ],
        ] );
    }

    /**
     * Updates the Rank Math meta fields for a specific post.
     *
     * @param WP_REST_Request $request The REST API request instance.
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error on failure.
     */
    public function update_rank_math_meta( WP_REST_Request $request ) {
        $post_id = $request-&gt;get_param('post_id');
        
        // Secondary, more specific permission check.
        if ( ! current_user_can('edit_post', $post_id) ) {
            return new WP_Error(
                'rest_forbidden',
                'You do not have permission to edit this post.',
                ['status' =&gt; 403]
            );
        }

        $fields  = ['rank_math_title', 'rank_math_description', 'rank_math_canonical_url'];
        $results = [];
        $updated = false;

        foreach ( $fields as $field ) {
            if ( $request-&gt;has_param( $field ) ) {
                $value = $request-&gt;get_param( $field );
                $current_value = get_post_meta($post_id, $field, true);

                if ($current_value === $value) {
                     $results[$field] = 'unchanged';
                } else {
                    $update_status = update_post_meta( $post_id, $field, $value );
                    if ($update_status) {
                        $results[$field] = 'updated';
                        $updated = true;
                    } else {
                        // This case is rare but could indicate a DB error or other failure.
                        $results[$field] = 'failed'; 
                    }
                }
            }
        }

        if ( ! $updated && empty($results) ) {
            return new WP_Error(
                'no_fields_provided',
                'No Rank Math fields were provided for update.',
                ['status' =&gt; 400]
            );
        }

        return new WP_REST_Response( $results, 200 );
    }

    /**
     * Checks if the current user has permission to access the REST API route.
     *
     * @return bool
     */
    public function check_route_permission() {
        return current_user_can( 'edit_posts' );
    }
}

new Rank_Math_API_Manager_Extended();
```


[Bulk version available here.](https://n8n.io/workflows/4646-rank-math-bulk-title-and-description-optimizer-for-wordpress/) : this bulk version, provided with a dedicated WordPress plugin, allows you to generate and bulk-update meta titles and descriptions for multiple articles simultaneously using artificial intelligence. It automates the entire process, from article selection to the final update in Rank Math, offering considerable time savings.
.

---

[Phil | Inforeole](https://inforeole.fr) | [Linkedin](https://www.linkedin.com/in/philippe-eveilleau-inforeole/)

🇫🇷 Contactez nous pour automatiser vos processus

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
