import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

export default function UploadModal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return <div>{isOpen && <h1>The modal is open</h1>}</div>;
}
