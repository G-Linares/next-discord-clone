"use client";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ExploreServerModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "exploreServer";


  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Explore Servers
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
           This is feature is yet to be implemented. Stay tuned for updates 😉
          </DialogDescription>
          <DialogDescription className="text-center text-zinc-500">
           You can join the following server to get more updates 📣 
          </DialogDescription>
           <Link href="https://somelink.com" className="font-semibold text-indigo-500 text-center">http://somelink.com</Link>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-center w-full">
            <Button
              variant="primary"
            >
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}