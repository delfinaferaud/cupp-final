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
      rounded-md
        bg-slate-600
        text-white
        flex
        items-center
        justify-center
        hover:bg-slate-700
        transition
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
        rounded-md
        bg-slate-600
        text-white
        flex
        items-center
        justify-center
        hover:bg-slate-700
        transition
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
        rounded-md
        bg-slate-600
        text-white
        flex
        items-center
        justify-center
        hover:bg-slate-700 
        transition
        "
        >
            <XCircleIcon className="size-6"/>
        </button>
      )}
    </div>
  );
}

export default ActionsButtons;
