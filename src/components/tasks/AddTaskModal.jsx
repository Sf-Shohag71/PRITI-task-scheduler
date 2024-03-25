import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";
import Modal from "../ui/Modal";

export default function AddTaskModal({ isOpen, setIsOpen, reset }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    setIsOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add a new task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("name")}
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register("description")}
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="date">Deadline</label>
          <input
            type="date"
            id="date"
            {...register("date")}
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="assignTo">Assign to</label>
          <select id="assignTo" {...register("assignTo")}>
            <option value="empty"> -- Select to -- </option>
            <option value="Shakh Farid Shohag">Shakh Farid Shohag</option>
            <option value="Adnan Abir">Adnan Abir</option>
            <option value="Arif Hossian">Arif Hossian</option>
            <option value="Abu Ansar">Abu Ansar</option>
            <option value="Omor Faruk">Omor Faruk</option>
            <option value="Salim Ahmed">Salim Ahmed</option>
            <option value="shawnor Islam">shawnor Islam</option>
            <option value="Awlad Hossen">Awlad Hossen</option>
            <option value="Rakib Khan">Rakib Khan</option>
          </select>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="priority">Priority</label>
          <select id="priority" {...register("priority")}>
            <option value=""> -- Select to -- </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end mt-3">
          <button
            onClick={() => onCancel()}
            type="submit"
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}
