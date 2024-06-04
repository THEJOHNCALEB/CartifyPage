import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 mb-2 gap-5 text-center">
      
      <a
        href="https://www.buymeacoffee.com/thejohncaleb"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 mb-5 transition-all duration-75 hover:scale-105"
      >
        <BuyMeACoffee className="h-6 w-6" />
        <p className="font-medium text-gray-600">Buy me a coffee</p>
      </a>
      <p className="text-gray-500 mb-3">
      Made with ❤ From {" "}
        <a
          className="font-semibold text-gray-600 underline transition-colors hover:no-underline"
          href="https://twitter.com/thejohncaleb"
          target="_blank"
          rel="noopener noreferrer"
        >
          John Caleb
        </a>
      </p>
    </div>
  );
}
