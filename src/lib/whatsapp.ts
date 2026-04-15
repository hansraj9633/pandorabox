import { siteConfig } from "./config";

/**
 * Generates a WhatsApp click-to-chat URL with a prefilled message.
 *
 * @param message - The text to prefill in the WhatsApp chat
 * @param phone   - Optional override; defaults to siteConfig.whatsappNumber
 * @returns       A wa.me URL string
 */
export function getWhatsAppLink(
  message: string,
  phone: string = siteConfig.whatsappNumber
): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Generates a project-specific WhatsApp link using the project's
 * contactPrefillMessage field.
 */
export function getProjectWhatsAppLink(contactPrefillMessage: string): string {
  return getWhatsAppLink(contactPrefillMessage);
}

/**
 * Generates a generic "request custom version" WhatsApp link.
 */
export function getCustomRequestWhatsAppLink(projectTitle: string): string {
  const message = `Hi, I'm interested in a custom version of "${projectTitle}". Could we discuss the requirements and pricing?`;
  return getWhatsAppLink(message);
}
