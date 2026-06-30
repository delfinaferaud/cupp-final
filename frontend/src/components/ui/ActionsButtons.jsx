import Modal from "../layout/Modal";
import { useState } from "react";
import {EyeIcon, PencilIcon, XCircleIcon} from '@heroicons/react/16/solid'


function ActionsButtons({onView, onEdit, onDelete}) {

    const [open, setOpen] = useState(true) 

  return (
    <div className="flex justify-center gap-3">
      {onView && (
        <button
          onClick={onView}
          className="
      h-9
      w-9
      rounded-(--radius-app)
        bg-[#364A5E]
        text-white
        flex
        items-center
        justify-center
        "
        >
          <EyeIcon className="size-6"/>
        </button>
      )}
      {onEdit && (
        <button
          onClick={onEdit}
          className="
        h-9
        w-9
        rounded-(--radius-app)
        bg-[#364A5E]
        text-white
        flex
        items-center
        justify-center
        "
        >
          <PencilIcon className="size-6"/>
        </button>
      )}

      {onDelete && (
        <button
          onClick={onDelete}
          className="
        h-9
        w-9
        rounded-(--radius-app)
        bg-[#364A5E]
        text-white
        flex
        items-center
        justify-center
        "
        >
            <XCircleIcon className="size-6"/>
        </button>
      )}
    </div>
  );
}

export default ActionsButtons;
