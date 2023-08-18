export default function FormInput({
  label,
  id,
  focusedId,
  onFocusChange,
}: {
  label: string;
  id: string;
  focusedId: string;
  onFocusChange: (newValue: string) => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="ml-12 text-center font-semibold">
          {label}
        </label>
        <div className="flex flex-grow flex-row-reverse">
          <input
            required
            id={id}
            onFocus={() => onFocusChange(id)}
            onBlur={() => onFocusChange("")}
            className="peer h-12 w-[36rem] rounded-xl border-2 border-gray-400 px-4 py-2 focus:border-gray-900 focus:outline-none dark:border-gray-500 dark:bg-gray-800 dark:focus:border-gray-300"
            type="text"
          />
          <div className="m-4 h-4 w-4 flex-shrink-0 rounded bg-gray-300 peer-valid:bg-green-500 dark:bg-gray-600"></div>
        </div>
      </div>
    </>
  );
}
