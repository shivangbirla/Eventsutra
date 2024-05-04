import React from "react";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto my-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="mb-8">
        <p className="mb-4">
          Thank you for choosing our services. Before proceeding, please
          carefully review the following terms and conditions:
        </p>
        <ol className="list-decimal ml-6">
          <li className="mb-4">
            Ticket Redemption: Once a ticket QR code is scanned at the event
            venue, it is considered redeemed and cannot be reused for entry.
            Each ticket grants admission for a single use only.
          </li>
          <li className="mb-4">
            Refund Policy: We do not offer refunds for ticket purchases. All
            sales are final. However, exceptions may apply in certain
            circumstances.
          </li>
          <li className="mb-4">
            Refund Exceptions: In the rare event of technical errors or other
            unforeseen circumstances causing funds to be stuck in a buffer, a
            refund for the affected amount will be initiated.
          </li>
          <li className="mb-4">
            Contact Us: For any questions, concerns, or assistance, please don't
            hesitate to contact our customer support team at the following
            numbers:
            <ul className="list-disc ml-6">
              <li>
                Phone: <a href="tel:+919032797797">+91 9032797797</a>
              </li>
              <li>
                Alternate Phone: <a href="tel:+917887889636">+91 7887889636</a>
              </li>
            </ul>
          </li>
          <li>
            Modification of Terms: These terms and conditions are subject to
            change at any time without prior notice. We advise you to review
            them periodically for updates.
          </li>
        </ol>
      </div>
      <p className="mb-4">
        By using our services, you agree to abide by these terms and conditions.
        Thank you for your cooperation. We look forward to providing you with an
        exceptional experience.
      </p>
    </div>
  );
};

export default TermsAndConditionsPage;
