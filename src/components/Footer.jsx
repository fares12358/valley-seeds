import Link from "next/link";
import { FaLeaf, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2F6E49] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-white to-[#8CCB8A] rounded-lg flex items-center justify-center">
                <FaLeaf className="w-6 h-6 text-[#2F6E49]" />
              </div>
              <div>
                <div className="text-white">METIX ECO</div>
                <div className="text-xs text-white/70">d.o.o.</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              High-quality genetic material and blockchain transparency for
              climate-resilient cities.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <FaEnvelope className="w-4 h-4 mt-0.5 shrink-0 text-[#8CCB8A]" />
                <a href="mailto:info@metixeco.hr" className="text-white/70 hover:text-white transition-colors">
                  info@metixeco.hr
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <FaPhone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#8CCB8A]" />
                <a href="tel:+38512345678" className="text-white/70 hover:text-white transition-colors">
                  +385 1 234 5678
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#8CCB8A]" />
                <span className="text-white/70">Zagreb, Croatia</span>
              </li>
            </ul>
          </div>


          {/* Bottom bar */}
          <div className="pt-8">
            <p>© {currentYear} METIX ECO d.o.o. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
