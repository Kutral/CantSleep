import React from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative z-10 max-w-4xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-3xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">Privacy Policy for Can't Sleep</h1>
        <p className="text-slate-400 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-white/5 text-sm sm:text-base">
          <strong>Effective Date:</strong> April 22, 2026
        </p>

        <div className="text-slate-300 space-y-6 sm:space-y-8 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">Plain Language Summary</h2>
            <p>
              Welcome to Can't Sleep! We believe your sleep data and personal reflections are private. We do not sell your personal data. Most of your data (like journal entries, usage stats, and alarm preferences) is stored locally on your device. We use standard Google services for processing subscriptions and showing rewarded ads, which may collect some diagnostic and advertising data (like your Advertising ID). If you have any questions, you can contact us below.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy applies to the Android application Can't Sleep (Package Name: com.cantsleep.app), provided by Essara ("we," "us," or "our"). It explains how we collect, use, and share information when you use our app, which offers guided sleep techniques, Rescue Mode, soundscapes, reminders, journaling/reflection features, usage insights, premium subscriptions, and a rewarded-ad based temporary access option.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">2. Information We Collect</h2>
            <p className="mb-3 sm:mb-4">When you use Can't Sleep, we or our third-party service providers may collect the following types of information:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-slate-400">
              <li><strong className="text-slate-300">Local App Data:</strong> Journal/reflection entries, reminder/alarm preferences, and usage/session-related data.</li>
              <li><strong className="text-slate-300">Purchase and Access Data:</strong> Your premium subscription status and rewarded ad access state.</li>
              <li><strong className="text-slate-300">Device and Advertising Information:</strong> Your device's Advertising ID, device type, OS version, and network status (collected primarily via Google AdMob).</li>
              <li><strong className="text-slate-300">Diagnostic Data:</strong> Crash logs, performance metrics, and general analytics data provided by platform services (like Google Play services).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">3. How We Use Information</h2>
            <p className="mb-3 sm:mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-slate-400">
              <li>To provide and maintain the core features of the app (e.g., soundscapes, journals, Rescue Mode).</li>
              <li>To process your premium subscriptions and temporary access via rewarded ads.</li>
              <li>To serve relevant rewarded advertisements to users who choose that access option.</li>
              <li>To analyze app performance, diagnose crashes, and improve user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">4. Advertising and Advertising ID</h2>
            <p>
              We use Google AdMob (Google Mobile Ads) to provide an option for temporary access to premium features in exchange for viewing rewarded ads. To serve these ads, AdMob may collect and process your device's Advertising ID and other related technical data. You can manage or reset your Advertising ID in your Android device's settings (typically under Settings {'>'} Google {'>'} Ads).
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">5. Purchases and Subscriptions</h2>
            <p>
              We use Google Play Billing to securely process premium purchases and subscriptions. We do not directly collect or store your credit card or sensitive payment information. Google Play manages these transactions and shares only your purchase/subscription status with us to unlock premium features within the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">6. Local Storage and Journal Data</h2>
            <p>
              Your highly personal data—specifically your journal and reflection entries, usage insights, and reminder preferences—are stored locally on your device. We do not transmit this data to our servers. If you uninstall the app or clear its data, this local information may be permanently deleted unless you have backed it up using your device's built-in cloud backup services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">7. Permissions</h2>
            <p className="mb-3 sm:mb-4">Can't Sleep may request certain Android permissions to function properly. We only request permissions necessary for the app's core features:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-slate-400 mb-3 sm:mb-4">
              <li><strong className="text-slate-300">Alarms and Reminders:</strong> Required to set local notifications and sleep reminders.</li>
              <li><strong className="text-slate-300">Network Access / Internet:</strong> Required to process purchases, load AdMob rewarded ads, and send crash/diagnostic data.</li>
            </ul>
            <p>You can revoke these permissions at any time through your device settings, though some app features may no longer function as intended.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">8. Third-Party Services</h2>
            <p className="mb-3 sm:mb-4">We use the following third-party services which may collect, process, or store data as described in their respective privacy policies:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-slate-400">
              <li>Google Play services (Analytics, Diagnostics)</li>
              <li>Google Play Billing (Payments/Subscriptions)</li>
              <li>Google AdMob / Google Mobile Ads (Advertising)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">9. Data Retention</h2>
            <p>
              Locally stored data remains on your device until you uninstall the app or clear its app data. Data collected by third-party services (like AdMob or Google Play) is retained according to their respective policies. We do not maintain independent servers storing your usage or journal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">10. Your Choices</h2>
            <p className="mb-3 sm:mb-4">You have the following controls over your data:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-slate-400">
              <li><strong className="text-slate-300">App Data:</strong> You can clear your journal and usage data at any time by clearing the app's storage in your Android settings.</li>
              <li><strong className="text-slate-300">Advertising:</strong> You can opt out of personalized ads or reset your Advertising ID via your Android device settings.</li>
              <li><strong className="text-slate-300">Permissions:</strong> You can manage or revoke app permissions at any time via your Android device settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">11. Children's Privacy</h2>
            <p>
              Our app is not intended for or targeted at children under the age of 13 (or the applicable age of consent in your region). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take steps to remove such information.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">12. Security</h2>
            <p>
              We prioritize the security of your app experience by storing sensitive journal data locally and relying on secure, industry-standard third parties (like Google Play) for payments. However, please remember that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">13. International Users</h2>
            <p>
              By using Can't Sleep, your information may be processed by our third-party service providers (such as Google) in the United States or other countries. These countries may have data protection laws different from those in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">14. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="pt-6 border-t border-white/5">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">15. Contact Us</h2>
            <p className="mb-3 sm:mb-4">If you have any questions or suggestions about our Privacy Policy, please contact us:</p>
            <ul className="space-y-1.5 sm:space-y-2 text-slate-400">
              <li><strong className="text-slate-300">Email:</strong> help@essara.space</li>
              <li><strong className="text-slate-300">Company/Developer:</strong> Essara</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
