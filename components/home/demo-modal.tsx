import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { ShoppingCart } from "lucide-react";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <ShoppingCart className="h-10 w-10" />
          </a>
          <h3 className="font-display text-2xl font-bold">Cartify</h3>
          <p className="text-sm text-gray-500">
            Join the waitlist to get early access to Cartify.
          </p>
          <form className="w-full max-w-sm">
  <div className="flex items-center border-b border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-transparent w-full h-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-gray-100 focus:border-slate-50" type="email" placeholder="John@gmail.com" aria-label="Email"/>
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded focus:border-none" type="button">
      Join
    </button>
  </div>
</form>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
