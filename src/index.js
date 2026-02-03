export default {
  async fetch(req, env) {
    // Test KV
    await env.EDU_DB.put("health", "ok");

    // Test R2
    const objects = await env.EDU_DOCS_BUCKET.list();

    return new Response(JSON.stringify({
      status: "ok",
      r2_docs_objects: objects.objects.length
    }), {
      headers: { "content-type": "application/json" }
    });
  }
}
