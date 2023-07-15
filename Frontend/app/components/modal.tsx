import React, { useState } from "react";
import { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import {v4 as uuidv4} from 'uuid';
import { ITask } from "@/types/tasks.types";

interface ModalProps {
    modalOpen: boolean,
    setModalOpen: (open: boolean) => boolean | void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  const router = useRouter();
  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const postTask = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`https://task-management-jxzy.onrender.com/api/v1/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const newTask = await res.json();
    return newTask;
  }

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await postTask({
          id: uuidv4(),
          text: newTaskValue
        })
        setNewTaskValue('');
        setModalOpen(false);
        router.refresh();
      }
      
    return (
        <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <form method="dialog" className="modal-box" onSubmit={handleSubmitNewTask}>
                <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className='font-bold text-lg'>Add new task</h3>
            <div className="modal-action">
            <input 
              value={newTaskValue}
              onChange={e => setNewTaskValue(e.target.value)}
              type="text" 
              placeholder="Type here" 
              className="input input-bordered input-error w-full"
            />
            <button type='submit' className='btn'>Add</button>
            </div>
          </form>
        </dialog>
    )
}   

export default Modal;