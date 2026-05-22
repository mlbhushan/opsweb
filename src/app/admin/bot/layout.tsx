import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminBotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!process.env.ADMIN_SECRET || session?.value !== process.env.ADMIN_SECRET) {
    redirect("/admin/login");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg-secondary, #f7f7f5)",
        fontFamily: "'Cabinet Grotesk', var(--font-heading), sans-serif",
      }}
    >
      <nav
        style={{
          background: "#032044",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: "var(--color-primary, #6bbf54)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: 15 }}>
            FloAssist Admin
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link
            href="/admin/bot"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500, textDecoration: "none" }}
          >
            Documents
          </Link>
          <Link
            href="/admin/bot/new"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500, textDecoration: "none" }}
          >
            Add New
          </Link>
          <Link
            href="/"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500, textDecoration: "none" }}
          >
            View Site
          </Link>
          <Link
            href="/studio"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500, textDecoration: "none" }}
          >
            Sanity Studio
          </Link>
        </div>
      </nav>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>
        {children}
      </div>
    </div>
  );
}
