export const project = {
  slug: "stellar-qr-payment",
  title: "Stellar QR Payment",
  description: "Stellar-based QR payment application.",
  features: [
  "Payment request creation",
  "QR generation",
  "Wallet payment flow",
  "Transaction verification",
  "Receipt view",
  "Dashboard"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
