import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
}

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={{ backgroundColor: "#f3f4f6", color: "#111827", fontFamily: "sans-serif" }}>
        <Container style={{ margin: "40px auto", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
          <Section>
            <Heading style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
              You received the following message from the contact form
            </Heading>
            <Text style={{ fontSize: "16px", lineHeight: "24px" }}>{message}</Text>
            <Hr style={{ margin: "20px 0", borderColor: "#e5e7eb" }} />
            <Text style={{ fontSize: "14px", color: "#4b5563" }}>
              The sender's email is: {senderEmail}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}