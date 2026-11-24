// PostgreSQL / MySQL Ready Submissions Repository Abstraction
// In production, connect this directly to Prisma, Drizzle, pg, or mysql2 pool.

export interface StoredSubmission {
  id: string;
  type: "audit" | "contact" | "consultation";
  data: Record<string, unknown>;
  createdAt: string;
  status: "new" | "in_review" | "contacted" | "archived";
}

// In-memory fallback store for developments / serverless runtimes
const memorySubmissions: StoredSubmission[] = [];

export async function saveSubmission(
  type: "audit" | "contact" | "consultation",
  data: Record<string, unknown>
): Promise<{ success: boolean; id: string }> {
  const id = `sub_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  const submission: StoredSubmission = {
    id,
    type,
    data,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  memorySubmissions.push(submission);

  // Ready for Database Hook:
  // if (process.env.DATABASE_URL) {
  //   await db.insert(submissionsTable).values(...)
  // }

  // Ready for Webhook / Email Notification:
  // if (process.env.NOTIFICATION_WEBHOOK_URL) {
  //   await fetch(process.env.NOTIFICATION_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(submission) });
  // }

  if (process.env.NODE_ENV === "development") {
    console.log(`[Form Submission Received] Type: ${type}, ID: ${id}`, data);
  }

  return { success: true, id };
}

export async function getSubmissionsCount(): Promise<number> {
  return memorySubmissions.length;
}
