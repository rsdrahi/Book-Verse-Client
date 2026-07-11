import { categoryLinks, quicksLinks, socialLinks, supportLinks } from '@/constants/footerLinks';
import Link from 'next/link';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-default-200/60 text-foreground pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column (Takes 2 columns space on larger screens) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tight text-primary">
              BookVerse
            </Link>
            <p className="text-default-500 text-sm md:text-base max-w-xs leading-relaxed">
              Discover, borrow and enjoy thousands of books across multiple genres seamlessly.
            </p>
            
            {/* social links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-default-100 hover:bg-primary hover:text-primary-foreground flex items-center justify-center rounded-lg transition-all duration-300 shadow-sm text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* quick links  */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wider text-default-400">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {quicksLinks.map((link, index) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-default-500 hover:text-primary text-sm md:text-base transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* categories */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wider text-default-400">
              Categories
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {categoryLinks.map((link, index) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-default-500 hover:text-primary text-sm md:text-base transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* support */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wider text-default-400">
              Support
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {supportLinks.map((link, index) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-default-500 hover:text-primary text-sm md:text-base transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-default-200/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs md:text-sm text-default-400 font-medium">
            &copy; {currentYear} BookVerse. All rights reserved.
          </p>
          <p className="text-xs text-default-400/80">
            Built with passion for book lovers.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;