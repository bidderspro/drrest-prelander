export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">
            © {new Date().getFullYear()} RestRight. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <p className="text-xs text-gray-500 mt-3 max-w-xl mx-auto">
            * These statements have not been evaluated by the FDA. This product is not intended to diagnose, 
            treat, cure, or prevent any disease. Results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
}
