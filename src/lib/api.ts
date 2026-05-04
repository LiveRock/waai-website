export const API_BASE = import.meta.env.API_BASE_URL || 'https://waaichat.hsi.asia/api';

export interface Plan {
  name: string;
  display_name: string;
  description: string | null;
  price_monthly: number;
  price_yearly: number;
  max_qa_pairs: number | null;
  max_flows: number | null;
  max_messages_monthly: number | null;
  trial_days: number | null;
}

export async function fetchPlans(): Promise<Plan[]> {
  try {
    const res = await fetch(`${API_BASE}/billing/public/plans`);
    if (!res.ok) throw new Error(`Failed to fetch plans: ${res.status}`);
    return await res.json();
  } catch {
    return [];
  }
}

export function formatPrice(cents: number | null): string {
  if (cents === null) return 'Custom';
  if (cents === 0) return 'Free';
  return `$${(cents / 100).toFixed(0)}`;
}

export function formatPriceMonthly(cents: number | null): string {
  if (cents === null) return 'Contact us';
  if (cents === 0) return 'Free';
  return `$${(cents / 100).toFixed(0)}/mo`;
}

export function formatLimit(value: number | null): string {
  if (value === null) return 'Unlimited';
  return value.toLocaleString();
}
