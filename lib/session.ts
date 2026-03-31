"use client";

export const AUTH_STORAGE_KEY = "conversiqo-auth";
export const ONBOARDING_STORAGE_KEY = "conversiqo-onboarding";
export const WIDGET_STORAGE_KEY = "conversiqo-widget-config";

export type AuthSession = {
  email: string;
  name: string;
  company: string;
  loggedInAt: string;
};

export function getStoredSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!value) return null;
  try {
    return JSON.parse(value) as AuthSession;
  } catch {
    return null;
  }
}

export function storeSession(session: AuthSession) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}
