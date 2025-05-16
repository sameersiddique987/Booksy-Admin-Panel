import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-5 pt-10 pb-5 border-t border-gray-700">
      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about/us" className="hover:underline">About us</Link></li>
            <li><Link href="/jobs" className="hover:underline">Careers</Link></li>
            <li><Link href="/about/terms" className="hover:underline">Terms</Link></li>
            <li><Link href="/about/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link href="https://help.goodreads.com/s/article/Goodreads-Interest-Based-Ads-Notice" target="_blank" rel="noopener noreferrer" className="hover:underline">Interest Based Ads</Link></li>
            <li><Link href="/adprefs" className="hover:underline">Ad Preferences</Link></li>
            <li><Link href="/help?action_type=help_web_footer" className="hover:underline">Help</Link></li>
          </ul>
        </div>

        {/* Work with us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Work with us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/author/program" className="hover:underline">Authors</Link></li>
            <li><Link href="/advertisers" className="hover:underline">Advertise</Link></li>
            <li><Link href="/news?content_type=author_blogs" className="hover:underline">Authors & Ads Blog</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
  <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
  <div className="flex space-x-4 mb-2">
    <a href="https://www.facebook.com/sameer.siddiq.144" target="_blank" rel="noopener noreferrer">
      <Image
        src="https://s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg"
        alt="Facebook"
        width={24}
        height={24}
        className="invert"
      />
    </a>
    <a href="https://twitter.com/goodreads" target="_blank" rel="noopener noreferrer">
      <Image
        src="https://s.gr-assets.com/assets/site_footer/footer_twitter-126b3ee80481a763f7fccb06ca03053c.svg"
        alt="Twitter"
        width={24}
        height={24}
        className="invert"
      />
    </a>
  </div>
  <div className="flex space-x-4">
    <a href="https://www.instagram.com/sameer.siddique.ss/" target="_blank" rel="noopener noreferrer">
      <Image
        src="https://s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg"
        alt="Instagram"
        width={24}
        height={24}
        className="invert"
      />
    </a>
    <a href="https://www.linkedin.com/in/sameer-siddique-45575a2b6/" target="_blank" rel="noopener noreferrer">
      <Image
        src="https://s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg"
        alt="LinkedIn"
        width={24}
        height={24}
        className="invert"
      />
    </a>
  </div>
</div>


        {/* App Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get our App</h3>
          <div className="space-y-2">
            <a href="https://itunes.apple.com/app/apple-store/id355833469?pt=325668&ct=mw_footer&mt=8" target="_blank" rel="noopener noreferrer">
              <Image src="https://s.gr-assets.com/assets/app/badge-ios-desktop-homepage-6ac7ae16eabce57f6c855361656a7540.svg" alt="iOS App" width={135} height={40} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.goodreads" target="_blank" rel="noopener noreferrer">
              <Image src="https://s.gr-assets.com/assets/app/badge-android-desktop-home-0f517cbae4d56c88a128d27a7bea1118.png" alt="Android App" width={135} height={40} />
            </a>
          </div>
          <p className="text-xs mt-4 text-gray-400">© 2025 Goodreads, Inc.</p>
          <p className="text-xs text-gray-400"><Link href="/toggle_mobile" className="hover:underline">Mobile version</Link></p>
        </div>
      </div>

      {/* Prepared By */}
      <div className="text-center mt-5 text-sm text-gray-400 pt-5 border-t border-gray-700">
        Prepared by <span className="font-semibold text-white">Sameer Siddique</span>
      </div>
    </footer>
  );
};

export default Footer;
