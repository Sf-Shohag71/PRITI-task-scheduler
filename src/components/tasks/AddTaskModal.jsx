import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

export default function AddTaskModal({ isOpen, setIsOpen }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add a new task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("name")}
            className="w-full"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
}
