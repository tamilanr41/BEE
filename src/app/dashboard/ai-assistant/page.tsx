"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Bot, MessageSquare, FileText, Image as ImageIcon, Bell, Mic, Send, Sparkles, AlertTriangle, Loader2 } from "lucide-react";

const quickQuestions = [
  "How much does a root canal usually cost?",
  "Is my tooth pain an emergency?",
  "How should I prepare for my appointment?",
  "What are the signs of gum disease?",
  "How often should I get dental X-rays?",
];

const aiFeatures = [
  {
    id: "assistant",
    label: "AI Assistant",
    icon: Bot,
    desc: "Answer patient questions and provide guidance",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "triage",
    label: "Appointment Triage",
    icon: AlertTriangle,
    desc: "Collect symptoms and route urgent cases",
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: "documentation",
    label: "Clinical Documentation",
    icon: FileText,
    desc: "Auto-draft consultation and progress notes",
    color: "bg-green-50 text-green-600",
  },
  {
    id: "imaging",
    label: "Imaging Assistance",
    icon: ImageIcon,
    desc: "Highlight findings in X-rays and scans",
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "followup",
    label: "Follow-up Automation",
    icon: Bell,
    desc: "Personalized reminders for patients",
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: "voice",
    label: "Voice Assistant",
    icon: Mic,
    desc: "Dictate clinical notes and prescriptions",
    color: "bg-teal-50 text-teal-600",
  },
];

export default function AIAssistantPage() {
  const [activeFeature, setActiveFeature] = useState("assistant");
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setIsLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setResponse(
        `Based on your question about "${question}", here's what I can tell you:\n\n` +
        `This is a general guidance response. For specific medical advice, please consult with your dentist. ` +
        `Would you like to book an appointment for a professional evaluation?\n\n` +
        `I recommend scheduling a consultation to get a personalized assessment of your dental health needs. ` +
        `Our AI-powered diagnostic tools can provide detailed analysis during your visit.`
      );
      setIsLoading(false);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">AI Assistant</h1>
        <p className="text-secondary-500">
          AI-powered tools for dental diagnosis, documentation, and patient communication.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {aiFeatures.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className={`rounded-xl border p-4 text-left transition-all ${
              activeFeature === feature.id
                ? "border-primary-300 bg-primary-50 shadow-sm"
                : "border-secondary-200 bg-white hover:shadow-sm"
            }`}
          >
            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${feature.color}`}>
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-secondary-900">{feature.label}</h3>
            <p className="text-xs text-secondary-500">{feature.desc}</p>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* AI Chat */}
        <Card className="lg:row-span-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
              <Bot className="h-5 w-5 text-primary-700" />
            </div>
            <div>
              <h2 className="font-semibold text-secondary-900">AI Dental Assistant</h2>
              <p className="text-xs text-secondary-500">Powered by advanced LLM</p>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => { setQuestion(q); setResponse(null); }}
                className="rounded-md border border-secondary-200 px-3 py-1 text-xs text-secondary-600 hover:border-primary-300 hover:bg-primary-50"
              >
                {q}
              </button>
            ))}
          </div>

          {response && (
            <div className="mb-4 rounded-lg bg-primary-50 p-4 text-sm text-secondary-700 whitespace-pre-line animate-fade-in">
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary-600" />
                <span className="font-medium text-primary-700">AI Response</span>
              </div>
              {response}
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline">Book Appointment</Button>
                <Button size="sm" variant="ghost">Helpful</Button>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
              placeholder="Ask the AI dental assistant anything..."
              className="flex-1 rounded-lg border border-secondary-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none"
            />
            <Button onClick={handleAsk} loading={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>

          <p className="mt-3 text-xs text-secondary-400">
            AI provides general guidance only. Always consult with a licensed dentist for medical advice.
          </p>
        </Card>

        {/* Triage Tool */}
        {activeFeature === "triage" && (
          <Card>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-secondary-900">
              <AlertTriangle className="h-5 w-5 text-orange-500" /> Appointment Triage
            </h2>
            <div className="space-y-3">
              <select className="w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm">
                <option>Select symptom</option>
                <option>Tooth pain</option>
                <option>Swelling</option>
                <option>Bleeding</option>
                <option>Injury/Trauma</option>
                <option>Infection</option>
              </select>
              <select className="w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm">
                <option>Pain severity (1-10)</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={i + 1}>{i + 1} - {i < 3 ? "Mild" : i < 7 ? "Moderate" : "Severe"}</option>
                ))}
              </select>
              <Button fullWidth>Run AI Triage</Button>
              <div className="rounded-lg bg-orange-50 p-3 text-sm">
                <p className="font-medium text-orange-800">AI Assessment</p>
                <p className="mt-1 text-orange-700">Based on the symptoms, this case appears to be URGENT. Recommend same-day appointment within 4 hours.</p>
                <Badge variant="danger" className="mt-2">Priority: High</Badge>
              </div>
            </div>
          </Card>
        )}

        {/* Documentation */}
        {activeFeature === "documentation" && (
          <Card>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-secondary-900">
              <FileText className="h-5 w-5 text-green-500" /> Clinical Documentation
            </h2>
            <div className="space-y-3">
              <select className="w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm">
                <option>Select document type</option>
                <option>Consultation Notes</option>
                <option>Progress Notes</option>
                <option>Referral Letter</option>
                <option>Follow-up Summary</option>
                <option>Prescription</option>
              </select>
              <textarea
                placeholder="Enter clinical notes or voice transcription..."
                className="w-full rounded-lg border border-secondary-300 p-3 text-sm min-h-[120px]"
              />
              <Button fullWidth>
                <Sparkles className="h-4 w-4" /> Generate Structured Document
              </Button>
            </div>
          </Card>
        )}

        {/* Other feature placeholders */}
        {activeFeature !== "assistant" && activeFeature !== "triage" && activeFeature !== "documentation" && (
          <Card>
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${
                aiFeatures.find(f => f.id === activeFeature)?.color || "bg-primary-50"
              }`}>
                {(() => {
                  const Icon = aiFeatures.find(f => f.id === activeFeature)?.icon || Bot;
                  return <Icon className="h-8 w-8" />;
                })()}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-secondary-900">
                {aiFeatures.find(f => f.id === activeFeature)?.label}
              </h3>
              <p className="mb-4 text-sm text-secondary-500">
                {aiFeatures.find(f => f.id === activeFeature)?.desc}
              </p>
              <Badge variant="info">Coming Soon</Badge>
            </div>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
