"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useChatStream, type ChatMessage } from "./use-chat-stream";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { ChatSuggestions } from "./chat-suggestions";
import { DemoMiniForm } from "./demo-mini-form";
import { ArrowRightIcon } from "@/components/icons";

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I'm FloAssist. I can help you understand how OpsFlo eliminates revenue leakage, answer questions about specific modules, or get you started with a demo. What would you like to know?",
};

const INITIAL_SUGGESTIONS = [
  "How does OpsFlo eliminate revenue leakage?",
  "What industries do you serve?",
  "How long does implementation take?",
  "Can I schedule a demo?",
];

function getSuggestions(lastBotMessage: string): string[] {
  const m = lastBotMessage.toLowerCase();
  if (m.includes("demo") || m.includes("schedule") || m.includes("contact")) {
    return ["What happens in a demo?", "How long is the pilot program?", "What ROI can I expect?"];
  }
  if (m.includes("pric") || m.includes("cost") || m.includes("roi") || m.includes("payback")) {
    return ["Calculate my ROI", "Is there a free trial?", "What is included in the platform?"];
  }
  if (m.includes("integrat") || m.includes("connect") || m.includes("api")) {
    return ["What integrations are available?", "Is it SOC 2 certified?", "How long does setup take?"];
  }
  if (m.includes("offline") || m.includes("connectivity") || m.includes("cell")) {
    return ["How does data sync work?", "Which modules work offline?", "See the mobile app"];
  }
  return ["How does OpsFlo work offline?", "See customer case studies", "Book a demo"];
}

const panelVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0, 
    y: 66, 
    x: 0,
    borderRadius: 50 
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    borderRadius: 12,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 28,
      mass: 0.8
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    y: 66,
    x: 0,
    borderRadius: 50,
    transition: { 
      duration: 0.2, 
      ease: [0.4, 0, 1, 1] 
    },
  },
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const pathname = usePathname();



  const { messages, input, setInput, isLoading, sendMessage, append } = useChatStream([
    WELCOME_MESSAGE,
  ]);

  const lastBotMessage = [...messages].reverse().find((m) => m.role === "assistant");
  const suggestions =
    lastBotMessage && lastBotMessage.content
      ? getSuggestions(lastBotMessage.content)
      : INITIAL_SUGGESTIONS;

  function handleSuggestionSelect(text: string) {
    const lower = text.toLowerCase();
    if (lower.includes("book a demo") || lower.includes("schedule a demo")) {
      setShowDemoForm(true);
      return;
    }
    sendMessage(text, pathname);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input, pathname);
  }

  function handleDemoSuccess() {
    setDemoSuccess(true);
    setShowDemoForm(false);
    append({ role: "user", content: "I just submitted a demo request." }, { currentUrl: pathname });
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              bottom: 90,
              right: 24,
              width: "min(400px, calc(100vw - 32px))",
              height: "min(600px, calc(100vh - 180px))",
              background: "#fff",
              borderRadius: 12,
              boxShadow:
                "0 20px 40px -8px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 50,
              border: "1px solid rgba(8,65,130,0.08)",
              transformOrigin: "bottom right",
            }}
          >
            <div
              style={{
                background: "#032044",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    background: "var(--color-green-500, #6bbf54)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#032044",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  F
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    FloAssist
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#6bbf54",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                      }}
                    >
                      Always on
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.7)",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.08)";
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ChatMessages messages={messages} isLoading={isLoading} />

            {showDemoForm && !demoSuccess && (
              <div style={{ padding: "0 14px", flexShrink: 0 }}>
                <DemoMiniForm onSuccess={handleDemoSuccess} />
              </div>
            )}

            {demoSuccess && (
              <div
                style={{
                  margin: "0 14px 8px",
                  background: "#f3faf0",
                  border: "1.5px solid rgba(107,191,84,0.3)",
                  borderRadius: 10,
                  padding: "10px 14px",
                  fontSize: 13,
                  color: "#3d8a2a",
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                Your demo request was sent. We will reach out within 1 business day.
              </div>
            )}

            <ChatSuggestions
              suggestions={suggestions}
              onSelect={handleSuggestionSelect}
              disabled={isLoading}
            />

            <ChatInput
              input={input}
              onChange={handleInputChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="fixed z-50 flex flex-col items-center"
        style={{ bottom: 24, right: 24 }}
      >


        <button
          type="button"
          aria-label={open ? "Close chat assistant" : "Open chat assistant"}
          onClick={() => setOpen((o) => !o)}
          className={open ? undefined : "chat-fab-pulse"}
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: open ? "#032044" : "var(--color-primary, #6bbf54)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(8,65,130,0.2)",
            transition: "background 250ms ease, transform 200ms ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
        </button>
      </div>
    </>
  );
}
