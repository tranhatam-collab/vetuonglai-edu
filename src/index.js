export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") return new Response("ok");

    // check bindings quickly (optional)
    if (url.pathname === "/debug/bindings") {
      return Response.json({
        hasKV: !!env.EDU_DB,
        hasR2Docs: !!env.EDU_DOCS,
        hasR2Media: !!env.EDU_MEDIA,
        hasStripeKey: !!env.STRIPE_SECRET_KEY,
        hasStripeWebhookSecret: !!env.STRIPE_WEBHOOK_SECRET,
      });
    }

    return new Response("EDU Worker is live.", {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
