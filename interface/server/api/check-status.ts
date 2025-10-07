export default defineEventHandler(async (event) => {
  try {
    const baseUrl = useRuntimeConfig().public.API_BASE_URL as string;
    const { taskId } = getQuery(event);

    const response = await $fetch(event.path, {
      baseURL: baseUrl,
      method: "get",
      params: {
        task_id: taskId,
      },
    });
    return response; //
  } catch (err: any) {
    console.error("Erreur lors de l'appel à l'API distante :", err?.message);
    return createError({
      statusCode: err?.response?.status || 500,
      statusMessage: err?.response?.data?.message || "Erreur serveur",
    });
  }
});

