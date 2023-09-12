"use client";

import { Compass } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationDiscover = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip
        side="right"
        align="center"
        label="Explore Discoverable Servers "
      >
        <button
          className="group flex items-center"
          onClick={() => onOpen("exploreServer")}
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500 mt-4">
            <Compass
              className="group-hover:text-white transition text-emerald-500"
              size={24}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
