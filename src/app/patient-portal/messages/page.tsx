"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Send, Paperclip, Search } from "lucide-react";

const conversations = [
  { id: 1, name: "Dr. Sarah Johnson", lastMsg: "Your appointment is confirmed for July 15th.", time: "2h ago", unread: 1, online: true },
  { id: 2, name: "Reception Desk", lastMsg: "We have your insurance information on file.", time: "1d ago", unread: 0, online: true },
  { id: 3, name: "Dr. Michael Chen", lastMsg: "Please send your recent X-rays before the consultation.", time: "3d ago", unread: 0, online: false },
];

const messages = [
  { id: 1, sender: "them", text: "Hi there! How can I help you today?", time: "10:30 AM" },
  { id: 2, sender: "me", text: "I wanted to confirm my appointment for next week.", time: "10:32 AM" },
  { id: 3, sender: "them", text: "Sure! Your appointment with Dr. Johnson is on July 15th at 10:00 AM.", time: "10:33 AM" },
  { id: 4, sender: "them", text: "Is there anything specific you'd like to discuss during the visit?", time: "10:34 AM" },
];

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(1);
  const [messageText, setMessageText] = useState("");

  return (
    <>
      <Navbar />
      <section className="bg-secondary-50 min-h-screen pt-16">
        <div className="mx-auto flex h-full max-w-7xl">
          {/* Sidebar */}
          <div className="w-80 border-r border-secondary-200 bg-white">
            <div className="p-4">
              <h2 className="mb-4 text-lg font-semibold text-secondary-900">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-400" />
                <input type="text" placeholder="Search conversations..." className="w-full rounded-lg border border-secondary-300 py-2 pl-10 pr-4 text-sm" />
              </div>
            </div>
            <div className="space-y-1 px-2">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setActiveChat(conv.id)}
                  className={`w-full rounded-lg p-3 text-left transition-colors ${activeChat === conv.id ? "bg-primary-50" : "hover:bg-secondary-50"}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                          {conv.name.split(" ")[1].charAt(0)}
                        </div>
                        {conv.online && <div className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary-900">{conv.name}</p>
                        <p className="text-xs text-secondary-500 truncate max-w-[160px]">{conv.lastMsg}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-secondary-400">{conv.time}</p>
                      {conv.unread > 0 && <Badge size="sm">{conv.unread}</Badge>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex flex-1 flex-col bg-white">
            <div className="border-b border-secondary-200 p-4">
              <h3 className="font-semibold text-secondary-900">{conversations.find(c => c.id === activeChat)?.name}</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] rounded-xl p-3 ${msg.sender === "me" ? "bg-primary-600 text-white" : "bg-secondary-100 text-secondary-900"}`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`mt-1 text-xs ${msg.sender === "me" ? "text-primary-200" : "text-secondary-400"}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-secondary-200 p-4">
              <div className="flex gap-2">
                <button className="rounded-lg border border-secondary-300 p-2 text-secondary-400 hover:bg-secondary-50">
                  <Paperclip className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-secondary-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none"
                />
                <button className="rounded-lg bg-primary-600 p-2 text-white hover:bg-primary-700">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
