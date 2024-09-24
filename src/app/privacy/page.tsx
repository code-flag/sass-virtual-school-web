import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md py-9 md:my-32 md:py-9 lg:py-9">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Terms and Conditions of Use for Edumacro</h1>

      {/* Introduction */}
      <section className="mb-4">
        <p className="text-gray-600 mb-2">
          These terms and conditions govern your use of our online school Software as a Service (SaaS) portal for school activities,
          student studies, and parent interactions. By accessing or using Edumacro, you agree to comply with and be bound by these terms.
          If you do not agree with any part of these terms, you must not use Edumacro.
        </p>
      </section>

      {/* Section 1: Definitions */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Definitions</h2>
        {/* <p className="text-gray-600">
          "Edumacro" refers to the online SaaS platform developed and operated by Edumacro Technologies.<br />
          "User" refers to any individual or entity accessing or using Edumacro, including school administrators, teachers, students, and parents.<br />
          "Account" refers to the user profile created upon registration, allowing access to Edumacro.<br />
          "Content" refers to any text, images, videos, files, or data uploaded, posted, or otherwise made available on Edumacro by any user.
        </p> */}
         <ul className="list-disc list-inside text-gray-600">
          <li><strong>Edumacro:</strong> refers to the online SaaS platform developed and operated by Edumacro Technologies.</li>
          <li><strong>User:</strong>refers to any individual or entity accessing or using Edumacro, including school administrators, teachers, students, and parents.</li>
          <li><strong>Account:</strong> refers to the user profile created upon registration, allowing access to Edumacro.</li>
          <li><strong>Content:</strong> refers to any text, images, videos, files, or data uploaded, posted, or otherwise made available on Edumacro by any user.</li>
        </ul>
      </section>

      {/* Section 2: Acceptance of Terms */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By creating an account, accessing, or using Edumacro, you agree to be bound by these terms, our Privacy Policy, and any other policies
          or guidelines incorporated by reference. You represent that you are of legal age to enter into a binding agreement or have the consent
          of a parent or legal guardian.
        </p>
      </section>

      {/* Section 3: User Accounts */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">3. User Accounts</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Registration:</strong> Users must provide accurate, complete, and up-to-date information during registration.</li>
          <li><strong>Account Security:</strong> Users must immediately notify Edumacro of any unauthorized use of their account.</li>
          <li><strong>Termination:</strong> Edumacro reserves the right to suspend or terminate any account that violates these terms.</li>
        </ul>
      </section>

      {/* Section 4: Use of the Platform */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Use of the Platform</h2>
        <p className="text-gray-600"><strong>Permitted Use:</strong> Edumacro is intended for educational purposes only. Users may use the platform solely for these purposes.</p>
        <p className="text-gray-600 mt-2"><strong>Prohibited Use:</strong></p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Use Edumacro for any unlawful, harmful, fraudulent, or malicious activity.</li>
          <li>Upload or distribute any content that is defamatory, obscene, abusive, or otherwise objectionable.</li>
          <li>Infringe upon the intellectual property rights of others.</li>
          <li>Attempt to gain unauthorized access to any part of Edumacro or its systems.</li>
          <li>Introduce any malware, viruses, or harmful code to the platform.</li>
        </ul>
      </section>

      {/* Section 5: Content Ownership and Use */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Content Ownership and Use</h2>
        <p className="text-gray-600"><strong>User-Generated Content:</strong> Users retain ownership of any content they upload to Edumacro. By uploading content, users grant Edumacro a license to use it solely for platform operation.</p>
        <p className="text-gray-600 mt-2"><strong>Content Responsibility:</strong> Users are responsible for the content they upload and ensuring it complies with laws and regulations.</p>
        <p className="text-gray-600 mt-2"><strong>Content Moderation:</strong> Edumacro reserves the right to review, remove, or disable access to content that violates these terms.</p>
      </section>

      {/* Section 6: Intellectual Property Rights */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Intellectual Property Rights</h2>
        <p className="text-gray-600"><strong>Edumacro Ownership:</strong> All rights to Edumacro, including software and trademarks, are owned by Edumacro Technologies. Users are granted a limited, non-transferable license to use the platform.</p>
        <p className="text-gray-600 mt-2"><strong>Restrictions:</strong> Users must not copy, modify, distribute, sell, or reverse-engineer any part of Edumacro.</p>
      </section>

      {/* Section 7: Privacy and Data Protection */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Privacy and Data Protection</h2>
        <p className="text-gray-600"><strong>Data Collection:</strong> Edumacro collects personal data in accordance with its Privacy Policy. By using Edumacro, users consent to such collection.</p>
        <p className="text-gray-600 mt-2"><strong>User Responsibilities:</strong> Users must comply with data protection laws and avoid uploading personal data that violates the rights of others.</p>
      </section>

      {/* Section 8: Payment and Subscription */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Payment and Subscription</h2>
        <p className="text-gray-600"><strong>Subscription Plans:</strong> Edumacro offers various subscription plans, and details are available on the website.</p>
        <p className="text-gray-600 mt-2"><strong>Payment Terms:</strong> Users agree to pay fees associated with their plan. Fees are non-refundable, except as required by law.</p>
        <p className="text-gray-600 mt-2"><strong>Renewal and Cancellation:</strong> Plans automatically renew unless canceled before the renewal date. No refunds for unused portions.</p>
      </section>

      {/* Section 9: Third-Party Services */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">9. Third-Party Services</h2>
        <p className="text-gray-600">Edumacro may integrate with third-party services. Edumacro is not responsible for the content or functionality of third-party services.</p>
      </section>

      {/* Section 10: Limitation of Liability */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">10. Limitation of Liability</h2>
        <p className="text-gray-600">
          To the maximum extent permitted by law, Edumacro will not be liable for any direct, indirect, incidental, or punitive damages arising from the use of Edumacro.
        </p>
      </section>

      {/* Section 11: Indemnification */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">11. Indemnification</h2>
        <p className="text-gray-600">Users agree to indemnify Edumacro from any claims, liabilities, damages, or expenses arising out of user violations or content.</p>
      </section>

      {/* Section 12: Modifications to the Terms */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">12. Modifications to the Terms</h2>
        <p className="text-gray-600">
          Edumacro reserves the right to modify these terms. Users will be notified of significant changes, and continued use constitutes acceptance of new terms.
        </p>
      </section>

      {/* Section 13: Governing Law and Dispute Resolution */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">13. Governing Law and Dispute Resolution</h2>
        <p className="text-gray-600">These terms are governed by the laws of Nigeria. Disputes will be resolved through arbitration in accordance with Nigerian law.</p>
      </section>

      {/* Section 14: Contact Information */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">14. Contact Information</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about these terms, please contact us at:<br />
          Email: <a href="mailto:support@edumacro.com" className="text-blue-500">support@edumacro.com</a><br />
          Phone: +234 701 254 6109<br />
          Address: Abuja, Nigeria
        </p>
      </section>

      <p className="text-center text-gray-500 mt-8">
        By using Edumacro, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;
