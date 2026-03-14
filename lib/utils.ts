import { SITE } from "./site";

export function waLink(customText?: string) {
  const text = encodeURIComponent(customText ?? SITE.whatsappDefaultText);
  return `https://wa.me/${SITE.whatsappE164}?text=${text}`;
}

export function telLink() {
  return `tel:${SITE.phoneE164}`;
}